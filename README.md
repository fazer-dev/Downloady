# Downloady
A simple chrome extension that allows you to choose a name for a file before it's downloade
Just a QoL feature my mom wanted :P 
This took a lot longer than I thought it would because I had to learn how to make a chrome extension.


## How She Works



We start by having a background service run via a chrome extension that waits for downloads to be initiated. Then the url is grabbed and the download to the default downloads folder is immediately cancelled. Following this, we use a feature in the Chrome API to initiate the download again, this time forcing the option to choose where the file goes here:

```
chrome.downloads.download({url: item.url,saveAs: true});
```

Additionally, there is a system that utilizes chrome storage to store a variable based on a check box that is located in the extension popup, which indicates whether the main service is enabled or not.

## TO USE:
1. Enable developer mode at chrome://extensions
2. Download the chrome_src folder from this repository
3. Click load unpacked at chrome://extensions and choose the chrome_src folder
5. Click on the extension in the extensions part of the browser to open the popup and click the checkbox to enable the extension
