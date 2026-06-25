async function loadState() {
    const checked = await chrome.storage.local.get(["key"]);
    document.getElementById("enabled").checked = checked.key ?? false;
}

loadState();

document.getElementById("enabled").addEventListener("click", async () => {
    const value = document.getElementById("enabled").checked;
    await chrome.storage.local.set({ key: value });
});