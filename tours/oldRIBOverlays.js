/* eslint-disable prettier/prettier */
/* eslint-disable max-lines */

// This file contains all the Overlay pages for RIB
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

// add a button prompt on the pages where overlay pages tour is available
window.addEventListener('DOMContentLoaded', function () {
    const GuideMeLinks = [
        {
            tour: 'WhatsOnBankAccountPageGuideMe',
            link: '/vpv/li/personal-banking/myacc/bankacc'
        },
        {
            tour: 'WhatsOnOtherBankAddPayee',
            link: '/vpv/li/personal-banking/pmt-tranf/managepayees'
        }
    ];
    const pageLink = getPageFromArray(window.dataLayer);
    console.log('DOM content loaded for guideMe button injection. Loading tour');
    // match if current pageLink is in the GuideMeLinks array
    const matchedLink = GuideMeLinks.find((link) => link.link === pageLink);

    // if matched, add a button to the left corner, vertically centered on the page
    if (matchedLink) {
        var button = document.createElement('button');
        button.innerHTML = 'Watch Demo';
        button.classList.add('shepherd-button-guide-me');
        // button.classList.add("shepherd-button-guide-me");
        // button.style.cssText = "position: fixed; left: 0; top: 50%; z-index: 500; padding: 5px 13px; border-radius: 5px 5px 0 0; border-color: rgb(239, 124, 0); color: #ffffff; background-color: rgb(239, 124, 0); transform: translate(-30px, 0%) rotate(90deg); cursor: pointer;"
        if (matchedLink.tour === 'WhatsOnBankAccountPageGuideMe') {
            button.onclick = function () {
                WhatsOnBankAccountPageGuideMe.start();
            };
        } else if (matchedLink.tour === 'WhatsOnOtherBankAddPayee') {
            button.onclick = function () {
                WhatsOnOtherBankAddPayee.start();
            };
        }
        document.body.appendChild(button);
    }
});

// eslint-disable-next-line no-undef
var WhatsOnBankAccountPageGuideMe = new Shepherd.Tour({
    tourName: "Guide Me: What's on Bank Account Page",
    instanceCaller: "WhatsOnBankAccountPageGuideMe",
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
    useModalOverlay: true,
});

// Code for Bank Account page overlay pages tour
WhatsOnBankAccountPageGuideMe.addStep({
    id: "WhatsOnBankAccountPageGuideMe_1",
    title: "1/6",
    text: "Welcome to your account page. Here you can view your account summary, account details, and account statements.",
    buttons: [
        {
            text: 'Next',
            action: WhatsOnBankAccountPageGuideMe.next
        },
        {
            text: 'Cancel',
            action: WhatsOnBankAccountPageGuideMe.cancel,
            secondary: true
        }
    ],
    pageLink: "/vpv/li/personal-banking/myacc/bankacc"
})

WhatsOnBankAccountPageGuideMe.addStep({
    id: "WhatsOnBankAccountPageGuideMe_2",
    title: "2/6",
    text: "This is your account summary. Here you can view your account balance.",
    attachTo: {
        element: "#AccountsTable_TotalBalance-MonthsTurnover > tbody",
        on: "bottom"
    },
    buttons: [
        {
            text: 'Next',
            action: WhatsOnBankAccountPageGuideMe.next
        },
        {
            text: 'Back',
            action: WhatsOnBankAccountPageGuideMe.back,
            secondary: true
        }
    ],
    pageLink: "/vpv/li/personal-banking/myacc/bankacc"
})

WhatsOnBankAccountPageGuideMe.addStep({
    id: "WhatsOnBankAccountPageGuideMe_3",
    title: "3/6",
    text: "List of all accounts with summary is displayed here. Select that account using the radio button to interact with it.",
    attachTo: {
        element: "#SummaryList",
        on: "bottom"
    },
    buttons: [
        {
            text: 'Next',
            action: WhatsOnBankAccountPageGuideMe.next
        },
        {
            text: 'Back',
            action: WhatsOnBankAccountPageGuideMe.back,
            secondary: true
        }
    ],
    pageLink: "/vpv/li/personal-banking/myacc/bankacc"
})

WhatsOnBankAccountPageGuideMe.addStep({
    id: "WhatsOnBankAccountPageGuideMe_4i",
    title: "4/6",
    text: "Use these action buttons to view more information about your account(s). You can also use the dropdown to raise service requests like Account Linking, Cheque Status Enquiry, Cheque stopping, Debit/ATM card blocking and Aadhaar number updation",
    showOn: function () {
        if (document.querySelector("#ListTableWithCtrls\\.Rb1_mr.m_table_btm_btn_bar.m_cf.labelWrapper")) {
            return true
        } else {
            return false
        }
    },
    attachTo: {
        element: "#ListTableWithCtrls\\.Rb1_mr.m_table_btm_btn_bar.m_cf.labelWrapper",
        on: "bottom"
    },
    buttons: [
        {
            text: 'Next',
            action: WhatsOnBankAccountPageGuideMe.next
        },
        {
            text: 'Back',
            action: WhatsOnBankAccountPageGuideMe.back,
            secondary: true
        }
    ],
    pageLink: "/vpv/li/personal-banking/myacc/bankacc"
})

WhatsOnBankAccountPageGuideMe.addStep({
    id: "WhatsOnBankAccountPageGuideMe_4ii",
    title: "4/6",
    text: "Use these action buttons to view more information about your account(s). You can also use the dropdown to raise service requests like Account Linking, Cheque Status Enquiry, Cheque stopping, Debit/ATM card blocking and Aadhaar number updation",
    showOn: function () {
        if (document.querySelector("#ListTableWithCtrlsDEH\\.Rb1_mr.m_table_btm_btn_bar.m_cf.labelWrapper")) {
            return true
        }
        return false
    },
    beforeShowPromise: function () {
        document.querySelector("#footerInner").click();
    },
    attachTo: {
        element: "#ListTableWithCtrlsDEH\\.Rb1_mr.m_table_btm_btn_bar.m_cf.labelWrapper",
        on: "bottom"
    },
    buttons: [
        {
            text: 'Next',
            action: WhatsOnBankAccountPageGuideMe.next
        },
        {
            text: 'Back',
            action: WhatsOnBankAccountPageGuideMe.back,
            secondary: true
        }
    ],
    pageLink: "/vpv/li/personal-banking/myacc/bankacc"
})

WhatsOnBankAccountPageGuideMe.addStep({
    id: "WhatsOnBankAccountPageGuideMe_5",
    title: "5/6",
    text: "You can also download your acccount details in PDF or XLS format. Click on 'OK' to download the file after selecting the desired format.",
    attachTo: {
        element: "#NavPanel_mr\\.Rb1",
        on: "left"
    },
    buttons: [
        {
            text: 'Next',
            action: WhatsOnBankAccountPageGuideMe.next
        },
        {
            text: 'Back',
            action: WhatsOnBankAccountPageGuideMe.back,
            secondary: true
        }
    ],
    pageLink: "/vpv/li/personal-banking/myacc/bankacc"
})

WhatsOnBankAccountPageGuideMe.addStep({
    id: "WhatsOnBankAccountPageGuideMe_6",
    title: "6/6",
    text: "That is all for this tour! Click on 'Finish' to end the tour.",
    buttons: [
        {
            text: 'Finish',
            action: WhatsOnBankAccountPageGuideMe.next
        },
        {
            text: 'Back',
            action: WhatsOnBankAccountPageGuideMe.back,
            secondary: true
        }
    ],
    pageLink: "/vpv/li/personal-banking/myacc/bankacc"
})

// code for Add Payee: Other bank overlay pages tour
// eslint-disable-next-line no-undef
var WhatsOnOtherBankAddPayee = new Shepherd.Tour({
    tourName: "Guide Me: What's on Add Other bank payee page?",
    instanceCaller: "WhatsOnOtherBankAddPayee",
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

WhatsOnOtherBankAddPayee.addStep({
    id: "WhatsOnOtherBankAddPayee_1",
    title: "1/9",
    text: "<p>Welcome to Add Payee: Other Bank page. This tour will guide you through the options available on the page.</p>",
    buttons: [
        {
            text: 'Next',
            action: WhatsOnOtherBankAddPayee.next
        },
        {
            text: 'Cancel',
            action: WhatsOnOtherBankAddPayee.cancel,
            secondary: true
        }
    ],
    pageLink: "/vpv/li/personal-banking/pmt-tranf/managepayees"
})

WhatsOnOtherBankAddPayee.addStep({
    id: "WhatsOnOtherBankAddPayee_2",
    title: "2/9",
    text: "Enter the Payee Account Number as it is displayed on your payee's bank records.",
    buttons: [
        {
            text: 'Next',
            action: WhatsOnOtherBankAddPayee.next
        },
        {
            text: 'Back',
            action: WhatsOnOtherBankAddPayee.back,
            secondary: true
        }
    ],
    attachTo: {
        element: "p#DispFormWithTableContent\\.Ryz1_mr",
        on: "bottom"
    },
    pageLink: "/vpv/li/personal-banking/pmt-tranf/managepayees"
})

WhatsOnOtherBankAddPayee.addStep({
    id: "WhatsOnOtherBankAddPayee_3",
    title: "3/9",
    beforeShowPromise: function () {
        document.querySelector("#main > div.wrapper").click();
    },
    text: "Enter the Nickname of your choice as you want this payee to be visible on your payee page.",
    buttons: [
        {
            text: 'Next',
            action: WhatsOnOtherBankAddPayee.next
        },
        {
            text: 'Back',
            action: WhatsOnOtherBankAddPayee.back,
            secondary: true
        }
    ],

    attachTo: {
        element: "p#DispFormWithTableContent\\.Ryz2_mr",
        on: "bottom"
    },
    pageLink: "/vpv/li/personal-banking/pmt-tranf/managepayees"
})

WhatsOnOtherBankAddPayee.addStep({
    id: "WhatsOnOtherBankAddPayee_4",
    title: "4/9",
    beforeShowPromise: function () {
        document.querySelector("#DispFormWithTableContent\\.Ryz7_mr\\.C2 > span > span > div > div.selectedTxt").click();
    },
    text: "Select an account type for the payee account you are adding. You can select between Savings, Current Account, Cash Credit or Loan Account from this dropdown.",
    buttons: [
        {
            text: 'Next',
            action: WhatsOnOtherBankAddPayee.next
        },
        {
            text: 'Back',
            action: WhatsOnOtherBankAddPayee.back,
            secondary: true
        }
    ],
    attachTo: {
        element: "#DispFormWithTableContent\\.Ryz7_mr",
        on: "bottom"
    },
    pageLink: "/vpv/li/personal-banking/pmt-tranf/managepayees"
})

WhatsOnOtherBankAddPayee.addStep({
    id: "WhatsOnOtherBankAddPayee_5",
    title: "5/9",
    beforeShowPromise: function () {
        document.querySelector("#main > div.wrapper").click();
    },
    text: "Enter the payee's bank account IFSC code. Not sure about the IFSC code? You can search for the IFSC code by clicking on the <strong>Search</strong> button.",
    buttons: [
        {
            text: 'Next',
            action: WhatsOnOtherBankAddPayee.next
        },
        {
            text: 'Back',
            action: WhatsOnOtherBankAddPayee.back,
            secondary: true
        }
    ],
    attachTo: {
        element: "#DispFormWithTableContent\\.Ryz6_mr",
        on: "bottom"
    },
    pageLink: "/vpv/li/personal-banking/pmt-tranf/managepayees"
})

WhatsOnOtherBankAddPayee.addStep({
    id: "WhatsOnOtherBankAddPayee_6",
    title: "6/9",
    text: "Enter the Account number of the payee. It is critical that you get this number right to avoid sending money to the wrong account.",
    buttons: [
        {
            text: 'Next',
            action: WhatsOnOtherBankAddPayee.next
        },
        {
            text: 'Back',
            action: WhatsOnOtherBankAddPayee.back,
            secondary: true
        }
    ],
    attachTo: {
        element: "#DispFormWithTableContent\\.Ryz3_mr",
        on: "bottom"
    },
    pageLink: "/vpv/li/personal-banking/pmt-tranf/managepayees"
})

WhatsOnOtherBankAddPayee.addStep({
    id: "WhatsOnOtherBankAddPayee_7",
    title: "7/9",
    text: "Re-enter the account number to make sure you got it right the first time. You can validate the payee you just added by clicking on the <span style='color: red;'><u>Validate now!</u></span> hyperlink.",
    buttons: [
        {
            text: 'Next',
            action: WhatsOnOtherBankAddPayee.next
        },
        {
            text: 'Back',
            action: WhatsOnOtherBankAddPayee.back,
            secondary: true
        }
    ],
    attachTo: {
        element: "#DispFormWithTableContent\\.Ryz5_mr",
        on: "bottom"
    },
    pageLink: "/vpv/li/personal-banking/pmt-tranf/managepayees"
})

WhatsOnOtherBankAddPayee.addStep({
    id: "WhatsOnOtherBankAddPayee_8",
    title: "8/9",
    text: "Payee alert will be sent to this mobile number. Keep it handy.",
    buttons: [
        {
            text: 'Next',
            action: WhatsOnOtherBankAddPayee.next
        },
        {
            text: 'Back',
            action: WhatsOnOtherBankAddPayee.back,
            secondary: true
        }
    ],
    attachTo: {
        element: "#DispFormWithTableContent\\.Ryz15_mr",
        on: "bottom"
    },
    pageLink: "/vpv/li/personal-banking/pmt-tranf/managepayees"
})

WhatsOnOtherBankAddPayee.addStep({
    id: "WhatsOnOtherBankAddPayee_9",
    title: "9/9",
    text: "That's all for this guide. Click on <strong>Next</strong> to go to the confirmation page to finalize the payee addition.",
    buttons: [
        {
            text: 'Complete',
            action: WhatsOnOtherBankAddPayee.complete
        },
        {
            text: 'Back',
            action: WhatsOnOtherBankAddPayee.back,
            secondary: true
        }
    ],
    pageLink: "/vpv/li/personal-banking/pmt-tranf/managepayees"
})