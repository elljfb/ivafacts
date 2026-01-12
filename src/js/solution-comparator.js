// Debt Solution Comparator
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('solutionComparator');
    if (!form) return;

    const resultDiv = document.getElementById('comparatorResult');
    const resultContent = document.getElementById('resultContent');
    const resetBtn = document.getElementById('resetComparator');

    const monthlyIncome = document.getElementById('monthlyIncome');
    const monthlyExpenses = document.getElementById('monthlyExpenses');
    const disposableIncome = document.getElementById('disposableIncome');

    // Update disposable income display
    [monthlyIncome, monthlyExpenses].forEach(el => {
        el.addEventListener('input', function() {
            const income = parseFloat(monthlyIncome.value) || 0;
            const expenses = parseFloat(monthlyExpenses.value) || 0;
            const disposable = income - expenses;
            disposableIncome.textContent = '£' + disposable.toFixed(2);
        });
    });

    // Show/hide equity question
    const homeOwnerInputs = document.querySelectorAll('input[name="homeOwner"]');
    const equityQuestion = document.getElementById('equityQuestion');

    homeOwnerInputs.forEach(input => {
        input.addEventListener('change', function() {
            if (this.value === 'yes' || this.value === 'outright') {
                equityQuestion.style.display = 'block';
            } else {
                equityQuestion.style.display = 'none';
            }
        });
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        compareOptions();
    });

    resetBtn.addEventListener('click', function() {
        form.reset();
        disposableIncome.textContent = '£0.00';
        equityQuestion.style.display = 'none';
        resultDiv.style.display = 'none';
        form.style.display = 'block';
    });

    function compareOptions() {
        // Get all form values
        const totalDebt = parseFloat(document.getElementById('totalDebt').value) || 0;
        const creditorCount = parseInt(document.getElementById('creditorCount').value) || 0;
        const legalAction = document.querySelector('input[name="legalAction"]:checked').value;
        const income = parseFloat(monthlyIncome.value) || 0;
        const expenses = parseFloat(monthlyExpenses.value) || 0;
        const disposable = income - expenses;
        const employmentStatus = document.getElementById('employmentStatus').value;
        const homeOwner = document.querySelector('input[name="homeOwner"]:checked').value;
        const homeEquity = parseFloat(document.getElementById('homeEquity').value) || 0;
        const assetValue = parseFloat(document.getElementById('assetValue').value) || 0;
        const vehicleValue = parseFloat(document.getElementById('vehicleValue').value) || 0;
        const priority = document.getElementById('priority').value;
        const commitment = document.getElementById('commitment').value;
        const location = document.getElementById('location').value;

        // Evaluate each solution
        const solutions = [];

        // IVA Evaluation
        const ivaScore = evaluateIVA(totalDebt, disposable, homeOwner, homeEquity, creditorCount, legalAction, priority, commitment, location);
        solutions.push({
            name: 'Individual Voluntary Arrangement (IVA)',
            score: ivaScore.score,
            eligible: ivaScore.eligible,
            reasons: ivaScore.reasons,
            pros: ivaScore.pros,
            cons: ivaScore.cons,
            link: '/what-is-an-iva/'
        });

        // DMP Evaluation
        const dmpScore = evaluateDMP(totalDebt, disposable, legalAction, priority, commitment);
        solutions.push({
            name: 'Debt Management Plan (DMP)',
            score: dmpScore.score,
            eligible: dmpScore.eligible,
            reasons: dmpScore.reasons,
            pros: dmpScore.pros,
            cons: dmpScore.cons,
            link: '/debt-solutions/iva-vs-dmp/'
        });

        // DRO Evaluation
        const droScore = evaluateDRO(totalDebt, disposable, assetValue, vehicleValue, homeOwner, priority, commitment, location);
        solutions.push({
            name: 'Debt Relief Order (DRO)',
            score: droScore.score,
            eligible: droScore.eligible,
            reasons: droScore.reasons,
            pros: droScore.pros,
            cons: droScore.cons,
            link: '/debt-solutions/iva-vs-dro/'
        });

        // Bankruptcy Evaluation
        const bankruptcyScore = evaluateBankruptcy(totalDebt, homeOwner, homeEquity, assetValue, priority, commitment, location);
        solutions.push({
            name: 'Bankruptcy',
            score: bankruptcyScore.score,
            eligible: bankruptcyScore.eligible,
            reasons: bankruptcyScore.reasons,
            pros: bankruptcyScore.pros,
            cons: bankruptcyScore.cons,
            link: '/debt-solutions/iva-vs-bankruptcy/'
        });

        // Sort by score
        solutions.sort((a, b) => b.score - a.score);

        // Display results
        displayResults(solutions, totalDebt, disposable);
    }

    function evaluateIVA(debt, disposable, homeOwner, equity, creditors, legal, priority, commitment, location) {
        let score = 0;
        let reasons = [];
        let pros = [];
        let cons = [];
        let eligible = true;

        // Eligibility checks
        if (debt < 6000) {
            eligible = false;
            reasons.push('Debt below £6,000 minimum');
            score -= 40;
        } else {
            score += 15;
            reasons.push('Debt level suitable (£' + debt.toLocaleString() + ')');
        }

        if (disposable < 80) {
            eligible = false;
            reasons.push('Disposable income below £80 minimum');
            score -= 40;
        } else {
            score += 20;
            reasons.push('Can afford monthly payments (£' + disposable.toFixed(2) + ')');
        }

        if (creditors < 2) {
            score -= 10;
            reasons.push('Only 1 creditor - may not approve');
        } else {
            score += 10;
        }

        if (location === 'scotland') {
            eligible = false;
            reasons.push('Not available in Scotland (consider Trust Deed instead)');
            score -= 50;
        }

        // Suitability factors
        if (homeOwner !== 'no') {
            score += 20;
            pros.push('Protects your home');
            if (equity > 5000) {
                cons.push('May need equity release in year 5');
            }
        }

        if (legal === 'yes' || legal === 'threatened') {
            score += 25;
            pros.push('Stops creditor legal action');
        }

        if (priority === 'write-off') {
            score += 20;
            pros.push('60-70% debt typically written off');
        }

        if (priority === 'asset-protection' && homeOwner !== 'no') {
            score += 25;
            pros.push('Keeps your assets protected');
        }

        if (commitment === 'long' || commitment === 'medium') {
            score += 10;
        } else {
            cons.push('Requires 5-6 year commitment');
        }

        cons.push('Fees of £5,000-£8,000');
        cons.push('Credit damaged for 6 years');
        cons.push('Public record (Insolvency Register)');

        return { score, eligible, reasons, pros, cons };
    }

    function evaluateDMP(debt, disposable, legal, priority, commitment) {
        let score = 0;
        let reasons = [];
        let pros = [];
        let cons = [];
        let eligible = true;

        // Always eligible if have some income
        if (disposable > 0) {
            score += 15;
            reasons.push('Have disposable income for payments');
        } else {
            eligible = false;
            reasons.push('No disposable income for payments');
            score -= 30;
        }

        // Suitability
        if (priority === 'flexibility') {
            score += 30;
            pros.push('Very flexible - can change anytime');
        }

        if (priority === 'repay-full') {
            score += 25;
            pros.push('Repays debt in full');
        }

        if (priority === 'cost') {
            score += 20;
            pros.push('Often free (via charities)');
        }

        if (priority === 'privacy') {
            score += 15;
            pros.push('Not public record');
        }

        if (commitment === 'flexible') {
            score += 20;
            pros.push('No fixed commitment');
        }

        if (legal === 'yes') {
            score -= 25;
            cons.push('No legal protection - creditors can still sue');
        }

        if (priority === 'write-off') {
            score -= 25;
            cons.push('No debt write-off - pay 100%');
        }

        cons.push('No legal protection');
        cons.push('Interest freeze depends on creditor goodwill');
        cons.push('Could take 10-15+ years to clear debt');

        return { score, eligible, reasons, pros, cons };
    }

    function evaluateDRO(debt, disposable, assets, vehicle, homeOwner, priority, commitment, location) {
        let score = 0;
        let reasons = [];
        let pros = [];
        let cons = [];
        let eligible = true;

        // Strict eligibility
        if (debt > 30000) {
            eligible = false;
            reasons.push('Debt over £30,000 limit');
            score -= 50;
        } else {
            score += 15;
            reasons.push('Debt within £30,000 limit');
        }

        if (disposable >= 75) {
            eligible = false;
            reasons.push('Disposable income over £75 limit');
            score -= 50;
        } else {
            score += 25;
            pros.push('Low income qualifies');
        }

        if (assets > 2000) {
            eligible = false;
            reasons.push('Assets over £2,000 limit');
            score -= 50;
        } else {
            score += 15;
        }

        if (vehicle > 2000) {
            eligible = false;
            reasons.push('Vehicle over £2,000 limit');
            score -= 30;
        }

        if (homeOwner !== 'no') {
            eligible = false;
            reasons.push('Homeowners not eligible (or minimal equity only)');
            score -= 40;
        }

        if (location === 'scotland') {
            eligible = false;
            reasons.push('Not available in Scotland');
            score -= 50;
        }

        // Suitability
        if (eligible) {
            score += 40; // Big bonus if eligible
            pros.push('Only £90 cost');
            pros.push('All debt written off in 12 months');
            pros.push('No monthly payments');
        }

        if (priority === 'cost') {
            score += 20;
        }

        if (priority === 'speed' && eligible) {
            score += 25;
        }

        if (priority === 'write-off' && eligible) {
            score += 20;
        }

        cons.push('Very strict eligibility criteria');
        cons.push('Credit damaged for 6 years');

        return { score, eligible, reasons, pros, cons };
    }

    function evaluateBankruptcy(debt, homeOwner, equity, assets, priority, commitment, location) {
        let score = 0;
        let reasons = [];
        let pros = [];
        let cons = [];
        let eligible = true;

        // Always eligible
        reasons.push('No minimum debt requirement');
        score += 5;

        if (location === 'scotland') {
            reasons.push('Consider Sequestration (Scottish bankruptcy)');
        }

        // Suitability
        if (homeOwner !== 'no' && equity > 1000) {
            score -= 35;
            cons.push('Will lose home (£' + equity.toLocaleString() + ' equity)');
        } else {
            score += 15;
            reasons.push('Limited assets to lose');
        }

        if (assets > 5000) {
            score -= 25;
            cons.push('Will lose assets worth £' + assets.toLocaleString());
        }

        if (priority === 'write-off') {
            score += 15;
            pros.push('All debts written off');
        }

        if (priority === 'speed') {
            score += 20;
            pros.push('Only 12 months');
        }

        if (priority === 'asset-protection') {
            score -= 40;
        }

        if (debt > 50000 && (homeOwner === 'no' || equity < 5000)) {
            score += 20;
            reasons.push('Large debt with limited assets makes bankruptcy suitable');
        }

        pros.push('Fresh financial start');
        pros.push('Discharged after 12 months');

        cons.push('£680 upfront cost');
        cons.push('Assets sold');
        cons.push('Severe employment restrictions');
        cons.push('Public notice (Gazette)');
        cons.push('Significant stigma');

        return { score, eligible, reasons, pros, cons };
    }

    function displayResults(solutions, debt, disposable) {
        let html = '';

        html += '<div class="solution-rankings">';

        solutions.forEach((solution, index) => {
            let statusClass = '';
            let statusIcon = '';
            let statusText = '';

            if (!solution.eligible) {
                statusClass = 'not-eligible';
                statusIcon = '🔴';
                statusText = 'Not Eligible';
            } else if (solution.score >= 70) {
                statusClass = 'highly-recommended';
                statusIcon = '🟢';
                statusText = 'Highly Recommended';
            } else if (solution.score >= 40) {
                statusClass = 'suitable';
                statusIcon = '🟡';
                statusText = 'Suitable';
            } else if (solution.score >= 0) {
                statusClass = 'possible';
                statusIcon = '🟠';
                statusText = 'Possible';
            } else {
                statusClass = 'not-suitable';
                statusIcon = '🔴';
                statusText = 'Not Suitable';
            }

            html += '<div class="solution-card ' + statusClass + '">';
            html += '<div class="solution-header">';
            html += '<h4>' + (index + 1) + '. ' + solution.name + '</h4>';
            html += '<span class="solution-status">' + statusIcon + ' ' + statusText + '</span>';
            html += '</div>';

            if (solution.reasons.length > 0) {
                html += '<div class="solution-reasons">';
                html += '<strong>Why:</strong>';
                html += '<ul>';
                solution.reasons.forEach(reason => {
                    html += '<li>' + reason + '</li>';
                });
                html += '</ul>';
                html += '</div>';
            }

            if (solution.pros.length > 0) {
                html += '<div class="solution-pros">';
                html += '<strong>✅ Advantages:</strong>';
                html += '<ul>';
                solution.pros.forEach(pro => {
                    html += '<li>' + pro + '</li>';
                });
                html += '</ul>';
                html += '</div>';
            }

            if (solution.cons.length > 0) {
                html += '<div class="solution-cons">';
                html += '<strong>❌ Disadvantages:</strong>';
                html += '<ul>';
                solution.cons.forEach(con => {
                    html += '<li>' + con + '</li>';
                });
                html += '</ul>';
                html += '</div>';
            }

            html += '<a href="' + solution.link + '" class="btn btn-small">Learn More</a>';
            html += '</div>';
        });

        html += '</div>';

        html += '<div class="comparison-summary">';
        html += '<h4>Summary</h4>';
        html += '<p>Based on your circumstances (£' + debt.toLocaleString() + ' debt, £' + disposable.toFixed(2) + ' disposable income), ';
        
        if (solutions[0].eligible) {
            html += '<strong>' + solutions[0].name + '</strong> appears to be your best option.</p>';
        } else {
            html += 'none of the top solutions provide perfect eligibility. Review your options carefully.</p>';
        }

        html += '<p class="note"><strong>Important:</strong> This tool provides guidance only. Always speak to free debt advisors before making a decision. They can provide personalized advice based on your full circumstances.</p>';

        html += '<div class="next-steps">';
        html += '<h5>Recommended Next Steps:</h5>';
        html += '<ol>';
        html += '<li>Read detailed information about your recommended solution(s)</li>';
        html += '<li>Contact free debt advice services (StepChange, National Debtline, Citizens Advice)</li>';
        html += '<li>Get quotes from 2-3 providers if considering formal solutions</li>';
        html += '<li>Compare all fees and terms before deciding</li>';
        html += '</ol>';
        html += '</div>';

        html += '</div>';

        resultContent.innerHTML = html;
        form.style.display = 'none';
        resultDiv.style.display = 'block';
    }
});
