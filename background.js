let latestDownloadedFile = null;

chrome.downloads.onCreated.addListener((item) => {
    const id = item.id;

    const listener = (delta) => {
        if (delta.id !== id) return;

        if (delta.state && delta.state.current === "complete") {
            chrome.downloads.search({ id }, (results) => {
                if (results.length) {
                    latestDownloadedFile = results[0].filename;
                }
                
            });

            chrome.downloads.onChanged.removeListener(listener);
        }
    };

    chrome.downloads.onChanged.addListener(listener);
});