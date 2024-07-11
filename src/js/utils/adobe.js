/* eslint-disable prettier/prettier */
export function adobeTrack(props) {
    const dataLayer = {
        "event": "ctaClick",
        "web": {
            "webInteraction": {
                "linkClicks": {
                    "value": 1
                },
                "name": `Guided Journey - ${props.ctaAction}`,
                "URL": window.location.href,
                "type": "button"
            }
        },
        "_icicibank": {
            "pageInfo": window.adobeDataLayer[0]?._icicibank.pageInfo,
            "ctaInfo": {
                "ctaName": `${props.ctaAction} - ${props.stepName} - ${props.journeyName}`,
                "ctaRegion": "Guided Journey",
                "ctaType": "button",
                "ctaURL": window.location.href
            },
            "channelInfo": window.adobeDataLayer[0]?._icicibank.channelInfo,
            "userInfo": window.adobeDataLayer[0]?._icicibank.userInfo,
            "productInfo": window.adobeDataLayer[0]?._icicibank.productInfo,
            "identities": window.adobeDataLayer[0]?._icicibank.identities,
        }
    }

    window.adobeDataLayer.push(dataLayer)
}