// This file contains all the utilities required by guided journey
// oldRIBDAPUtilities.js

/* eslint-disable prettier/prettier */
/* eslint-disable max-lines */
const dashboardVPV = "/vpv/li/personal-banking/dashboardPage"

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

const dropdownMenuMarkings = [
    {
        name: "Overview",
        main: "#topbar > div.light-orange > div > div:nth-child(1) > div",
        legacy: "#OVERVIEW>#child"
    },
    {
        name: "Bank Accounts",
        main: "#topbar > div.light-orange > div > div:nth-child(2) > div",
        legacy: "#BANK_ACCOUNTS>#child"
    },
    {
        name: "Payments and Transfer",
        main: "#topbar > div.light-orange > div > div:nth-child(3) > div",
        legacy: "#PAYMENTS__TRANSFER>#child"
    },
    {
        name: "Cards & Loans",
        main: "#topbar > div.light-orange > div > div:nth-child(4) > div",
        legacy: "#CARDS__LOANS>#child"
    },
    {
        name: "Investments & Insurance",
        main: "#topbar > div.light-orange > div > div:nth-child(5) > div",
        legacy: "#INVESTMENTS__INSURANCE>#child"
    },
    {
        name: "Customer Service",
        main: "#topbar > div.light-orange > div > div:nth-child(6) > div",
        legacy: "#CUSTOMER_SERVICE>#child"
    },
]

window.addEventListener('load', function () {
    // <!--- block 1 --->
    // check last tour step from local storage 
    let currentStepIndex = localStorage.getItem('currentStepIndex');
    let currentTourIndex = localStorage.getItem('tourInstanceCaller');
    // if current tour is active, continue
    if (currentTourIndex) {
        console.log("Checking DAP utilities on loaded tour")
        console.log(currentTourIndex + " is the current tour")
        eval(`${currentTourIndex}.show(${Number(currentStepIndex)})`)
    }
    else {
        console.log('No active tour yet');
    }
}, false)

const checkIfDashboard = async () => {
    try {
        const condition = window.hasOwnProperty('dataLayer') && dataLayer.length > 0;

        // Use await to wait for the promise to resolve
        await waitFor(condition, 5000);

        const vpvArray = [];
        window.dataLayer.map(item => {
            if (item.hasOwnProperty('page')) {
                vpvArray.push(item.page);
            } else if (item.hasOwnProperty('vpv')) {
                vpvArray.push(item.vpv);
            }
            // No need for an else statement here
        });

        // Return the result here
        return vpvArray.includes(dashboardVPV);
    } catch (e) {
        console.error('Fetching dataLayer timed out, switching to default');
        // Return a default value in case of a timeout
        return true;
    }
};

function returnMainMenuElement(topMenuName, mode) {
    const topMenu = topNavData.find(menu => menu.mainNavItemName === topMenuName);
    const element = mode === "legacy" ? topMenu.legacyElement : topMenu.mainElement;
    return element
}
function returnSubMenuElement(topMenuName, subMenuName, mode) {
    const topMenu = topNavData.find(menu => menu.mainNavItemName === topMenuName);
    const subMenu = topMenu.subLinks.find(sub => sub.mainNavItemName === subMenuName);
    const element = mode === 'legacy' ? subMenu.legacyElement : subMenu.mainElement;
    return element
}

function persitentMenu(name, mode) {
    const elementMap = dropdownMenuMarkings.find(menu => menu.name === name);
    if (mode === "legacy") {
        document.querySelector(elementMap?.legacy).style.display = 'block';
    } else {
        document.querySelector(elementMap?.main).style.display = 'block';
    }
}

function removePersistentMenu(name, mode) {
    const elementMap = dropdownMenuMarkings.find(menu => menu.name === name);
    if (mode === "legacy") {
        document.querySelector(elementMap?.legacy).style.display = '';
    } else {
        document.querySelector(elementMap?.main).style.display = '';
    }
}