/* eslint-disable max-lines */
// Last update: July 9, 2024
// update 11: content for bank accounts updated x 2
// update 10: content for bank accounts and deposits
// update 09: content for fund transfer
// update 08: Added overlays for fund transfer
// update 07: Changed content as per v5 of document (bug fix +1)
// update 06: Changed content as per V2 of document
// update 05: Changed content for overlays
// update 04: Changed size of dialer gif
// update 03: Added step for dialer explanation
// update 02: Added conditions for non-target pages
// update 01: Final update as per department review

// eslint-disable-next-line no-unused-vars
var NewRIBFundTransferPage = () => {
  // eslint-disable-next-line no-undef, no-unused-vars
  var GuideMeWhatsOnNewRIBFundTransferPage = new Shepherd.Tour({
    tourName: "Guide Me: What's on new Credit Card page",
    instanceCaller: "GuideMeWhatsOnNewRIBFundTransferPage",
    defaultStepOptions: {
      cancelIcon: {
        enabled: true,
      },
      scrollTo: {
        behavior: "smooth",
        block: "center",
      },
      arrow: true,
    },
    useModalOverlay: true,
    exitOnEsc: true,
    keyboardnavigation: true,
  });
  GuideMeWhatsOnNewRIBFundTransferPage.addStep({
    id: "GuideMeWhatsOnNewRIBFundTransferPage_start",
    title: "1/8",
    canClickTarget: false,
    text: `<div>    Here is our new navigation wheel for convenient Fund Transfers.<ul><li>To manage and initiate Transfers, click "Payment & Transfer"</li>
      <li>To close the option, click the '<' button in the center.</li></ul><div style="text-align: center;"><img src="https://cdn.jsdelivr.net/gh/canaryGrapher/ScoutSherpa@newRIB/tours/images/navigationTransactions.gif" height="200" alt="Animation showing use of new ICICI website dialer" style="object-fit: contain;margin-top:10px;" crossorigin="anonymous" /></div></div>
        `,
    attachTo: {
      element: document.querySelector(".dailermainwrapper"),
      on: "right",
    },
    buttons: [
      {
        text: "Next",
        action: GuideMeWhatsOnNewRIBFundTransferPage.next,
      },
      {
        text: "Cancel",
        action: GuideMeWhatsOnNewRIBFundTransferPage.cancel,
        secondary: true,
      },
    ],
  });
  GuideMeWhatsOnNewRIBFundTransferPage.addStep({
    id: "GuideMeWhatsOnNewRIBFundTransferPage_2",
    title: "2/8",
    canClickTarget: false,
    text: `<div>Track all payees across ICICI Bank and other banks.<div style="text-align: center;"><img src="https://cdn.jsdelivr.net/gh/canaryGrapher/ScoutSherpa@newRIB/tours/images/searchPayee.gif" height="200" alt="Animation showing use of new ICICI website dialer" style="object-fit: contain;margin-top:10px;" crossorigin="anonymous" /></div></div>
        `,
    attachTo: {
      element: ".searchArea",
      on: "bottom",
    },
    buttons: [
      {
        text: "Next",
        action: GuideMeWhatsOnNewRIBFundTransferPage.next,
      },
      {
        text: "Back",
        action: GuideMeWhatsOnNewRIBFundTransferPage.back,
        secondary: true,
      },
    ],
  });
  GuideMeWhatsOnNewRIBFundTransferPage.addStep({
    id: "GuideMeWhatsOnNewRIBFundTransferPage_3",
    title: "3/8",
    canClickTarget: false,
    text: `<div>
          <ul>
              <li>View, delete and add payee details, and transfer funds in the Manage Payee section</li>
              <li>Transfer to New Payee quickly without adding them as payee here</li>
          </ul>
      </div>
        `,
    attachTo: {
      element: document.querySelectorAll("div.ctaArea")[0],
      on: "right",
    },
    buttons: [
      {
        text: "Next",
        action: GuideMeWhatsOnNewRIBFundTransferPage.next,
      },
      {
        text: "Back",
        action: GuideMeWhatsOnNewRIBFundTransferPage.back,
        secondary: true,
      },
    ],
  });
  GuideMeWhatsOnNewRIBFundTransferPage.addStep({
    id: "GuideMeWhatsOnNewRIBFundTransferPage_4",
    title: "4/8",
    canClickTarget: false,
    text: `<div>Manage your recent transactions here.
    <ul>
      <li>Track transactions basis Fund transfer modes (IMPS/NEFT/ RTGS/ Within ICICI/Own Account)</li>
      <li>Click on SCHEDULED Tab to track and modify scheduled transactions and standing instructions</li>
    </ul>
      <div style="text-align: center;"><img src="https://cdn.jsdelivr.net/gh/canaryGrapher/ScoutSherpa@newRIB/tours/images/recentTransactions.gif" height="200" alt="Animation showing use of new ICICI website dialer" style="object-fit: contain;margin-top:10px;" crossorigin="anonymous" /></div></div>`,
    attachTo: {
      element: ".transactionWrapper",
      on: "right",
    },
    buttons: [
      {
        text: "Next",
        action: GuideMeWhatsOnNewRIBFundTransferPage.next,
      },
      {
        text: "Back",
        action: GuideMeWhatsOnNewRIBFundTransferPage.back,
        secondary: true,
      },
    ],
  });
  GuideMeWhatsOnNewRIBFundTransferPage.addStep({
    id: "GuideMeWhatsOnNewRIBFundTransferPage_5",
    title: "5/8",
    canClickTarget: false,
    text: `<div>Manage International Transactions Conveniently 
      <ul><li>Make transactions using <strong>MAKE INTERNATIONAL TRANSFERS</strong></li>
      <li>Receive funds from overseas using <strong>REQUEST MONEY FROM OVERSEAS</strong></li>
      </ul>
      </div>`,
    attachTo: {
      element: document.querySelectorAll(".upparCta")[0],
      on: "bottom",
    },
    buttons: [
      {
        text: "Next",
        action: GuideMeWhatsOnNewRIBFundTransferPage.next,
      },
      {
        text: "Back",
        action: GuideMeWhatsOnNewRIBFundTransferPage.back,
        secondary: true,
      },
    ],
  });
  GuideMeWhatsOnNewRIBFundTransferPage.addStep({
    id: "GuideMeWhatsOnNewRIBFundTransferPage_6",
    title: "6/8",
    canClickTarget: false,
    text: `<div>View and Track your upcoming bills in this section</div>
        `,
    attachTo: {
      element: ".rightWrapper",
      on: "left",
    },
    buttons: [
      {
        text: "Next",
        action: GuideMeWhatsOnNewRIBFundTransferPage.next,
      },
      {
        text: "Back",
        action: GuideMeWhatsOnNewRIBFundTransferPage.back,
        secondary: true,
      },
    ],
  });
  GuideMeWhatsOnNewRIBFundTransferPage.addStep({
    id: "GuideMeWhatsOnNewRIBFundTransferPage_7",
    title: "7/8",
    canClickTarget: false,
    text: "Check out exciting offers curated exclusively for you.",
    attachTo: {
      element: document.querySelector(
        "body > app-root > div.main > div > div > div.page-content.login > div.container.g-0.dark-theme-border > div > app-payment-transfer > div > div > div.ft-wrapper.ng-tns-c187-2 > app-ft-right-section > div > app-loan-cc > swiper-container",
      ),
      on: "left",
    },

    buttons: [
      {
        text: "Next",
        action: GuideMeWhatsOnNewRIBFundTransferPage.next,
      },
      {
        text: "Back",
        action: GuideMeWhatsOnNewRIBFundTransferPage.back,
        secondary: true,
      },
    ],
  });
  GuideMeWhatsOnNewRIBFundTransferPage.addStep({
    id: "GuideMeWhatsOnNewRIBFundTransferPage_8",
    title: "8/8",
    canClickTarget: false,
    text: "You are all set to enjoy the new ICICI Bank Fund Transfer experience. Take the Guided Tour again if you need more assistance.",
    buttons: [
      {
        text: "Complete",
        action: GuideMeWhatsOnNewRIBFundTransferPage.complete,
      },
      {
        text: "Back",
        action: GuideMeWhatsOnNewRIBFundTransferPage.back,
        secondary: true,
      },
    ],
  });
  GuideMeWhatsOnNewRIBFundTransferPage.start();
};

// eslint-disable-next-line no-unused-vars
var NewRIBCreditCardPage = () => {
  // eslint-disable-next-line no-undef
  var GuideMeWhatsOnNewRIBCreditCardPage = new Shepherd.Tour({
    tourName: "Guide Me: What's on new Credit Card page",
    instanceCaller: "GuideMeWhatsOnNewRIBCreditCardPage",
    defaultStepOptions: {
      cancelIcon: {
        enabled: true,
      },
      scrollTo: {
        behavior: "smooth",
        block: "center",
      },
      arrow: true,
    },
    useModalOverlay: true,
    exitOnEsc: true,
    keyboardnavigation: true,
  });
  GuideMeWhatsOnNewRIBCreditCardPage.addStep({
    id: "GuideMeWhatsOnNewRIBCreditCardPage_start",
    title: "1/8",
    canClickTarget: false,
    text: `<div>Introducing our newly designed navigation wheel for cards.<ul><li>Click on 'Cards' to see its sub-sections.</li>
    <li>Click the '<' button in the center of the navigation menu to close the option.</li></ul><div style="text-align: center;"><img src="https://cdn.jsdelivr.net/gh/canaryGrapher/ScoutSherpa@newRIB/tours/images/navigation.gif" height="200" alt="Animation showing use of new ICICI website dialer" style="object-fit: contain;margin-top:10px;" crossorigin="anonymous" /></div></div>
      `,
    attachTo: {
      element: document.querySelector("#navigationDialer"),
      on: "right",
    },
    buttons: [
      {
        text: "Next",
        action: GuideMeWhatsOnNewRIBCreditCardPage.next,
      },
      {
        text: "Cancel",
        action: GuideMeWhatsOnNewRIBCreditCardPage.cancel,
        secondary: true,
      },
    ],
  });
  GuideMeWhatsOnNewRIBCreditCardPage.addStep({
    id: "GuideMeWhatsOnNewRIBCreditCardPage_1",
    title: "",
    text: "Looks like you don't have any credit card linked to your account. Come back to this journey when you link a credit card.",
    showOn: () => {
      // eslint-disable-next-line prettier/prettier
      const toShowOrNotCheck1 = window.find("Get a feature packed ICICI Bank Card!");
      const toShowOrNotCheck2 = window.find("A Card on the fly");
      return toShowOrNotCheck1 && toShowOrNotCheck2;
    },
    buttons: [
      {
        text: "Understood",
        action: GuideMeWhatsOnNewRIBCreditCardPage.complete,
      },
    ],
    canClickTarget: false,
  });
  GuideMeWhatsOnNewRIBCreditCardPage.addStep({
    id: "GuideMeWhatsOnNewRIBCreditCardPage_2",
    title: "2/8",
    canClickTarget: false,
    text: `<div>View all your ICICI Bank and other Bank Credit Cards here on the horizontal tabs. Your connected cards are listed under the tabs with numbered badges. Click here to see information for 3+ Cards.<div style="text-align: center;"><img src="https://cdn.jsdelivr.net/gh/canaryGrapher/ScoutSherpa@newRIB/tours/images/cardBar.gif" width="350" alt="Animation showing connected cards dropdown" style="object-fit: contain;" crossorigin="anonymous" /></div></div>
      `,
    attachTo: {
      element: document.querySelector("#cardPillContainer"),
      on: "bottom",
    },
    buttons: [
      {
        text: "Next",
        action: GuideMeWhatsOnNewRIBCreditCardPage.next,
      },
      {
        text: "Back",
        action: GuideMeWhatsOnNewRIBCreditCardPage.back,
        secondary: true,
      },
    ],
  });
  // <div style="text-align: center;"><img src="https://cdn.jsdelivr.net/gh/canaryGrapher/ScoutSherpa@newRIB/tours/images/moreCards.gif" width="350" alt="Animation showing how to view more than three cards" style="object-fit: contain;" crossorigin="anonymous" /></div></div>
  GuideMeWhatsOnNewRIBCreditCardPage.addStep({
    id: "GuideMeWhatsOnNewRIBCreditCardPage_3",
    title: "3/8",
    text: "Find your cards' basic details and balances here. You could also pay your credit cards bill, and set up auto payments. <br /><br />",
    attachTo: {
      element: document.querySelector(".ccLeftWrapper"),
      on: "right",
    },
    buttons: [
      {
        text: "Next",
        action: GuideMeWhatsOnNewRIBCreditCardPage.next,
      },
      {
        text: "Back",
        action: GuideMeWhatsOnNewRIBCreditCardPage.back,
        secondary: true,
      },
    ],
    canClickTarget: false,
  });
  GuideMeWhatsOnNewRIBCreditCardPage.addStep({
    id: "GuideMeWhatsOnNewRIBCreditCardPage_4",
    title: "4/8",
    text: "This is your Card's analysis view. Here you can see your card's spendings, limits, and available credit limit, to plan your expenses better.",
    showOn: () => {
      // eslint-disable-next-line prettier/prettier
      const toShowOrNotCheck = document.querySelectorAll(".cardAnalysis").length > 0
      return toShowOrNotCheck;
    },
    attachTo: {
      element: document.querySelectorAll(".cardAnalysis")[0],
      on: "left",
    },
    buttons: [
      {
        text: "Next",
        action: GuideMeWhatsOnNewRIBCreditCardPage.next,
      },
      {
        text: "Back",
        action: GuideMeWhatsOnNewRIBCreditCardPage.back,
        secondary: true,
      },
    ],
    canClickTarget: false,
  });
  GuideMeWhatsOnNewRIBCreditCardPage.addStep({
    id: "GuideMeWhatsOnNewRIBCreditCardPage_5",
    title: "5/8",
    canClickTarget: false,
    showOn: () => {
      // eslint-disable-next-line prettier/prettier
      const toShowOrNotCheck = document.querySelectorAll(".cardAnalysis").length > 0
      return toShowOrNotCheck;
    },
    text: "This section gives you multiple options for hassle-free management of your Credit Cards, just with one single click.",
    attachTo: {
      element: document.querySelector("#cardManageYourCard"),
      on: "left",
    },
    buttons: [
      {
        text: "Next",
        action: GuideMeWhatsOnNewRIBCreditCardPage.next,
      },
      {
        text: "Back",
        action: GuideMeWhatsOnNewRIBCreditCardPage.back,
        secondary: true,
      },
    ],
  });
  GuideMeWhatsOnNewRIBCreditCardPage.addStep({
    id: "GuideMeWhatsOnNewRIBCreditCardPage_6",
    title: "6/8",
    canClickTarget: false,
    showOn: () => {
      // eslint-disable-next-line prettier/prettier
      const toShowOrNotCheck = document.querySelectorAll(".cardAnalysis").length > 0
      return toShowOrNotCheck;
    },
    text: "Explore all your current and past Credit Card statements and EMI details for seamless analysis of your expenses.",
    attachTo: {
      element: document.querySelector("#cardStatementTrackerCard"),
      on: "right",
    },
    buttons: [
      {
        text: "Next",
        action: GuideMeWhatsOnNewRIBCreditCardPage.next,
      },
      {
        text: "Back",
        action: GuideMeWhatsOnNewRIBCreditCardPage.back,
        secondary: true,
      },
    ],
  });
  GuideMeWhatsOnNewRIBCreditCardPage.addStep({
    id: "GuideMeWhatsOnNewRIBCreditCardPage_7",
    title: "7/8",
    canClickTarget: false,
    text: "Check out our exclusive offers for you here.",
    showOn: () => {
      // eslint-disable-next-line prettier/prettier
      const toShowOrNotCheck = document.querySelectorAll(".cardAnalysis").length > 0
      return toShowOrNotCheck;
    },
    attachTo: {
      element: document.querySelector("#cardUserOffersCard"),
      on: "left",
    },
    buttons: [
      {
        text: "Next",
        action: GuideMeWhatsOnNewRIBCreditCardPage.next,
      },
      {
        text: "Back",
        action: GuideMeWhatsOnNewRIBCreditCardPage.back,
        secondary: true,
      },
    ],
  });
  // eslint-disable-next-line max-lines
  GuideMeWhatsOnNewRIBCreditCardPage.addStep({
    id: "GuideMeWhatsOnNewRIBCreditCardPage_9",
    title: "8/8",
    canClickTarget: false,
    text: "You are all set to enjoy the new ICICI Bank Online experience. <br /><br />Take the Guided Tour again in case you need more assistance.",
    buttons: [
      {
        text: "Complete",
        action: GuideMeWhatsOnNewRIBCreditCardPage.complete,
      },
      {
        text: "Back",
        action: GuideMeWhatsOnNewRIBCreditCardPage.back,
        secondary: true,
      },
    ],
  });
  GuideMeWhatsOnNewRIBCreditCardPage.start();
};

// eslint-disable-next-line no-undef, no-unused-vars
var NewRIBDepositsPage = () => {
  // eslint-disable-next-line no-undef
  var GuideMeWhatsOnNewRIBDepositsPage = new Shepherd.Tour({
    tourName: "Guide Me: What's on new Deposits page",
    instanceCaller: "GuideMeWhatsOnNewRIBDepositsPage",
    defaultStepOptions: {
      cancelIcon: {
        enabled: true,
      },
      scrollTo: {
        behavior: "smooth",
        block: "center",
      },
      arrow: true,
    },
    useModalOverlay: true,
    exitOnEsc: true,
    keyboardnavigation: true,
  });
  GuideMeWhatsOnNewRIBDepositsPage.addStep({
    id: "GuideMeWhatsOnNewRIBDepositsPage_start",
    title: "1/8",
    canClickTarget: false,
    text: `<div>Introducing our newly designed navigation wheel for Fund Transfers.<ul><li>Click on 'Deposits' to see its sub-sections.</li>
      <li>Click the '<' button in the center of the navigation menu to close the option.</li></ul><div style="text-align: center;"><img src="https://cdn.jsdelivr.net/gh/canaryGrapher/ScoutSherpa@newRIB/tours/images/navigationDeposits.gif" height="200" alt="Animation showing use of new ICICI website dialer" style="object-fit: contain;margin-top:10px;" crossorigin="anonymous" /></div></div>
        `,
    attachTo: {
      element: document.querySelector(".dailermainwrapper"),
      on: "right",
    },
    buttons: [
      {
        text: "Next",
        action: GuideMeWhatsOnNewRIBDepositsPage.next,
      },
      {
        text: "Cancel",
        action: GuideMeWhatsOnNewRIBDepositsPage.cancel,
        secondary: true,
      },
    ],
  });
  GuideMeWhatsOnNewRIBDepositsPage.addStep({
    id: "GuideMeWhatsOnNewRIBDepositsPage_2a",
    title: "2/3",
    canClickTarget: false,
    text: `<div>Want to check your Recurring Deposits or iWish deposits? Use these tabs.<div style="text-align: center;"><img src="https://cdn.jsdelivr.net/gh/canaryGrapher/ScoutSherpa@newRIB/tours/images/depositBar.gif" height="200" alt="Animation showing use of new ICICI website dialer" style="object-fit: contain;margin-top:10px;" crossorigin="anonymous" /></div></div>`,
    attachTo: {
      element: document.querySelector(".tabbar"),
      on: "bottom",
    },
    showOn: () => {
      let contentFound = document.querySelectorAll(".sendMoney").length;
      return contentFound > 0 ? false : true;
    },
    buttons: [
      {
        text: "Next",
        action: GuideMeWhatsOnNewRIBDepositsPage.next,
      },
      {
        text: "Back",
        action: GuideMeWhatsOnNewRIBDepositsPage.back,
        secondary: true,
      },
    ],
  });
  GuideMeWhatsOnNewRIBDepositsPage.addStep({
    id: "GuideMeWhatsOnNewRIBDepositsPage_3a",
    title: "3/3",
    canClickTarget: false,
    text: `Looks like you do not have any deposits. Come back to this journey when you open a FD.`,
    showOn: () => {
      let contentFound = document.querySelectorAll(".sendMoney").length;
      return contentFound > 0 ? false : true;
    },
    buttons: [
      {
        text: "Complete",
        action: GuideMeWhatsOnNewRIBDepositsPage.complete,
      },
      {
        text: "Back",
        action: GuideMeWhatsOnNewRIBDepositsPage.back,
        secondary: true,
      },
    ],
  });
  GuideMeWhatsOnNewRIBDepositsPage.addStep({
    id: "GuideMeWhatsOnNewRIBDepositsPage_2",
    title: "2/8",
    canClickTarget: false,
    text: `Want to open a Fixed Deposits? Click here.`,
    attachTo: {
      element: document.querySelector(".sendMoney"),
      on: "bottom",
    },
    buttons: [
      {
        text: "Next",
        action: GuideMeWhatsOnNewRIBDepositsPage.next,
      },
      {
        text: "Back",
        action: GuideMeWhatsOnNewRIBDepositsPage.back,
        secondary: true,
      },
    ],
  });
  GuideMeWhatsOnNewRIBDepositsPage.addStep({
    id: "GuideMeWhatsOnNewRIBDepositsPage_3",
    title: "3/8",
    canClickTarget: false,
    text: `You can use these options to manage your Fixed and Recurring deposits.`,
    attachTo: {
      element: document.querySelector(".manageDeposit"),
      on: "left",
    },
    buttons: [
      {
        text: "Next",
        action: GuideMeWhatsOnNewRIBDepositsPage.next,
      },
      {
        text: "Back",
        action: GuideMeWhatsOnNewRIBDepositsPage.back,
        secondary: true,
      },
    ],
  });
  GuideMeWhatsOnNewRIBDepositsPage.addStep({
    id: "GuideMeWhatsOnNewRIBDepositsPage_4",
    title: "4/8",
    canClickTarget: false,
    text: `You can view all your Deposit accounts here. Click on "VIEW ALL DEPOSITS" to view more accounts.`,
    attachTo: {
      element: document.querySelector(".all-deposits"),
      on: "right",
    },
    buttons: [
      {
        text: "Next",
        action: GuideMeWhatsOnNewRIBDepositsPage.next,
      },
      {
        text: "Back",
        action: GuideMeWhatsOnNewRIBDepositsPage.back,
        secondary: true,
      },
    ],
  });
  GuideMeWhatsOnNewRIBDepositsPage.addStep({
    id: "GuideMeWhatsOnNewRIBDepositsPage_5",
    title: "5/8",
    canClickTarget: false,
    text: `<div>These buttons can help you with various forms for your FDs:
        <ol>
          <li><strong>INTEREST AND TDS CERTIFICATE</strong>: Interest and TDS certificates for your savings bank account can be downloaded from here.</li>
          <li><strong>FORM 15G/H</strong>: If you have FD interest income of more than 50K, apply for form 15G/H here.</li>
        </ol>
    </div>`,
    attachTo: {
      element: document.querySelector(
        "body > app-root > div.main > div > div > div.page-content.login > div.container.g-0.dark-theme-border > div > app-deposit > div > div > div > div.col-12.pt-0.ps-0.ng-star-inserted > app-deposit-taxsaver-landing > div > div > div > div > div.right-section.ng-star-inserted > div.d-flex.top-buttons.mb-4",
      ),
      on: "bottom",
    },
    buttons: [
      {
        text: "Next",
        action: GuideMeWhatsOnNewRIBDepositsPage.next,
      },
      {
        text: "Back",
        action: GuideMeWhatsOnNewRIBDepositsPage.back,
        secondary: true,
      },
    ],
  });
  GuideMeWhatsOnNewRIBDepositsPage.addStep({
    id: "GuideMeWhatsOnNewRIBDepositsPage_6",
    title: "6/8",
    canClickTarget: false,
    text: `<div>Want to check your Recurring Deposits or iWish deposits? Use these tabs.<div style="text-align: center;"><img src="https://cdn.jsdelivr.net/gh/canaryGrapher/ScoutSherpa@newRIB/tours/images/depositBar.gif" height="200" alt="Animation showing use of new ICICI website dialer" style="object-fit: contain;margin-top:10px;" crossorigin="anonymous" /></div></div>`,
    attachTo: {
      element: document.querySelector(".tabbar"),
      on: "bottom",
    },
    buttons: [
      {
        text: "Next",
        action: GuideMeWhatsOnNewRIBDepositsPage.next,
      },
      {
        text: "Back",
        action: GuideMeWhatsOnNewRIBDepositsPage.back,
        secondary: true,
      },
    ],
  });
  GuideMeWhatsOnNewRIBDepositsPage.addStep({
    id: "GuideMeWhatsOnNewRIBDepositsPage_7",
    title: "7/8",
    canClickTarget: false,
    text: `Check out our exclusive offers for you here.`,
    attachTo: {
      element: document.querySelector("app-deposit-offers"),
      on: "left",
    },
    buttons: [
      {
        text: "Next",
        action: GuideMeWhatsOnNewRIBDepositsPage.next,
      },
      {
        text: "Back",
        action: GuideMeWhatsOnNewRIBDepositsPage.back,
        secondary: true,
      },
    ],
  });
  GuideMeWhatsOnNewRIBDepositsPage.addStep({
    id: "GuideMeWhatsOnNewRIBDepositsPage_8",
    title: "8/8",
    canClickTarget: false,
    text: `You are all set to enjoy the new ICICI Bank Online experience.<br />Take the Guided Tour again in case you need more assistance.`,
    buttons: [
      {
        text: "Complete",
        action: GuideMeWhatsOnNewRIBDepositsPage.complete,
      },
      {
        text: "Back",
        action: GuideMeWhatsOnNewRIBDepositsPage.back,
        secondary: true,
      },
    ],
  });
  GuideMeWhatsOnNewRIBDepositsPage.start();
};

// eslint-disable-next-line no-unused-vars
var NewRIBAccountsPage = () => {
  // eslint-disable-next-line no-undef, no-unused-vars
  var GuideMeWhatsOnNewRIBBankAccountsPage = new Shepherd.Tour({
    tourName: "Guide Me: What's on new Bank Account page",
    instanceCaller: "GuideMeWhatsOnNewRIBBankAccountsPage",
    defaultStepOptions: {
      cancelIcon: {
        enabled: true,
      },
      scrollTo: {
        behavior: "smooth",
        block: "center",
      },
      arrow: true,
    },
    useModalOverlay: true,
    exitOnEsc: true,
    keyboardnavigation: true,
  });
  GuideMeWhatsOnNewRIBBankAccountsPage.addStep({
    id: "GuideMeWhatsOnNewRIBBankAccountsPage_1",
    title: "1/14",
    canClickTarget: false,
    text: `<div>"Here is our new navigation wheel for easy access to your Bank Accounts.<ul><li>Click on <strong>Accounts</strong> to check your bank accounts.</li><li>To close the option, click the < button in the center.</li></ul><div style="text-align: center;"><img src="https://cdn.jsdelivr.net/gh/canaryGrapher/ScoutSherpa@newRIB/tours/images/navigationAccounts.gif" height="200" alt="Animation showing use of new ICICI website dialer" style="object-fit: contain;margin-top:10px;" crossorigin="anonymous" /></div></div>
        `,
    attachTo: {
      element: document.querySelector(".dailermainwrapper"),
      on: "right",
    },
    buttons: [
      {
        text: "Next",
        action: GuideMeWhatsOnNewRIBBankAccountsPage.next,
      },
      {
        text: "Cancel",
        action: GuideMeWhatsOnNewRIBBankAccountsPage.cancel,
        secondary: true,
      },
    ],
  });
  GuideMeWhatsOnNewRIBBankAccountsPage.addStep({
    id: "GuideMeWhatsOnNewRIBBankAccountsPage_2",
    title: "2/14",
    canClickTarget: false,
    text: `<div>Find all your accounts grouped under savings, current, and overdraft account categories.<div style="text-align: center;"><img src="https://cdn.jsdelivr.net/gh/canaryGrapher/ScoutSherpa@newRIB/tours/images/accountsBar.gif" alt="Animation showing use of new ICICI website dialer" style="object-fit: contain;margin-top:10px;" crossorigin="anonymous" width="100%" /></div></div>`,
    attachTo: {
      element: document.querySelector("#bankAccountsTypeSwitcher"),
      on: "bottom",
    },
    showOn: () => {
      const element = document.querySelector("#bankAccountsTypeSwitcher");
      return element ? true : false;
    },
    buttons: [
      {
        text: "Next",
        action: GuideMeWhatsOnNewRIBBankAccountsPage.next,
      },
      {
        text: "Back",
        action: GuideMeWhatsOnNewRIBBankAccountsPage.back,
        secondary: true,
      },
    ],
  });
  GuideMeWhatsOnNewRIBBankAccountsPage.addStep({
    id: "GuideMeWhatsOnNewRIBBankAccountsPage_3",
    title: "3/14",
    canClickTarget: false,
    text: `<div>Toggle between your bank accounts here, to view their details.<div style="text-align: center;"><img src="https://cdn.jsdelivr.net/gh/canaryGrapher/ScoutSherpa@newRIB/tours/images/sbBar.gif" width="100%" alt="Animation showing use of new ICICI website dialer" style="object-fit: contain;margin-top:10px;" crossorigin="anonymous" /></div></div>`,
    attachTo: {
      element: document.querySelector("#bankAccountsSwitcher"),
      on: "bottom",
    },
    buttons: [
      {
        text: "Next",
        action: GuideMeWhatsOnNewRIBBankAccountsPage.next,
      },
      {
        text: "Back",
        action: GuideMeWhatsOnNewRIBBankAccountsPage.back,
        secondary: true,
      },
    ],
  });
  GuideMeWhatsOnNewRIBBankAccountsPage.addStep({
    id: "GuideMeWhatsOnNewRIBBankAccountsPage_4",
    title: "4/14",
    canClickTarget: false,
    text: `
    <div><ul><li>Select Savings Account to view the selected account's balance, along with all savings accounts.</li><li>Select Overdraft Account to view amount utilized so far.</li></ul><div style="text-align: center;"><img src="https://cdn.jsdelivr.net/gh/canaryGrapher/ScoutSherpa@newRIB/tours/images/balancesBankAccounts.gif" alt="Animation showing use of new ICICI website dialer" style="object-fit: contain;margin-top:10px;" crossorigin="anonymous" width="100%" /></div></div>`,
    attachTo: {
      element: document.querySelector("#bankAccountsBalancesWidget"),
      on: "right",
    },
    buttons: [
      {
        text: "Next",
        action: GuideMeWhatsOnNewRIBBankAccountsPage.next,
      },
      {
        text: "Back",
        action: GuideMeWhatsOnNewRIBBankAccountsPage.back,
        secondary: true,
      },
    ],
  });
  GuideMeWhatsOnNewRIBBankAccountsPage.addStep({
    id: "GuideMeWhatsOnNewRIBBankAccountsPage_5",
    title: "5/14",
    canClickTarget: false,
    text: `<ul><li>Click on "Add Funds" to add money to your savings account through UPI</li><li>Click on "View Statement" to view your Account Statement.</li></ul>`,
    attachTo: {
      element: document.querySelector("#bankAccountsFundStatementActionArea"),
      on: "right",
    },
    buttons: [
      {
        text: "Next",
        action: GuideMeWhatsOnNewRIBBankAccountsPage.next,
      },
      {
        text: "Back",
        action: GuideMeWhatsOnNewRIBBankAccountsPage.back,
        secondary: true,
      },
    ],
  });
  GuideMeWhatsOnNewRIBBankAccountsPage.addStep({
    id: "GuideMeWhatsOnNewRIBBankAccountsPage_6",
    title: "6/14",
    canClickTarget: false,
    text: `<div><ul><li>Select Overdraft Account and then click "Pay Now" to settle the utilized amount, through your savings or overdraft account.</li></ul><div style="text-align: center;"><img src="https://cdn.jsdelivr.net/gh/canaryGrapher/ScoutSherpa@newRIB/tours/images/buttonDetailsBankAccounts.gif" alt="Animation showing use of new ICICI website dialer" style="object-fit: contain;margin-top:10px;" crossorigin="anonymous" width="100%" /></div></div>`,
    attachTo: {
      element: document.querySelector("#bankAccountsFundStatementActionArea"),
      on: "right",
    },
    buttons: [
      {
        text: "Next",
        action: GuideMeWhatsOnNewRIBBankAccountsPage.next,
      },
      {
        text: "Back",
        action: GuideMeWhatsOnNewRIBBankAccountsPage.back,
        secondary: true,
      },
    ],
  });
  GuideMeWhatsOnNewRIBBankAccountsPage.addStep({
    id: "GuideMeWhatsOnNewRIBBankAccountsPage_7",
    title: "7/14",
    canClickTarget: false,
    text: `View the details of your selected account here.`,
    attachTo: {
      element: document.querySelector(".#bankAccountsInformationAboutAccount"),
      on: "right",
    },
    buttons: [
      {
        text: "Next",
        action: GuideMeWhatsOnNewRIBBankAccountsPage.next,
      },
      {
        text: "Back",
        action: GuideMeWhatsOnNewRIBBankAccountsPage.back,
        secondary: true,
      },
    ],
  });
  GuideMeWhatsOnNewRIBBankAccountsPage.addStep({
    id: "GuideMeWhatsOnNewRIBBankAccountsPage_8",
    title: "8/14",
    canClickTarget: false,
    text: `Click on "View Account Details" to get more information about your account.`,
    showOn: () => {
      const element = document.querySelector(
        "#bankAccountsViewAccountDetailsCTA",
      );
      return element ? true : false;
    },
    attachTo: {
      element: document.querySelector("#bankAccountsViewAccountDetailsCTA"),
      on: "right",
    },
    buttons: [
      {
        text: "Next",
        action: GuideMeWhatsOnNewRIBBankAccountsPage.next,
      },
      {
        text: "Back",
        action: GuideMeWhatsOnNewRIBBankAccountsPage.back,
        secondary: true,
      },
    ],
  });
  GuideMeWhatsOnNewRIBBankAccountsPage.addStep({
    id: "GuideMeWhatsOnNewRIBBankAccountsPage_9",
    title: "9/14",
    canClickTarget: false,
    text: `Check reward points collected by you in savings account and redeem them easily here.`,
    showOn: () => {
      const element = document.querySelector("#bankAccountsRedeemRewardsCTA");
      return element ? true : false;
    },
    attachTo: {
      element: document.querySelector("#bankAccountsRedeemRewardsCTA"),
      on: "bottom",
    },
    buttons: [
      {
        text: "Next",
        action: GuideMeWhatsOnNewRIBBankAccountsPage.next,
      },
      {
        text: "Back",
        action: GuideMeWhatsOnNewRIBBankAccountsPage.back,
        secondary: true,
      },
    ],
  });
  GuideMeWhatsOnNewRIBBankAccountsPage.addStep({
    id: "GuideMeWhatsOnNewRIBBankAccountsPage_10",
    title: "10/14",
    canClickTarget: false,
    text: `View your Debit Card details here, based on the account selected.`,
    showOn: () => {
      const element = document.querySelector("#bankAccountsDebitCardArea");
      return element ? true : false;
    },
    attachTo: {
      element: document.querySelector("#bankAccountsDebitCardArea"),
      on: "left",
    },
    buttons: [
      {
        text: "Next",
        action: GuideMeWhatsOnNewRIBBankAccountsPage.next,
      },
      {
        text: "Back",
        action: GuideMeWhatsOnNewRIBBankAccountsPage.back,
        secondary: true,
      },
    ],
  });
  GuideMeWhatsOnNewRIBBankAccountsPage.addStep({
    id: "GuideMeWhatsOnNewRIBBankAccountsPage_11",
    title: "11/14",
    canClickTarget: false,
    text: `Manage your Debit Card easily using these services here.`,
    showOn: () => {
      const element = document.querySelector("#bankAccountsManageDebitArea");
      return element ? true : false;
    },
    attachTo: {
      element: document.querySelector("#bankAccountsManageDebitArea"),
      on: "left",
    },
    buttons: [
      {
        text: "Next",
        action: GuideMeWhatsOnNewRIBBankAccountsPage.next,
      },
      {
        text: "Back",
        action: GuideMeWhatsOnNewRIBBankAccountsPage.back,
        secondary: true,
      },
    ],
  });
  GuideMeWhatsOnNewRIBBankAccountsPage.addStep({
    id: "GuideMeWhatsOnNewRIBBankAccountsPage_12",
    title: "12/14",
    canClickTarget: false,
    showOn: () => {
      const element = document.querySelector("#bankAccountsServiceRequestCTA");
      return element ? true : false;
    },
    text: `Click on Service Request to manage your savings account.`,
    attachTo: {
      element: document.querySelector("#bankAccountsServiceRequestCTA"),
      on: "left",
    },
    buttons: [
      {
        text: "Next",
        action: GuideMeWhatsOnNewRIBBankAccountsPage.next,
      },
      {
        text: "Back",
        action: GuideMeWhatsOnNewRIBBankAccountsPage.back,
        secondary: true,
      },
    ],
  });
  GuideMeWhatsOnNewRIBBankAccountsPage.addStep({
    id: "GuideMeWhatsOnNewRIBBankAccountsPage_13",
    title: "13/14",
    canClickTarget: false,
    text: `Check out exciting offers curated exclusively for you here.`,
    attachTo: {
      element: document.querySelector("#bankAccountsOfferArea"),
      on: "left",
    },
    buttons: [
      {
        text: "Next",
        action: GuideMeWhatsOnNewRIBBankAccountsPage.next,
      },
      {
        text: "Back",
        action: GuideMeWhatsOnNewRIBBankAccountsPage.back,
        secondary: true,
      },
    ],
  });
  GuideMeWhatsOnNewRIBBankAccountsPage.addStep({
    id: "GuideMeWhatsOnNewRIBBankAccountsPage_14",
    title: "14/14",
    canClickTarget: false,
    text: `You are all set to enjoy the new ICICI Bank Account page experience. Take the Guided Tour again if you need more assistance.`,
    buttons: [
      {
        text: "Complete",
        action: GuideMeWhatsOnNewRIBBankAccountsPage.next,
      },
      {
        text: "Back",
        action: GuideMeWhatsOnNewRIBBankAccountsPage.back,
        secondary: true,
      },
    ],
  });
  GuideMeWhatsOnNewRIBBankAccountsPage.start();
};
