document.getElementById("save").addEventListener("click", async () => {
    const name = document.getElementById("dwnldName").value;

    await chrome.storage.local.set({ downloadName: name});

    window.close();
});