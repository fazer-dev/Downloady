let latestDownloadedFile = null;

chrome.downloads.onChanged.addListener((delta) => {
    if (!delta.state || delta.state.current !== "complete") return;

    chrome.downloads.search(
        { id: delta.id },
        (results) => {
            if (!results || results.length === 0) return;

            const downloadIem = results[0];
t
            latestDownloadedFile = downloadItem.filename;

            alert("Latest downloaded file:", latestDownloadedFile);
        }
    );
});