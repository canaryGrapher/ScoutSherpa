/* eslint-disable max-lines */
// Last update: March 6, 2024
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
    text: `<div>Use our new navigation dialer to access our services menu. Click on any service to access the solutions under it. To return to main service menu, click on the back button at the center of the dialer. <div style="text-align: center;"><img src="https://cdn.jsdelivr.net/gh/canaryGrapher/ScoutSherpa@newRIB/tours/images/navigation.gif" height="200" alt="Animation showing use of new ICICI website dialer" style="object-fit: contain;margin-top:10px;" crossorigin="anonymous" /></div></div>
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
  GuideMeWhatsOnNewRIBFundTransferPage();
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
    text: `<div>TUse our new navigation dialer to access our services menu. Click on any service to access the solutions under it. To return to main service menu, click on the back button at the center of the dialer.<div style="text-align: center;"><img src="https://cdn.jsdelivr.net/gh/canaryGrapher/ScoutSherpa@newRIB/tours/images/navigation.gif" height="200" alt="Animation showing use of new ICICI website dialer" style="object-fit: contain;margin-top:10px;" crossorigin="anonymous" /></div></div>
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
    title: "1/8",
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
    text: `<div>AView all your ICICI Bank and other Bank Credit Cards here on the horizontal tabs. Your connected cards are listed under the tabs with numbered badges. <div style="text-align: center;"><img src="https://cdn.jsdelivr.net/gh/canaryGrapher/ScoutSherpa@newRIB/tours/images/cardBar.gif" width="350" alt="Animation showing connected cards dropdown" style="object-fit: contain;" crossorigin="anonymous" /></div></div>
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
    text: "Here, you can find your cards' basic details and balances. You could also pay your credit cards bill by clicking on Pay Now, and set up auto payments for your bills. <br /> <br />For 4+ Cards, you could see their information in the drowndown, by clicking on the card button.",
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
    text: "This section gives you multiple options for hassle-free management of your Credit Card, just with one single click.",
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
    text: "Want to check where you spent using your card recently? Explore all your current and past Credit Card statements and EMI details in this section, for seamless analysis and planning for your expenses.",
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
    text: "Check out our exclusive offers for you here. Click on the offers section to view attractive offers on our products and solutions.",
    showOn: () => {
      // eslint-disable-next-line prettier/prettier
      const toShowOrNotCheck = document.querySelectorAll(".cardAnalysis").length > 0
      return toShowOrNotCheck;
    },
    attachTo: {
      element: document.querySelector(
        // eslint-disable-next-line prettier/prettier
        "body > app-root > div.main > div > div > div.page-content.login > div.container.g-0.dark-theme-border > div > app-credit-card-main > div > div.col-12.side-paddings.newLanding.ng-star-inserted > div.ccRightWrapper.ng-star-inserted > div > app-loan-cc > swiper-container"),
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
    text: "You are all set to enjoy the new ICICI Bank Online experience. Take the Guided Tour again in case you need more assistance.",
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
