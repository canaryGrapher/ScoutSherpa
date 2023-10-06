// overlay page code will go here
// Path: tours/newRIBOverlayPages.js
var GuideMeWhatsOnNewRIBAccountsPage = new Shepherd.Tour({
		tourName: "Guide Me: What's on new Bank Account Page",
		instanaceCaller: "GuideMeWhatsOnNewRIBAccountsPage",
		defaultStepOptions: {
			cancelIcon: {
				enabled: true
			},
			scrollTo: {
				behavior: 'smooth',
				block: 'center',
			},
			arrow: true
		},
		useModalOverlay: true
});

GuideMeWhatsOnNewRIBAccountsPage.addStep({
		id: 'GuideMeWhatsOnNewRIBAccountsPage_1',
		title: '1/4',
		text: 'Welcome to your new Bank Accounts page. All your account information is visible here.',
		buttons: [
			{
				text: 'Next',
				action: GuideMeWhatsOnNewRIBAccountsPage.next
			},
			{
				text: 'Cancel',
				action: GuideMeWhatsOnNewRIBAccountsPage.cancel,
				secondary: true
			},
			pageLink: '/bank-account'
});