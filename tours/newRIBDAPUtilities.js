// September 11, 2024 | File updated
// update 53: close button fix
// update 52: removed indexDB logic
// update 51: added bank accounts overlays
// update 50: added loader for deposits
// update 49: Changed page URL of incorrect pages
// update 48: Added fund transfer and CUG
// update 47: Mobile screen removal
// update 46: Changed content as per V5 of document
// update 45: Changed content as per V2 of document
// update 44: changed modal text and buttons
// update 43: Logic changes
// update 42: Switched to indexedDB instead of localStorage
// update 41: Added console messages for debugging
// update 40: Fixed session expiry issue for modal
// update 39: Fixed double click for opening modal
// update 38: Auto open-lofic fix != changed to ==
// update 37: Auto-open logic
// update 36: Increased retry time from 5 to 20
// update 35: Small changes
// update 34: Added page load logic
// update 33: Added logic for button showing for edge cases
// update 32: Fixed modal opening issue
// update 31: Modal content change, invokation logic change and journey change
// update 30: Auto fix for redirection
// update 29: Fixes on new RIB
// update 26: setTimeout for main function
// update 25: Added function for route
// update 24: Changed animation duration for modal close
// update 23: Removed event listener
// update 22: Changed event listener
// update 21: Fix for event Listener on page URL change
// update 20: Modal opens on selected page 3 times automatically
// update 19: Added fix for guide me button
// update 18: Added display: block to modal to fix bug
// update 17: Fixed reopening issues with Modal. Now working, added two params for main func
// update 16: Count reset after modal collapse
// update 15: Handling only modal creation and destruction now.
// update 14: Separated functions for Addition of button, and removal of buttons
// update 13: Added if condition depended on count rather than modal
// update 12: Fixed incorrect variable naming 'location'
// update 11: Moved Observer API options inside load event callback
// update 10: Only support for logged-in section
// update 09: Using Observer API now to wait for button to appear
// update 08: Wrong URL updated in RIB UI
// update 07: Reference button recloning to remove any event listeners
// update 06: Changed event listener from document to window
// update 05: Prettier config
// update 04: Animation added
// update 03: Changed position of event listener and window to document
// update 02: Changed Domcontentloaded to load
// update 01: First code

/* eslint-disable prettier/prettier */
/* eslint-disable max-lines */

const journeyInfo = {
  "/in/credit-card": {
    journey: "document.querySelector('#dapModalCloseButton')?.click();NewRIBCreditCardPage()",
    logic: `document.querySelectorAll(".cardAnalysis")[0]?.getBoundingClientRect().x > 0`
  },
  "/cug/credit-card": {
    journey: "document.querySelector('#dapModalCloseButton')?.click();NewRIBCreditCardPage()",
    logic: `document.querySelectorAll(".cardAnalysis")[0]?.getBoundingClientRect().x > 0`
  },
  "/in/payment-transfer": {
    journey: "document.querySelector('#dapModalCloseButton')?.click();NewRIBFundTransferPage()",
    logic: `document.querySelectorAll(".searchArea")[0]?.getBoundingClientRect().x > 0`
  },
  "/cug/payment-transfer": {
    journey: "document.querySelector('#dapModalCloseButton')?.click();NewRIBFundTransferPage()",
    logic: `document.querySelectorAll(".searchArea")[0]?.getBoundingClientRect().x > 0`
  },
  "/in/deposit": {
    journey: "document.querySelector('#dapModalCloseButton')?.click();NewRIBDepositsPage()",
    logic: `document.querySelectorAll(".manageDeposit")[0]?.getBoundingClientRect().x > 0`
  },
  "/cug/deposit": {
    journey: "document.querySelector('#dapModalCloseButton')?.click();NewRIBDepositsPage()",
    logic: `document.querySelectorAll(".manageDeposit")[0]?.getBoundingClientRect().x > 0`
  },
  "/cug/bank-account": {
    journey: "document.querySelector('#dapModalCloseButton')?.click();NewRIBAccountsPage()",
    logic: `document.querySelectorAll(".payNowContainer")[0]?.getBoundingClientRect().x > 0`
  },
  "/in/bank-account": {
    journey: "document.querySelector('#dapModalCloseButton')?.click();NewRIBAccountsPage()",
    logic: `document.querySelectorAll(".payNowContainer")[0]?.getBoundingClientRect().x > 0`
  }
};

let count = 0;
let pageCount = 0;
let retries = 0;

const addAndRemoveGlow = (buttonReference, modal) => {
  buttonReference.classList.add('glow-indicator');
  //   buttonReference.style.cursor = "not-allowed";
  setTimeout(function () {
    modal.remove()
    buttonReference.classList.remove('glow-indicator');
    // buttonReference.classList.remove('modalMinimized');
    buttonReference.style.cursor = "pointer"
  }, 2000); // 2000 milliseconds = 2 seconds
};

// eslint-disable-next-line no-unused-vars
const getModalText = (linkURL) => {
  const currentPath = window.location.pathname;
  const modalText = `<div id="modalContainer" class="modal">
  <div class="closeHolder">
    <button class="close-button" id="dapModalCloseButton" type="btn">×</button>
  </div>
<h2>View Demo</h2>
<p>
${journeyInfo[currentPath] ? "Welcome to the all new ICICI Bank Online Banking Experience, upgraded for making your banking journey smoother, smarter, and simpler." : null}
</p>
  <div class="modalButtonContainer">
    ${journeyInfo[currentPath] ? '<button class="modalButtons" type="button" onclick=' + journeyInfo[currentPath].journey + '>Take Guided Tour</button>' : ''}
  </div>
</div > `;
  // <button class="iPlayContainerInModal modalButtons" onClick="window.open('${linkURL}', '_blank');">
  //   <span>Watch Demo Videos</span>
  // </button>
  return modalText;
}

const showModal = (linkURL, topButtonSelector) => {
  console.log("Invoking showModal()")
  document.querySelector(topButtonSelector).style.cursor = "not-allowed"
  const modalContent = getModalText(linkURL);
  document.body.insertAdjacentHTML('beforeend', modalContent);
  document.querySelector("#dapModalCloseButton").addEventListener('click', () => {
    closeAction(document.querySelector('#modalContainer'), document.querySelector(topButtonSelector))
  });
}

const closeAction = (modalReference, topButton) => {
  if (document.querySelectorAll("#guided_Journey_Triggered").length > 0) {
    console.log('Invoking closeAction()')
    calculateRetract(topButton, modalReference);
    modalReference.setAttribute('class', 'modalMinimized')
    addAndRemoveGlow(topButton, modalReference)
  } else {
    document.querySelector("#modalContainer")?.remove()
  }
};

const calculateRetract = (buttonReference, modalReference) => {
  const elementDetails = buttonReference.getBoundingClientRect();
  const modalDetails = modalReference.getBoundingClientRect();
  var style = document.createElement('style');
  style.innerHTML = `.modalMinimized {
  -webkit - transform: translate(${elementDetails.left -
    modalDetails.left -
    (modalDetails.width - elementDetails.width) +
    200
    }px, -${modalDetails.top -
    elementDetails.top -
    (elementDetails.height - modalDetails.height) -
    50
    }px) scale(0);
  transform: translate(${elementDetails.left -
    modalDetails.left -
    (modalDetails.width - elementDetails.width) +
    200
    }px, -${modalDetails.top -
    elementDetails.top -
    (elementDetails.height - modalDetails.height) -
    50
    }px) scale(0);
} `;
  document.head.appendChild(style);
};

// eslint-disable-next-line no-unused-vars
const associateModalForDAP = (linkURL, buttonSelector) => {
  console.log("invoking associateModalForDAP()")
  console.log(`document.querySelector(buttonSelector)?.style.cursor != "not-allowed": `, document.querySelector(buttonSelector)?.style.cursor != "not-allowed")
  console.log(`Array.from(document.querySelectorAll('.shepherd-element')).every(element => element.getBoundingClientRect().x === 0: `, Array.from(document.querySelectorAll('.shepherd-element')).every(element => element.getBoundingClientRect().x === 0))
  if (document.querySelector(buttonSelector)?.style.cursor != "not-allowed" && Array.from(document.querySelectorAll('.shepherd-element')).every(element => element.getBoundingClientRect().x === 0)
  ) {
    console.log("Conditions met for invoking modal")
    if (count === 0) {
      console.log('Creating new modal for the very first time');
      const modalStyle = document.createElement('style');
      modalStyle.innerHTML = `
      .modal {
        position: absolute;
        margin: auto;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
    
    #modalContainer {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 45vw;
        height: fit-content;
        margin: auto;
        background-color: #FEEEE5;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        padding: 20px;
        transition: 1s all;
        border-radius: 10px
    }

    @media only screen and (max-width: 1024px) {
      #modalContainer {
        height: 90vw;
      }
    }
    
    #modalContainer>h2 {
        text-align: center;
        font-weight: bold;
    }
    
    #modalContainer>p {
        font-size: 12px;
        width: 90%;
        margin: 10px auto 0 auto;
        text-align: justify;
    }
    
.closeHolder {
    	position: absolute;
        top: 10px;
        right: 20px;
        background-color: #d16c13;
        border-radius: 30px;
        width: 30px;
        height: 30px;
        color: #feeee5;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    .closeHolder:hover {
        color: #d16c13;
        background-color: #feeee5;
    }
    
     .close-button {
        position: relative;
        border: none;
        color: inherit;
        background-color: transparent;
        font-size: 20px;
        cursor: pointer;
        padding: 0;
        margin: 0;
        margin-top: 1px;
    }
    
    .modalButtonContainer {
        display: flex;
        margin: auto;
        width: 90%;
        margin-top: 20px;
        justify-content: space-between;
    }
    
    .modalButtons {
        color: #ef7c00;
        background-color: #ffe3cb;
        padding: 8px 15px;
        border-radius: 30px;
        border: 0;
        cursor: pointer;
        flex: 1;
        margin: 5px;
        text-align: center;
    }
    
    .modalButtons:hover {
        color: #feeee5;
        background-color: #d16c13;
    }
    
    .iPlayContainerInModal {
        display: flex;
        justify-content: center;
    }
    
    .iPlayContainerInModal>span {
        margin: auto 0 auto 5px;
    }
    
    .glow-indicator {
        border: none;
        outline: none;
        position: relative;
        z-index: 0;
    }
    
    .glow-indicator:before {
        content: '';
        background: linear-gradient(45deg, #B02A30, #ff7300, #F99D27);
        position: absolute;
        top: -2px;
        left: -2px;
        background-size: 400%;
        z-index: -1;
        filter: blur(5px);
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        animation: glowing 20s linear infinite;
        opacity: 0;
        transition: opacity .2s ease-in-out;
    }
    
    .glow-indicator:active {
        color: #000;
    }
    
    .glow-indicator:active:after {
        background: transparent;
    }
    
    .glow-indicator:before {
        opacity: 1;
    }
    
    .glow-indicator:after {
        border-radius: 2em;
        z-index: -1;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #fff;
        left: 0;
        top: 0;
    }
    
    @keyframes glowing {
        0% {
            background-position: 0 0;
        }
    
        50% {
            background-position: 400% 0;
        }
    
        100% {
            background-position: 0 0;
        }
    }
`;
      document.head.appendChild(modalStyle);
      count++;
      showModal(linkURL, buttonSelector);
    } else {
      console.log("entered in show modal")
      showModal(linkURL, buttonSelector);
    }
  }
};

// eslint-disable-next-line no-unused-vars
const pageChangeInvokationDAP = () => {
  console.log("Invoking pageChangeInvokationDAP()")
  // function to handle opening of modal
  console.log("PAGE CHANGE INVOKATION DAP function run with PageCount: ", pageCount)
  const mainFunction = () => {
    let ISODateToday = new Date()
    let dateToday = ISODateToday.getDate()
    let openTimes = window.localStorage.getItem("modalOpenTime")
    let lastOpenDate = window.localStorage.getItem("modalOpenDateReference")
    console.log("We are inside main function with \n lastOpenDate: ", lastOpenDate, "\n openTimes:", openTimes)
    // if the local storage key-value is missing for openTimes, set it to 0
    if (!openTimes) {
      console.log("Setting modalOpen Times to 0 as previous record was not found")
      window.localStorage.setItem("modalOpenTime", 0)
    }
    // Modal will open automatically based on the defined condition
    const openModalAutomatically = () => {
      // if modal has been opened for less that 3 time automatically and date today is not equal to the last time it was opened
      if (Number(openTimes) < 3 && (Number(lastOpenDate) != dateToday)) {
        window.localStorage.setItem("modalOpenDateReference", dateToday)
        window.localStorage.setItem("modalOpenTime", (Number(openTimes) + 1))
        document.querySelector("#guided_Journey_Triggered")?.click()
      }
    }
    openModalAutomatically()
  }
  if (document.readyState === 'complete') {
    console.log("PAGE HAS BEEN LOADED: ", window.location.pathname)
    console.log("Does page exist in journey descriptions: ", journeyInfo[window.location.pathname])

    if (journeyInfo[window.location.pathname] && document.querySelectorAll(".shepherd-element")?.length == 0 && document.querySelectorAll("#guided_Journey_Triggered")?.length > 0) {
      pageCount = 20;
      console.log("FUNCTION CONDITION MET, opening modal in 4 seconds.")
      const mainFunctionLogic = () => {
        console.log("Logic matching:", journeyInfo[window.location.pathname].logic, " which evaluates to: ", eval(journeyInfo[window.location.pathname].logic))
        if (eval(journeyInfo[window.location.pathname].logic)) {
          console.log("Running main function now")
          retries = 0
          mainFunction()
        } else {
          console.log("Journey logic error, running again")
          if (retries < 10) {
            retries = retries + 1;
            setTimeout(mainFunctionLogic, 4000)
          }
        }
      }
      setTimeout(mainFunctionLogic, 4000)
    }
    if (pageCount < 20) {
      console.log("Trying for one more time out of twenty: ", `${pageCount}/20`)
      // increasing the number of retries.
      pageCount = pageCount + 1;
      // retry the function after 6 seconds
      setTimeout(pageChangeInvokationDAP, 6000);
    }
  }
  else {
    console.log("PAGE HAS NOT BEEN LOADED, RE-RUNNING THIS SCRIPT in 6 seconds")
    setTimeout(pageChangeInvokationDAP, 6000);
  }
}