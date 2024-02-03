// Feb 02, 2024 | Updates to file
// update 11: Moved Observer API options inside load event callback
// update 10: Only support for logged-in section
// update 9: Using Observer API now to wait for button to appear
// update 8: Wrong URL updated in RIB UI
// update 7: Reference button recloning to remove any event listeners
// update 6: Changed event listener from document to window
// update 5: Prettier config
// update 4: animation added
// update 3: changed position of event listener and window to document
// update 2: changed Domcontentloaded to load

/* eslint-disable prettier/prettier */
/* eslint-disable max-lines */

let count = 0;

const addAndRemoveGlow = (buttonReference) => {
  console.log("Invoking addAndRemoveGlow()")
  const style = document.createElement('style');
  style.innerHTML = ``;
  buttonReference.classList.add('glow-indicator');
  setTimeout(function () {
    buttonReference.classList.remove('glow-indicator');
  }, 5000); // 5000 milliseconds = 5 seconds
};

const getModalText = () => {
  console.log("Invoking getModalText()")
  const modalText = `<div id="modalContainer" class="modal">
<button class="close-button" id="closeButton" onClick="toggleModal(document.querySelector('#navButton'))">×</button>
<h2>User guidance</h2>
<p>Welcome to the new and improved ICICI Bank website! We have redesigned our website to make your banking experience more convenient and rewarding. To help you get started, we have two options for you. Watch our video demos that show you how to use the new website and its features, or start a guided journey that takes you through the main sections and pages of the new website. Choose either option by clicking the respective buttons.
We hope you enjoy the new online banking experience with us.</p>
<div class="modalButtonContainer">
    <button class="iPlayContainerInModal modalButtons">
        <svg _ngcontent-rlc-c111="" width="31" height="30" viewBox="0 0 31 30" fill="none"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <circle _ngcontent-rlc-c111="" cx="15.0081" cy="15" r="14.5" fill="white" stroke="white"></circle>
            <rect _ngcontent-rlc-c111="" x="2.93506" y="9.51172" width="25.8023" height="14.21"
                fill="url(#pattern0)"></rect>
            <rect _ngcontent-rlc-c111="" x="9.80078" y="18.0215" width="2.73348" height="2.27073" fill="white">
            </rect>
            <rect _ngcontent-rlc-c111="" x="4.20703" y="20.082" width="3.32233" height="3.63885" fill="white">
            </rect>
            <rect _ngcontent-rlc-c111="" x="6.81348" y="21.2168" width="11.691" height="2.50378" fill="white">
            </rect>
            <defs _ngcontent-rlc-c111="">
                <pattern _ngcontent-rlc-c111="" id="pattern0" patternContentUnits="objectBoundingBox" width="1"
                    height="1">
                    <use _ngcontent-rlc-c111="" xlink:href="#image0_4667_36348"
                        transform="scale(0.00724638 0.0131579)"></use>
                </pattern>
                <image _ngcontent-rlc-c111="" id="image0_4667_36348" width="138" height="76"
                    xlink:href='data:image/png;base64,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'>
                </image>
            </defs>
        </svg>
        <span>Demo Videos</span>
    </button>
    <button class="modalButtons" type="button">Guide me</button>
</div>
</div>`;
  return modalText;
}

const showModal = (buttonReference) => {
  console.log("Invoking showModal()")
  if (count === 0) {
    const modalContent = getModalText();
    document.body.insertAdjacentHTML('beforeend', modalContent);
    buttonReference.addEventListener(
      'click',
      closeAction(buttonReference, document.querySelector('#modalContent'))
    );
    count++;
  } else {
    const modalReference = document.querySelector('#modalContainer');
    modalReference.setAttribute('class', 'modal');
  }
};

const closeAction = (buttonReference, modalReference) => {
  console.log('Invoking closeAction()')
  console.log('Clicked');
  calculateRetract(buttonReference, modalReference);
  console.log(modalReference);
  console.log(modalReference?.getAttribute('class'));
  console.log(modalReference?.getAttribute('class').indexOf('modalMinimized'));
  const shouldminimize =
    modalReference.getAttribute('class').indexOf('modalMinimized') == -1;
  console.log(shouldminimize);
  if (shouldminimize) {
    modalReference.setAttribute('class', 'modalMinimized');
  }
  addAndRemoveGlow(buttonReference);
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


const toggleModal = (buttonReference) => {
  console.log("invoking toggleModal()")
  const modalReference = document.querySelector('#modalContainer');
  if (
    (
      modalReference ||
      modalReference?.getAttribute('class').indexOf('modalMinimized') == -1
    )
  ) {
    console.log('Creating new modal for the very first time');
    const modalStyle = document.createElement('style');
    modalStyle.innerHTML = `
  #modal {
    position        : absolute;
    margin          : auto;
    left            : 0;
    right           : 0;
    top             : 0;
    bottom          : 0;
  }
  #modalContainer {
    position        : fixed;
    top             : 0;
    left            : 0;
    right           : 0;
    bottom          : 0;
    width           : 45vw;
    height          : fit-content;
    margin          : auto;
    background-color: white;
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
    color           : #d16c13;
    background-color: #feeee5;
    padding         : 8px 15px;
    border-radius   : 30px;
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
    transition     : opacity .3s ease-in-out;
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
    showModal(buttonReference, modalReference);
  } else {
    console.log('Killing modal');
    closeAction(buttonReference, modalReference);
  }
};


const ObserverCall = () => {
  const buttonRef = document.querySelector("body > app-root > app-header > div > header > div > div.headerSecondary > div:nth-child(3)")
  console.log(buttonRef)
  buttonRef.remove()
  const header = document.querySelector("body > app-root > app-header > div > header > div > div.headerSecondary")
  // Create a new div element
  const newDiv = document.createElement('div');
  newDiv.className = 'headerButton hide-content';
  newDiv.id = '#navButtonForGuide';
  newDiv.style.cssText = 'background-color: #feeee5; border - radius: 2.34375vw; font-size: .9375vw; line - height: 1.25vw; padding: .665vw 1.015625vw;'
  newDiv.onclick = () => toggleModal(document.getElementById('navButtonForGuide'))
  // Create a new p element inside the div
  const newP = document.createElement('p');
  newP.className = 'header-text';
  newP.textContent = 'New here?';
  // Append the p element to the div element
  newDiv.appendChild(newP);
  header.insertBefore(newDiv, header.firstChild);
  console.log('Load');
}

window.addEventListener('load', () => {
  let options = {
    root: document.querySelector("body > app-root > app-header > div > header > div > div.headerSecondary > div:nth-child(3)"),
    rootMargin: "0px",
    threshold: 1.0,
  };
  let observer = new IntersectionObserver(ObserverCall, options);
  const pageCurrentLocation = window.location.pathname;
  if (pageCurrentLocation != '/in/login-page') {
    let target = document.querySelector("body");
    observer.observe(target);
  }
})