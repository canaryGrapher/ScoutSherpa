// This file contains all the Guided journeys for RIB
/* eslint-disable prettier/prettier */
/* eslint-disable max-lines */
// ICICIGuidedJourneys.js
window.addEventListener('load', function () {
    console.log("Page loaded, loading tour now")
    // check last tour step from local storage 
    let currentStepIndex = localStorage.getItem('currentStepIndex');
    let currentTourIndex = localStorage.getItem('tourInstanceCaller');
    // if current tour is active, continue
    if (currentTourIndex === 'HowToBuyAFastTagTour') {
        console.log("Buying a FastTag tour under progress")
        if (currentStepIndex != '0') {
            HowToBuyAFastTagTour.show(Number(currentStepIndex));
        }
    }

    if (currentTourIndex === 'HowToMakeICICIBankCreditCardPaymentTour') {
        console.log("Credit card payment tour in progress")
        if (currentStepIndex != '0') {
            HowToMakeICICIBankCreditCardPaymentTour.show(Number(currentStepIndex));
        }
    }

    if (currentTourIndex === 'HowToBuyAMutualFundTour') {
        console.log("Buying a mutual fund tour under progress")
        if (currentStepIndex != '0') {
            HowToBuyAMutualFundTour.show(Number(currentStepIndex));
        }
    }
}, false)

window.addEventListener('DOMContentLoaded', function () {
    const PaymentsandTransferTabElement = document.querySelector("#topbar > div.light-orange > div > div:nth-child(3)");
    const InvestmentsAndInsuranceTabElement = document.querySelector('#topbar > div.light-orange > div > div:nth-child(5)');
    const CardsAndLoansTabElement = document.querySelector('#topbar > div.light-orange > div > div:nth-child(4)')

    if (PaymentsandTransferTabElement) {
        PaymentsandTransferTabElement.addEventListener('mouseleave', PaymentsandTransferTabElementFunction('hide'))
        PaymentsandTransferTabElement.addEventListener('mouseenter', PaymentsandTransferTabElementFunction('show'))
    }
    if (InvestmentsAndInsuranceTabElement) {
        InvestmentsAndInsuranceTabElement.addEventListener('mouseleave', InvestmentsAndInsuranceTabElementFunction('hide'))
        InvestmentsAndInsuranceTabElement.addEventListener('mouseenter', InvestmentsAndInsuranceTabElementFunction('show'))
    }
    if (CardsAndLoansTabElement) {
        CardsAndLoansTabElement.addEventListener('mouseleave', CardsAndLoansTabElementFunction('hide'))
        CardsAndLoansTabElement.addEventListener('mouseenter', CardsAndLoansTabElementFunction('show'))
    }
})
const PaymentsandTransferTabElementFunction = (action) => {
    if (window.Shepherd.activeTour && window.Shepherd.activeTour.currentStep.options.id === 'HowToBuyAFastTagTour_2') {
        if (action === "hide") {
            HowToBuyAFastTagTour.hide()
        } else {
            HowToBuyAFastTagTour.show()
        }

    }
}
const InvestmentsAndInsuranceTabElementFunction = (action) => {
    if (window.Shepherd.activeTour && window.Shepherd.activeTour.currentStep.options.id === 'HowToBuyAMutualFundTour_2') {
        if (action === "hide") {
            HowToBuyAMutualFundTour.hide()
        } else {
            HowToBuyAMutualFundTour.show()
        }

    }
}
const CardsAndLoansTabElementFunction = (action) => {
    if (window.Shepherd.activeTour && window.Shepherd.activeTour.currentStep.options.id === 'HowToMakeICICIBankCreditCardPaymentTour_2') {
        if (action === "hide") {
            HowToMakeICICIBankCreditCardPaymentTour.hide()
        } else {
            HowToMakeICICIBankCreditCardPaymentTour.show()
        }

    }
}

// eslint-disable-next-line no-undef
var HowToBuyAFastTagTour = new Shepherd.Tour({
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
    title: '1/7',
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

// Select the 'Buy/Recharge FastTag' sub-link under 'Cards & Loans'
HowToBuyAFastTagTour.addStep({
    id: 'HowToBuyAFastTagTour_2',
    title: '2/7',
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
    title: '2b/7',
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
    id: 'HowToBuyAFastTagTour_3',
    title: '3/7',
    text: 'Fill in the details of your vehicle to get a quote.<br /> Click on next after filling all the details.',
    attachTo: {
        element: '#DispFormWithTableContent_DigiGold\\.R311112',
        on: 'top'
    },
    buttons: [
        {
            text: 'Next',
            action: HowToBuyAFastTagTour.next
        },
        {
            text: 'Cancel',
            action: HowToBuyAFastTagTour.cancel,
            secondary: true
        }
    ],
    pageLink: '/VPV/LI/Exclusive Offerings/BuyFastag/Landingpage'
});

HowToBuyAFastTagTour.addStep({
    id: 'HowToBuyAFastTagTour_4',
    title: '4/7',
    text: 'You can edit the address you want your FastTag to be delivered.',
    attachTo: {
        element: '#DispFormWithTableContent_DigiGold\\.R3111131\\.C2',
        on: 'left'
    },
    buttons: [
        {
            text: 'Next',
            action: HowToBuyAFastTagTour.next
        },
        {
            text: 'Cancel',
            action: HowToBuyAFastTagTour.cancel,
            secondary: true
        }
    ],
    pageLink: '/VPV/LI/Exclusive Offerings/BuyFastag/Landingpage'
});

HowToBuyAFastTagTour.addStep({
    id: 'HowToBuyAFastTagTour_5',
    title: '5/7',
    text: 'Select the account you want the amount to be collected from.',
    attachTo: {
        element: '#DispFormWithTableContent_DigiGold\\.R311116',
        on: 'left'
    },
    buttons: [
        {
            text: 'Next',
            action: HowToBuyAFastTagTour.next
        },
        {
            text: 'Cancel',
            action: HowToBuyAFastTagTour.cancel,
            secondary: true
        }
    ],
    pageLink: '/VPV/LI/Exclusive Offerings/BuyFastag/Landingpage'
});

HowToBuyAFastTagTour.addStep({
    id: 'HowToBuyAFastTagTour_6',
    title: '6/7',
    text: 'After you have read the <u>Terms and Conditions</u>, click on the checkbox to accept.',
    attachTo: {
        element: '#DispFormWithTableContent_DigiGold\\.Ra0dth_mr\\.C1',
        on: 'right'
    },
    advanceOn: {
        selector: '#TERMS_AND_COND_FLAG',
        event: 'change'
    },
    buttons: [
        {
            text: 'Next',
            action: HowToBuyAFastTagTour.next
        },
        {
            text: 'Cancel',
            action: HowToBuyAFastTagTour.cancel,
            secondary: true
        }
    ],
    pageLink: '/VPV/LI/Exclusive Offerings/BuyFastag/Landingpage'
});

HowToBuyAFastTagTour.addStep({
    id: 'HowToBuyAFastTagTour_7',
    title: '7/7',
    text: 'Click on Proceed to pay the amount and buy your FastTag.',
    attachTo: {
        element: '#DispFormWithTableContent_DigiGold\\.R3121\\.C1',
        on: 'bottom'
    },
    buttons: [
        {
            text: 'back',
            action: HowToBuyAFastTagTour.back,
            secondary: true
        },
        {
            text: 'Complete',
            action: HowToBuyAFastTagTour.complete
        }
    ],
    advanceOn: {
        selector: '#DispFormWithTableContent_DigiGold\\.R3121\\.C1',
        event: 'click'
    },
    pageLink: '/VPV/LI/Exclusive Offerings/BuyFastag/Landingpage'
});

// eslint-disable-next-line no-undef
var HowToMakeICICIBankCreditCardPaymentTour = new Shepherd.Tour({
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
    title: "3/5",
    text: "You can select the credit card you want to pay the bill for in this glider. However if you have only one credit card, you can ignore this step.",
    attachTo: {
        element: "#credit-1 > div.glider-cont.glider-contain.mb-20",
        on: "top"
    },
    buttons: [
        {
            text: 'Next',
            action: HowToMakeICICIBankCreditCardPaymentTour.next
        },
        {
            text: 'Cancel',
            action: HowToMakeICICIBankCreditCardPaymentTour.cancel,
            secondary: true
        }
    ],
    pageLink: "/vpv/li/personal-banking/myacc/creditcards"
})

// check outstanding balance
HowToMakeICICIBankCreditCardPaymentTour.addStep({
    id: "HowToMakeICICIBankCreditCardPaymentTour_4",
    title: "4/5",
    text: "You can see your credit card outstanding balance here.",
    attachTo: {
        element: "#pb0",
        on: "right"
    },
    buttons: [
        {
            text: 'Next',
            action: HowToMakeICICIBankCreditCardPaymentTour.next
        },
        {
            text: 'Cancel',
            action: HowToMakeICICIBankCreditCardPaymentTour.cancel,
            secondary: true
        }
    ],
    pageLink: "/vpv/li/personal-banking/myacc/creditcards"
})

// Click on 'Pay Bill' button to pay the bill
HowToMakeICICIBankCreditCardPaymentTour.addStep({
    id: "HowToMakeICICIBankCreditCardPaymentTour_5",
    title: "5/5",
    text: "Click on 'Pay Bill' to pay against your Credit Card bill. You can select to pay for your outstanding dues, minimum amount due or any other amount you want to pay on the following page.",
    attachTo: {
        element: "#credit-1 > div.pl-4.pt-2 > a",
        on: "bottom"
    },
    buttons: [
        {
            text: 'back',
            action: HowToMakeICICIBankCreditCardPaymentTour.back,
            secondary: true
        },
        {
            text: 'Complete',
            action: HowToMakeICICIBankCreditCardPaymentTour.complete
        }
    ],
    pageLink: "/vpv/li/personal-banking/myacc/creditcards"
})


// eslint-disable-next-line no-undef
let HowToBuyAMutualFundTour = new Shepherd.Tour({
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
    title: '1/7',
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
    title: '2/7',
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
    id: 'HowToBuyAMutualFundTour_3',
    title: '3/7',
    text: "These are the top categories of Mutual Funds. <strong>Click on 'View All'</strong> to see more categories",
    attachTo: {
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

// User clicks on any one category from the tiles displayed
HowToBuyAMutualFundTour.addStep({
    id: 'HowToBuyAMutualFundTour_4',
    title: '4/7',
    text: "Let's start buying one of the top-rated mutual funds. Click on <strong>Top Rated Funds</strong> to begin.",
    attachTo: {
        element:
            `#ListingTable3 > main > section:nth-child(3) > div > div > div.comp-funds > ul > a:has([onclick="callFundListing('topRated')"]) > li`,
        on: 'right'
    },
    advanceOn: {
        selector:
            `#ListingTable3 > main > section:nth-child(3) > div > div > div.comp-funds > ul > a:has([onclick="callFundListing('topRated')"]) > li`,
        event: 'click'
    },
    pageLink:
        '/VPV/LI/InvestmentsandInsurance/InvestOnline/MutualFunds/HomeDetails'
});

// Click on "Invest Now" on any one of the suggested funds
HowToBuyAMutualFundTour.addStep({
    id: 'HowToBuyAMutualFundTour_5',
    title: '5/7',
    text: "Let's start with Equity funds. Click on the <strong>Invest Now</strong> button on the highlighted fund to start investing.",
    attachTo: {
        element: '#equity > div > ul > li:first-child',
        on: 'top'
    },
    advanceOn: {
        selector: "#equity > div > ul > li:nth-child(1) > div > div > div > div.bf-action-wrap > button.btn.btn-default.investNow0.flInvest0",
        event: 'click'
    },
    pageLink:
        "/VPV/LI/InvestmentsandInsurance/InvestOnline/MutualFunds/TopRatedFundsListing"
});

// user is suggested to select one type of transaction type
HowToBuyAMutualFundTour.addStep({
    id: 'HowToBuyAMutualFundTour_6',
    title: '6/7',
    text: '<p>Please select the required transaction type</p><ol><li><strong>SIP</strong> - Regular investment</li><li><strong>One time</strong> - Lumpsum investment</li><li><strong>FIP</strong> - Regular investment at a frequency of your choice</li></ol>',
    attachTo: {
        element:
            "#equity > div > ul > li > div > div > div.bf-cont.js-hidden.jsHidden0 > div > div > ul > li.form-item.typ-2 > div",
        on: 'top'
    },
    advanceOn: {
        selector:
            "#equity > div > ul > li > div > div > div.bf-cont.js-hidden.jsHidden0 > div > div > ul > li.form-item.typ-2 > div",
        event: 'click'
    },
    pageLink:
        "/VPV/LI/InvestmentsandInsurance/InvestOnline/MutualFunds/TopRatedSelectedListing-360 ONE Focused Equity Reg-G"
});

HowToBuyAMutualFundTour.addStep({
    id: 'HowToBuyAMutualFundTour_7',
    title: '7/7',
    text: 'Fill in the additional information in the fields and you are good to go! You would have invested in a Mutual Fund.',
    buttons: [
        {
            text: 'Finish',
            action: HowToBuyAMutualFundTour.next
        },
        {
            text: 'Cancel',
            action: HowToBuyAMutualFundTour.cancel,
            secondary: true
        }
    ],
    pageLink:
        "/VPV/LI/InvestmentsandInsurance/InvestOnline/MutualFunds/TopRatedSelectedListing-360 ONE Focused Equity Reg-G"
});