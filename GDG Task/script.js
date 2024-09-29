var icon = document.getElementById("icon");

document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === 'dark-theme') {
            toggleSwitch.checked = true;
        }
    }

    function switchTheme(event) {
        if (event.target.checked) {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light-theme');
        }
    }

    toggleSwitch.addEventListener('change', switchTheme);
});

function toggleFAQ(element) {
    const faq = element.parentElement;
    faq.classList.toggle('active');
}
