let BuyAMutualFundTour = new Shepherd.Tour({
    tourName: 'How to Buy a Mutual Fund?',
    instanceCaller: 'BuyAMutualFundTour',
    defaultStepOptions: {
        cancelIcon: {
            enabled: true
        },
        classes: 'z-50',
        scrollTo: {
            behavior: 'smooth',
            block: 'center'
        },
        arrow: true,
    },
    useModalOverlay: false,
});

// General Notification
BuyAMutualFundTour.addStep({
    id: 'BuyAMutualFundTour_1',
    title: "1/7",
    text: 'Welcome to your retail internet banking dashboard. From here, we will show you how to buy a mutual fund.',
    buttons: [
        {
            text: 'Next',
            action: BuyAMutualFundTour.next
        },
        {
            text: 'Cancel',
            action: BuyAMutualFundTour.cancel
        }
    ],
    pageLink: "/vpv/li/personal-banking/dashboardPage"
});

// Select the 'Investment and Insurance' button on the menubar on dashboard
BuyAMutualFundTour.addStep({
    id: "BuyAMutualFundTour_2",
    title: "2/7",
    text: "Move your mouse over Investments & Insurance",
    attachTo: {
        element: "#topbar > div.light-orange > div > div:nth-child(5)",
        on: "left"
    },
    advanceOn: {
        selector: '#topbar > div.light-orange > div > div:nth-child(5)',
        event: 'mouseover',
    },
    pageLink: "/vpv/li/personal-banking/dashboardPage"
})

// Click on Buy Mutual Funds option in the drop-down menu > redirection
BuyAMutualFundTour.addStep({
    id: "BuyAMutualFundTour_3",
    title: "3/7",
    text: "Click on Buy Mutual Funds",
    attachTo: {
        element: "#topbar > div.light-orange > div > div:nth-child(5) > div",
        on: "left"
    },
    advanceOn: {
        selector: '#topbar > div.light-orange > div > div:nth-child(5) > div',
        event: 'click',
    },
    pageLink: "/vpv/li/personal-banking/dashboardPage"
})

//Click on view all button on the page where investment categories are displayed
BuyAMutualFundTour.addStep({
    id: 'BuyAMutualFundTour_4',
    title: '4/7',
    text: "Click 'View All'",
    attachTo: {

        element: "#ListingTable3 > main > section:nth-child(3) > div > div > div.comp-funds > div > button.btn.btn-default.js-show",
        on: "top"
    },
    advanceOn: {
        selector: '#ListingTable3 > main > section:nth-child(3) > div > div > div.comp-funds > div > button.btn.btn-default.js-show',
        event: 'click',
    },
    pageLink: "/VPV/LI/InvestmentsandInsurance/InvestOnline/MutualFunds/HomeDetails"
})

// User clicks on any one category from the tiles displayed
BuyAMutualFundTour.addStep({
    id: 'BuyAMutualFundTour_5',
    title: '5/7',
    text: "<p>Let's Buy a Mutual Fund by Clicking on the Categories below</p><br /> <p style='text-align: right'>or click Next to search for funds manually</p>",
    attachTo: {
        element: "#ListingTable3 > main > section:nth-child(3) > div > div > div.head-wrap > p",
        on: "top"
    },
    advanceOn: {
        selector: '#ListingTable3 > main > section:nth-child(3) > div > div > div.head-wrap > p',
        event: 'click',
    },
    pageLink: "/VPV/LI/InvestmentsandInsurance/InvestOnline/MutualFunds/HomeDetails"
})

// Click on "Invest Now" on any one of the suggested funds
BuyAMutualFundTour.addStep({
    id: 'BuyAMutualFundTour_6',
    title: '6/7',
    text: "Click <strong>Invest Now</strong> on the mutual fund of your choice.",
    attachTo: {
        element: "#MFfundslist > li:nth-child(1) > div",
        on: "top"
    },
    advanceOn: {
        selector: '#MFfundslist > li:nth-child(1) > div',
        event: 'click',
    },
    pageLink: "/VPV/LI/InvestmentsandInsurance/InvestOnline/MutualFunds/WhatsNewFundsListing"
})

// user is suggested to select one type of transaction type
BuyAMutualFundTour.addStep({
    id: 'BuyAMutualFundTour_7',
    title: '7/7',
    text: "<p>Please select the required transaction type</p><ul><li><strong>SIP</strong> - Regular investment</li><li><strong>One time</strong> - Lumpsum investment</li><li><strong>FIP</strong> - Regular investment at a frequency of your choice</li></ul>",
    attachTo: {
        element: "#MFfundsSellist > li > div > div > div.bf-cont.js-hidden.js-hidden0 > div > div > ul > li.form-item.typ-2 > div",
        on: "top"
    },
    advanceOn: {
        selector: '#MFfundsSellist > li > div > div > div.bf-cont.js-hidden.js-hidden0 > div > div > ul > li.form-item.typ-2 > div',
        event: 'click',
    },
    pageLink: "/VPV/LI/InvestmentsandInsurance/InvestOnline/MutualFunds/FundSelectedListing-Edelweiss Multi Asset Allocation Fund Reg-G"
})

// print current step index
window.addEventListener('DOMContentLoaded', () => {
    // check last tour step from local storage
    let currentStepIndex = localStorage.getItem('currentStepIndex');
    let currentTourIndex = localStorage.getItem('tourInstanceCaller');
    if (currentTourIndex === 'BuyAMutualFundTour') {
        if (currentStepIndex != '1') {
            BuyAMutualFundTour.show(Number(currentStepIndex));
        }
    }
}, false)

var HowToBuyAFastTagTour = new Shepherd.Tour({
    tourName: "How to buy a ICICI FastTag",
    instanceCaller: "HowToBuyAFastTagTour",
    defaultStepOptions: {
        cancelIcon: {
            enabled: true
        },
        classes: 'z-50',
        scrollTo: {
            behavior: 'smooth',
            block: 'center'
        },
        arrow: true,
    },
    useModalOverlay: false,
});

// Select the 'PAYMENTS & TRANSFER' button on the menubar on dashboard
HowToBuyAFastTagTour.addStep({
    id: "HowToBuyAFastTagTour_1",
    title: "1/7",
    text: "Move your mouse over 'PAYMENTS & TRANSFER",
    attachTo: {
        element: "#topbar > div.light-orange > div > div:nth-child(3)",
        on: "bottom"
    },
    advanceOn: {
        selector: '#topbar > div.light-orange > div > div:nth-child(3)',
        event: 'mouseover',
    },
    pageLink: "/vpv/li/personal-banking/dashboardPage"
})

// Select the 'Buy/Recharge FastTag' sub-link under 'Cards & Loans'
HowToBuyAFastTagTour.addStep({
    id: "HowToBuyAFastTagTour_2",
    title: "2/7",
    text: "Click on 'Buy/Recharge FastTag'",
    attachTo: {
        element: "#topbar > div.light-orange > div > div:nth-child(3) > div > div > div:nth-child(1) > a:nth-child(4)",
        on: "bottom"
    },
    advanceOn: {
        selector: "#topbar > div.light-orange > div > div:nth-child(3) > div > div > div:nth-child(1) > a:nth-child(4)",
        event: 'click',
    },
    pageLink: "/vpv/li/personal-banking/dashboardPage"
})

HowToBuyAFastTagTour.addStep({
    id: "HowToBuyAFastTagTour_3",
    title: "3/7",
    text: "Fill in the details of your vehicle to get a quote",
    attachTo: {
        element: "#DispFormWithTableContent_DigiGold\\.R311112",
        on: "left"
    },
    advanceOn: {
        selector: "#CustomFasTagFG\\.VEHICLE_REG_NUMBER",
        event: 'click',
    },
    pageLink: "/VPV/LI/Exclusive Offerings/BuyFastag/Landingpage"
})

HowToBuyAFastTagTour.addStep({
    id: "HowToBuyAFastTagTour_4",
    title: "4/7",
    text: "You can edit the address you want your FastTag to be delivered.",
    attachTo: {
        element: "#Caption19502135",
        on: "top"
    },
    advanceOn: {
        selector: "#Caption19502135",
        event: 'mouseover',
    },
    pageLink: "/VPV/LI/Exclusive Offerings/BuyFastag/Landingpage"
})

HowToBuyAFastTagTour.addStep({
    id: "HowToBuyAFastTagTour_5",
    title: "5/7",
    text: "Select the account you want the amount to be collected from.",
    attachTo: {
        element: "#DispFormWithTableContent_DigiGold\\.R3111162",
        on: "right"
    },
    advanceOn: {
        selector: "#DispFormWithTableContent_DigiGold\\.R3111162",
        event: 'mouseover',
    },
    pageLink: "/VPV/LI/Exclusive Offerings/BuyFastag/Landingpage"
})

HowToBuyAFastTagTour.addStep({
    id: "HowToBuyAFastTagTour_6",
    title: "6/7",
    text: "After you have read the <u>Terms and Conditions</u>, click on the checkbox to accept.",
    attachTo: {
        element: "#TERMS_AND_COND_FLAG",
        on: "bottom"
    },
    advanceOn: {
        selector: "#TERMS_AND_COND_FLAG",
        event: 'click',
    },
    pageLink: "/VPV/LI/Exclusive Offerings/BuyFastag/Landingpage"
})

HowToBuyAFastTagTour.addStep({
    id: "HowToBuyAFastTagTour_7",
    title: "7/7",
    text: "Click on Proceed to pay the amount and buy your FastTag",
    attachTo: {
        element: "#DispFormWithTableContent_DigiGold\\.R3121\\.C1",
        on: "top"
    },
    advanceOn: {
        selector: "#DispFormWithTableContent_DigiGold\\.R3121\\.C1",
        event: 'click',
    },
    pageLink: "/VPV/LI/Exclusive Offerings/BuyFastag/Landingpage"
})

window.addEventListener('DOMContentLoaded', () => {
    console.log("DOM content loaded. Loading tour")
    // check last tour step from local storage 
    let currentStepIndex = localStorage.getItem('currentStepIndex');
    let currentTourIndex = localStorage.getItem('tourInstanceCaller');
    // if current tour is active, continue
    if (currentTourIndex === 'HowToMakeICICIBankCreditCardPaymentTour') {
        if (Number(currentStepIndex) >= 1) {
            HowToMakeICICIBankCreditCardPaymentTour.show(Number(currentStepIndex));
        }
    }
}, false) 
