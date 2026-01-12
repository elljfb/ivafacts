// IVA Eligibility Calculator Logic

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('eligibility-calculator');
  const resultsDiv = document.getElementById('eligibility-results');
  const resetBtn = document.getElementById('reset-calculator');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      calculateEligibility();
    });
  }
  
  if (resetBtn) {
    resetBtn.addEventListener('click', function() {
      form.reset();
      resultsDiv.classList.add('hidden');
    });
  }
});

function calculateEligibility() {
  const form = document.getElementById('eligibility-calculator');
  const resultsDiv = document.getElementById('eligibility-results');
  const resultsContent = document.getElementById('results-content');
  
  // Get form values
  const totalDebt = form.querySelector('[name="total-debt"]').value;
  const regularIncome = form.querySelector('[name="regular-income"]').value;
  const employmentStatus = form.querySelector('[name="employment-status"]').value;
  const monthlyIncome = parseFloat(form.querySelector('[name="monthly-income"]').value) || 0;
  const monthlyExpenses = parseFloat(form.querySelector('[name="monthly-expenses"]').value) || 0;
  const location = form.querySelector('[name="location"]').value;
  
  // Calculate disposable income
  const disposableIncome = monthlyIncome - monthlyExpenses;
  
  // Determine eligibility
  let eligible = true;
  let issues = [];
  let recommendations = [];
  
  // Check debt level
  if (totalDebt === 'under-6000') {
    eligible = false;
    issues.push('Your debt level is below the typical £6,000 minimum for an IVA');
    recommendations.push('Consider a Debt Management Plan (DMP) or debt consolidation');
  }
  
  // Check income
  if (regularIncome === 'no') {
    eligible = false;
    issues.push('IVAs require a regular income source');
    recommendations.push('If your debt is under £30,000, consider a Debt Relief Order (DRO)');
    recommendations.push('Consider bankruptcy if you have no regular income');
  }
  
  // Check disposable income
  if (disposableIncome < 80) {
    eligible = false;
    issues.push('Your disposable income appears too low for typical IVA requirements (minimum £80-100/month)');
    recommendations.push('Review your budget to see if expenses can be reduced');
    recommendations.push('Consider a Debt Relief Order if you qualify');
  }
  
  // Check location
  if (location === 'scotland') {
    eligible = false;
    issues.push('IVAs are not available in Scotland');
    recommendations.push('Consider a Scottish Trust Deed, which is similar to an IVA');
  }
  
  // Build results HTML
  let html = '';
  
  if (eligible) {
    html = `
      <div class="result-success">
        <h4 style="color: var(--success-color);">✓ You May Be Eligible for an IVA</h4>
        <p>Based on your responses, you appear to meet the basic criteria for an Individual Voluntary Arrangement:</p>
        <ul>
          <li>Debt level: <strong>${formatDebtRange(totalDebt)}</strong></li>
          <li>Regular income: <strong>Yes</strong></li>
          <li>Estimated monthly disposable income: <strong>£${disposableIncome.toFixed(2)}</strong></li>
        </ul>
        
        <h5>Next Steps:</h5>
        <ol>
          <li>Consult with 2-3 licensed Insolvency Practitioners for free assessments</li>
          <li>Prepare your financial documents (payslips, bank statements, debt letters)</li>
          <li>Read our <a href="/iva-process/">IVA Process Guide</a></li>
          <li>Compare with <a href="/debt-solutions/">alternative debt solutions</a></li>
        </ol>
        
        <div class="result-disclaimer">
          <strong>Important:</strong> This is an indication only. Final eligibility depends on:
          <ul>
            <li>Creditor approval (75% by value must agree)</li>
            <li>Detailed assessment by a licensed Insolvency Practitioner</li>
            <li>Your specific financial circumstances</li>
          </ul>
        </div>
      </div>
    `;
  } else {
    html = `
      <div class="result-warning">
        <h4 style="color: var(--warning-color);">⚠ An IVA May Not Be Suitable</h4>
        <p>Based on your responses, an IVA may not be the best solution for your situation:</p>
        
        <h5>Issues Identified:</h5>
        <ul>
          ${issues.map(issue => `<li>${issue}</li>`).join('')}
        </ul>
        
        <h5>Recommended Alternatives:</h5>
        <ul>
          ${recommendations.map(rec => `<li>${rec}</li>`).join('')}
        </ul>
        
        <h5>What to Do Next:</h5>
        <ol>
          <li>Review our <a href="/debt-solutions/">debt solution comparison guide</a></li>
          <li>Contact free debt charities for personalized advice:
            <ul>
              <li>StepChange: 0800 138 1111</li>
              <li>National Debtline: 0808 808 4000</li>
              <li>Citizens Advice: Local bureau</li>
            </ul>
          </li>
          <li>Use our <a href="/calculators/solution-comparator/">Debt Solution Comparator</a></li>
        </ol>
      </div>
    `;
  }
  
  resultsContent.innerHTML = html;
  resultsDiv.classList.remove('hidden');
  resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function formatDebtRange(range) {
  const ranges = {
    'under-6000': 'Under £6,000',
    '6000-10000': '£6,000 - £10,000',
    '10000-20000': '£10,000 - £20,000',
    '20000-50000': '£20,000 - £50,000',
    'over-50000': 'Over £50,000'
  };
  return ranges[range] || range;
}
