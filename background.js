chrome.downloads.onCreated.addListener((item) => {
  console.log("Download started:", item.url);

    chrome.downloads.cancel(item.id, () => {
    console.log("Canceled download:", item.url);
  });
  chrome.downloads.download({
  url: item.url,
  saveAs: true
});

});