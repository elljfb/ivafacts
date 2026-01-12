// Main JavaScript for IVA Facts

// Mobile menu toggle (placeholder for future implementation)
document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function () {
      const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
      mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
      mainNav.classList.toggle('active');
    });
  }

  // Cookie consent placeholder
  checkCookieConsent();
});

// Cookie consent function
function checkCookieConsent() {
  const consent = localStorage.getItem('cookie_consent');
  if (!consent) {
    // Show cookie banner (to be implemented)
    console.log('Cookie consent needed');
  }
}

// Helper function for calculator reset buttons
function resetCalculator(formId, resultsId) {
  const form = document.getElementById(formId);
  const results = document.getElementById(resultsId);

  if (form) {
    form.reset();
  }

  if (results) {
    results.classList.add('hidden');
  }
}
