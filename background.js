let rerun = new Set();

chrome.downloads.onCreated.addListener((item) => {
    const value = chrome.storage.local.get(["key"]);
    console.log(value.key);
    if(rerun.has(item.url)) return;
    console.log("Download started:", item.url);

    chrome.downloads.cancel(item.id, () => {
        rerun.add(item.url);
        console.log("Canceled download:", item.url);
        chrome.downloads.download({
            url: item.url,
            saveAs: true
        });
    });


});