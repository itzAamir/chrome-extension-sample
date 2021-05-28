document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('btn').addEventListener('click', function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (activeTabs) {
            chrome.tabs.sendMessage(activeTabs[0].id, "Hello");
        });
    });
})