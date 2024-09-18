# Guided Journey - customized for ICICI

<p align="center">
  <img 
    alt="Shepherd.js Logo"
    src="https://i.imgur.com/cowwtSX.png"/>
</p>

## Folder Structure
- ### `dist`
    This folder contains the build files of the guided journey.
    fdslkgds
    - #### `js`
        This folder contains the javascript build files. The file that needs to be imported to the website should be `shepherd.js`. This file has the logic and the components for the displaying the banners on the website. 
    - #### `css`
        This folder contains the styling build files. `shepherd.css` file needs to be imported on the website, and contains the styling information compiled from the `src` folder. 

- ### `src`
    This folder contains the code files that needs to be changed as per the bank's requirements. Inside the `js` file, the entire logic of the application exists.
    - #### `js`
        This contains the main code of the library.
        - ##### `components`
            This folder contains all the components of the shepherd library. You will need to change the content of this folder only if the bank requires any visual changes to guided journey pop-up box.
            - ###### `shepherd-button.svelte`
                Buttons that are visible on the bottom of the guided journey pop-up
            - ###### `shepherd-cancel-icon.svelte`
                The cancel button on the top of the guided journey pop-up
            - ###### `shepherd-content.svelte`
                Test
            - ###### `shepherd-elment.svelte`
                Test
            - ###### `shepherd-footer.svelte`
                Footer at the bottom of the guided journey pop-up that contains the buttons like **_Next_**, **_Previous_**, **_Complete_**, and **_Cancel_**
            - ###### `shepherd-header.svelte`
                Test
            - ###### `shepherd-modal.svelte`
                Test
            - ###### `shepherd-progress-bar.svelte`
                Test
            - ###### `shepherd-text.svelte`
                Test
            - ###### `shepherd-title.svelte`
                Test
        - ##### `utils`
            Utility tools for the shepherdJS. You will be least likely to change the contents of this folder, except if Adobe concept needs to be changed. 
        - ##### `evented.js`
            dsagfds
        - ##### `shepherd.js`
            This file contains the information about Shepherd JS server side or client side rendering. For ICICI, we are using client side rendering and you will not need to change this file any time soon.
        - ##### `step.js`
            This exports the Step class for Shepherd. This file defines the action of each method of the Step class like Attach to hook, tooltip creation, scroll action to element, show step, etc. Refer file for comments to understand the code. 
        - ##### `tour.js`
            fdsgfdsgd

- ### `tours`
    This folder contains the journey files for the website along with the journey configuration 

