//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
    // Get the select element
    var colorSelect = document.getElementById('colorSelect');

    // Get the button element
    var removeButton = document.querySelector('input[type="button"]');

    // Add click event listener to the button
    removeButton.addEventListener('click', function () {
        // Get the selected index
        var selectedIndex = colorSelect.selectedIndex;

        // Check if any option is selected
        if (selectedIndex !== -1) {
            // Remove the selected option from the dropdown list
            colorSelect.remove(selectedIndex);
        }
    });
});
