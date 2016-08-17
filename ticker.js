//by johnerfx (MIT Licensed)
chrome.contextMenus.create({
	"title": "Steemd(it) to Steemit(d)",
	"contexts": ["page"],
	"onclick" : s2s
	});

function s2s() {
	chrome.tabs.query({
		active: true,
		currentWindow: true
		}, function(tabs) {
			var url = new URL(tabs[0].url);
			var domain = (url.hostname == "steemit.com") ? "steemd.com" : "steemit.com";
			var pathname = url.pathname;
			var new_url = domain+((pathname.split("/")[1].indexOf("@") == -1) ? pathname : ("/" + pathname.split("/")[1]));
			chrome.tabs.update({url: "https://"+new_url});
			});

}

chrome.browserAction.onClicked.addListener(s2s);
