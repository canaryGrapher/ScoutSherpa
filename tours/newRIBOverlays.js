/* eslint-disable prettier/prettier */
window.addEventListener('DOMContentLoaded', function () {
    const GuideMeLinks = [
        {
            tour: 'GuideMeWhatsOnNewRIBAccountPage',
            link: '/bank-account'
        }
    ];
    // match if current pageLink is in the GuideMeLinks array
    const matchedLink = GuideMeLinks.find(
        (link) => link.link === window.location.pathname
    );

    // if matched, add a button to the left corner, vertically centered on the page
    if (matchedLink) {
        var demoInitiator = document.createElement('div');
        demoInitiator.innerHTML = `<div _ngcontent-aqm-c82="" class="service-container ng-tns-c82-5" style="margin-top: 10px;"
        onmouseenter="document.getElementById('watchDemoToolTip').display = 'block';"
        onmouseleave="document.getElementById('watchDemoToolTip').display = 'none';">
        <div _ngcontent-aqm-c82="" class="service-img ng-tns-c82-5">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#E77817" />
                <path
                    d="M14 26.6123V13.4104C14 11.8829 15.6432 10.9192 16.9764 11.665L28.8581 18.3114C30.2275 19.0775 30.2217 21.0501 28.8479 21.8081L16.9662 28.3635C15.6332 29.0989 14 28.1347 14 26.6123Z"
                    fill="white" stroke="white" />
            </svg>
            <div _ngcontent-aqm-c82="" id="watchDemoToolTip" style="display: none;"
                class="tooltip-new font-11 font-weight-normal color-white ng-tns-c82-5 ng-trigger ng-trigger-enterAnimation ng-star-inserted">
                Watch Demo </div>
   
        </div>
    </div>`;
        if (matchedLink.tour === 'GuideMeWhatsOnNewRIBAccountPage') {
            console.log(
                'DOM content loaded for guideMe button injection. Loading tour'
            );
            demoInitiator.onclick = function () {
                GuideMeWhatsOnNewRIBAccountPage.start();
            };
        }
        const quickLinks = document.querySelector('div.services-container');
        quickLinks.appendChild(demoInitiator);
    }
});

// eslint-disable-next-line no-undef
var GuideMeWhatsOnNewRIBAccountPage = new Shepherd.Tour({
    tourName: "Guide Me: What's on new Bank account page",
    instanceCaller: 'GuideMeWhatsOnNewRIBAccountPage',
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
    useModalOverlay: true
});

GuideMeWhatsOnNewRIBAccountPage.addStep({
    id: 'GuideMeWhatsOnNewRIBAccountPage_1',
    title: '1/7',
    text: 'Welcome to your new Bank Accounts page. All your account information is visible here.',
    buttons: [
        {
            text: 'Next',
            action: GuideMeWhatsOnNewRIBAccountPage.next
        },
        {
            text: 'Cancel',
            action: GuideMeWhatsOnNewRIBAccountPage.cancel,
            secondary: true
        }
    ],
    pageLink: '/bank-account'
});

GuideMeWhatsOnNewRIBAccountPage.addStep({
    id: 'GuideMeWhatsOnNewRIBAccountPage_2',
    title: '2/7',
    text: 'All your accounts are visible here. You can select any one of these accounts to view its details.',
    attachTo: {
        element: document.querySelector('app-account-type'),
        on: 'bottom'
    },
    buttons: [
        {
            text: 'Next',
            action: GuideMeWhatsOnNewRIBAccountPage.next
        },
        {
            text: 'Back',
            action: GuideMeWhatsOnNewRIBAccountPage.back,
            secondary: true
        }
    ],
    pageLink: '/bank-account'
});

GuideMeWhatsOnNewRIBAccountPage.addStep({
    id: 'GuideMeWhatsOnNewRIBAccountPage_3',
    title: '3/7',
    text: 'Your account information including your balances are is visible here.',
    attachTo: {
        element: document.querySelector('#acc-det'),
        on: 'right'
    },
    buttons: [
        {
            text: 'Next',
            action: GuideMeWhatsOnNewRIBAccountPage.next
        },
        {
            text: 'Back',
            action: GuideMeWhatsOnNewRIBAccountPage.back,
            secondary: true
        }
    ],
    pageLink: '/bank-account'
});

GuideMeWhatsOnNewRIBAccountPage.addStep({
    id: 'GuideMeWhatsOnNewRIBAccountPage_4',
    title: '4/7',
    text: 'You can use these options to manage your accounts through service requests.',
    attachTo: {
        element: document.querySelectorAll(
            '#service-card-zero.service-request-section'
        )[2],
        on: 'left'
    },
    buttons: [
        {
            text: 'Next',
            action: GuideMeWhatsOnNewRIBAccountPage.next
        },
        {
            text: 'Back',
            action: GuideMeWhatsOnNewRIBAccountPage.back,
            secondary: true
        }
    ],
    pageLink: '/bank-account'
});

GuideMeWhatsOnNewRIBAccountPage.addStep({
    id: 'GuideMeWhatsOnNewRIBAccountPage_5',
    title: '5/7',
    text: 'Need to buy a Car or a Bike? These are the offers the bank has for you.',
    attachTo: {
        element: document.querySelector(
            '#view-statement-opened > div > div.col-md-5.col-12.inside-section-padding.pt-0.pl-0.pr-0.pd-mr > div.white-box'
        ),
        on: 'left'
    },
    buttons: [
        {
            text: 'Next',
            action: GuideMeWhatsOnNewRIBAccountPage.next
        },
        {
            text: 'Back',
            action: GuideMeWhatsOnNewRIBAccountPage.back,
            secondary: true
        }
    ],
    pageLink: '/bank-account'
});

GuideMeWhatsOnNewRIBAccountPage.addStep({
    id: 'GuideMeWhatsOnNewRIBAccountPage_6',
    title: '6/7',
    text: 'These are the transactions that you have recently made. You can also search for a particular transaction using the search bar provided on top of this element. If you want to download your transactions statments in either PDF or XLS format based on your requirement, you can use the buttons at the bottom.',
    attachTo: {
        element: document.querySelectorAll('#rec-trans-id')[1],
        on: 'right'
    },
    buttons: [
        {
            text: 'Next',
            action: GuideMeWhatsOnNewRIBAccountPage.next
        },
        {
            text: 'Back',
            action: GuideMeWhatsOnNewRIBAccountPage.back,
            secondary: true
        }
    ],
    pageLink: '/bank-account'
});

GuideMeWhatsOnNewRIBAccountPage.addStep({
    id: 'GuideMeWhatsOnNewRIBAccountPage_7',
    title: '7/7',
    text: "That's all for this page. Please feel free to revisit this demo if you need further clarification.",
    buttons: [
        {
            text: 'Complete',
            action: GuideMeWhatsOnNewRIBAccountPage.complete
        },
        {
            text: 'Back',
            action: GuideMeWhatsOnNewRIBAccountPage.back,
            secondary: true
        }
    ],
    pageLink: '/bank-account'
});

// var GuideMeWhatsOnNewRIBCreditCardPage = new Shepherd.Tour({
//     tourName: 'Guide Me: What\'s on new Credit Card page',
//     instanceCaller: 'GuideMeWhatsOnNewRIBCreditCardPage',
//     defaultStepOptions: {
//         cancelIcon: {
//             enabled: true
//         },
//         scrollTo: {
//             behavior: 'smooth',
//             block: 'center'
//         },
//         arrow: true
//     },
//     useModalOverlay: true
// });

// GuideMeWhatsOnNewRIBCreditCardPage.addStep({
//     id: 'GuideMeWhatsOnNewRIBCreditCardPage_8',
//     title: '1/8',
//     text: "That's all for this page. Please feel free to revisit this demo if you need further clarification.",
//     buttons: [
//         {
//             text: 'Next',
//             action: GuideMeWhatsOnNewRIBCreditCardPage.next
//         },
//         {
//             text: 'Back',
//             action: GuideMeWhatsOnNewRIBCreditCardPage.back,
//             secondary: true
//         }
//     ],
//     pageLink: '/bank-account'
// });
