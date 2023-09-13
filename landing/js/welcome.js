'use strict';

(function () {
  function init() {
    var shepherd = setupShepherd();
    setTimeout(function () {
      // add tour class instance name to local storage
      // so we don't show the tour again
      // resumeTour();
      shepherd.start();
    }, 400)
  }

  function setupShepherd() {
    window.onload = function () {
      // check last tour step from local storage
      let currentStepIndex = localStorage.getItem('currentStepIndex');
      let currentTourIndex = localStorage.getItem('tourInstanceCaller');
      if (currentTourIndex === 'shepherd') {
        if (currentStepIndex == '1') {
          shepherd.show(currentStepIndex);
        }
      }
    }

    var shepherd = new Shepherd.Tour({
      tourName: "",
      instanceCaller: "shepherd",
      useModalOverlay: true,
      defaultStepOptions: {
        cancelIcon: {
          enabled: true
        },
        classes: 'class-1 class-2',
        scrollTo: {
          behavior: 'smooth',
          block: 'center'
        },
      },
      // This should add the first tour step
      steps: [
        {
          id: 'mfTour_1',
          text: 'This is the first step of Shepherd JS',
          title: "1/6",
          attachTo: {
            element: '.hero-welcome',
            on: 'right'
          },
          advanceOn: {
            selector: '.hero-welcome',
            event: 'click',
          },
          pageLink: "/",
          id: 'welcome'
        }
      ]
    });

    const element = document.createElement('p');
    element.innerText = 'Including Shepherd is easy! Just include shepherd.js. The styles are bundled with the JS.';

    // These steps should be added via `addSteps`
    const steps = [
      {
        title: '2/6',
        id: 'mfTour_2',
        text: element,
        attachTo: {
          element: document.querySelector("body > header > div > div > div > div:nth-child(1) > div"),
          on: 'bottom'
        },
        buttons: [
          {
            text: 'Next',
            action: shepherd.next,
          },
          {
            text: 'Exit',
            action: shepherd.cancel,
            secondary: true
          }
        ],
        id: 'including',
        pageLink: "/",
      },
      {
        title: '3/6',
        id: 'mfTour_3',
        text: 'Creating a Shepherd tour is easy. too! ' + 'Just create a \`Tour\` instance, and add as many steps as you want.',
        attachTo: {
          element: document.querySelector("body > header > div > div > div > div:nth-child(2) > div"),
          on: 'right'
        },
        advanceOn: {
          selector: document.querySelector("body > header > div > div > div > div:nth-child(2) > div"),
          event: 'click',
        },

        id: 'creating',
        pageLink: "/",
      },
      {
        title: '4/6',
        id: 'mfTour_4',
        text: 'Your tour steps can target and attach to elements in DOM (like this step).',
        attachTo: {
          element: '.hero-example',
          on: 'left'
        },
        advanceOn: {
          selector: '.hero-example',
          event: 'click',
        },
        pageLink: "/",
      }
    ];

    shepherd.addSteps(steps);

    // This should add steps after the ones added with `addSteps`
    shepherd.addStep({
      title: '5/6',
      id: 'mfTour_5',
      pageLink: "/",
      advanceOn: {
        selector: '.hero-welcome',
        event: 'click',
      },
      text: 'But attachment is totally optional!\n       Without a target, a tour step will create an element that\'s centered within the view.       Check out the <a href="https://shepherdjs.dev/docs/">documentation</a> to learn more.',
      buttons: [
        {
          action() {
            return this.back();
          },
          secondary: true,
          text: 'Back'
        },
        {
          action() {
            return this.next();
          },
          primary: true,
          text: 'Next'
        }
      ]
    });

    shepherd.addStep({
      title: '6/6',
      id: 'mfTour_6',
      pageLink: "/",
      text: 'Star Shepherd on Github so you remember it for your next project',
      advanceOn: {
        selector: '.hero-followup',
        event: 'click',
      },
      attachTo: {
        element: '.hero-followup',
        on: 'top'
      },
    });

    return shepherd;
  }


  function ready() {
    if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
      init();
    } else {
      document.addEventListener('DOMContentLoaded', init);
    }
  }

  ready();
}).call(void 0);

