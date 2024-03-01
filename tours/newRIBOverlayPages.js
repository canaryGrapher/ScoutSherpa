// Last update: March 1, 2024
// Update 1: Final update as per department review

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
        id: "GuideMeWhatsOnNewRIBCreditCardPage_0",
        title: "1/1",
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
        id: "GuideMeWhatsOnNewRIBCreditCardPage_1",
        title: "1/8",
        canClickTarget: false,
        text: `<div>All your ICICI, co-brand, and other bank credit cards are visible on the tabs horizontally, and your connected cards can be viewed under the tabs that have badges with numbers.  <div style="text-align: center;"><img src="https://cdn.jsdelivr.net/gh/canaryGrapher/ScoutSherpa@newRIB/tours/images/connectedCards.gif" width="350" alt="Animation showing connected cards dropdown" style="object-fit: contain;" crossorigin="anonymous" /></div></div>
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
                text: "Cancel",
                action: GuideMeWhatsOnNewRIBCreditCardPage.cancel,
                secondary: true,
            },
        ],
    });
    GuideMeWhatsOnNewRIBCreditCardPage.addStep({
        id: "GuideMeWhatsOnNewRIBCreditCardPage_2",
        title: "2/8",
        canClickTarget: false,
        text: `<div>If you have more than three credit card accounts (including other bank credit cards), they are pushed into the dropdown at the right of this bar. Clicking on the card button will move it to the main bar and show the details.<div style="text-align: center;"><img src="https://cdn.jsdelivr.net/gh/canaryGrapher/ScoutSherpa@newRIB/tours/images/moreCards.gif" width="350" alt="Animation showing how to view more than three cards" style="object-fit: contain;" crossorigin="anonymous" /></div></div>`,
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
    GuideMeWhatsOnNewRIBCreditCardPage.addStep({
        id: "GuideMeWhatsOnNewRIBCreditCardPage_3",
        title: "3/8",
        text: "These are your card's basic information. You can see balances on your card, your card's CVV, expiry month and year, and even setup auto payment for your bill due amount. If you wish to pay your credit card bill right now, click on <strong>Pay Now</strong>.",
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
        text: "This is your card's analysis view. View your spendings, limits, and available credit limit here.",
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
        text: "You can use <strong>MANAGE YOUR CREDIT CARD</strong> button to view various options for management of your card.",
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
        text: "Want to know where you spent using your card recently? You can view your current, past as well as EMI details from this section.",
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
        text: "These are offers available exclusively for you.",
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
        id: "GuideMeWhatsOnNewRIBCreditCardPage_8",
        title: "8/8",
        canClickTarget: false,
        when: {
            complete: () => addAndRemoveGlow()
        },
        text: "That concludes the guide. Feel free to watch it again any time you are stuck.",
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