---
layout: page.njk
title: IVA Cost Breakdown Tool - Understand Your IVA Fees
description: Interactive calculator showing exactly where your IVA money goes - fees, creditor payments, and debt write-off. Visualize your IVA costs.
---

## IVA Cost Breakdown Tool

Understand exactly where your IVA money goes with our cost breakdown calculator. See how much goes to fees, how much to creditors, and how much debt is written off.

<div class="calculator-intro">
  <p><strong>How it works:</strong> Enter your debt details and proposed monthly payment. We'll show you exactly how your money is distributed over the IVA term.</p>
  <p class="note"><strong>Note:</strong> This calculator uses typical fee percentages. Your actual fees may vary by provider.</p>
</div>

<div class="calculator-card">
  <form id="costCalculator" class="calculator-form">
    
    <div class="calculator-section">
      <h3>Your IVA Details</h3>
      
      <div class="form-group">
        <label for="totalDebt">Total Debt Amount</label>
        <div class="input-with-prefix">
          <span class="prefix">£</span>
          <input type="number" id="totalDebt" required min="1000" step="100" value="20000">
        </div>
        <small>Total unsecured debt included in the IVA</small>
      </div>

      <div class="form-group">
        <label for="monthlyPayment">Proposed Monthly Payment</label>
        <div class="input-with-prefix">
          <span class="prefix">£</span>
          <input type="number" id="monthlyPayment" required min="80" step="10" value="200">
        </div>
        <small>Your affordable monthly IVA payment</small>
      </div>

      <div class="form-group">
        <label for="duration">IVA Duration</label>
        <select id="duration" required>
          <option value="60">60 months (5 years) - Standard</option>
          <option value="72">72 months (6 years) - Extended</option>
          <option value="48">48 months (4 years) - Early settlement</option>
        </select>
      </div>

      <div class="form-group">
        <label for="nomineeFee">Nominee Fee (Setup Fee)</label>
        <div class="input-with-prefix">
          <span class="prefix">£</span>
          <input type="number" id="nomineeFee" min="0" step="100" value="1500">
        </div>
        <small>Typically £1,000-£2,000. Ask your IP for exact amount.</small>
      </div>

      <div class="form-group">
        <label for="supervisorFee">Supervisor Fee Percentage</label>
        <div class="input-with-suffix">
          <input type="number" id="supervisorFee" min="0" max="30" step="1" value="18">
          <span class="suffix">%</span>
        </div>
        <small>Typically 15-20% of each payment. Ask your IP for exact %.</small>
      </div>
    </div>

    <button type="submit" class="btn btn-primary btn-large">Calculate Breakdown</button>
  </form>

  <div id="costResult" class="calculator-result" style="display: none;">
    <div class="result-header">
      <h3>Your IVA Cost Breakdown</h3>
    </div>
    
    <div id="resultContent"></div>

    <div class="result-actions">
      <button type="button" id="resetCost" class="btn btn-secondary">Recalculate</button>
      <button type="button" id="downloadBreakdown" class="btn btn-outline">Download Breakdown</button>
    </div>
  </div>
</div>

## Understanding IVA Costs

### What Are IVA Fees?

IVA fees pay for the professional services of your Insolvency Practitioner (IP):

**Nominee Fee** (Setup):
- Preparing your proposal
- Gathering financial information
- Liaising with creditors
- Arranging creditors' meeting
- Getting IVA approved

**Supervisor Fee** (Ongoing):
- Managing your IVA
- Distributing payments to creditors
- Annual reviews
- Dealing with variations
- Correspondence and administration

### How Fees Are Taken

**Typical structure**:

1. **First payments** = Nominee fee
   - Example: £1,500 nominee fee at £200/month = first 7.5 months
   - Nothing to creditors initially

2. **Ongoing payments** = Supervisor fee + creditor payment
   - Example: £200 payment at 18% supervisor fee
   - £36 to IP (18%)
   - £164 to creditors (82%)

3. **All months** = Eventually pay in full + fees

### Fee Regulations

**Fees must be**:
- ✅ Reasonable and proportionate
- ✅ Based on work actually done
- ✅ Disclosed upfront in proposal
- ✅ Approved by creditors
- ✅ Follow Statement of Insolvency Practice 9 (SIP 9)

**You can**:
- ✅ Question excessive fees
- ✅ Compare IPs before choosing
- ✅ See exactly what fees cover
- ✅ Understand fee structure

**Red flags**:
- ❌ Fees over 35% of payments
- ❌ Hidden fees not disclosed
- ❌ Nominee fee over £3,000
- ❌ Supervisor fee over 25%

## Example Breakdowns

### Example 1: Standard IVA

**Details**:
- Total debt: £20,000
- Monthly payment: £150
- Duration: 60 months
- Nominee fee: £1,200
- Supervisor fee: 15%

**Breakdown**:
```
Total paid over 5 years: £9,000

Nominee fee: £1,200 (13.3%)
Supervisor fee: £1,170 (13.0%)
Total fees: £2,370 (26.3%)

To creditors: £6,630 (73.7%)
Debt written off: £13,370 (66.9%)
```

**Result**: Pay £9,000, write off £13,370 ✅

---

### Example 2: Higher Fee IVA

**Details**:
- Total debt: £25,000
- Monthly payment: £200
- Duration: 60 months
- Nominee fee: £2,000
- Supervisor fee: 20%

**Breakdown**:
```
Total paid over 5 years: £12,000

Nominee fee: £2,000 (16.7%)
Supervisor fee: £2,000 (16.7%)
Total fees: £4,000 (33.3%)

To creditors: £8,000 (66.7%)
Debt written off: £17,000 (68.0%)
```

**Result**: Pay £12,000, write off £17,000 ✅

**Note**: Higher fees (33.3%) but still good value due to large debt write-off

---

### Example 3: Extended IVA

**Details**:
- Total debt: £30,000
- Monthly payment: £180
- Duration: 72 months (6 years - equity release failed)
- Nominee fee: £1,500
- Supervisor fee: 18%

**Breakdown**:
```
Total paid over 6 years: £12,960

Nominee fee: £1,500 (11.6%)
Supervisor fee: £2,063 (15.9%)
Total fees: £3,563 (27.5%)

To creditors: £9,397 (72.5%)
Debt written off: £20,603 (68.7%)
```

**Result**: Extended term means slightly more paid, but still significant write-off ✅

---

### Example 4: Small Debt IVA (Not Recommended)

**Details**:
- Total debt: £6,000
- Monthly payment: £100
- Duration: 60 months
- Nominee fee: £1,500
- Supervisor fee: 20%

**Breakdown**:
```
Total paid over 5 years: £6,000

Nominee fee: £1,500 (25.0%)
Supervisor fee: £900 (15.0%)
Total fees: £2,400 (40.0%)

To creditors: £3,600 (60.0%)
Debt written off: £2,400 (40.0%)
```

**Result**: Pay £6,000, write off only £2,400 ⚠️

**Warning**: 40% fees on small IVA. Better to consider DMP instead.

## Comparing IVA Costs to Alternatives

### IVA vs Full Repayment

**£20,000 debt at 18% APR, £150/month**:

**Without IVA** (DMP with interest frozen):
- Duration: 133 months (11.1 years)
- Total paid: £20,000
- Interest: £0 (if frozen)
- Debt written off: £0

**With IVA**:
- Duration: 60 months (5 years)
- Total paid: £9,000
- Fees: £2,370
- To creditors: £6,630
- Debt written off: £13,370
- **Saved: £11,000 + 6 years** ✅

---

### IVA vs Bankruptcy

**£25,000 debt**:

**Bankruptcy**:
- Upfront cost: £680
- Asset loss: Potentially significant
- Home: Usually sold
- Duration: 12 months (+ 3 years payments)
- Stigma: Severe

**IVA**:
- Fees: £4,000 (from monthly payments)
- Asset protection: Keep home (usually)
- Duration: 60 months
- Stigma: Less severe
- **Better if homeowner** ✅

## How to Minimize IVA Fees

### 1. Compare Multiple IPs

**Before choosing**:
- Get quotes from 3+ IPs
- Compare fee structures
- Check total fee percentages
- Don't just go with first option

**Questions to ask**:
- What's your nominee fee?
- What's your supervisor fee percentage?
- What's included in fees?
- Any additional charges?

### 2. Negotiate Fees

**Some IPs may**:
- Reduce nominee fee for straightforward cases
- Lower supervisor fee percentage
- Waive certain administrative charges

**Worth asking**: "Is there any flexibility on fees?"

### 3. Choose Fixed Fee IPs

**Some IPs offer**:
- Fixed total fee (e.g., £3,500)
- Capped fees regardless of duration
- No percentage-based supervisor fee

**Pros**: Predictable costs
**Cons**: May not save money on short IVAs

### 4. Increase Payment When Possible

**Higher payments mean**:
- Shorter IVA duration
- Less supervisor fees overall
- More to creditors
- Same write-off amount

**Example**:
- £150/month for 60 months = £1,350 supervisor fees (15%)
- £300/month for 30 months = £1,350 supervisor fees (15%)
- **Same fee, half the time** ✅

### 5. Avoid Extensions

**Standard IVA**: 60 months
**Extended IVA**: 72 months = 20% more fees

**To avoid extensions**:
- Remortgage for equity release in year 5
- Pay lump sum if possible
- Maintain steady payments

### 6. Consider Early Settlement

**If you get windfall**:
- Inheritance
- Bonus
- Gift from family
- Asset sale

**Early settlement**:
- Typically 75-100% of remaining debt
- Saves future supervisor fees
- Ends IVA early

## IVA Cost Red Flags

### Warning Signs of High Fees

**Be cautious if**:
- ❌ Total fees over 35% of payments
- ❌ Nominee fee over £2,500
- ❌ Supervisor fee over 25%
- ❌ Additional "admin fees" on top
- ❌ Fees not clearly disclosed
- ❌ Pressure to sign without comparing

### What's Too Much?

**Acceptable fee ranges**:
- ✅ Nominee: £1,000-£2,000
- ✅ Supervisor: 15-20%
- ✅ Total fees: 25-30% of payments

**Excessive fees**:
- ❌ Nominee: Over £3,000
- ❌ Supervisor: Over 25%
- ❌ Total fees: Over 35%

### Questions to Ask

**Before signing**:
1. "What's the total in pounds I'll pay in fees?"
2. "What percentage of my payments are fees?"
3. "Are there any other charges?"
4. "How do your fees compare to other IPs?"
5. "Can I see a full fee breakdown?"

## Value for Money

### Is an IVA Worth the Fees?

**Consider total benefit**:

**Example**:
- Original debt: £25,000
- IVA fees: £4,000
- To creditors: £8,000
- **Total paid: £12,000**
- **Debt written off: £13,000**
- **Net benefit: £9,000** ✅

**The £4,000 fees get you £13,000 debt write-off = Good value**

### When IVA Fees Aren't Worth It

**Poor value when**:
- Debt under £6,000 (fees too high %)
- Debt write-off less than fees paid
- Can afford to repay in full via DMP
- Qualify for DRO (only £90)

**Example - Poor Value**:
- Debt: £6,000
- Fees: £2,500
- Write-off: £2,000
- **Pay £2,500 to save £2,000** ❌

**Better option**: DMP (free) or negotiate directly

## Fee Comparison Table

| Provider Type | Nominee Fee | Supervisor Fee | Total Fees (£10k paid) |
|---------------|-------------|----------------|------------------------|
| **Low-cost IP** | £1,000 | 15% | £2,350 (23.5%) |
| **Average IP** | £1,500 | 18% | £3,120 (31.2%) |
| **High-cost IP** | £2,000 | 20% | £3,600 (36.0%) |
| **Fixed fee IP** | N/A | N/A | £3,500 (35.0%) |

**Over 60 months at £150/month = £9,000 paid total**

## Common Questions

**Q: Can I negotiate IVA fees?**  
A: Yes, some IPs have flexibility especially on nominee fees. Always ask.

**Q: Are IVA fees regulated?**  
A: Yes, by Statement of Insolvency Practice 9 (SIP 9). Fees must be reasonable and proportionate.

**Q: Do creditors approve the fees?**  
A: Yes, fees are included in your proposal and approved by creditors at the creditors' meeting.

**Q: Can fees increase during the IVA?**  
A: No, fee percentages are fixed. But if IVA extends, you pay fees for longer.

**Q: What if I think my fees are too high?**  
A: Contact your IP to discuss. If unsatisfied, complain to the Insolvency Service.

**Q: Do I pay fees upfront?**  
A: No. Fees come from your monthly payments. Nothing upfront.

**Q: Can I change IP if I find cheaper fees?**  
A: Difficult once IVA starts. Choose wisely initially.

**Q: Are fees tax deductible?**  
A: No, IVA fees are not tax deductible.

## Next Steps

### 1. Check Your Full IVA Costs

Use our other calculators:
- [Monthly Payment Calculator](/calculators/monthly-payment/)
- [Eligibility Calculator](/calculators/eligibility/)
- [Compare All Solutions](/debt-solutions/comparison-table/)

### 2. Compare IVA Providers

**Get quotes from**:
- 2-3 different licensed IPs
- Ask for full fee breakdown
- Compare total costs
- Check reviews

### 3. Understand Alternatives

**Compare IVA costs to**:
- [DMP costs](/debt-solutions/iva-vs-dmp/) (often free)
- [DRO costs](/debt-solutions/iva-vs-dro/) (£90)
- [Bankruptcy costs](/debt-solutions/iva-vs-bankruptcy/) (£680)

### 4. Get Professional Advice

**Free debt advice**:
- **StepChange**: 0800 138 1111
- **National Debtline**: 0808 808 4000
- **Citizens Advice**: Local bureau

**They can**:
- Review fee proposals
- Advise if fees are reasonable
- Recommend reputable IPs
- Compare options

---

**Remember**: IVA fees may seem high, but consider the full picture - debt written off, legal protection, and asset protection. Compare total benefit vs total cost to determine value.

[Back to Calculators](/calculators/)

<script src="/js/cost-calculator.js"></script>
