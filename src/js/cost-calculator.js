// IVA Cost Breakdown Calculator
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('costCalculator');
    if (!form) return;

    const resultDiv = document.getElementById('costResult');
    const resultContent = document.getElementById('resultContent');
    const resetBtn = document.getElementById('resetCost');
    const downloadBtn = document.getElementById('downloadBreakdown');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        calculateCosts();
    });

    resetBtn.addEventListener('click', function() {
        resultDiv.style.display = 'none';
        form.style.display = 'block';
    });

    downloadBtn.addEventListener('click', function() {
        downloadBreakdown();
    });

    function calculateCosts() {
        const totalDebt = parseFloat(document.getElementById('totalDebt').value) || 0;
        const monthlyPayment = parseFloat(document.getElementById('monthlyPayment').value) || 0;
        const duration = parseInt(document.getElementById('duration').value) || 60;
        const nomineeFee = parseFloat(document.getElementById('nomineeFee').value) || 0;
        const supervisorFeePercent = parseFloat(document.getElementById('supervisorFee').value) || 0;

        // Calculate totals
        const totalPaid = monthlyPayment * duration;
        const totalSupervisorFee = (totalPaid - nomineeFee) * (supervisorFeePercent / 100);
        const totalFees = nomineeFee + totalSupervisorFee;
        const toCreditors = totalPaid - totalFees;
        const debtWrittenOff = Math.max(0, totalDebt - toCreditors);
        
        const feePercent = (totalFees / totalPaid) * 100;
        const creditorPercent = (toCreditors / totalPaid) * 100;
        const writeOffPercent = (debtWrittenOff / totalDebt) * 100;

        // Generate result
        let html = '';

        // Summary cards
        html += '<div class="cost-summary">';
        html += '<div class="cost-card">';
        html += '<div class="cost-label">Total You Pay</div>';
        html += '<div class="cost-value">£' + totalPaid.toLocaleString() + '</div>';
        html += '<div class="cost-sublabel">Over ' + duration + ' months</div>';
        html += '</div>';

        html += '<div class="cost-card highlight">';
        html += '<div class="cost-label">Debt Written Off</div>';
        html += '<div class="cost-value">£' + debtWrittenOff.toLocaleString() + '</div>';
        html += '<div class="cost-sublabel">' + writeOffPercent.toFixed(1) + '% of original debt</div>';
        html += '</div>';

        html += '<div class="cost-card">';
        html += '<div class="cost-label">Net Benefit</div>';
        html += '<div class="cost-value">£' + (debtWrittenOff - totalFees).toLocaleString() + '</div>';
        html += '<div class="cost-sublabel">Debt relief minus fees</div>';
        html += '</div>';
        html += '</div>';

        // Detailed breakdown
        html += '<div class="cost-breakdown">';
        html += '<h4>Detailed Breakdown</h4>';
        html += '<table>';
        html += '<tr><th>Item</th><th>Amount</th><th>%</th></tr>';
        html += '<tr><td>Original Debt</td><td>£' + totalDebt.toLocaleString() + '</td><td>-</td></tr>';
        html += '<tr><td>Total Payments</td><td>£' + totalPaid.toLocaleString() + '</td><td>100%</td></tr>';
        html += '<tr class="separator"><td colspan="3"></td></tr>';
        html += '<tr><td>Nominee Fee (Setup)</td><td>£' + nomineeFee.toLocaleString() + '</td><td>' + ((nomineeFee/totalPaid)*100).toFixed(1) + '%</td></tr>';
        html += '<tr><td>Supervisor Fee (Ongoing)</td><td>£' + totalSupervisorFee.toLocaleString() + '</td><td>' + ((totalSupervisorFee/totalPaid)*100).toFixed(1) + '%</td></tr>';
        html += '<tr class="total-row"><td><strong>Total Fees</strong></td><td><strong>£' + totalFees.toLocaleString() + '</strong></td><td><strong>' + feePercent.toFixed(1) + '%</strong></td></tr>';
        html += '<tr class="separator"><td colspan="3"></td></tr>';
        html += '<tr class="highlight-row"><td><strong>To Creditors</strong></td><td><strong>£' + toCreditors.toLocaleString() + '</strong></td><td><strong>' + creditorPercent.toFixed(1) + '%</strong></td></tr>';
        html += '<tr class="separator"><td colspan="3"></td></tr>';
        html += '<tr class="success-row"><td><strong>Debt Written Off</strong></td><td><strong>£' + debtWrittenOff.toLocaleString() + '</strong></td><td><strong>' + writeOffPercent.toFixed(1) + '%</strong></td></tr>';
        html += '</table>';
        html += '</div>';

        // Visual breakdown
        html += '<div class="cost-visual">';
        html += '<h4>Where Your Money Goes</h4>';
        html += '<div class="cost-bar">';
        html += '<div class="cost-segment nominee" style="width: ' + ((nomineeFee/totalPaid)*100).toFixed(1) + '%">';
        html += '<span>Nominee: ' + ((nomineeFee/totalPaid)*100).toFixed(0) + '%</span>';
        html += '</div>';
        html += '<div class="cost-segment supervisor" style="width: ' + ((totalSupervisorFee/totalPaid)*100).toFixed(1) + '%">';
        html += '<span>Supervisor: ' + ((totalSupervisorFee/totalPaid)*100).toFixed(0) + '%</span>';
        html += '</div>';
        html += '<div class="cost-segment creditors" style="width: ' + ((toCreditors/totalPaid)*100).toFixed(1) + '%">';
        html += '<span>Creditors: ' + ((toCreditors/totalPaid)*100).toFixed(0) + '%</span>';
        html += '</div>';
        html += '</div>';
        html += '<div class="cost-legend">';
        html += '<div><span class="legend-color nominee"></span> Nominee Fee (Setup)</div>';
        html += '<div><span class="legend-color supervisor"></span> Supervisor Fee (Ongoing)</div>';
        html += '<div><span class="legend-color creditors"></span> To Creditors</div>';
        html += '</div>';
        html += '</div>';

        // Monthly breakdown
        html += '<div class="monthly-breakdown">';
        html += '<h4>Monthly Payment Breakdown</h4>';
        html += '<p class="note">After nominee fee paid (typically first ' + Math.ceil(nomineeFee/monthlyPayment) + ' months)</p>';
        const monthlyToSupervisor = monthlyPayment * (supervisorFeePercent / 100);
        const monthlyToCreditors = monthlyPayment - monthlyToSupervisor;
        html += '<table>';
        html += '<tr><td>Your Payment</td><td>£' + monthlyPayment.toFixed(2) + '</td><td>100%</td></tr>';
        html += '<tr><td>To Supervisor</td><td>£' + monthlyToSupervisor.toFixed(2) + '</td><td>' + supervisorFeePercent.toFixed(0) + '%</td></tr>';
        html += '<tr><td>To Creditors</td><td>£' + monthlyToCreditors.toFixed(2) + '</td><td>' + (100 - supervisorFeePercent).toFixed(0) + '%</td></tr>';
        html += '</table>';
        html += '</div>';

        // Assessment
        html += '<div class="cost-assessment">';
        html += '<h4>Is This Good Value?</h4>';
        
        if (feePercent < 25) {
            html += '<div class="alert alert-success">';
            html += '<strong>✅ Excellent Fee Rate</strong><br>';
            html += 'Total fees of ' + feePercent.toFixed(1) + '% are well below average. This is a competitive IVA offer.';
            html += '</div>';
        } else if (feePercent < 30) {
            html += '<div class="alert alert-success">';
            html += '<strong>✅ Good Fee Rate</strong><br>';
            html += 'Total fees of ' + feePercent.toFixed(1) + '% are reasonable and within typical range (25-30%).';
            html += '</div>';
        } else if (feePercent < 35) {
            html += '<div class="alert alert-warning">';
            html += '<strong>⚠️ Average Fee Rate</strong><br>';
            html += 'Total fees of ' + feePercent.toFixed(1) + '% are at the higher end. Consider comparing with other IPs.';
            html += '</div>';
        } else {
            html += '<div class="alert alert-danger">';
            html += '<strong>❌ High Fee Rate</strong><br>';
            html += 'Total fees of ' + feePercent.toFixed(1) + '% are above typical range. Strongly recommend comparing other IPs before proceeding.';
            html += '</div>';
        }

        // Overall value
        const netBenefit = debtWrittenOff - totalFees;
        html += '<div class="value-summary">';
        html += '<h5>Overall Value Analysis</h5>';
        html += '<p><strong>You pay:</strong> £' + totalPaid.toLocaleString() + ' (including £' + totalFees.toLocaleString() + ' fees)</p>';
        html += '<p><strong>You save:</strong> £' + debtWrittenOff.toLocaleString() + ' debt write-off</p>';
        html += '<p><strong>Net benefit:</strong> £' + netBenefit.toLocaleString() + ' (debt relief minus fees)</p>';

        if (netBenefit > totalFees * 2) {
            html += '<p class="verdict success">✅ <strong>Excellent value</strong> - You save more than twice the fees paid</p>';
        } else if (netBenefit > totalFees) {
            html += '<p class="verdict good">✅ <strong>Good value</strong> - Positive net benefit</p>';
        } else if (netBenefit > 0) {
            html += '<p class="verdict fair">⚠️ <strong>Fair value</strong> - Small net benefit</p>';
        } else {
            html += '<p class="verdict poor">❌ <strong>Poor value</strong> - Fees exceed debt write-off. Consider alternatives.</p>';
        }
        html += '</div>';

        html += '</div>';

        // Comparison
        html += '<div class="cost-comparison">';
        html += '<h4>Comparison with Alternatives</h4>';
        
        const dmpDuration = Math.ceil(totalDebt / monthlyPayment);
        const dmpYears = (dmpDuration / 12).toFixed(1);
        
        html += '<table>';
        html += '<tr><th>Option</th><th>Monthly Payment</th><th>Duration</th><th>Total Paid</th><th>Debt Written Off</th></tr>';
        html += '<tr class="highlight-row"><td><strong>Your IVA</strong></td><td>£' + monthlyPayment.toFixed(0) + '</td><td>' + duration + ' months</td><td>£' + totalPaid.toLocaleString() + '</td><td>£' + debtWrittenOff.toLocaleString() + '</td></tr>';
        html += '<tr><td>Free DMP</td><td>£' + monthlyPayment.toFixed(0) + '</td><td>' + dmpDuration + ' months (' + dmpYears + ' yrs)</td><td>£' + totalDebt.toLocaleString() + '</td><td>£0</td></tr>';
        html += '<tr><td>DRO (if eligible)</td><td>£0</td><td>12 months</td><td>£90</td><td>£' + totalDebt.toLocaleString() + '</td></tr>';
        html += '</table>';
        
        html += '<p class="note"><strong>Note:</strong> DMP assumes interest frozen and full repayment. Actual duration may be longer if interest continues.</p>';
        html += '</div>';

        // Recommendations
        html += '<div class="cost-recommendations">';
        html += '<h4>Recommendations</h4>';
        html += '<ul>';
        
        if (feePercent > 33) {
            html += '<li><strong>Compare other IPs</strong> - Fees are high. Get quotes from 2-3 other providers.</li>';
        }
        
        if (totalDebt < 6000) {
            html += '<li><strong>Consider DMP instead</strong> - For debts under £6,000, IVA fees may not be worthwhile.</li>';
        }
        
        if (writeOffPercent > 60) {
            html += '<li>IVA provides significant debt relief (' + writeOffPercent.toFixed(0) + '% written off)</li>';
        }
        
        html += '<li>Ask your IP if fees are negotiable, especially nominee fee</li>';
        html += '<li>Ensure fees are clearly stated in your proposal before signing</li>';
        html += '<li>Check IP is licensed and FCA authorized</li>';
        html += '</ul>';
        html += '</div>';

        resultContent.innerHTML = html;
        form.style.display = 'none';
        resultDiv.style.display = 'block';
    }

    function downloadBreakdown() {
        const totalDebt = parseFloat(document.getElementById('totalDebt').value) || 0;
        const monthlyPayment = parseFloat(document.getElementById('monthlyPayment').value) || 0;
        const duration = parseInt(document.getElementById('duration').value) || 60;
        const nomineeFee = parseFloat(document.getElementById('nomineeFee').value) || 0;
        const supervisorFeePercent = parseFloat(document.getElementById('supervisorFee').value) || 0;

        const totalPaid = monthlyPayment * duration;
        const totalSupervisorFee = (totalPaid - nomineeFee) * (supervisorFeePercent / 100);
        const totalFees = nomineeFee + totalSupervisorFee;
        const toCreditors = totalPaid - totalFees;
        const debtWrittenOff = Math.max(0, totalDebt - toCreditors);

        let text = 'IVA COST BREAKDOWN\n';
        text += '==================\n\n';
        text += 'Original Debt: £' + totalDebt.toLocaleString() + '\n';
        text += 'Monthly Payment: £' + monthlyPayment.toFixed(2) + '\n';
        text += 'Duration: ' + duration + ' months\n';
        text += '\nTOTAL PAID: £' + totalPaid.toLocaleString() + '\n\n';
        text += 'BREAKDOWN:\n';
        text += '----------\n';
        text += 'Nominee Fee: £' + nomineeFee.toLocaleString() + ' (' + ((nomineeFee/totalPaid)*100).toFixed(1) + '%)\n';
        text += 'Supervisor Fee: £' + totalSupervisorFee.toLocaleString() + ' (' + ((totalSupervisorFee/totalPaid)*100).toFixed(1) + '%)\n';
        text += 'Total Fees: £' + totalFees.toLocaleString() + ' (' + ((totalFees/totalPaid)*100).toFixed(1) + '%)\n\n';
        text += 'To Creditors: £' + toCreditors.toLocaleString() + ' (' + ((toCreditors/totalPaid)*100).toFixed(1) + '%)\n\n';
        text += 'DEBT WRITTEN OFF: £' + debtWrittenOff.toLocaleString() + ' (' + ((debtWrittenOff/totalDebt)*100).toFixed(1) + '%)\n\n';
        text += 'Net Benefit: £' + (debtWrittenOff - totalFees).toLocaleString() + '\n\n';
        text += 'Generated by IVA Facts Cost Breakdown Tool\n';
        text += 'Date: ' + new Date().toLocaleDateString() + '\n';

        const blob = new Blob([text], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'iva-cost-breakdown.txt';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    }
});
