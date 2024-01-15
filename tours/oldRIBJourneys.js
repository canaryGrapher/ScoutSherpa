// This file contains all the Guided journeys for RIB
// oldRIBJourneys.js
/* eslint-disable prettier/prettier */
/* eslint-disable max-lines */

// journeys created
// 1 - How to buy a mutual fund
// 2 - How to Pay ICICI Credit card bill
// 3 - How to buy ICICI FasTag
// 4 - transfer funds
// 5 - Know about various ICICI Bank pre-approved loans offer
// 6 - do a premature closure of FD
// 7 - Apply for an ICICI Bank Credit card

// journeys to be created
// 4 - How to view personal loan account statement
// 5 - How to update my PAN details in savings accounts


// eslint-disable-next-line no-undef
const HowToBuyAFastTagTour = new window.Shepherd.Tour({
    tourName: 'How to buy a ICICI FastTag',
    instanceCaller: 'HowToBuyAFastTagTour',
    defaultStepOptions: {
        cancelIcon: {
            enabled: true
        },
        scrollTo: {
            behavior: 'smooth',
            block: 'center'
        },
        arrow: true
    },
    useModalOverlay: false
});

// Select the 'PAYMENTS & TRANSFER' button on the menubar on dashboard
HowToBuyAFastTagTour.addStep({
    id: 'HowToBuyAFastTagTour_1',
    title: '1/3',
    text: "Move your mouse over 'PAYMENTS & TRANSFER",
    attachTo: {
        element: "#topbar > div.light-orange > div > div:nth-child(3)",
        on: 'right'
    },
    advanceOn: {
        selector: "#topbar > div.light-orange > div > div:nth-child(3)",
        event: 'mouseover'
    },
    pageLink: '/vpv/li/personal-banking/dashboardPage'
});

// Select the 'Buy/Recharge FastTag' sub-link under 'Payment & Transfer' link
HowToBuyAFastTagTour.addStep({
    id: 'HowToBuyAFastTagTour_2',
    title: '2/3',
    text: "Click on 'Buy/Recharge FastTag'",
    attachTo: {
        element:
            "#topbar > div.light-orange > div > div:nth-child(3) > div > div > div:nth-child(1) > a:has([src*='topMenuImages/RTXNS/FASTAG.svg'])",
        on: 'left'
    },
    advanceOn: {
        selector:
            "#topbar > div.light-orange > div > div:nth-child(3) > div > div > div:nth-child(1) > a:has([src*='topMenuImages/RTXNS/FASTAG.svg'])",
        event: 'click'
    },
    pageLink: '/vpv/li/personal-banking/dashboardPage'
});

HowToBuyAFastTagTour.addStep({
    id: 'HowToBuyAFastTagTour_2b',
    title: '2b/3',
    text: 'Click on the PURCHASE tab.',
    attachTo: {
        element: '#FastagRech\\.Rowset1 > ul > li:nth-child(1)',
        on: 'bottom'
    },
    showOn: function () {
        // if user already has a FasTag, website opens on the recharge page, this step asks the user to move to Buy tab. 
        const element = document.querySelector("#FastagRech\\.Rowset1 > ul > li:nth-child(2)")
        if (element) {
            return true
        }
        return false
    },
    advanceOn: {
        selector: '#FastagRech\\.Rowset1 > ul > li:nth-child(1)',
        event: 'click'
    },
    pageLink: '/vpv/li/personal-banking/FASTAG/TAGRECHARGE'
});

HowToBuyAFastTagTour.addStep({
    id: 'HowToBuyAFastTagTour_2b',
    title: '3/3',
    text: 'You can fill in your details here and apply for the FasTag.',
    buttons: [
        {
            text: 'Understood',
            action: HowToBuyAFastTagTour.complete
        },
        {
            text: 'Cancel',
            action: HowToBuyAFastTagTour.cancel,
            secondary: true
        }
    ],
    pageLink: "/VPV/LI/Exclusive Offerings/BuyFastag/Landingpage"
});

// eslint-disable-next-line no-undef
const HowToMakeICICIBankCreditCardPaymentTour = new window.Shepherd.Tour({
    tourName: "How to make ICICI bank credit card payment?",
    instanceCaller: "HowToMakeICICIBankCreditCardPaymentTour",
    defaultStepOptions: {
        cancelIcon: {
            enabled: true
        },
        scrollTo: {
            behavior: 'smooth',
            block: 'center'
        },
        arrow: true,
    },
    useModalOverlay: false,
});

// Select the credit card you want to pay bill for
HowToMakeICICIBankCreditCardPaymentTour.addStep({
    id: "HowToMakeICICIBankCreditCardPaymentTour_0",
    title: "1/1",
    text: "Looks like you do not have any credit card linked to your account. This feature is not available for you right now.",
    showOn: function () {
        const element = window.find("Apply from a range of credit cards")
        if (element) {
            return true
        }
        return false
    },
    buttons: [
        {
            text: 'Understood',
            action: HowToMakeICICIBankCreditCardPaymentTour.complete
        },
        {
            text: 'Cancel',
            action: HowToMakeICICIBankCreditCardPaymentTour.cancel,
            secondary: true
        }
    ],
    pageLink: "/vpv/li/personal-banking/dashboardPage"
})

// Select the 'Cards & Loans' button on the menubar on dashboard
HowToMakeICICIBankCreditCardPaymentTour.addStep({
    id: "HowToMakeICICIBankCreditCardPaymentTour_1",
    title: "1/5",
    text: "Move your mouse over 'Cards & Loans'",
    attachTo: {
        element: "#topbar > div.light-orange > div > div:nth-child(4)",
        on: "left"
    },
    advanceOn: {
        selector: '#topbar > div.light-orange > div > div:nth-child(4)',
        event: 'mouseover',
    },
    pageLink: "/vpv/li/personal-banking/dashboardPage"
})

// Select the 'Credit Cards' sub-link under 'Cards & Loans'
HowToMakeICICIBankCreditCardPaymentTour.addStep({
    id: "HowToMakeICICIBankCreditCardPaymentTour_2",
    title: "2/5",
    text: "Click on 'Credit Cards'",
    attachTo: {
        element: "#topbar > div.light-orange > div > div:nth-child(4) > div > div > div:nth-child(1) > a:has([src*='topMenuImages/CARDLN/RCCRDM.svg'])",
        on: "left"
    },
    advanceOn: {
        selector: "#topbar > div.light-orange > div > div:nth-child(4) > div > div > div:nth-child(1) > a:has([src*='topMenuImages/CARDLN/RCCRDM.svg'])",
        event: 'click',
    },
    pageLink: "/vpv/li/personal-banking/dashboardPage"
})

// Select the credit card you want to pay bill for
HowToMakeICICIBankCreditCardPaymentTour.addStep({
    id: "HowToMakeICICIBankCreditCardPaymentTour_3",
    title: "3/3",
    text: "Select the credit you want to make the payment for using the tab(s) on the top and click on 'Pay Bill' button to make the payment.",
    buttons: [
        {
            text: 'Understood',
            action: HowToMakeICICIBankCreditCardPaymentTour.complete
        },
        {
            text: 'Cancel',
            action: HowToMakeICICIBankCreditCardPaymentTour.cancel,
            secondary: true
        }
    ],
    pageLink: "/vpv/li/personal-banking/myacc/creditcards"
})



// eslint-disable-next-line no-undef
const HowToBuyAMutualFundTour = new window.Shepherd.Tour({
    tourName: 'How to Buy a Mutual Fund?',
    instanceCaller: 'HowToBuyAMutualFundTour',
    defaultStepOptions: {
        cancelIcon: {
            enabled: true
        },
        scrollTo: {
            behavior: 'smooth',
            block: 'center'
        },
        arrow: true
    },
    useModalOverlay: false
});

// Select the 'Investment and Insurance' button on the menubar on dashboard
HowToBuyAMutualFundTour.addStep({
    id: 'HowToBuyAMutualFundTour_1',
    title: '1/4',
    text: 'Move your mouse over Investments & Insurance',
    attachTo: {
        element: '#topbar > div.light-orange > div > div:nth-child(5)',
        on: 'left'
    },
    advanceOn: {
        selector: '#topbar > div.light-orange > div > div:nth-child(5)',
        event: 'mouseover'
    },
    pageLink: '/vpv/li/personal-banking/dashboardPage'
});

// Click on Buy Mutual Funds option in the drop-down menu > redirection
HowToBuyAMutualFundTour.addStep({
    id: 'HowToBuyAMutualFundTour_2',
    title: '2/4',
    text: 'Click on Buy Mutual Funds',
    attachTo: {
        element: "#topbar > div.light-orange > div > div:nth-child(5) > div > div > div:nth-child(1) > a:has([src*='topMenuImages/RINVIN/MFRV.svg'])",
        on: 'left'
    },
    advanceOn: {
        selector: "#topbar > div.light-orange > div > div:nth-child(5) > div > div > div:nth-child(1) > a:has([src*='topMenuImages/RINVIN/MFRV.svg'])",
        event: 'click'
    },
    pageLink: '/vpv/li/personal-banking/dashboardPage'
});

//Click on view all button on the page where investment categories are displayed
HowToBuyAMutualFundTour.addStep({
    id: 'HowToBuyAMutualFundTour_3a',
    title: '3/4',
    showOn: function () {
        const mutualFundsExists = window.find("My Portfolio");
        if (mutualFundsExists) {
            return false;
        } else {
            return true;
        }
    },
    text: "These are the top categories of Mutual Funds. <strong>Click on 'View All'</strong> to see more categories",
    attachTo: {
        // document.querySelector("#ListingTable3 > main > section:nth-child(4) > div")
        element: "#ListingTable3 > main > section:nth-child(3) > div > div > div.comp-funds",
        on: 'right'
    },
    advanceOn: {
        selector: "#ListingTable3 > main > section:nth-child(3) > div > div > div.comp-funds > div > button.btn.btn-default.js-show",
        event: 'click'
    },
    pageLink:
        '/VPV/LI/InvestmentsandInsurance/InvestOnline/MutualFunds/HomeDetails'
});

//Click on view all button on the page where investment categories are displayed
HowToBuyAMutualFundTour.addStep({
    id: 'HowToBuyAMutualFundTour_3b',
    title: '3/4',
    showOn: function () {
        const mutualFundsExists = window.find("My Portfolio");
        if (mutualFundsExists) {
            return true;
        } else {
            return false;
        }
    },
    text: "Looks like you already have Mutual Funds, however you can subscribe for more Mutual Funds through these top categories. <strong>Click on 'View All'</strong> to see more categories.",
    attachTo: {
        element: "#ListingTable3 > main > section:nth-child(4) > div",
        on: 'right'
    },
    advanceOn: {
        selector: "#ListingTable3 > main > section:nth-child(4) > div > div > div.comp-funds > div > button.btn.btn-default.js-show",
        event: 'click'
    },
    pageLink:
        "/VPV/LI/InvestmentsandInsurance/InvestOnline/MutualFunds/PortfolioDetails"
});

// User clicks on any one category from the tiles displayed
HowToBuyAMutualFundTour.addStep({
    id: 'HowToBuyAMutualFundTour_4',
    title: '4/4',
    text: "You can start investing in Mutual Funds by clicking on one of the following categories and exploring the Mutual Funds that suit your investment needs.",
    pageLink:
        '/VPV/LI/InvestmentsandInsurance/InvestOnline/MutualFunds/HomeDetails'
});



// eslint-disable-next-line no-undef
const HowToTransferFundsTour = new window.Shepherd.Tour({
    tourName: 'How to transfer funds?',
    instanceCaller: 'HowToTransferFundsTour',
    defaultStepOptions: {
        cancelIcon: {
            enabled: true
        },
        scrollTo: {
            behavior: 'smooth',
            block: 'center'
        },
        arrow: true
    },
    useModalOverlay: false
});

// Select the 'Payments and Transfer' button on the menubar on dashboard
HowToTransferFundsTour.addStep({
    id: 'HowToTransferFundsTour_1',
    title: '1/3',
    text: 'Move your mouse over Investments & Insurance',
    attachTo: {
        element: "#topbar > div.light-orange > div > div:nth-child(3)",
        on: 'left'
    },
    advanceOn: {
        selector: "#topbar > div.light-orange > div > div:nth-child(3)",
        event: 'mouseover'
    },
    pageLink:
        "/vpv/li/personal-banking/dashboardPage"
});

// Select the 'Fund Transfer' button in the dropdown menu
HowToTransferFundsTour.addStep({
    id: 'HowToTransferFundsTour_2',
    title: '2/3',
    text: 'Click on Fund Transfer',
    attachTo: {
        element: "#topbar > div.light-orange > div > div:nth-child(3) > div > div > div:nth-child(2) > a:has([src*='topMenuImages/RTXNS/RTXNSS.svg'])",
        on: 'bottom'
    },
    advanceOn: {
        selector: "#topbar > div.light-orange > div > div:nth-child(3) > div > div > div:nth-child(2) > a:has([src*='topMenuImages/RTXNS/RTXNSS.svg'])",
        event: 'click'
    },
    pageLink:
        "/vpv/li/personal-banking/dashboardPage"
});

// Select payee or add a new payee to do funds transfer
HowToTransferFundsTour.addStep({
    id: 'HowToTransferFundsTour_3',
    title: '3/3',
    text: 'Select a Payee from the dropdown to transfer money to, or click on the <strong>+Add New</strong> button to add a new payee.',
    attachTo: {
        element: "#CorporateUserDashboard_WFT__1\\:DispFormWithTableContent_FTRevamp\\.Rowset18c_mr > div.fundtranfer_submenu_content.select_payee_container > div",
        on: 'bottom'
    },
    advanceOn: {
        selector: "#CorporateUserDashboard_WFT__1\\:DispFormWithTableContent_FTRevamp\\.Rowset18c_mr > div.fundtranfer_submenu_content.select_payee_container > div",
        event: 'click'
    },
    buttons: [
        {
            text: 'Finish',
            action: HowToTransferFundsTour.next
        },
        {
            text: 'Cancel',
            action: HowToTransferFundsTour.cancel,
            secondary: true
        }
    ],
    pageLink:
        "/VPV/LI/PaymentsandTransfer/FundsTransfer/TransferFundstoMyPayeesnew"
});

// eslint-disable-next-line no-undef
const HowToPrematurelyCloseFDTour = new window.Shepherd.Tour({
    tourName: 'How to prematurely close a FD?',
    instanceCaller: 'HowToPrematurelyCloseFDTour',
    defaultStepOptions: {
        cancelIcon: {
            enabled: true
        },
        scrollTo: {
            behavior: 'smooth',
            block: 'center'
        },
        arrow: true
    },
    useModalOverlay: false
});

// Select the 'Customer Service' button on the menubar on dashboard
HowToPrematurelyCloseFDTour.addStep({
    id: 'HowToPrematurelyCloseFDTour_1',
    title: '1/4',
    text: 'Move your mouse over Customer Service',
    attachTo: {
        element: "#topbar > div.light-orange > div > div:nth-child(6)",
        on: 'left'
    },
    advanceOn: {
        selector: "#topbar > div.light-orange > div > div:nth-child(6)",
        event: 'mouseover'
    },
    pageLink:
        "/vpv/li/personal-banking/dashboardPage"
});

// Select the 'Service Requests' button in the dropdown menu
HowToPrematurelyCloseFDTour.addStep({
    id: 'HowToPrematurelyCloseFDTour_2',
    title: '2/4',
    text: 'Click on Service Requests',
    attachTo: {
        element: "#topbar > div.light-orange > div > div:nth-child(6) > div > div > div.mr-15 > a:has([src*='topMenuImages/RGNSER/RVMPSR.svg'])",
        on: 'left'
    },
    advanceOn: {
        selector: "#topbar > div.light-orange > div > div:nth-child(6) > div > div > div.mr-15 > a:has([src*='topMenuImages/RGNSER/RVMPSR.svg'])",
        event: 'click'
    },
    pageLink:
        "/vpv/li/personal-banking/dashboardPage"
});

// Select the 'Deposits' accordion
HowToPrematurelyCloseFDTour.addStep({
    id: 'HowToPrematurelyCloseFDTour_3',
    title: '3/4',
    text: 'Click on Deposits',
    attachTo: {
        element: "#DepositsId",
        on: 'right'
    },
    advanceOn: {
        selector: "#DepositsId",
        event: 'click'
    },
    pageLink: "/vpv/li/personal-banking/custservice/servicerequests"
});

// Select Fixed Deposit in the accordion sub-menu
HowToPrematurelyCloseFDTour.addStep({
    id: 'HowToPrematurelyCloseFDTour_3b',
    title: '3b/4',
    text: 'Click on Fixed Deposit',
    attachTo: {
        element: "#fixed-deposit",
        on: 'right'
    },
    showOn: function () {
        // if Fixed Deposit accordion is already selected, move to the next step
        const element = document.querySelector("#fixed-deposit > a:has([class*='active'])")
        if (element) {
            return false
        }
        return true
    },
    advanceOn: {
        selector: "#fixed-deposit",
        event: 'click'
    },
    pageLink: "/vpv/li/personal-banking/custservice/servicerequests"
});

// click on Closure/Renewal of Fixed Deposit
HowToPrematurelyCloseFDTour.addStep({
    id: 'HowToPrematurelyCloseFDTour_4',
    title: '4/4',
    text: 'Click on Closure/Renewal of Fixed Deposit',
    attachTo: {
        element: "#fixed-deposit-srs > li:nth-child(6) > a[title='Closure/Renewal of Fixed Deposit']",
        on: 'right'
    },
    advanceOn: {
        selector: "#fixed-deposit-srs > li:nth-child(6) > a[title='Closure/Renewal of Fixed Deposit']",
        event: 'click'
    },
    pageLink: "/vpv/li/personal-banking/custservice/servicerequests"
});

// Know about various ICICI Bank pre-approved loans offer
// eslint-disable-next-line no-undef
const HowToKnowAboutPreApprovedOffers = new window.Shepherd.Tour({
    tourName: 'Know about pre-approved offers',
    instanceCaller: 'HowToKnowAboutPreApprovedOffers',
    defaultStepOptions: {
        cancelIcon: {
            enabled: true
        },
        scrollTo: {
            behavior: 'smooth',
            block: 'center'
        },
        arrow: true
    },
    useModalOverlay: false
});

HowToKnowAboutPreApprovedOffers.addStep({
    id: 'HowToKnowAboutPreApprovedOffers_1',
    title: '1/3',
    text: "Move your mouse over 'Cards & Loans'",
    attachTo: {
        element: "#topbar > div.light-orange > div > div:nth-child(4)",
        on: "left"
    },
    advanceOn: {
        selector: '#topbar > div.light-orange > div > div:nth-child(4)',
        event: 'mouseover',
    },
    pageLink: "/vpv/li/personal-banking/dashboardPage"
})

HowToKnowAboutPreApprovedOffers.addStep({
    id: 'HowToKnowAboutPreApprovedOffers_2',
    title: '2/3',
    text: "Click on 'Loans'",
    attachTo: {
        element: "#topbar > div.light-orange > div > div:nth-child(4) > div > div > div:nth-child(2) > a:has([src*='topMenuImages/CARDLN/RLACTM.svg']",
        on: 'right'
    },
    advanceOn: {
        selector: "#topbar > div.light-orange > div > div:nth-child(4) > div > div > div:nth-child(2) > a:has([src*='topMenuImages/CARDLN/RLACTM.svg']",
        event: 'click'
    },
    pageLink: "/vpv/li/personal-banking/dashboardPage"
})

HowToKnowAboutPreApprovedOffers.addStep({
    id: "HowToKnowAboutPreApprovedOffers_3a",
    title: '3/3',
    text: "All your Pre-Approved offers are available here",
    attachTo: {
        element: "#InfoPanel1\\.Rowset1 > section > div > div > div > div > div.main-top",
        on: 'top'
    },
    showOn: function () {
        const element = window.find("Your Loan Account List")
        if (element) {
            return false
        } else {
            return true
        }
    },
    buttons: [
        {
            text: 'Complete',
            action: HowToKnowAboutPreApprovedOffers.complete
        },
        {
            text: 'Cancel',
            action: HowToKnowAboutPreApprovedOffers.cancel,
            secondary: true
        }
    ],
    pageLink: "/vpv/li/personal-banking/loanNotLinkedPage"
})

HowToKnowAboutPreApprovedOffers.addStep({
    id: "HowToKnowAboutPreApprovedOffers_3b",
    title: '3/3',
    text: "All your Pre-Approved offers are available here",
    attachTo: {
        element: "#InfoPanel1\\.Rowset1 > section > div > div > div > div > div.main-top",
        on: 'top'
    },
    showOn: function () {
        const element = window.find("Your Loan Account List")
        if (element) {
            return true
        } else {
            return false
        }
    },
    buttons: [
        {
            text: 'Complete',
            action: HowToKnowAboutPreApprovedOffers.complete
        },
        {
            text: 'Cancel',
            action: HowToKnowAboutPreApprovedOffers.cancel,
            secondary: true
        }
    ],
    pageLink: "/vpv/li/personal-banking/myacc/loans"
})

// eslint-disable-next-line no-undef
const HowToApplyForICICIBankCreditCard = new window.Shepherd.Tour({
    tourName: 'How to Apply For an ICICI Bank Credit Card',
    instanceCaller: 'HowToApplyForICICIBankCreditCard',
    defaultStepOptions: {
        cancelIcon: {
            enabled: true
        },
        scrollTo: {
            behavior: 'smooth',
            block: 'center'
        },
        arrow: true
    },
    useModalOverlay: false
});

HowToApplyForICICIBankCreditCard.addStep({
    id: 'HowToApplyForICICIBankCreditCard_0',
    title: '1/1',
    showOn: function () {
        const element = window.find("Apply from a range of credit cards")
        if (element) {
            return true
        }
        return false
    },
    text: "Move your mouse over 'Cards & Loans'",
    attachTo: {
        element: "#topbar > div.light-orange > div > div:nth-child(4)",
        on: "button"
    },
    advanceOn: {
        selector: '#topbar > div.light-orange > div > div:nth-child(4)',
        event: 'mouseover',
    },
    pageLink: "/vpv/li/personal-banking/dashboardPage"
})

HowToApplyForICICIBankCreditCard.addStep({
    id: 'HowToApplyForICICIBankCreditCard_1',
    title: '1/3',
    text: "Move your mouse over 'Cards & Loans'",
    attachTo: {
        element: "#topbar > div.light-orange > div > div:nth-child(4)",
        on: "left"
    },
    advanceOn: {
        selector: '#topbar > div.light-orange > div > div:nth-child(4)',
        event: 'mouseover',
    },
    pageLink: "/vpv/li/personal-banking/dashboardPage"
})

HowToApplyForICICIBankCreditCard.addStep({
    id: 'HowToApplyForICICIBankCreditCard_2',
    title: '2/3',
    text: "Click on 'Credit Cards'",
    attachTo: {
        element: "#topbar > div.light-orange > div > div:nth-child(4) > div > div > div:nth-child(1) > a:has([src*='topMenuImages/CARDLN/RCCRDM.svg'])",
        on: "left"
    },
    advanceOn: {
        selector: "#topbar > div.light-orange > div > div:nth-child(4) > div > div > div:nth-child(1) > a:has([src*='topMenuImages/CARDLN/RCCRDM.svg'])",
        event: 'click',
    },
    pageLink: "/vpv/li/personal-banking/dashboardPage"
})

HowToApplyForICICIBankCreditCard.addStep({
    id: 'HowToApplyForICICIBankCreditCard_3',
    title: '3/3',
    text: "Click on APPLY NOW to apply for a new credit card. ",
    attachTo: {
        element: "#ListingTable3 > section > div > div > div > div > div:nth-child(9):has([src*='CCSliderSummary/single_card_icon.png'])",
        on: "top"
    },
    advanceOn: {
        selector: '#topbar > div.light-orange > div > div:nth-child(4)',
        event: 'mouseover',
    },
    pageLink: "/vpv/li/personal-banking/myacc/creditcards"
})

window.listOfTours = {
    'HowToBuyAFastTagTour': HowToBuyAFastTagTour,
    'HowToMakeICICIBankCreditCardPaymentTour': HowToMakeICICIBankCreditCardPaymentTour,
    'HowToBuyAMutualFundTour': HowToBuyAMutualFundTour,
    'HowToTransferFundsTour': HowToTransferFundsTour,
    'HowToPrematurelyCloseFDTour': HowToPrematurelyCloseFDTour,
    'HowToKnowAboutPreApprovedOffers': HowToKnowAboutPreApprovedOffers,
    'HowToApplyForICICIBankCreditCard': HowToApplyForICICIBankCreditCard
}