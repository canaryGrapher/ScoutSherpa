/* eslint-disable prettier/prettier */
export function adobeTrack(props) {
    const dataLayer = {
        "event": "ctaClick",
        "web": {
            "webInteraction": {
                "linkClicks": {
                    "value": 1 // to be shared by adobe team
                },
                "name": `Guided Journey - ${props.ctaAction}`,
                "URL": window.location.href,
                "type": "button" // to be discussed - kind of button (btn/toggle) string value
            }
        },
        "_icicibank": {
            "pageInfo": window.adobeDataLayer[0]._icicibank.pageInfo,
            "ctaInfo": {
                "ctaName": `${props.ctaAction} - ${props.journeyName}`,
                "ctaRegion": `${props.stepName}`,
                "ctaType": "button",
                "ctaURL": ""
            },
            "channelInfo": window.adobeDataLayer[0]._icicibank.channelInfo,
            "userInfo": window.adobeDataLayer[0]._icicibank.userInfo,
            "productInfo": window.adobeDataLayer[0]._icicibank.productInfo,
            "identities": window.adobeDataLayer[0]._icicibank.identities,
        }
    }

    window.adobeDataLayer.push(dataLayer)
}