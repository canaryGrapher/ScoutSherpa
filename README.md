# Guided Journey - customized for ICICI

## About
ScoutSherpa is a Digital Adoption Platform derived from the popular [ShepherdJS](https://github.com/shipshapecode/shepherd) project, customized for the needs of ICICI Bank.

<p align="center">
  <img
    alt="Shepherd.js Logo"
    src="https://i.imgur.com/cowwtSX.png"/>
</p>

## Getting Started
### Setup
- Clone the repository on your system using `git clone https://github.com/canaryGrapher/ScoutSherpa.git`
- Switch the desired branch for desired project. For example, `newRIB` for new RIB, `oldRIB` for old RIB, etc.
- Install the dependencies with `yarn install`, `npm install` or `yarn install`
- Make changes to the `src` folder or the `tours` folder.
- If you have made changes to the `src` folder, you will need to build the code again using `npm run build`
- If you have made changes to the `tours` folder, you do not need to build the code again. These files need to be imported as it is into the code.
- You can test locally using `yarn run dev`. Please keep in mind that the changes you make here will not be the same on ICICI's website.


### How to create a journey
Since this is an adaption of the popular ShepherdJS library, there are many tutorials available out there. You can check out these demos for tuturials. 
- Youtube: [Creating Step by Step Feature Introductions with Shepherd.js](https://www.youtube.com/watch?v=oSAi10QQyoI)
- Shepherd.js: [Official docs](https://docs.shepherdjs.dev/guides/usage/)

#### Explaination of .Tour
```js
  var GuideMeWhatsOnNewRIBFundTransferPage = new Shepherd.Tour({
    tourName: "Guide Me: What's on new Credit Card page",       // Name of the journey for easy identifiation. This can be anything
    instanceCaller: "GuideMeWhatsOnNewRIBFundTransferPage",     // Instance ID. This needs to be unique for each journey to avoid conflict
    defaultStepOptions: {                                       // Default options for the entire journey
      cancelIcon: {                                             // Should the cancel button at top right be visible throughout the journey?
        enabled: true,                                          // value can be true or false
      },
      scrollTo: {                                               // Scroll behavior. This need not be changed.
        behavior: "smooth",
        block: "center",
      },
      arrow: true,                                              // The small arrow that connects the Shepherd pop-up and the highlighted element. Value can be true or false.
    },
    useModalOverlay: true,                                      // The black background that is visible during the journey can be enabled or disabled using this. Value can be true or false.
    exitOnEsc: true,                                            // Allow customer to exit the journey by pressing the Esc button. Value can be true or false.
    keyboardnavigation: true,                                   // Allow customer to navigate journey using arrow keys, for example left button for previous, right for next. Value can be true or false.
  });

```

#### Explaination of .addStep
```js
  GuideMeWhatsOnNewRIBBankAccountsPage.addStep({                                  // start the step
    id: "GuideMeWhatsOnNewRIBBankAccountsPage_12",                                // Unique ID for the step. This needs to be unique.
    title: "11/13",                                                               // Title of the step. This convention needs to be followed.
    canClickTarget: false,                                                        // Allow user to click/interact with the highlighted area.
    showOn: () => {                                                               // Conditional rendering. If this function returns true, step is
      const element = document.querySelector("#banksCTA");                        // shown, and if false, step is skipped and next step is show
      return element ? true : false;
    },
    text: `Click on Service Request to manage your savings account.`,             // Text that needs to be shown on the step.
    attachTo: {
      element: document.querySelector("#bankAccountsServiceRequestCTA"),          // Which elment to be highlighted
      on: "left",                                                                 // Position of the step with respect to the highlighted area. Values can be 'top', 'bottom', 'right', 'left'
    },
    buttons: [                                                                    // Buttons to show in the footer and the action assigned to them. 
      {
        text: "Next",                                                             // Text can be anything.
        action: GuideMeWhatsOnNewRIBBankAccountsPage.next,                        // Action can be: 'next', 'back', 'complete' and 'cancel'
      },
      {
        text: "Back",
        action: GuideMeWhatsOnNewRIBBankAccountsPage.back,
        secondary: true,                                                          // If secondary is true, button in footer will not be highlighted in yellow (check image). Default value is false
      },
    ],
  });
```

After the journey is created in the `/tours/newRIBOverlayPages.js` file, the journey needs to be encapsulated in a function, lets say `Function1()` and then the tour instance call should be placed at the end of the function. So the function structure is as:
```js

const Function1() {
// define the tour instance
  const tour = new Shepherd.Tour({
  useModalOverlay: true,
  defaultStepOptions: {
    classes: 'shadow-md bg-purple-dark',
    scrollTo: true
  }
});

// add a new step to the tour
tour.addStep({
  id: 'example-step',
  text: 'This step is attached to the bottom of the <code>.example-css-selector</code> element.',
  attachTo: {
    element: '.example-css-selector',
    on: 'bottom'
  },
  classes: 'example-step-extra-class',
  buttons: [
    {
      text: 'Next',
      action: tour.next
    }
  ]
});

// call the tour instance
tour.start()
}
```

Now that this function has been added to the `newRIBOverlayPages.js` file, open the `newRIBDAPUtilities.js` file and look for the `journeyInfo` object.

```js
const journeyInfo = {
  "/in/credit-card": {
    journey: "document.querySelector('#dapModalCloseButton')?.click();NewRIBCreditCardPage()",
    logic: `document.querySelectorAll(".cardAnalysis")[0]?.getBoundingClientRect().x > 0`
  },
  "/cug/credit-card": {
    journey: "document.querySelector('#dapModalCloseButton')?.click();NewRIBCreditCardPage()",
    logic: `document.querySelectorAll(".cardAnalysis")[0]?.getBoundingClientRect().x > 0`
  },
};
```

In this object, the first child object is the pathname of the page where this needs to be implemented. For example, if this needs to be implemented on the bill payment page, the object key will be `/in/bill-payment` or `/cug/bill-payment` for CUG website. The `journey ` is the part that should call the function we just created and the `logic` is the part that is first check before calling the journey. So, to accomodate the new function we just created, we will edit the above object as:

```js
const journeyInfo = {
  "/in/credit-card": {
    journey: "document.querySelector('#dapModalCloseButton')?.click();NewRIBCreditCardPage()",
    logic: `document.querySelectorAll(".cardAnalysis")[0]?.getBoundingClientRect().x > 0`
  },
  "/cug/credit-card": {
    journey: "document.querySelector('#dapModalCloseButton')?.click();NewRIBCreditCardPage()",
    logic: `document.querySelectorAll(".cardAnalysis")[0]?.getBoundingClientRect().x > 0`
  },
  // new code
  "/in/bill-payment": {
    journey: "document.querySelector('#dapModalCloseButton')?.click();Function1()",
    logic: `document.querySelectorAll(".billPaymentAnalysis")[0]?.getBoundingClientRect().x > 0`
  },
};
```

The journey has a pre-written code: `document.querySelector('#dapModalCloseButton')?.click()`. This helps in closing the pop-up button before the journey starts. 
In logic, the current logic is `If .billPaymentAnalysis element is present, and its dimensions are greater than 0, run the journey`. However, this can be changed as per development requirement. 

## Folder Structure
- ### `dist`
    This folder contains the build files of the guided journey.
    fdslkgds
    - #### `js`
        This folder contains the javascript build files. The file that needs to be imported to the website should be `shepherd.js`. This file has the logic and the components for displaying the banners on the website.
    - #### `css`
        This folder contains the styling build files. `shepherd.css` file needs to be imported on the website, and contains the styling information compiled from the `src` folder.


- ### `src`
    This folder contains the code files that need to be changed as per the bank's requirements. Inside the `js` file, the entire application's logic exists.
    - #### `js`
        This contains the library's main functionality code.
        - ##### `components`
            This folder contains all the components of the Shepherd library. You will need to change the content of this folder only if the bank requires any visual changes to the guided journey pop-up box.
            - ###### `shepherd-button.svelte`
                This folder contains the components for the buttons that are visible at the bottom of the guided journey pop-up
                ![image](https://github.com/user-attachments/assets/cf06b5e2-3e0e-4bfb-85f4-050615ddf066)

            - ###### `shepherd-cancel-icon.svelte`
                This folder contains the component for the cancel button at the top of the guided journey pop-up.
                ![image](https://github.com/user-attachments/assets/1d718090-a87e-440e-9a00-d9dfdc5afb13)
      
            - ###### `shepherd-content.svelte`
                This component contains the entire box content visible to the user beyond the blacked-out screen. It contains the header, footer and the text part.
                ![image](https://github.com/user-attachments/assets/d493842c-670a-457c-ada5-df1f1244031d)
              
            - ###### `shepherd-elment.svelte`
                This component file manages the appearances and the interactions for each step of the tour. It handles user focus, keyboard navigation, and dynamic class updates based on step options.
              ![image](https://github.com/user-attachments/assets/f7e4de58-4ac0-4877-9509-3b6afc7a24da)

              
            - ###### `shepherd-footer.svelte`
                Footer at the bottom of the guided journey pop-up that contains buttons like **_Next_**, **_Previous_**, **_Complete_**, and **_Cancel_**
                ![image](https://github.com/user-attachments/assets/b271d0ea-74e3-43c4-8828-fd1334bcf620)
              
            - ###### `shepherd-header.svelte`
                Header at the top of the guided journey container that contains the title and the close button is defined in this file.
                ![image](https://github.com/user-attachments/assets/f25d9232-da96-4d70-89dd-a2450886bacd)
              
            - ###### `shepherd-modal.svelte`
                This component handles creating and managing a modal overlay with a cutout (opening) to highlight specific elements on a webpage. It defines functions to position the overlay, update its dimensions, and control visibility. The overlay's position is adjusted based on the target element, considering its location within scrollable containers or iframes. Event listeners are added to manage touch interactions and animations. The SVG element defines the visible shape of the overlay, and its visibility is toggled using CSS transitions.
              
              
            - ###### `shepherd-progress-bar.svelte`
                A progress bar is visible between the header and the content. The logic for calculating the progress bar is as per the title of the step. If the step is 3/6, the progress bar will be `3÷6=1/2` or 50% width.
              ![image](https://github.com/user-attachments/assets/af5eae33-5dbd-4575-bee2-5b5cdd40a598)
              
            - ###### `shepherd-text.svelte`
                This component gets the text from the configuration files as HTML text.
              ![image](https://github.com/user-attachments/assets/d1005622-41c5-47ff-9066-32fc04040c26)

              
            - ###### `shepherd-title.svelte`
                The title is the step number that is visible on the UI. The convention to name this is `the step number / total number of steps`, so, for example, if a journey has 12 steps and the current step is 7, the title value should be `7/12`
              ![image](https://github.com/user-attachments/assets/698374b9-82d2-46e9-811f-3b394177c683)

              
        - ##### `utils`
            Utility tools for the shepherdJS. You will be least likely to change the contents of this folder, except if the **Adobe** concept needs to be changed.
          - ###### `evented.js`
              This file defines the `Evented` class that handles all kinds of events and provides a callback-like functionality for responding to those events. 
          - ###### `shepherd.js`
              This file contains information about Shepherd JS server-side or client-side rendering. For ICICI, we are using client-side rendering, and you will not need to change this file soon.
          - ###### `step.js`
              This exports the Step class for Shepherd. This file defines the action of each method of the Step class, such as attaching to a hook, creating a tooltip, scrolling action to an element, showing a step, etc. Refer file for comments to understand the code.
          - ###### `tour.js`
              This code defines a Tour class that manages a website tour, allowing users to navigate through a series of steps that guide them through a site or feature. It is built on top of an Evented class, extending its capabilities with step-by-step guidance, handling navigation, and user interactions such as cancelling or completing the tour.
        - ##### `types`
            This folder contains the types defined in the code. Just so you know, you won't need to change these types for any future use cases. 


- ### `tours`
    This folder contains the journey files for the website and the journey configuration.
  - #### `images`
      All photos/GIFs that are required for the journey are stored here.
  - #### `newRIBDAPUtilities.js`
      This folder contains the logic for implementing the guided journey on ICICI Bank Pages. Logic like pop-up open, pop-up close and light and glow after pop-up close are defined here.
  - #### `newRIBGuidedJourneys.js`
      If there are any journeys in the future that need to be implemented, they will be stored here. For now, this file is empty.
  - #### `newRIBOverlayPages.js`
      Overlay journeys for all pages are stored here in their own functions. 
