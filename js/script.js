// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// Ketika hamburger menu di klik
document.getElementById('hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Klik diluar sidebar untuk menghilangkan nav
const hamburgerMenu = document.getElementById('hamburger-menu');

document.addEventListener('click', function(e) {
    if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

const searchIcon = document.getElementById('search');
const searchForm = document.getElementById('search-form');

// Ketika ikon pencarian diklik
searchIcon.addEventListener('click', function() {
    // Toggle kelas 'active' pada formulir pencarian
    searchForm.classList.toggle('active');
});

// Ketika formulir pencarian disubmit
searchForm.addEventListener('submit', function(event) {
    // Menghentikan perilaku default dari form submission
    event.preventDefault();

    // Lakukan logika pencarian di sini
    // Misalnya, ambil nilai input, lakukan pencarian, dan tampilkan hasilnya
    const searchTerm = searchForm.querySelector('input').value;
    console.log('Searching for:', searchTerm);
});
