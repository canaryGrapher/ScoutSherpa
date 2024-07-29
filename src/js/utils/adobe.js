/* eslint-disable prettier/prettier */
export function adobeTrack(props) {

    const validItems = window.adobeDataLayer.filter(item => item._icicibank.channelInfo && item._icicibank.productInfo && item._icicibank.userInfo && item._icicibank.identities)
    const pageInfo = validItems && validItems.length > 0 ? validItems[0]._icicibank.pageInfo : {}
    const channelInfo = validItems && validItems.length > 0 ? validItems[0]._icicibank.channelInfo : {}
    const userInfo = validItems && validItems.length > 0 ? validItems[0]._icicibank.userInfo : {}
    const productInfo = validItems && validItems.length > 0 ? validItems[0]._icicibank.productInfo : {}
    const identities = validItems && validItems.length > 0 ? validItems[0]._icicibank.identities : {}

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
            "pageInfo": pageInfo,
            "ctaInfo": {
                "ctaName": `${props.ctaAction} - ${props.stepName} - ${props.journeyName}`,
                "ctaRegion": "Guided Journey",
                "ctaType": "button",
                "ctaURL": window.location.href
            },
            "channelInfo": channelInfo,
            "userInfo": userInfo,
            "productInfo": productInfo,
            "identities": identities
        }
    }

    window.adobeDataLayer.push(dataLayer)
}