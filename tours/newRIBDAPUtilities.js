// Mar 1, 2024 | File updated
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

/* eslint-disable prettier/prettier */
/* eslint-disable max-lines */
let count = 0;
let pageCount = 0;
const journeyInfo = {
    "/in/credit-card": {
        journey: "document.querySelector('#dapModalCloseButton')?.click();NewRIBCreditCardPage()",
        logic: (!window.find("EXPLORE MORE CREDIT CARDS") && document.querySelectorAll(".cardAnalysis")[0])
    },
};

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

const getModalText = (linkURL) => {
    const currentPath = window.location.pathname;
    const modalText = `<div id="modalContainer" class="modal">
<button class="close-button" id="dapModalCloseButton" type="btn">×</button>
<h2>View Demo</h2>
<p>
${journeyInfo[currentPath] ? "Welcome to the new and improved ICICI Bank website experience! A complete revamp to make your banking experience convenient and rewarding. Get going with our video demos on how to use the new website and its features, or else start a guided journey that takes you through the main sections and pages of the new website. Choose either with just a click. We hope you enjoy the new online banking experience." : "Welcome to the new and improved ICICI Bank website experience! A complete revamp to make your banking experience convenient and rewarding. Get going with our video demos on how to use the new website and its features with just a click. We hope you enjoy the new online banking experience."}
</p>
<div class="modalButtonContainer">
    <button class="iPlayContainerInModal modalButtons" onClick="window.open('${linkURL}', '_blank');">
      <span>Demo Videos</span>
    </button>
    ${journeyInfo[currentPath].logic ? '<button class="modalButtons" type="button" onclick=' + journeyInfo[currentPath].journey + '>Guide me</button>' : ''}
</div>
</div>`;
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
    console.log('Invoking closeAction()')
    // const buttonReference = document.getElementById('closeButton')
    calculateRetract(topButton, modalReference);
    modalReference.setAttribute('class', 'modalMinimized')
    addAndRemoveGlow(topButton, modalReference)
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
    if (document.querySelector(buttonSelector)?.style.cursor != "not-allowed" && Array.from(document.querySelectorAll('.shepherd-element')).every(element => element.getBoundingClientRect().x === 0)
    ) {
        console.log("Conditions met for invoking modal")
        if (count === 0) {
            console.log('Creating new modal for the very first time');
            const modalStyle = document.createElement('style');
            modalStyle.innerHTML = `
  .modal {
    position        : absolute;
    margin          : auto;
    left            : 0;
    right           : 0;
    top             : 0;
    bottom          : 0;
  }
  #modalContainer {
    display         : block;
    position        : fixed;
    top             : 0;
    left            : 0;
    right           : 0;
    bottom          : 0;
    width           : 45vw;
    height          : fit-content;
    margin          : auto;
    background-color: #FEEEE5;
    box-shadow      : 0 0 10px rgba(0, 0, 0, 0.5);
    padding         : 20px;
    transition      : 1s all;
    border-radius   : 10px;
  }
  #modalContainer>h2 {
    text-align : center;
    font-weight: bold;
  }
  #modalContainer>p {
    font-size  : 12px;
    width     : 90%;
    margin    : 10px auto 0 auto;
    text-align: justify;
  }
  .close-button {
    position        : absolute;
    top             : 10px;
    right           : 20px;
    border          : none;
    background-color: transparent;
    font-size       : 20px;
    cursor          : pointer;
    color           : #feeee5;
    background-color: #d16c13;
    border-radius   : 30px;
    width           : 30px;
    height          : 30px;
    justify-content : center;
  }
  .close-button:hover {
    color           : #d16c13;
    background-color: #feeee5;
  }
  .modalButtonContainer {
    display        : flex;
    margin         : auto;
    width          : 90%;
    margin-top     : 20px;
    justify-content: space-between;
  }
  .modalButtons {
    color           : #ef7c00;
    background-color: #ffe3cb;
    padding         : 8px 15px;
    border-radius   : 30px;
    border          : 0;
    cursor          : pointer;
    flex            : 1;
    margin          : 5px;
    text-align      : center;
  }
  .modalButtons:hover {
    color           : #feeee5;
    background-color: #d16c13;
  }
  .iPlayContainerInModal {
    display        : flex;
    justify-content: center;
  }
  .iPlayContainerInModal>span {
    margin: auto 0 auto 5px;
  }
  .glow-indicator {
    border  : none;
    outline : none;
    position: relative;
    z-index : 0;
  }
  
  .glow-indicator:before {
    content        : '';
    background     : linear-gradient(45deg, #B02A30, #ff7300, #F99D27);
    position       : absolute;
    top            : -2px;
    left           : -2px;
    background-size: 400%;
    z-index        : -1;
    filter         : blur(5px);
    width          : calc(100% + 4px);
    height         : calc(100% + 4px);
    animation      : glowing 20s linear infinite;
    opacity        : 0;
    transition     : opacity .2s ease-in-out;
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
    border-radius   : 2em;
    z-index         : -1;
    content         : '';
    position        : absolute;
    width           : 100%;
    height          : 100%;
    background-color: #fff;
    left            : 0;
    top             : 0;
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
        } else {
            console.log("entered in show modal")
            showModal(linkURL, buttonSelector);
        }
    }
};

// eslint-disable-next-line no-unused-vars
const pageChangeInvokationDAP = () => {
    // fnuction to handle opening of modal
    const mainFunction = () => {
        let ISODateToday = new Date()
        let dateToday = ISODateToday.getDate()
        let openTimes = window.localStorage.getItem("modalOpenTime")
        let lastOpenDate = window.localStorage.getItem("modalOpenDateReference")
        // if the local storage key-value is missing for openTimes, set it to 0
        if (!openTimes) {
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

    if (journeyInfo[window.location.pathname]) {
        pageCount = 0;
        console.log("FUNCTION CONDITION MET, wopning modal in 4 seconds.")
        const mainFunctionLogic = () => {
            if(journeyInfo[window.location.pathname].logic) {
                mainFunction()
            }
        }
        setTimeout(mainFunctionLogic, 4000)
    }
    else {
        if (pageCount < 3) {
            // increasing the number of retries.
            pageCount = pageCount + 1;
            // retry the function after 4 seconds
            setTimeout(pageChangeInvokationDAP, 4000);
        }
    }
}