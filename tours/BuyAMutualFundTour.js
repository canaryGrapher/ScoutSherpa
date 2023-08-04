/* eslint-disable prettier/prettier */
/* eslint-disable max-lines */
// eslint-disable-next-line no-undef
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
        arrow: true
    },
    useModalOverlay: false
});


// Select the 'Investment and Insurance' button on the menubar on dashboard
BuyAMutualFundTour.addStep({
    id: 'BuyAMutualFundTour_1',
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
BuyAMutualFundTour.addStep({
    id: 'BuyAMutualFundTour_2',
    title: '2/7',
    text: 'Click on Buy Mutual Funds',
    attachTo: {
        element: "#topbar > div.light-orange > div > div:nth-child(5) > div > div > div:nth-child(1) > a:has([src='PR2/L001/consumer/theme/dashboardRevamp/topMenuImages/RINVIN/MFRV.svg'])",
        on: 'left'
    },
    advanceOn: {
        selector: "#topbar > div.light-orange > div > div:nth-child(5) > div > div > div:nth-child(1) > a:has([src='PR2/L001/consumer/theme/dashboardRevamp/topMenuImages/RINVIN/MFRV.svg'])",
        event: 'click'
    },
    pageLink: '/vpv/li/personal-banking/dashboardPage'
});

//Click on view all button on the page where investment categories are displayed
BuyAMutualFundTour.addStep({
    id: 'BuyAMutualFundTour_3',
    title: '3/7',
    text: "These are the top categories of Mutual Funds. Click on <strong>View All</strong> to see more categories",
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
BuyAMutualFundTour.addStep({
    id: 'BuyAMutualFundTour_4',
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
BuyAMutualFundTour.addStep({
    id: 'BuyAMutualFundTour_5',
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
BuyAMutualFundTour.addStep({
    id: 'BuyAMutualFundTour_6',
    title: '6/7',
    text: '<p>Please select the required transaction type</p><ul><li><strong>SIP</strong> - Regular investment</li><li><strong>One time</strong> - Lumpsum investment</li><li><strong>FIP</strong> - Regular investment at a frequency of your choice</li></ul>',
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

BuyAMutualFundTour.addStep({
    id: 'BuyAMutualFundTour_7',
    title: '7/7',
    text: 'Fill in the additional information and you are good to go! You would have invested in a Mutual Fund.',
    buttons: [
        {
            text: 'Finish',
            action: HowToBuyAFastTagTour.complete
        },
        {
            text: 'Back',
            action: HowToBuyAFastTagTour.back
        }
    ],
    pageLink:
        "/VPV/LI/InvestmentsandInsurance/InvestOnline/MutualFunds/TopRatedSelectedListing-360 ONE Focused Equity Reg-G"
});

// eslint-disable-next-line no-undef
var HowToBuyAFastTagTour = new Shepherd.Tour({
    tourName: 'How to buy a ICICI FastTag',
    instanceCaller: 'HowToBuyAFastTagTour',
    defaultStepOptions: {
        cancelIcon: {
            enabled: true
        },
        classes: 'z-50',
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
            "#topbar > div.light-orange > div > div:nth-child(3) > div > div > div:nth-child(1) > a:has([src='PR2/L001/consumer/theme/dashboardRevamp/topMenuImages/RTXNS/FASTAG.svg'])",
        on: 'left'
    },
    advanceOn: {
        selector:
            "#topbar > div.light-orange > div > div:nth-child(3) > div > div > div:nth-child(1) > a:has([src='PR2/L001/consumer/theme/dashboardRevamp/topMenuImages/RTXNS/FASTAG.svg'])",
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
    beforeShowPromise: function () {
        return new Promise(function (resolve, reject) {
            const element = document.querySelector("#FastagRech\\.Rowset1 > ul > li:nth-child(2)")
            if (element.classList.contains('bar-tab-active')) {
                resolve()
            } else {
                reject()
            }
        })
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
            action: HowToBuyAFastTagTour.cancel
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
            action: HowToBuyAFastTagTour.cancel
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
            action: HowToBuyAFastTagTour.cancel
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
    pageLink: '/VPV/LI/Exclusive Offerings/BuyFastag/Landingpage'
});

HowToBuyAFastTagTour.addStep({
    id: 'HowToBuyAFastTagTour_7',
    title: '7/7',
    text: 'Click on Proceed to pay the amount and buy your FastTag',
    attachTo: {
        element: '#DispFormWithTableContent_DigiGold\\.R3121\\.C1',
        on: 'bottom'
    },
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
        classes: 'z-50',
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
    title: "1/8",
    text: "Move your mouse over 'Cards & Loans'",
    attachTo: {
        element: "#topbar > div.light-orange > div > div:nth-child(4)",
        on: "bottom"
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
    title: "2/8",
    text: "Click on 'Credit Cards'",
    attachTo: {
        element: "#topbar > div.light-orange > div > div:nth-child(4) > div > div > div:nth-child(1) > a:nth-child(2)",
        on: "left"
    },
    advanceOn: {
        selector: "#topbar > div.light-orange > div > div:nth-child(4) > div > div > div:nth-child(1) > a:nth-child(2)",
        event: 'mouseover',
    },
    pageLink: "/vpv/li/personal-banking/dashboardPage"
})

// Click on 'Pay Bill' button to pay the bill
HowToMakeICICIBankCreditCardPaymentTour.addStep({
    id: "HowToMakeICICIBankCreditCardPaymentTour_3",
    title: "3/8",
    text: "Click on 'Pay Bill' to pay your Credit Card bills <br />Note: You can review your 'Total Due Amount' and 'Due Date' above",
    attachTo: {
        element: "#credit-1 > div.pl-4.pt-2 > a",
        on: "bottom"
    },
    advanceOn: {
        selector: "#credit-1 > div.pl-4.pt-2 > a",
        event: 'click',
    },
    pageLink: "/vpv/li/personal-banking/myacc/creditcards"
})

// Click on 'Pay Bill' button to pay the bill
HowToMakeICICIBankCreditCardPaymentTour.addStep({
    id: "HowToMakeICICIBankCreditCardPaymentTour_4",
    title: "4/8",
    text: "Click on 'Pay Bill' to pay your Credit Card bills <br />Note: You can review your 'Total Due Amount' and 'Due Date' above",
    attachTo: {
        element: "#credit-1 > div.pl-4.pt-2 > a",
        on: "bottom"
    },
    advanceOn: {
        selector: "#credit-1 > div.pl-4.pt-2 > a",
        event: 'click',
    },
    pageLink: "/vpv/li/personal-banking/myacc/creditcards"
})

// Select account to pay from
HowToMakeICICIBankCreditCardPaymentTour.addStep({
    id: "HowToMakeICICIBankCreditCardPaymentTour_5",
    title: "5/8",
    text: "Select the account from the drop-down from which you want to pay for your Credit Card.",
    attachTo: {
        element: "#DispFormWithTableContent\\.Rix0_mr\\.C1",
        on: "bottom"
    },
    advanceOn: {
        selector: "#DispFormWithTableContent\\.Rix0_mr\\.C1",
        event: 'click',
    },
    pageLink: "/VPV/LI/PaymentsandTransfer/FundsTransfer/TransferFundstoMyPayeesnew"
})

// selecting amount to pay
HowToMakeICICIBankCreditCardPaymentTour.addStep({
    id: "HowToMakeICICIBankCreditCardPaymentTour_6",
    title: "6/8",
    text: "Select the amount to pay. You have the following options to pay: <ul><li>Total Amount due: The amount that is due to be paid against your credit card bill.</li><li>Min amount due: The minimum amount that you need to pay in order to prevent a default on your credit card</li><li>Other amount: If you wish to make a part payment to your credit card</li><li>Current outstanding amount: If you wish to pay the amount you have spent in the current billing cycle.</li></ul>",
    attachTo: {
        element: "#Amount",
        on: "top"
    },
    advanceOn: {
        selector: "#Amount",
        event: 'click',
    },
    pageLink: "/VPV/LI/PaymentsandTransfer/FundsTransfer/TransferFundstoMyPayeesnew"
})

// select a mode of verification to pay amount
HowToMakeICICIBankCreditCardPaymentTour.addStep({
    id: "HowToMakeICICIBankCreditCardPaymentTour_7",
    title: "7/8",
    text: "Select the mode of verification for payment.",
    attachTo: {
        element: "#DispFormWithTableContent\\.RowsetOtp2",
        on: "right"
    },
    advanceOn: {
        selector: "#DispFormWithTableContent\\.RowsetOtp2",
        event: 'click',
    },
    pageLink: "/VPV/LI/PaymentsandTransfer/FundsTransfer/TransferFundstoMyPayeesnew"
})

// select a mode of verification to pay amount
HowToMakeICICIBankCreditCardPaymentTour.addStep({
    id: "HowToMakeICICIBankCreditCardPaymentTour_8",
    title: "8/8",
    text: "Click on next to continue paying your credit card bill.",
    attachTo: {
        element: "#CONTINUE_TRANSACTION",
        on: "bottom"
    },
    advanceOn: {
        selector: "#CONTINUE_TRANSACTION",
        event: 'click',
    },
    pageLink: "/VPV/LI/PaymentsandTransfer/FundsTransfer/TransferFundstoMyPayeesnew"
})

// eslint-disable-next-line no-undef
var WhatsOnBankAccountPageGuideMe = new Shepherd.Tour({
    tourName: "Guide Me: What's on Bank Account Page",
    instanceCaller: "WhatsOnBankAccountPageGuideMe",
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
    useModalOverlay: true,
});

WhatsOnBankAccountPageGuideMe.addStep({
    id: "WhatsOnBankAccountPageGuideMe_1",
    title: "1/8",
    text: "Welcome to your account page. Here you can view your account summary, account details, and account statements.",
    buttons: [
        {
            text: 'Next',
            action: HowToBuyAFastTagTour.next
        },
        {
            text: 'Cancel',
            action: HowToBuyAFastTagTour.cancel
        }
    ],
    pageLink: "/vpv/li/personal-banking/myacc/bankacc"
})

WhatsOnBankAccountPageGuideMe.addStep({
    id: "WhatsOnBankAccountPageGuideMe_2",
    title: "2/8",
    text: "This is your account summary. Here you can view your account balance.",
    attachTo: {
        element: "#AccountsTable_TotalBalance-MonthsTurnover > tbody",
        on: "bottom"
    },
    buttons: [
        {
            text: 'Next',
            action: HowToBuyAFastTagTour.next
        },
        {
            text: 'Back',
            action: HowToBuyAFastTagTour.back
        }
    ],
    pageLink: "/vpv/li/personal-banking/myacc/bankacc"
})

WhatsOnBankAccountPageGuideMe.addStep({
    id: "WhatsOnBankAccountPageGuideMe_3",
    title: "3/8",
    text: "List of all accounts with summary is displayed here. Select that account using the radio button to interact with it.",
    attachTo: {
        element: "#ListTableWithCtrlsDEH\\.Rowset1",
        on: "bottom"
    },
    buttons: [
        {
            text: 'Next',
            action: HowToBuyAFastTagTour.next
        },
        {
            text: 'Back',
            action: HowToBuyAFastTagTour.back
        }
    ],
    pageLink: "/vpv/li/personal-banking/myacc/bankacc"
})

WhatsOnBankAccountPageGuideMe.addStep({
    id: "WhatsOnBankAccountPageGuideMe_4",
    title: "4/8",
    text: "For the selected account, use the following buttons to interact with it. You can View the last 10 transactions, or get a detailed statement.",
    attachTo: {
        element: "#ListTableWithCtrlsDEH\\.Rb1_mr",
        on: "bottom"
    },
    buttons: [
        {
            text: 'Next',
            action: HowToBuyAFastTagTour.next
        },
        {
            text: 'Back',
            action: HowToBuyAFastTagTour.back
        }
    ],
    pageLink: "/vpv/li/personal-banking/myacc/bankacc"
})

WhatsOnBankAccountPageGuideMe.addStep({
    id: "WhatsOnBankAccountPageGuideMe_5",
    title: "5/8",
    text: "Click on this dropdown to view more options for the selected account.",
    attachTo: {
        element: "#ListTableWithCtrlsDEH\\.Rb1_mr\\.C16 > span.labelColumn_combo_small > span > div",
        on: "left"
    },
    advanceOn: {
        selector: "#ListTableWithCtrlsDEH\\.Rb1_mr\\.C16 > span.labelColumn_combo_small > span > div > div.selectedTxt",
        event: 'click',
    },
    buttons: [
        {
            text: 'Next',
            action: HowToBuyAFastTagTour.next
        },
        {
            text: 'Back',
            action: HowToBuyAFastTagTour.back
        }
    ],
    pageLink: "/vpv/li/personal-banking/myacc/bankacc"
})

WhatsOnBankAccountPageGuideMe.addStep({
    id: "WhatsOnBankAccountPageGuideMe_6",
    title: "6/8",
    text: "These are the list of service requests you can make for the selected account.",
    attachTo: {
        element: "#ListTableWithCtrlsDEH\\.Rb1_mr\\.C16 > span.labelColumn_combo_small > span > div > div.SSContainerDivWrapper",
        on: "left"
    },
    buttons: [
        {
            text: 'Next',
            action: HowToBuyAFastTagTour.next
        },
        {
            text: 'Back',
            action: HowToBuyAFastTagTour.back
        }
    ],
    pageLink: "/vpv/li/personal-banking/myacc/bankacc"
})

WhatsOnBankAccountPageGuideMe.addStep({
    id: "WhatsOnBankAccountPageGuideMe_7",
    title: "7/8",
    text: "Select the format for download of the file. You can select between PDF or XLX format.",
    attachTo: {
        element: "#NavPanel_mr\\.Rb1",
        on: "bottom"
    },
    buttons: [
        {
            text: 'Next',
            action: HowToBuyAFastTagTour.next
        },
        {
            text: 'Back',
            action: HowToBuyAFastTagTour.back
        }
    ],
    pageLink: "/vpv/li/personal-banking/myacc/bankacc"
})

WhatsOnBankAccountPageGuideMe.addStep({
    id: "WhatsOnBankAccountPageGuideMe_7",
    title: "8/8",
    text: "That is all for this tour. Hope you understood the options available on this page.",
    buttons: [
        {
            text: 'Complete',
            action: HowToBuyAFastTagTour.next
        },
        {
            text: 'Back',
            action: HowToBuyAFastTagTour.back
        }
    ],
    pageLink: "/vpv/li/personal-banking/myacc/bankacc"
})

window.addEventListener('DOMContentLoaded', () => {
    console.log("DOM content loaded. Loading tour")
    var button = document.createElement("Button");
    button.innerHTML = "Guide Me";
    button.onclick = function () {
        WhatsOnBankAccountPageGuideMe.start();
    };
    button.style = "left:-25px;position:fixed;top:50%;z-index:9999;transform:rotate(90deg);color:white;background-color:rgb(239, 124, 0);border-radius: 5px 5px 0 0;padding:5px 13px;cursor:pointer;"
    document.body.appendChild(button);
})

window.addEventListener('DOMContentLoaded', () => {
    console.log("DOM content loaded. Loading tour")
    // check last tour step from local storage 
    let currentStepIndex = localStorage.getItem('currentStepIndex');
    let currentTourIndex = localStorage.getItem('tourInstanceCaller');
    // if current tour is active, continue
    if (currentTourIndex === 'HowToBuyAFastTagTour') {
        console.log("Buying a FastTag tour under progress")
        if (currentStepIndex != '1') {
            HowToBuyAFastTagTour.show(Number(currentStepIndex));
        }
    }

    if (currentTourIndex === 'HowToMakeICICIBankCreditCardPaymentTour') {
        console.log("Credit card payment tour in progress")
        if (currentStepIndex != '1') {
            HowToMakeICICIBankCreditCardPaymentTour.show(Number(currentStepIndex));
        }
    }

    if (currentTourIndex === 'BuyAMutualFundTour') {
        console.log("Buying a mutual fund tour under progress")
        if (currentStepIndex != '1') {
            BuyAMutualFundTour.show(Number(currentStepIndex));
        }
    }


}, false) 
