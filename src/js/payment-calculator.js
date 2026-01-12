// IVA Monthly Payment Calculator
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('paymentCalculator');
    if (!form) return;

    const inputs = form.querySelectorAll('input[type="number"]');
    const totalIncomeEl = document.getElementById('totalIncome');
    const totalExpensesEl = document.getElementById('totalExpenses');
    const resultDiv = document.getElementById('calculatorResult');
    const resultContent = document.getElementById('resultContent');
    const resetBtn = document.getElementById('resetCalculator');

    // Update totals as user types
    inputs.forEach(input => {
        input.addEventListener('input', updateTotals);
    });

    function updateTotals() {
        // Calculate total income
        const employmentIncome = parseFloat(document.getElementById('employmentIncome').value) || 0;
        const benefitsIncome = parseFloat(document.getElementById('benefitsIncome').value) || 0;
        const otherIncome = parseFloat(document.getElementById('otherIncome').value) || 0;
        const totalIncome = employmentIncome + benefitsIncome + otherIncome;

        // Calculate total expenses
        const mortgageRent = parseFloat(document.getElementById('mortgageRent').value) || 0;
        const councilTax = parseFloat(document.getElementById('councilTax').value) || 0;
        const utilities = parseFloat(document.getElementById('utilities').value) || 0;
        const food = parseFloat(document.getElementById('food').value) || 0;
        const transport = parseFloat(document.getElementById('transport').value) || 0;
        const insurance = parseFloat(document.getElementById('insurance').value) || 0;
        const childcare = parseFloat(document.getElementById('childcare').value) || 0;
        const other = parseFloat(document.getElementById('other').value) || 0;
        const totalExpenses = mortgageRent + councilTax + utilities + food + transport + insurance + childcare + other;

        totalIncomeEl.textContent = '£' + totalIncome.toFixed(2);
        totalExpensesEl.textContent = '£' + totalExpenses.toFixed(2);
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        calculatePayment();
    });

    resetBtn.addEventListener('click', function() {
        form.reset();
        updateTotals();
        resultDiv.style.display = 'none';
        form.style.display = 'block';
    });

    function calculatePayment() {
        // Get all values
        const employmentIncome = parseFloat(document.getElementById('employmentIncome').value) || 0;
        const benefitsIncome = parseFloat(document.getElementById('benefitsIncome').value) || 0;
        const otherIncome = parseFloat(document.getElementById('otherIncome').value) || 0;
        const totalIncome = employmentIncome + benefitsIncome + otherIncome;

        const mortgageRent = parseFloat(document.getElementById('mortgageRent').value) || 0;
        const councilTax = parseFloat(document.getElementById('councilTax').value) || 0;
        const utilities = parseFloat(document.getElementById('utilities').value) || 0;
        const food = parseFloat(document.getElementById('food').value) || 0;
        const transport = parseFloat(document.getElementById('transport').value) || 0;
        const insurance = parseFloat(document.getElementById('insurance').value) || 0;
        const childcare = parseFloat(document.getElementById('childcare').value) || 0;
        const other = parseFloat(document.getElementById('other').value) || 0;
        const totalExpenses = mortgageRent + councilTax + utilities + food + transport + insurance + childcare + other;

        const adults = parseInt(document.getElementById('adults').value) || 1;
        const children = parseInt(document.getElementById('children').value) || 0;

        const disposableIncome = totalIncome - totalExpenses;

        // Generate result
        let html = '';

        html += '<div class="result-summary">';
        html += '<div class="result-item">';
        html += '<div class="result-label">Your Estimated IVA Monthly Payment</div>';
        html += '<div class="result-value large">£' + Math.max(0, disposableIncome).toFixed(2) + '</div>';
        html += '</div>';
        html += '</div>';

        html += '<div class="result-breakdown">';
        html += '<h4>Income & Expense Summary</h4>';
        html += '<table>';
        html += '<tr><td>Total Monthly Income</td><td class="amount">£' + totalIncome.toFixed(2) + '</td></tr>';
        html += '<tr><td>Total Essential Expenses</td><td class="amount">£' + totalExpenses.toFixed(2) + '</td></tr>';
        html += '<tr class="total-row"><td><strong>Disposable Income</strong></td><td class="amount"><strong>£' + Math.max(0, disposableIncome).toFixed(2) + '</strong></td></tr>';
        html += '</table>';
        html += '</div>';

        // Recommendations
        html += '<div class="result-recommendations">';
        html += '<h4>What This Means</h4>';

        if (disposableIncome < 0) {
            html += '<div class="alert alert-danger">';
            html += '<strong>Negative Disposable Income</strong><br>';
            html += 'Your expenses exceed your income by £' + Math.abs(disposableIncome).toFixed(2) + '/month. ';
            html += 'You cannot afford IVA payments. Consider:<br>';
            html += '<ul>';
            html += '<li><strong>Debt Relief Order (DRO)</strong> - If debts under £30k and assets under £2k</li>';
            html += '<li><strong>Bankruptcy</strong> - For fresh start</li>';
            html += '<li><strong>Review expenses</strong> - Are all expenses accurately listed?</li>';
            html += '</ul>';
            html += '</div>';
        } else if (disposableIncome < 80) {
            html += '<div class="alert alert-warning">';
            html += '<strong>Below IVA Minimum</strong><br>';
            html += 'Your disposable income of £' + disposableIncome.toFixed(2) + ' is below the typical IVA minimum (£80-£100). ';
            html += 'Most IVA providers require at least £80-£100/month. Consider:<br>';
            html += '<ul>';
            html += '<li><strong>Debt Relief Order (DRO)</strong> - Only £90 cost, debts written off in 12 months</li>';
            html += '<li><strong>Increase income</strong> - Can you work more hours or find additional income?</li>';
            html += '<li><strong>Reduce expenses</strong> - Review your budget for savings</li>';
            html += '</ul>';
            html += '</div>';
        } else if (disposableIncome >= 80 && disposableIncome < 150) {
            html += '<div class="alert alert-success">';
            html += '<strong>IVA Suitable - Low Payment</strong><br>';
            html += 'Your disposable income of £' + disposableIncome.toFixed(2) + ' meets the minimum for an IVA.<br><br>';
            html += '<strong>Over 5 years (60 months):</strong><br>';
            html += '<ul>';
            html += '<li>Total you\'d pay: £' + (disposableIncome * 60).toFixed(0) + '</li>';
            html += '<li>Approximate fees: £' + ((disposableIncome * 60) * 0.3).toFixed(0) + ' (30%)</li>';
            html += '<li>To creditors: £' + ((disposableIncome * 60) * 0.7).toFixed(0) + ' (70%)</li>';
            html += '</ul>';
            html += 'Remaining debt would be written off after 5 years.';
            html += '</div>';
        } else if (disposableIncome >= 150 && disposableIncome < 300) {
            html += '<div class="alert alert-success">';
            html += '<strong>IVA Suitable - Average Payment</strong><br>';
            html += 'Your disposable income of £' + disposableIncome.toFixed(2) + ' is typical for an IVA.<br><br>';
            html += '<strong>Over 5 years (60 months):</strong><br>';
            html += '<ul>';
            html += '<li>Total you\'d pay: £' + (disposableIncome * 60).toFixed(0) + '</li>';
            html += '<li>Approximate fees: £' + ((disposableIncome * 60) * 0.28).toFixed(0) + ' (28%)</li>';
            html += '<li>To creditors: £' + ((disposableIncome * 60) * 0.72).toFixed(0) + ' (72%)</li>';
            html += '</ul>';
            html += 'Remaining debt would be written off after 5 years.<br><br>';
            html += '<strong>Important:</strong> Annual reviews may increase payments if your income increases.';
            html += '</div>';
        } else {
            html += '<div class="alert alert-success">';
            html += '<strong>IVA Suitable - High Payment</strong><br>';
            html += 'Your disposable income of £' + disposableIncome.toFixed(2) + ' is above average for an IVA.<br><br>';
            html += '<strong>Over 5 years (60 months):</strong><br>';
            html += '<ul>';
            html += '<li>Total you\'d pay: £' + (disposableIncome * 60).toFixed(0) + '</li>';
            html += '<li>Approximate fees: £' + ((disposableIncome * 60) * 0.26).toFixed(0) + ' (26%)</li>';
            html += '<li>To creditors: £' + ((disposableIncome * 60) * 0.74).toFixed(0) + ' (74%)</li>';
            html += '</ul>';
            html += 'Remaining debt would be written off after 5 years.<br><br>';
            html += '<strong>Benefits of higher payment:</strong><br>';
            html += '<ul>';
            html += '<li>Repay larger portion of debt</li>';
            html += '<li>May be able to negotiate slightly lower fees</li>';
            html += '<li>Annual reviews may increase payments further if income rises</li>';
            html += '</ul>';
            html += '</div>';
        }

        html += '</div>';

        html += '<div class="result-notes">';
        html += '<h4>Important Notes</h4>';
        html += '<ul>';
        html += '<li><strong>Annual reviews:</strong> Your payment is reviewed every year and may change based on circumstances</li>';
        html += '<li><strong>Income increases:</strong> If you get a pay rise, your payment typically increases by 50% of the net increase</li>';
        html += '<li><strong>Income decreases:</strong> If you lose income, your payment can be reduced</li>';
        html += '<li><strong>Windfall policy:</strong> Large lump sums (inheritance, bonuses) typically go to your IVA</li>';
        html += '<li><strong>This is an estimate:</strong> Your actual payment will be determined by a licensed Insolvency Practitioner</li>';
        html += '</ul>';
        html += '</div>';

        resultContent.innerHTML = html;
        form.style.display = 'none';
        resultDiv.style.display = 'block';
    }
});
