var UCJTwoWheelerLoanTour = new Shepherd.Tour({
    tourName: "Apply for a two wheeler loan",
    instanceCaller: "UCJTwoWheelerLoanTour",
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

// Select the 'Investment and Insurance' button on the menubar on dashboard
UCJTwoWheelerLoanTour.addStep({
    id: "UCJTwoWheelerLoanTour_1",
    title: "1/13",
    text: "<p>Select state and location of your choice.</p><br /><p>Significance: Your selection will help us shortlist the available dealers for your preferred location.</p>",
    attachTo: {
        element: "#fillForm_manual > form > div > div:nth-child(3)",
        on: "right"
    },
    advanceOn: {
        selector: "#fillForm_manual > form > div > div:nth-child(3)",
        event: 'click',
    },
    pageLink: "/VPV/ucj/unified-two-wheeler-loan/home"
})


// Click on Buy Mutual Funds option in the drop-down menu > redirection
UCJTwoWheelerLoanTour.addStep({
    id: "UCJTwoWheelerLoanTour_2",
    title: "2/13",
    text: "<p>Select two-wheeler brand, model and variant.</p><br /><p>Significance: Your selection will help us shortlist the available dealers for your preferred bike model.</p>",
    attachTo: {
        element: "#AdditionalPage > div.page-content.stylesheet.center-all4.main-page.form-page > div > div.col-main.col-main-1 > div:nth-child(3)",
        on: "right"
    },
    advanceOn: {
        selector: "#AdditionalPage > div.page-content.stylesheet.center-all4.main-page.form-page > div > div.col-main.col-main-1 > div:nth-child(3)",
        event: 'click',
    },
    pageLink: "/VPV/ucj/unified-two-wheeler-loan/home"
})

// description
UCJTwoWheelerLoanTour.addStep({
    id: "UCJTwoWheelerLoanTour_3",
    title: "3/13",
    text: "<p>You can generate sanction letter in case dealer/location/brand of your choice is not available</p><br /><p>Significance: Your selection will help us shortlist the available dealers for your preferred bike model.</p>",
    attachTo: {
        element: "#AdditionalPage > div.page-content.stylesheet.center-all4.main-page.form-page > div > div.col-main.col-main-1 > div.style.mt-3.row > div:nth-child(2)",
        on: "right"
    },
    advanceOn: {
        selector: "#AdditionalPage > div.page-content.stylesheet.center-all4.main-page.form-page > div > div.col-main.col-main-1 > div.style.mt-3.row > div:nth-child(2)",
        event: 'click',
    },
    pageLink: "/VPV/ucj/unified-two-wheeler-loan/home",
    // beforeShowPromise: function() {
    //     if(true) {

    //     }
    // }
})

// UCJTwoWheelerLoanTour.start()


window.addEventListener('DOMContentLoaded', () => {
    console.log("DOM content loaded. Loading tour")
    // check last tour step from local storage 
    let currentStepIndex = localStorage.getItem('currentStepIndex');
    let currentTourIndex = localStorage.getItem('tourInstanceCaller');
    // if current tour is active, continue
    if (currentTourIndex === 'UCJTwoWheelerLoanTour') {
        if (Number(currentStepIndex) >= 1) {
            UCJTwoWheelerLoanTour.show(Number(currentStepIndex));
        }
    }
}, false)


// window.addEventListener('onKeyDown', () => {
//     console.log("DOM content loaded. Loading tour")
//     // check last tour step from local storage 
//     let currentStepIndex = localStorage.getItem('currentStepIndex');
//     let currentTourIndex = localStorage.getItem('tourInstanceCaller');
//     // if current tour is active, continue
//     if (currentTourIndex === 'UCJTwoWheelerLoanTour') {
//         if (Number(currentStepIndex) >= 1) {
//             UCJTwoWheelerLoanTour.show(Number(currentStepIndex));
//         }
//     }
// }, false)
