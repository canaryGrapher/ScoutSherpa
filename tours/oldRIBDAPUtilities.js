// This file contains all the utilities required by guided journey
// oldRIBDAPUtilities.js

/* eslint-disable prettier/prettier */
/* eslint-disable max-lines */

const dashboardPageVPV = "/vpv/li/personal-banking/dashboardPage"
const topNavData = [
    // Overview
    {
        mainNavItemName: "Overview",
        mainElement: '#topbar > div.light-orange > div > div:nth-child(1)',
        legacyElement: '#OVERVIEW',
        subLinks: [
            {
                mainNavItemName: "My View",
                mainElement: '',
                legacyElement: '',
            },
            {
                mainNavItemName: "Account Summary",
                mainElement: '',
                legacyElement: '',
            },
            {
                mainNavItemName: "Personal Details",
                mainElement: '',
                legacyElement: '',
            },
            {
                mainNavItemName: "Financial Journey",
                mainElement: '',
                legacyElement: '',
            },
        ],
    },
    // Bank Account
    {
        mainNavItemName: "Bank Accounts",
        mainElement: '#topbar > div.light-orange > div > div:nth-child(2)',
        legacyElement: '#BANK_ACCOUNTS',
        subLinks: [
            {
                mainNavItemName: "Accounts",
                mainElement: '',
                legacyElement: '',
            },
            {
                mainNavItemName: "Pockets",
                mainElement: '',
                legacyElement: '',
            },
            {
                mainNavItemName: "PayLater",
                mainElement: '',
                legacyElement: '',
            },
            {
                mainNavItemName: "PPF Accounts",
                mainElement: '',
                legacyElement: '',
            },
            {
                mainNavItemName: "SSY Accounts",
                mainElement: '',
                legacyElement: '',
            },
            {
                mainNavItemName: "e-Statements",
                mainElement: '',
                legacyElement: '',
            },
            {
                mainNavItemName: "iFinance",
                mainElement: '',
                legacyElement: '',
            },
            {
                mainNavItemName: "Deposits",
                mainElement: '',
                legacyElement: '',
            },
            {
                mainNavItemName: "iWish Goals",
                mainElement: '',
                legacyElement: '',
            }
        ]
    },
    // Payments & Transfer
    {
        mainNavItemName: "Payments & Transfer",
        mainElement: '#topbar > div.light-orange > div > div:nth-child(3)',
        legacyElement: '#PAYMENTS__TRANSFER',
        subLinks: [
            {
                mainNavItemName: "Pay Bills",
                mainElement: '',
                legacyElement: '',
            },
            {
                mainNavItemName: "Recharge",
                mainElement: '',
                legacyElement: '',
            },
            {
                mainNavItemName: "Buy/Recharge Fastag",
                mainElement: "#topbar > div.light-orange > div > div:nth-child(3) > div > div > div:nth-child(1) > a:has([src*='topMenuImages/RTXNS/FASTAG.svg'])",
                legacyElement: "#PAYMENTS__TRANSFER > ul > .submenu_links:has([id='Buy--Recharge-Fastag'])",
            },
            {
                mainNavItemName: "Fund Transfer",
                mainElement: "#topbar > div.light-orange > div > div:nth-child(3) > div > div > div:nth-child(2) > a:has([src*='topMenuImages/RTXNS/RTXNSS.svg'])",
                legacyElement: "#PAYMENTS__TRANSFER > ul > .submenu_links:has([id='Fund-Transfer'])",
            },
            {
                mainNavItemName: "Inward Remittance",
                mainElement: '',
                legacyElement: '',
            },
            {
                mainNavItemName: "My Transactions",
                mainElement: '',
                legacyElement: '',
            },
            {
                mainNavItemName: "Manage Payee",
                mainElement: '',
                legacyElement: '',
            },
            {
                mainNavItemName: "Favourites",
                mainElement: '',
                legacyElement: '',
            },
            {
                mainNavItemName: "Tax Centre",
                mainElement: '',
                legacyElement: '',
            },
        ]
    },
    //  Cards & Loans
    {
        mainNavItemName: "Cards & Loans",
        mainElement: '#topbar > div.light-orange > div > div:nth-child(4)',
        legacyElement: '#CARDS__LOANS',
        subLinks: [
            {
                mainNavItemName: "Credit Cards",
                mainElement: "#topbar > div.light-orange > div > div:nth-child(4) > div > div > div:nth-child(1) > a:has([src*='topMenuImages/CARDLN/RCCRDM.svg'])",
                legacyElement: "#CARDS__LOANS > ul > .submenu_links:has([id='Credit-Cards'])",
            },
            {
                mainNavItemName: "Debit/ATM Card",
                mainElement: '',
                legacyElement: '',
            },
            {
                mainNavItemName: "Forex & Prepaid Cards",
                mainElement: '',
                legacyElement: '',
            },
            {
                mainNavItemName: "Prepaid cards",
                mainElement: '',
                legacyElement: '',
            },
            {
                mainNavItemName: "ICICI Bank Rewards",
                mainElement: '',
                legacyElement: '',
            },
            {
                mainNavItemName: "Manage Subscription",
                mainElement: '',
                legacyElement: '',
            },
            {
                mainNavItemName: "Loans",
                mainElement: "#topbar > div.light-orange > div > div:nth-child(4) > div > div > div:nth-child(2) > a:has([src*='topMenuImages/CARDLN/RLACTM.svg'])",
                legacyElement: "#CARDS__LOANS > ul > .submenu_links:has([id='Loans'])",
            },
            {
                mainNavItemName: "Apply Online",
                mainElement: '',
                legacyElement: '',
            }
        ]
    },
    // Investments & Insurance
    {
        mainNavItemName: "Investments & Insurance",
        mainElement: '#topbar > div.light-orange > div > div:nth-child(5)',
        legacyElement: '#INVESTMENTS__INSURANCE',
        subLinks: [
            {
                mainNavItemName: "Invest Online",
                mainElement: '',
                legacyElement: '',
            },
            {
                mainNavItemName: "Buy Mutual Funds",
                mainElement: "#topbar > div.light-orange > div > div:nth-child(5) > div > div > div:nth-child(1) > a:has([src*='topMenuImages/RINVIN/MFRV.svg'])",
                legacyElement: "#INVESTMENTS__INSURANCE > ul > .submenu_links:has([id='Buy-Mutual-Funds'])",
            },
            {
                mainNavItemName: "Demat",
                mainElement: '',
                legacyElement: '',
            },
            {
                mainNavItemName: "ICICIdirect (3-in-1)",
                mainElement: '',
                legacyElement: '',
            },
            {
                mainNavItemName: "National Pension System",
                mainElement: '',
                legacyElement: '',
            },
            {
                mainNavItemName: "PPF Accounts",
                mainElement: '',
                legacyElement: '',
            },
            {
                mainNavItemName: "SSY Accounts",
                mainElement: '',
                legacyElement: '',
            },
            {
                mainNavItemName: "Guaranteed Pension Plan",
                mainElement: '',
                legacyElement: '',
            },
            {
                mainNavItemName: "Retirement Journey",
                mainElement: '',
                legacyElement: '',
            },
            {
                mainNavItemName: "Term Life Insurance",
                mainElement: '',
                legacyElement: '',
            },
            {
                mainNavItemName: "Cancer Cover",
                mainElement: '',
                legacyElement: '',
            },
            {
                mainNavItemName: "General Insurance",
                mainElement: '',
                legacyElement: '',
            },
            {
                mainNavItemName: "PMJJBY Scheme",
                mainElement: '',
                legacyElement: '',
            },
        ]
    },
    // Customer Service
    {
        mainNavItemName: "Customer Service",
        mainElement: '#topbar > div.light-orange > div > div:nth-child(6)',
        legacyElement: '#CUSTOMER_SERVICE',
        subLinks: [
            {
                mainNavItemName: "Service Request",
                mainElement: "#topbar > div.light-orange > div > div:nth-child(6) > div > div > div.mr-15 > a:has([src*='topMenuImages/RGNSER/RVMPSR.svg'])",
                legacyElement: "#CUSTOMER_SERVICE > ul > .submenu_links:has([id='Service-Requests'])",
            },
            {
                mainNavItemName: "My Mailbox",
                mainElement: '',
                legacyElement: '',
            },
            {
                mainNavItemName: "e-Locker",
                mainElement: '',
                legacyElement: '',
            },
            {
                mainNavItemName: "Tax Centre",
                mainElement: '',
                legacyElement: '',
            },
            {
                mainNavItemName: "Offers Near You",
                mainElement: '',
                legacyElement: '',
            },
            {
                mainNavItemName: "Campus Power",
                mainElement: '',
                legacyElement: '',
            },
        ]
    }
]
const getPageFromArray = (dataArray) => {
    const data = dataArray.find((item) => {
        // eslint-disable-next-line no-prototype-builtins
        if (item.hasOwnProperty('page')) {
            return item.page;
            // eslint-disable-next-line no-prototype-builtins
        } else if (item.hasOwnProperty('vpv')) {
            return item.vpv;
        } else {
            return null;
        }
    });
    return data.page || data.vpv;
};
// check if the step data in the local storage is as per the current step
const checkPageInVPVList = (searchVPV) => {
    const vpvArray = [];
    window.dataLayer.forEach(item => {
        // eslint-disable-next-line no-prototype-builtins
        if (item.hasOwnProperty('page')) {
            vpvArray.push(item.page);
            // eslint-disable-next-line no-prototype-builtins
        } else if (item.hasOwnProperty('vpv')) {
            vpvArray.push(item.vpv);
        } else {
            return 0
        };
    });
    return vpvArray.includes(searchVPV);
};

// get an array of all 
const ElemAllMain = topNavData.map(element => `element.mainElement > .dropdown-content`);
const ElemAllLegacy = topNavData.map(element => `element.legacyElement > .submenu`)

window.addEventListener('DOMContentLoaded', function () {
    // <!--- block 1 --->
    // check last tour step from local storage 
    let currentStepIndex = localStorage.getItem('currentStepIndex');
    let currentTourIndex = localStorage.getItem('tourInstanceCaller');
    // if current tour is active, continue
    // Check if currentTourIndex is not null or undefined
    console.log("Checking DAP utilities on loaded tour")
    console.log(currentTourIndex + " is the current tour")
    console.log(listOfTours[currentTourIndex] + " is its reference")
    if (currentTourIndex && listOfTours[currentTourIndex]) {
        console.log("Trying to load tour " + currentTourIndex + " or " + listOfTours[currentTourIndex])
        listOfTours[currentTourIndex].show(Number(currentStepIndex));
    } else {
        console.log('No matching class found or currentStepIndex is empty in local storage.');
    }
    // <!--- end of block 1 --->
}, false)


// Add a mouseover event listener to the document object
document.addEventListener("mouseover", function (event) {
    // Check if the event target matches the selector stored in ElemAllMain
    if (window.Shepherd.activeTour && (event.target.matches(ElemAllMain) || event.target.matches(ElemAllLegacy))) {
        // Call the showElementB function
        elementAction('show')
    }
});

// Add a mouseleave event listener to the document object
document.addEventListener("mouseleave", function (event) {
    // Check if the event target matches the selector stored in ElemAllMain
    if (window.Shepherd.activeTour && (event.target.matches(ElemAllMain) || event.target.matches(ElemAllLegacy))) {
        // Call the hideElementB function
        elementAction('hide')
    }
});

const elementAction = (action) => {
    if (window.Shepherd.activeTour && window.Shepherd.activeTour.currentStep && window.Shepherd.activeTour.currentStep.options.id.split('_')[1] === '2') {
        let shepherdInstance = window.Shepherd.activeTour;

        if (action === 'hide' && typeof shepherdInstance.hide === 'function') {
            shepherdInstance.hide();
        } else if (action === 'show' && typeof shepherdInstance.show === 'function') {
            shepherdInstance.show();
        }
    }
};

function returnMainMenuElement(topMenuName) {
    console.log('returnMainMenuElement', topMenuName);
    const topMenu = topNavData.find(menu => menu.mainNavItemName === topMenuName);
    if (!topMenu) {
        // Return an appropriate default value if the topMenuName is not found
        return "";
    }
    return checkPageInVPVList(dashboardPageVPV) ? topMenu.mainElement : topMenu.legacyElement;
}

function returnSubMenuElement(topMenuName, subMenuName) {
    console.log('returnSubMenuELement', subMenuName)
    const topMenu = topNavData.find(menu => menu.mainNavItemName === topMenuName);
    if (!topMenu || !topMenu.subLinks) {
        // Return an appropriate default value if the topMenuName is not found or if it has no subLinks
        return "";
    }
    const subMenu = topMenu.subLinks.find(sub => sub.mainNavItemName === subMenuName);
    if (!subMenu) {
        // Return an appropriate default value if the subMenuName is not found
        return "";
    }
    return checkPageInVPVList(dashboardPageVPV) ? subMenu.mainElement : subMenu.legacyElement;
}

const listOfTours = {
    'HowToBuyAFastTagTour': HowToBuyAFastTagTour,
    'HowToMakeICICIBankCreditCardPaymentTour': HowToMakeICICIBankCreditCardPaymentTour,
    'HowToBuyAMutualFundTour': HowToBuyAMutualFundTour,
    'HowToTransferFundsTour': HowToTransferFundsTour,
    'HowToPrematurelyCloseFDTour': HowToPrematurelyCloseFDTour,
    'HowToKnowAboutPreApprovedOffers': HowToKnowAboutPreApprovedOffers,
    'HowToApplyForICICIBankCreditCard': HowToApplyForICICIBankCreditCard
}

const journeysTestFunction = () => {
    console.log("Tester version 1")
    HowToBuyAFastTagTour
    HowToMakeICICIBankCreditCardPaymentTour
    HowToBuyAMutualFundTour
    HowToTransferFundsTour
    HowToPrematurelyCloseFDTour
    HowToKnowAboutPreApprovedOffers
    HowToApplyForICICIBankCreditCard
    console.log("Checking stability of menu links")
    console.log("For HowToMakeICICIBankCreditCardPaymentTour")
    returnMainMenuElement('Cards & Loans')
    returnSubMenuElement('Cards & Loans', 'Credit Cards')
    console.log("For HowToBuyFastTagTour")
    returnMainMenuElement("Payments & Transfer")
    returnSubMenuElement('Payments & Transfer', "Buy/Recharge Fastag")
    console.log("For HowToBuyMutualFundTour")
    returnMainMenuElement('Investments & Insurance')
    returnSubMenuElement('Investments & Insurance', 'Buy Mutual Funds')
    console.log("For HowToTransferFunds")
    returnMainMenuElement('Payments & Transfer')
    returnSubMenuElement('Payments & Transfer', 'Fund Transfer')
    console.log("For HowToPrematurelyCloseFDTour")
    returnMainMenuElement('Customer Service')
    returnSubMenuElement('Customer Service', 'Service Request')
    console.log("For HowToKnowAboutPreApprovedOffers")
    returnMainMenuElement('Cards & Loans')
    returnSubMenuElement('Cards & Loans', 'Loans')
    console.log("For HowToApplyForICICIBankCreditCard")
    returnMainMenuElement('Cards & Loans')
    returnSubMenuElement('Cards & Loans', 'Credit Cards')
}