// Wait for the document to load
document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const tabPanels = document.querySelectorAll(".tab-panel");

    // Function to switch tab
    function switchTab(tabId) {
        // Hide all tab content panels
        tabPanels.forEach(panel => panel.classList.remove("active"));

        // Remove 'active' class from all tabs
        tabs.forEach(tab => tab.classList.remove("active"));

        // Show the selected tab content and set the tab as active
        document.getElementById(tabId).classList.add("active");
        document.querySelector(`[data-tab="${tabId}"]`).classList.add("active");
    }

    // Initialize with the first tab active
    switchTab("tab-1");

    // Add event listeners to each tab
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const tabId = tab.getAttribute("data-tab");
            switchTab(tabId);
        });
    });
});
