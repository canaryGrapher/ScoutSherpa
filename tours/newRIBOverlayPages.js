/* eslint-disable max-lines */
// Last update: June 4, 2024
// updated content for fund transfer
// update 8: Added overlays for fund transfer
// update 7: Changed content as per v5 of document (bug fix +1)
// update 6: Changed content as per V2 of document
// update 5: Changed content for overlays
// update 4: Changed size of dialer gif
// update 3: Added step for dialer explanation
// update 2: Added conditions for non-target pages
// update 1: Final update as per department review

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
      <li>To close the option, click the '<' button in the center.</li></ul><div style="text-align: center;"><img src="https://cdn.jsdelivr.net/gh/canaryGrapher/ScoutSherpa@newRIB/tours/images/navigation.gif" height="200" alt="Animation showing use of new ICICI website dialer" style="object-fit: contain;margin-top:10px;" crossorigin="anonymous" /></div></div>
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
      element: document.querySelector(".dailermainwrapper"),
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
      element: document.querySelector(".pill-container"),
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
      element: document.querySelector(".rewardPointInManageCards"),
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
      element: document.querySelector(".statementContainer"),
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
      element: document.querySelector("app-loan-cc"),
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
    id: "GuideMeWhatsOnNewRIBCreditCardPage_4a",
    title: "4/8",
    canClickTarget: false,
    text: "Apply for an ICICIC Bank Credit card.",
    showOn: () => {
      // eslint-disable-next-line prettier/prettier
      const toShowOrNotCheck = document.querySelectorAll(".cardAnalysis").length == 0
      return toShowOrNotCheck;
    },
    attachTo: {
      element: document.querySelectorAll(".carausel-data")[0],
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
    id: "GuideMeWhatsOnNewRIBCreditCardPage_4b",
    title: "5/8",
    canClickTarget: false,
    text: "You can add other bank credit cards here.",
    showOn: () => {
      // eslint-disable-next-line prettier/prettier
      const toShowOrNotCheck = document.querySelectorAll(".cardAnalysis").length == 0
      return toShowOrNotCheck;
    },
    attachTo: {
      element: document.querySelectorAll(".apply")[1],
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
