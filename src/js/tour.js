import { Evented } from './evented.js';
import { Step } from './step.js';
import autoBind from './utils/auto-bind.js';
import {
  isHTMLElement,
  isFunction,
  isString,
  isUndefined
} from './utils/type-check.js';
import { cleanupSteps } from './utils/cleanup.js';
import { normalizePrefix, uuid } from './utils/general.js';
import ShepherdModal from './components/shepherd-modal.svelte';

const Shepherd = new Evented();
/**
 * Class representing the site tour
 * @extends {Evented}
 */

export class Tour extends Evented {
  /**
   * @param {Object} options The options for the tour
   * @param {boolean | (() => boolean) | Promise<boolean> | (() => Promise<boolean>)} options.confirmCancel If true, will issue a `window.confirm` before cancelling.
   * If it is a function(support Async Function), it will be called and wait for the return value, and will only be cancelled if the value returned is true
   * @param {string} options.confirmCancelMessage The message to display in the `window.confirm` dialog
   * @param {string} options.classPrefix The prefix to add to the `shepherd-enabled` and `shepherd-target` class names as well as the `data-shepherd-step-id`.
   * @param {Object} options.defaultStepOptions Default options for Steps ({@link Step#constructor}), created through `addStep`
   * @param {string} options.tourName An optional "name" for the tour. This will be appended to the the tour's
   * @param {string} options.instanceCaller The object name sassigned to the tour instance
   * @param {boolean} options.exitOnEsc Exiting the tour with the escape key will be enabled unless this is explicitly
   * set to false.
   * @param {boolean} options.keyboardNavigation Navigating the tour via left and right arrow keys will be enabled
   * unless this is explicitly set to false.
   * @param {HTMLElement} options.stepsContainer An optional container element for the steps.
   * If not set, the steps will be appended to `document.body`.
   * @param {HTMLElement} options.modalContainer An optional container element for the modal.
   * If not set, the tour will have a default name "tour"
   * If not set, the modal will be appended to `document.body`.
   * @param {object[] | Step[]} options.steps An array of step options objects or Step instances to initialize the tour with
   * dynamically generated `id` property.
   * @param {boolean} options.useModalOverlay Whether or not steps should be placed above a darkened
   * modal overlay. If true, the overlay will create an opening around the target element so that it
   * can remain interactive
   * @returns {Tour}
   */
  constructor(options = {}) {
    super(options);
    autoBind(this);
    const defaultTourOptions = {
      exitOnEsc: true,
      keyboardNavigation: true
    };
    this.options = Object.assign({}, defaultTourOptions, options);
    this.classPrefix = normalizePrefix(this.options.classPrefix);
    this.steps = [];
    this.addSteps(this.options.steps);
    // Pass these events onto the global Shepherd object
    const events = [
      'active',
      'cancel',
      'complete',
      'inactive',
      'show',
      'start'
    ];
    events.map((event) => {
      ((e) => {
        this.on(e, (opts) => {
          opts = opts || {};
          opts.tour = this;
          Shepherd.trigger(e, opts);
        });
      })(event);
    });
    this._setTourID();
    return this;
  }

  /**
   * Adds a new step to the tour
   * @param {Object|Step} options An object containing step options or a Step instance
   * @param {number} index The optional index to insert the step at. If undefined, the step
   * is added to the end of the array.
   * @return {Step} The newly added step
   */
  addStep(options, index) {
    let step = options;
    if (!(step instanceof Step)) {
      step = new Step(this, step);
    } else {
      step.tour = this;
    }
    if (!isUndefined(index)) {
      this.steps.splice(index, 0, step);
    } else {
      this.steps.push(step);
    }
    return step;
  }

  /**
   * Add multiple steps to the tour
   * @param {Array<object> | Array<Step>} steps The steps to add to the tour
   */
  addSteps(steps) {
    if (Array.isArray(steps)) {
      steps.forEach((step) => {
        this.addStep(step);
      });
    }

    return this;
  }

  /**
   * Go to the previous step in the tour
   */
  back() {
    console.log('Loading previous step');
    const index = this.steps.indexOf(this.currentStep);
    // set the current number in the localStorage for future retrieval
    localStorage.setItem('currentStepIndex', index - 1);
    this.show(index - 1, false);
  }

  /**
   * Calls _done() triggering the 'cancel' event
   * If `confirmCancel` is true, will show a window.confirm before cancelling
   * If `confirmCancel` is a function, will call it and wait for the return value,
   * and only cancel when the value returned is true
   */
  async cancel() {
    if (this.options.confirmCancel) {
      const confirmCancelIsFunction =
        typeof this.options.confirmCancel === 'function';
      const cancelMessage =
        this.options.confirmCancelMessage ||
        'Are you sure you want to stop the tour?';
      const stopTour = confirmCancelIsFunction
        ? await this.options.confirmCancel()
        : window.confirm(cancelMessage);
      if (stopTour) {
        this._done('cancel');
      }
    } else {
      this._done('cancel');
    }
  }

  /**
   * Calls _done() triggering the `complete` event
   */
  complete() {
    console.log('Tour completed');
    this._done('complete');
  }

  /**
   * Gets the step from a given id
   * @param {Number|String} id The id of the step to retrieve
   * @return {Step} The step corresponding to the `id`
   */
  getById(id) {
    return this.steps.find((step) => {
      return step.id === id;
    });
  }

  /**
   * Gets the current step
   * @returns {Step|null}
   */
  getCurrentStep() {
    return this.currentStep;
  }

  /**
   * Hide the current step
   */
  hide() {
    const currentStep = this.getCurrentStep();
    if (currentStep) {
      return currentStep.hide();
    }
  }

  /**
   * Check if the tour is active
   * @return {boolean}
   */
  isActive() {
    return Shepherd.activeTour === this;
  }

  /**
   * Go to the next step in the tour
   * If we are at the end, call `complete`
   */
  next() {
    console.log('Loading next step');
    const index = this.steps.indexOf(this.currentStep);
    if (index === this.steps.length - 1) {
      // if last step, complete the tour
      console.log("Completing steps...")
      this.complete();
    } else {
      // set the current step number in the localStorage
      localStorage.setItem('currentStepIndex', index + 1);
      this.show(index + 1, true);
    }
  }

  /**
   * Removes the step from the tour
   * @param {String} name The id for the step to remove
   */
  removeStep(name) {
    const current = this.getCurrentStep();
    // Find the step, destroy it and remove it from this.steps
    this.steps.some((step, i) => {
      if (step.id === name) {
        if (step.isOpen()) {
          step.hide();
        }

        step.destroy();
        this.steps.splice(i, 1);

        return true;
      }
    });

    if (current && current.id === name) {
      this.currentStep = undefined;

      // If we have steps left, show the first one, otherwise just cancel the tour
      this.steps.length ? this.show(0) : this.cancel();
    }
  }

  /**
   * Show a specific step in the tour
   * @param {Number|String} key The key to look up the step by
   * @param {Boolean} forward True if we are going forward, false if backward
   */
  show(key = 0, forward = true) {
    console.log('Step load tour');
    // get tour data from localStorage
    const _tourInstanceCaller = localStorage.getItem('tourInstanceCaller');
    const _currentStepIndex = localStorage.getItem('currentStepIndex');
    console.log('Current step index is ', _currentStepIndex);
    console.log('Current tour instance caller is ', _tourInstanceCaller);
    const step = isString(key) ? this.getById(key) : this.steps[key];
    // check if the step data in the local storage is as per the current step
    const getPageFromArray = (dataArray) => {
      const vpvArray = [];
      dataArray.forEach((item) => {
        // eslint-disable-next-line no-prototype-builtins
        if (item.hasOwnProperty('page')) {
          vpvArray.push(item.page);
          // eslint-disable-next-line no-prototype-builtins
        } else if (item.hasOwnProperty('vpv')) {
          vpvArray.push(item.vpv);
        } else {
          void 0;
        }
      });
      return vpvArray;
    };
    // check if the page VPV passed in the step matches with any of the VPV available in the dataLayer populated by GTM
    const vpvInPage = () => {
      let pageVPV = getPageFromArray(window.dataLayer);
      let currentVPV = step.options.pageLink;
      console.log('Current page VPV is ', pageVPV);
      console.log('Current step VPV is ', currentVPV);
      if (pageVPV.indexOf(currentVPV) > -1) {
        console.log(
          'TRUE Current VPV: ',
          currentVPV,
          '/n is present in pageVPV array: ',
          pageVPV
        );
        return true;
      } else {
        console.log(
          'FALSE Current VPV: ',
          currentVPV,
          ' is not present in pageVPV \n array: ',
          pageVPV
        );
        return false;
      }
    };

    if (step) {
      this._updateStateBeforeShow();
      const shouldSkipStep =
        isFunction(step.options.showOn) && !step.options.showOn();

      // If `showOn` returns false, we want to skip the step, otherwise, show the step like normal
      if (shouldSkipStep) {
        this._skipStep(step, forward);
      } else {
        if (
          _tourInstanceCaller === this.options.instanceCaller &&
          vpvInPage()
        ) {
          console.log('Page VPV matched, loading step');
          this.trigger('show', {
            step,
            previous: this.currentStep
          });

          this.currentStep = step;
          step.show();
        } else {
          console.log("page VPV didn't match, skipping step");
        }
      }
    }
  }

  /**
   * Start the tour
   */
  start() {
    console.log('Setting up tour');
    // set the current step number in the localStorage and the tourInstanceCaller
    localStorage.setItem('tourInstanceCaller', this.options.instanceCaller);
    localStorage.setItem('currentStepIndex', 0);

    this.trigger('start');
    // Save the focused element before the tour opens
    this.focusedElBeforeOpen = document.activeElement;
    this.currentStep = null;
    this._setupModal();
    this._setupActiveTour();
    this.next();
  }

  /**
   * Called whenever the tour is cancelled or completed, basically anytime we exit the tour
   * @param {String} event The event name to trigger
   * @private
   */
  _done(event) {
    // clear the local storage items to remove tour history
    // remove the currentStepIndex and the tourInstanceCaller from the local storage after completing the tour
    localStorage.removeItem('currentStepIndex');
    localStorage.removeItem('tourInstanceCaller');

    const index = this.steps.indexOf(this.currentStep);
    if (Array.isArray(this.steps)) {
      this.steps.forEach((step) => step.destroy());
    }

    cleanupSteps(this);

    this.trigger(event, { index });

    Shepherd.activeTour = null;
    this.trigger('inactive', { tour: this });

    if (this.modal) {
      this.modal.hide();
    }

    if (event === 'cancel' || event === 'complete') {
      if (this.modal) {
        const modalContainer = document.querySelector(
          '.shepherd-modal-overlay-container'
        );

        if (modalContainer) {
          modalContainer.remove();
        }
      }
    }

    // Focus the element that was focused before the tour started
    if (isHTMLElement(this.focusedElBeforeOpen)) {
      this.focusedElBeforeOpen.focus();
    }
  }

  /**
   * Make this tour "active"
   * @private
   */
  _setupActiveTour() {
    this.trigger('active', { tour: this });

    Shepherd.activeTour = this;
  }

  /**
   * _setupModal create the modal container and instance
   * @private
   */
  // eslint-disable-next-line max-lines
  _setupModal() {
    this.modal = new ShepherdModal({
      target: this.options.modalContainer || document.body,
      props: {
        classPrefix: this.classPrefix,
        styles: this.styles
      }
    });
  }

  /** 
   * Called when `showOn` evaluates to false, to skip the step or complete the tour if it's the last step
   * @param {Step} step The step to skip
   * @param {Boolean} forward True if we are going forward, false if backward
   * @private
   */
  _skipStep(step, forward) {
    const index = this.steps.indexOf(step);

    if (index === this.steps.length - 1) {
      // eslint-disable-next-line max-lines
      this.complete();
    } else {
      const nextIndex = forward ? index + 1 : index - 1;
      this.show(nextIndex, forward);
    }
  }

  /**
   * Before showing, hide the current step and if the tour is not
   * already active, call `this._setupActiveTour`.
   * @private
   */
  _updateStateBeforeShow() {
    if (this.currentStep) {
      this.currentStep.hide();
      // eslint-disable-next-line max-lines
    }

    if (!this.isActive()) {
      this._setupActiveTour();
    }
  }

  /**
   * Sets this.id to `${tourName}--${uuid}`
   * @private
   */
  _setTourID() {
    const tourName = this.options.tourName || 'tour';

    this.id = `${tourName}--${uuid()}`;
  }
}

export { Shepherd };
