document.addEventListener('DOMContentLoaded', function () {
    function openDropDown(e) {
        e.preventDefault();
        const dropdown = this.parentElement;
        dropdown.classList.toggle('active');

        // Close other dropdowns
        document.querySelectorAll('.dropdown').forEach(otherDropdown => {
            if (otherDropdown !== dropdown) {
                otherDropdown.classList.remove('active');
            }
        });
    }

    document.querySelectorAll('.dropdown > a').forEach(dropdownLink => {
        dropdownLink.addEventListener('click', openDropDown);
    });

    function closeAllDropdowns(e) {
        if (!e.target.closest('.sidebar')) {
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    }

    document.addEventListener('click', closeAllDropdowns);
});