// This file contains all the utilities required by guided journey
// oldRIBDAPUtilities.js

/* eslint-disable prettier/prettier */
/* eslint-disable max-lines */

// const dashboardPageVPV = "/vpv/li/personal-banking/dashboardPage"

// // check if the step data in the local storage is as per the current step
// const getPageFromArray = (searchVPV) => {
//     const vpvArray = [];
//     window.dataLayer.forEach(item => {
//         // eslint-disable-next-line no-prototype-builtins
//         if (item.hasOwnProperty('page')) {
//             vpvArray.push(item.page);
//             // eslint-disable-next-line no-prototype-builtins
//         } else if (item.hasOwnProperty('vpv')) {
//             vpvArray.push(item.vpv);
//         } else {
//             return 0
//         };
//     });
//     return vpvArray.includes(searchVPV);
// };

window.addEventListener('load', function () {
    // check last tour step from local storage 
    let currentStepIndex = localStorage.getItem('currentStepIndex');
    let currentTourIndex = localStorage.getItem('tourInstanceCaller');
    // if current tour is active, continue
    // console.log("Page loaded, loading tour now")
    // Check if currentTourIndex is not null or undefined
    if (currentTourIndex && window.listOfTours[currentTourIndex]) {
        window.listOfTours[currentTourIndex].show(Number(currentStepIndex));
    } else {
        console.log('No matching class found or currentStepIndex is empty in local storage.');
    }
}, false)


// window.addEventListener('DOMContentLoaded', function () {
//     const OverviewElement = document.querySelector('#topbar > div.light-orange > div > div:nth-child(1)');
//     const BankAccountsElement = document.querySelector('#topbar > div.light-orange > div > div:nth-child(2)');
//     const PaymentsandTransferTabElement = document.querySelector('#topbar > div.light-orange > div > div:nth-child(3)');
//     const CardsAndLoansTabElement = document.querySelector('#topbar > div.light-orange > div > div:nth-child(4)');
//     const InvestmentsAndInsuranceTabElement = document.querySelector('#topbar > div.light-orange > div > div:nth-child(5)');
//     const CustomerServiceElement = document.querySelector('#topbar > div.light-orange > div > div:nth-child(6)');
//     const OverviewLegacyElement = document.querySelector('#OVERVIEW');
//     const BankAccountsLegacyElement = document.querySelector('#BANK_ACCOUNTS');
//     const PaymentsandTransferTabLegacyElement = document.querySelector('#PAYMENTS__TRANSFER');
//     const CardsAndLoansTabLegacyElement = document.querySelector('#CARDS__LOANS');
//     const InvestmentsAndInsuranceTabLegacyElement = document.querySelector('#INVESTMENTS__INSURANCE');
//     const CustomerServiceLegacyElement = document.querySelector('#CUSTOMER_SERVICE');

//     // if step is 2 and the user is on the dashboard page,
//     if (window.Shepherd.activeTour.currentStep.options.title.split('/')[0] === '2' && getPageFromArray(dashboardPageVPV)) {
//         let ActiveBarElement = null;
//         const topBarSelector =
//             window.Shepherd.activeTour.steps[0].options.advanceOn.selector;
//         switch (topBarSelector) {
//             case OverviewElement:
//                 ActiveBarElement = OverviewElement;
//                 break;
//             case BankAccountsElement:
//                 ActiveBarElement = BankAccountsElement;
//                 break;
//             case PaymentsandTransferTabElement:
//                 ActiveBarElement = PaymentsandTransferTabElement;
//                 break;
//             case CardsAndLoansTabElement:
//                 ActiveBarElement = CardsAndLoansTabElement;
//                 break;
//             case InvestmentsAndInsuranceTabElement:
//                 ActiveBarElement = InvestmentsAndInsuranceTabElement;
//                 break;
//             case CustomerServiceElement:
//                 ActiveBarElement = CustomerServiceElement;
//                 break;
//             default:
//                 console.log('No element found');
//         }
//         ActiveBarElement?.addEventListener('mouseenter', () => elementAction(window.Shepherd.activeTour.currentStep.options, 'show'));
//         ActiveBarElement?.addEventListener('mouseleave', () => elementAction(window.Shepherd.activeTour.currentStep.options, 'hide'));
//     }
//     if (window.Shepherd.activeTour.currentStep.options.title.split('/')[0] === '2b' && !getPageFromArray(dashboardPageVPV)) {
//         let ActiveBarElement = null;
//         const topBarSelector =
//             window.Shepherd.activeTour.steps[0].options.advanceOn.selector;
//         switch (topBarSelector) {
//             case OverviewLegacyElement:
//                 ActiveBarElement = OverviewLegacyElement;
//                 break;
//             case BankAccountsLegacyElement:
//                 ActiveBarElement = BankAccountsLegacyElement;
//                 break;
//             case PaymentsandTransferTabLegacyElement:
//                 ActiveBarElement = PaymentsandTransferTabLegacyElement;
//                 break;
//             case CardsAndLoansTabLegacyElement:
//                 ActiveBarElement = CardsAndLoansTabLegacyElement;
//                 break;
//             case InvestmentsAndInsuranceTabLegacyElement:
//                 ActiveBarElement = InvestmentsAndInsuranceTabLegacyElement;
//                 break;
//             case CustomerServiceLegacyElement:
//                 ActiveBarElement = CustomerServiceLegacyElement;
//                 break;
//             default:
//                 console.log('No element found');
//         }
//         ActiveBarElement?.addEventListener('mouseenter', () => elementAction(window.Shepherd.activeTour.currentStep.options, 'show'));
//         ActiveBarElement?.addEventListener('mouseleave', () => elementAction(window.Shepherd.activeTour.currentStep.options, 'hide'));
//     }
// });

// const elementAction = (stepIdentifier, action) => {
//     if (window.Shepherd.activeTour && window.Shepherd.activeTour.currentStep.options.id === stepIdentifier) {
//         let actionalble = window['shepherd'];
//         if (typeof actionalble === 'function') {
//             actionalble(action);
//         }
//     }
// };
