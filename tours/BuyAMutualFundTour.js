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
