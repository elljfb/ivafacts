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

  // Quick eligibility form handler
  const quickEligibilityForm = document.getElementById('quick-eligibility-form');
  if (quickEligibilityForm) {
    quickEligibilityForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const debtAmount = document.querySelector('input[name="debt-amount"]:checked');
      const income = document.querySelector('input[name="income"]:checked');
      const payment = document.querySelector('input[name="payment"]:checked');

      const resultDiv = document.getElementById('eligibility-result');

      if (!debtAmount || !income || !payment) {
        resultDiv.innerHTML = '<div class="alert alert-warning">Please answer all questions to check your eligibility.</div>';
        resultDiv.classList.remove('hidden');
        return;
      }

      if (debtAmount.value === 'yes' && income.value === 'yes' && payment.value === 'yes') {
        resultDiv.innerHTML = `
          <div class="alert alert-success">
            <strong>✅ You may be eligible for an IVA!</strong>
            <p>Based on your answers, you meet the basic criteria for an IVA. Use our detailed calculator to get a full assessment.</p>
            <a href="/calculators/eligibility/" class="btn btn-primary">Full Eligibility Check</a>
          </div>
        `;
      } else {
        let message = '<div class="alert alert-info"><strong>ℹ️ An IVA might not be suitable</strong><p>';

        if (debtAmount.value === 'no') {
          message += 'IVAs typically require £6,000+ in unsecured debt. ';
        }
        if (income.value === 'no') {
          message += 'IVAs require a regular income to make monthly payments. ';
        }
        if (payment.value === 'no') {
          message += 'IVAs need at least £80-£100/month disposable income. ';
        }

        message += '</p><p>Consider exploring alternative debt solutions:</p>';
        message += '<a href="/debt-solutions/" class="btn btn-secondary">View Alternatives</a></div>';

        resultDiv.innerHTML = message;
      }

      resultDiv.classList.remove('hidden');
      resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  // Wrap tables for mobile responsiveness
  const tables = document.querySelectorAll('.content table');
  tables.forEach(table => {
    const wrapper = document.createElement('div');
    wrapper.className = 'table-responsive';
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });
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
