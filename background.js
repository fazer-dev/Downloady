chrome.downloads.onDeterminingFilename.addListener((item, suggest) => {
    const original = item.filename;

    const newName = "renamed_" + original;

    suggest({
        filename: newName,
        conflictAction: "uniquify"
    });
});