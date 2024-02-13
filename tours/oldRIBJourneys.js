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
var HowToMakeICICIBankCreditCardPaymentTourTemp = new Shepherd.Tour({
    tourName: "How to make ICICI bank credit card payment?",
    instanceCaller: "HowToMakeICICIBankCreditCardPaymentTourTemp",
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
HowToMakeICICIBankCreditCardPaymentTourTemp.addStep({
    id: "HowToMakeICICIBankCreditCardPaymentTourTemp_0",
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
            action: HowToMakeICICIBankCreditCardPaymentTourTemp.complete
        },
        {
            text: 'Cancel',
            action: HowToMakeICICIBankCreditCardPaymentTourTemp.cancel,
            secondary: true
        }
    ]
})
// Select the 'Cards & Loans' button on the menubar on dashboard
HowToMakeICICIBankCreditCardPaymentTourTemp.addStep({
    id: "HowToMakeICICIBankCreditCardPaymentTourTemp_1a",
    title: "1/5",
    text: "Move your mouse over 'Cards & Loans'",
    showOn: () => {
        checkIfDashboard()
    },
    attachTo: {
        element: returnMainMenuElement('Cards & Loans', "legacy"),
        on: 'left'
    },
    when: {
        show: () => {
            persitentMenu('Customer Service')
        },
        next: () => {
            removePersistentMenu('Customer Service')
        },
        cancel: () => {
            removePersistentMenu('Customer Service')
        }
    },
    advanceOn: {
        element: returnMainMenuElement('Cards & Loans', "legacy"),
        on: 'click'
    }
})
// Select the 'Credit Cards' sub-link under 'Cards & Loans'
HowToMakeICICIBankCreditCardPaymentTourTemp.addStep({
    id: "HowToMakeICICIBankCreditCardPaymentTourTemp_2a",
    title: "2/5",
    text: "Click on 'Credit Cards'",
    showOn: () => {
        checkIfDashboard()
    },
    attachTo: {
        element: returnSubMenuElement('Credit Cards', "legacy"),
        on: 'left'
    },

})
// Select the credit card you want to pay bill for
HowToMakeICICIBankCreditCardPaymentTourTemp.addStep({
    id: "HowToMakeICICIBankCreditCardPaymentTourTemp_3",
    title: "3/3",
    text: "Select the credit you want to make the payment for using the tab(s) on the top and click on 'Pay Bill' button to make the payment.",
    buttons: [
        {
            text: 'Understood',
            action: HowToMakeICICIBankCreditCardPaymentTourTemp.complete
        },
        {
            text: 'Cancel',
            action: HowToMakeICICIBankCreditCardPaymentTourTemp.cancel,
            secondary: true
        }
    ]
})