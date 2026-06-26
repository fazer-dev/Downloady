let rerun = new Set();

chrome.downloads.onCreated.addListener(async (item) => {
    const value = await chrome.storage.local.get(["key"]);

    const key = value.key; 

    if (!key) return;

    if (rerun.has(item.url)) return;

	console.log("Download started:", item.url);

	chrome.downloads.cancel(item.id, () => {
		rerun.add(item.url);

		console.log("Canceled download:", item.url);

		chrome.downloads.download({
		url: item.url,
		saveAs: true
		});
	
		console.log("Downloaded and correctly placed url:", item.url);

	});
});

