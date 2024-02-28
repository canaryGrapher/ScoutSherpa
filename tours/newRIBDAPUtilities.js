// Feb 28, 2024 | File updated
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
const content = {
  "/in/credit-card": "document.querySelector('#dapModalCloseButton').click();NewRIBCreditCardPage()",
};

const addAndRemoveGlow = (buttonReference, modal) => {
  console.log("Invoking addAndRemoveGlow()")
  console.log('Removing modal now')
  console.log(modal)
  buttonReference.classList.add('glow-indicator');
  buttonReference.style.cursor = "not-allowed";
  setTimeout(function () {
    modal.remove()
    buttonReference.classList.remove('glow-indicator');
    // buttonReference.classList.remove('modalMinimized');
    buttonReference.style.cursor = "pointer"
  }, 2000); // 2000 milliseconds = 2 seconds
};

const getModalText = (linkURL) => {
  const currentPath = window.location.pathname;
  console.log("Invoking getModalText()")
  const modalText = `<div id="modalContainer" class="modal">
<button class="close-button" id="dapModalCloseButton" type="btn">×</button>
<h2>User guidance</h2>
<p>
${content[currentPath] ? "Welcome to the new and improved ICICI Bank website experience! A complete revamp to make your banking experience convenient and rewarding. Get going with our video demos on how to use the new website and its features, or else start a guided journey that takes you through the main sections and pages of the new website. Choose either with just a click. We hope you enjoy the new online banking experience." : "Welcome to the new and improved ICICI Bank website experience! A complete revamp to make your banking experience convenient and rewarding. Get going with our video demos on how to use the new website and its features with just a click. We hope you enjoy the new online banking experience."}
</p>
<div class="modalButtonContainer">
    <button class="iPlayContainerInModal modalButtons" onClick="window.open('${linkURL}', '_blank');">
      <span>Demo Videos</span>
    </button>
    ${content[currentPath] ? '<button class="modalButtons" type="button" onclick=' + content[currentPath] + '>Guide me</button>' : ''}
</div>
</div>`;
  return modalText;
}

const showModal = (linkURL, topButtonSelector) => {
  console.log("Invoking showModal()")
  const modalContent = getModalText(linkURL);
  document.body.insertAdjacentHTML('beforeend', modalContent);
  document.querySelector("#dapModalCloseButton").addEventListener('click', () => {
    console.log("Adding closing action to the modal")
    closeAction(document.querySelector('#modalContainer'), document.querySelector(topButtonSelector))
  });
}

const closeAction = (modalReference, topButton) => {
  console.log('Invoking closeAction()')
  console.log(topButton)
  // const buttonReference = document.getElementById('closeButton')
  calculateRetract(topButton, modalReference);
  modalReference.setAttribute('class', 'modalMinimized')
  addAndRemoveGlow(topButton, modalReference)
};

const calculateRetract = (buttonReference, modalReference) => {
  console.log('Invoking calculateRetract()')
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
  if (document.querySelector(buttonSelector).style.cursor != "not-allowed") {
    if (count === 0) {
      console.log("invoking associateModalForDAP()")
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
    font-size  : 1.8rem;
    text-align : center;
    font-weight: bold;
  }
  #modalContainer>p {
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
    }
    showModal(linkURL, buttonSelector);
  }
};

// eslint-disable-next-line no-unused-vars
const pageChangeInvokationDAP = () => {
  const mainFunction = () => {
    const pageReference = window.location.pathname;
    let dateReference = window.localStorage.getItem("modalOpenDateReference")
    let ISODateToday = new Date()
    let dateToday = ISODateToday.getDate()
    console.log("dateReference", dateReference)
    console.log("ISODateToday", ISODateToday)
    console.log("CheckEqual")
    console.log("PAGE PATHNAME CHANGE OBSERVED")
    console.log(window.location.pathname)
    console.log("PAGE PATHNAME CHANGE OBSERVED INSIDE mainFunction")
    console.log(pageReference)
    const openModalAutomatically = () => {
      if (content[pageReference]) {
        let openTimes = window.localStorage.getItem("modalOpenTime")
        console.log("Open times, ", openTimes)
        if (Number(openTimes) < 3) {
          document.querySelector("#guided_Journey_Triggered")?.click()
          // alert("Hola")
          console.log("Setting open times to: ", (Number(openTimes) + 1))
          window.localStorage.setItem("modalOpenTime", (Number(openTimes) + 1))
        }
      }
    }

    if (dateReference && dateReference == ISODateToday.getDate()) {
      console.log("Hello")
      openModalAutomatically()
    } else {
      window.localStorage.setItem("modalOpenDateReference", dateToday)
      window.localStorage.setItem("modalOpenTime", "0")
      openModalAutomatically()
    }
  }
  if (content[window.loca] && document.querySelector(".cardAnalysis").getBoundingClientRect().x > 0) {
    pageCount = 0;
    setTimeout(mainFunction, 2000)
  }
  else {
    if (pageCount < 3) {
      pageCount = pageCount + 1;
      setTimeout(pageChangeInvokationDAP, 4000);
    }
  }
}