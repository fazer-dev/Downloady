chrome.downloads.onDeterminingFilename.addListener((item, suggest) => {
    const data = await chrome.storage.local.get("downloadName");
    const newName = data.downloadName;

  if (newName) {
    suggest({ filename: newName });
  } else {
    suggest({ filename: item.filename });
  }
});