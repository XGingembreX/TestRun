const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const dropdown = document.getElementById('dropdown');
const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
const dropdownLink = dropdown.querySelector('a');

// Toggle mobile nav menu
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Toggle dropdown menu on mobile via the arrow button
dropdownToggle.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent button default behavior
  dropdown.classList.toggle('open');
  e.stopPropagation();
});

// Clicking "Treatments" link behaves normally (navigates to Treatments.html)
// So no event handler needed on dropdownLink

// Close dropdown if clicking outside of it
document.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('open');
  }
});
