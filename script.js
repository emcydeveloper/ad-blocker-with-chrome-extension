// const blockSites_Testing = [
//     "*://*.doubleclick.net/*",
//     "*://partner.googleadservices.com/*",
//     "*://*.googlesyndication.com/*",
//     "*://*.google-analytics.com/*",
//     "*://creative.ak.fbcdn.net/*",
//     "*://*.adbrite.com/*",
//     "*://*.exponential.com/*",
//     "*://*.quantserve.com/*",
//     "*://*.scorecardresearch.com/*",
//     "*://*.zedo.com/*",
//     "googlesyndication.com",
//   ];


chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        console.log("I have blocked:", details.url)
        return {cancel: true}
    },
    {urls: blocked_sites},
    ["blocking"]
)
