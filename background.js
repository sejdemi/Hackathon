// var speedSlider = $("#speed");
// var fontSize = $("#fontSize");
// var colorPicker = $("#colorPicker");



chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {urlContains: ''},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
   });

//    console.log(speedSlider)
// console.log(fontSize)
// console.log(colorPicker)