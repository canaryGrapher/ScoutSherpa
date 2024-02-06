/* eslint-disable prettier/prettier */

// Updated: February 4, 2024
// update 1: removed dependency on Page VPVs
// All overlays for new RIB are stored here
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
});