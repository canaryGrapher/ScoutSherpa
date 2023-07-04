console.log("Two wheeler loan tour load")
let TwoWheelerLoanUCJTour = new Shepherd.Tour({
    tourName: 'Get a Two Wheeler loan',
    instanceCaller: 'TwoWheelerLoanUCJTour',
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
