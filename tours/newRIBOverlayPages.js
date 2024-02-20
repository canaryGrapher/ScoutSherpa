const NewRIBCreditCardPage = () => {
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
    });
    GuideMeWhatsOnNewRIBCreditCardPage.addStep({
        id: "GuideMeWhatsOnNewRIBCreditCardPage_1",
        title: "1/5",
        text: "These are your card's basic information. You can see balances on your card, your card's CVV, expiry month and year, and even setup auto payment for your bill due amount.",
        attachTo: {
            element: document.querySelector(
                "body > app-root > div.main > div > div > div.page-content.login > div > div > app-credit-card-main > div > div.col-12.side-paddings.newLanding.ng-star-inserted > div.cc_type.ng-star-inserted > app-cc-type > div > div > div:nth-child(1)"),
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
    })
    GuideMeWhatsOnNewRIBCreditCardPage.addStep({
        id: "GuideMeWhatsOnNewRIBCreditCardPage_2",
        title: "2/5",
        text: "Want to know where you spent using your card recently? You can view your current as well as past statements in this section.",
        attachTo: {
            element: document.querySelector(
                "body > app-root > div.main > div > div > div.page-content.login > div > div > app-credit-card-main > div > div.col-12.side-paddings.newLanding.ng-star-inserted > div.cc_type.ng-star-inserted > app-cc-information"
            ),
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
    })
    GuideMeWhatsOnNewRIBCreditCardPage.addStep({
        id: "GuideMeWhatsOnNewRIBCreditCardPage_3",
        title: "3/5",
        text: "Want your statement in PDF or XLS format? Use these buttons to export in your desired format. ",
        attachTo: {
            element: document.querySelector(
                "body > app-root > div.main > div > div > div.page-content.login > div > div > app-credit-card-main > div > div.col-12.side-paddings.newLanding.ng-star-inserted > div.cc_type.ng-star-inserted > app-cc-information > div.statementsRow.ng-tns-c176-8 > div"
            ),
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
    }),
        GuideMeWhatsOnNewRIBCreditCardPage.addStep({
            id: "GuideMeWhatsOnNewRIBCreditCardPage_4",
            title: "4/5",
            text: "This is your card's analysis view. View your spendings, limits, and available credit limit here.",
            attachTo: {
                element: document.querySelector(
                    "body > app-root > div.main > div > div > div.page-content.login > div > div > app-credit-card-main > div > div.col-12.side-paddings.newLanding.ng-star-inserted > div.ccRightWrapper.ng-star-inserted > cards-container > div.cardsContainer.ng-star-inserted > div > card-analysis"
                ),
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
        }),
        GuideMeWhatsOnNewRIBCreditCardPage.addStep({
            id: "GuideMeWhatsOnNewRIBCreditCardPage_5",
            title: "5/5",
            text: "That's all for this guide. Feel free to watch it again any time you are stuck.",
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
        })

    GuideMeWhatsOnNewRIBCreditCardPage.start()
}