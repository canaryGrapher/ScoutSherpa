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

window.addEventListener('DOMContentLoaded', function () {
    // check last tour step from local storage 
    // <!--- block 1 --->
    let currentStepIndex = localStorage.getItem('currentStepIndex');
    let currentTourIndex = localStorage.getItem('tourInstanceCaller');
    // if current tour is active, continue
    // console.log("Page loaded, loading tour now")
    // Check if currentTourIndex is not null or undefined
    console.log("Checking DAP utilities on loaded tour")
    console.log(currentTourIndex + " is the current tour")
    console.log(window.listOfTours[currentTourIndex] + " is its reference")
    if (currentTourIndex && window.listOfTours[currentTourIndex]) {
        console.log("Trying to load tour " + currentTourIndex + " or " + window.listOfTours[currentTourIndex])
        window.listOfTours[currentTourIndex].show(Number(currentStepIndex));
    } else {
        console.log('No matching class found or currentStepIndex is empty in local storage.');
    }
    // <!--- end of block 1 --->

    // <!--- block 2 --->
    // const OverviewElement = document.querySelector('#topbar > div.light-orange > div > div:nth-child(1)');
    // const BankAccountsElement = document.querySelector('#topbar > div.light-orange > div > div:nth-child(2)');
    // const PaymentsandTransferTabElement = document.querySelector('#topbar > div.light-orange > div > div:nth-child(3)');
    // const CardsAndLoansTabElement = document.querySelector('#topbar > div.light-orange > div > div:nth-child(4)');
    // const InvestmentsAndInsuranceTabElement = document.querySelector('#topbar > div.light-orange > div > div:nth-child(5)');
    // const CustomerServiceElement = document.querySelector('#topbar > div.light-orange > div > div:nth-child(6)');
    // const OverviewLegacyElement = document.querySelector('#OVERVIEW');
    // const BankAccountsLegacyElement = document.querySelector('#BANK_ACCOUNTS');
    // const PaymentsandTransferTabLegacyElement = document.querySelector('#PAYMENTS__TRANSFER');
    // const CardsAndLoansTabLegacyElement = document.querySelector('#CARDS__LOANS');
    // const InvestmentsAndInsuranceTabLegacyElement = document.querySelector('#INVESTMENTS__INSURANCE');
    // const CustomerServiceLegacyElement = document.querySelector('#CUSTOMER_SERVICE');
    // <!--- end of block 2 --->
}, false)

const elementAction = (stepIdentifier, action) => {
    if (window.Shepherd.activeTour && window.Shepherd.activeTour.currentStep.options.id === stepIdentifier) {
        let actionalble = window['shepherd'];
        if (typeof actionalble === 'function') {
            actionalble(action);
        }
    }
};

function returnMainMenuElement(topMenuName) {
    console.log('returnMainMenuElement', topMenuName);
    const topMenu = topNavData.find(menu => menu.mainNavItemName === topMenuName);
    if (!topMenu) {
        // Return an appropriate default value if the topMenuName is not found
        return null;
    }
    return checkPageInVPVList(dashboardPageVPV) ? topMenu.mainElement : topMenu.legacyElement;
}

function returnSubMenuElement(topMenuName, subMenuName) {
    console.log('returnSubMenuELement', subMenuName)
    const topMenu = topNavData.find(menu => menu.mainNavItemName === topMenuName);
    if (!topMenu || !topMenu.subLinks) {
        // Return an appropriate default value if the topMenuName is not found or if it has no subLinks
        return null;
    }
    const subMenu = topMenu.subLinks.find(sub => sub.mainNavItemName === subMenuName);
    if (!subMenu) {
        // Return an appropriate default value if the subMenuName is not found
        return null;
    }
    return checkPageInVPVList(dashboardPageVPV) ? subMenu.mainElement : subMenu.legacyElement;
}