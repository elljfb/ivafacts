---
layout: page.njk
title: Debt Solution Comparator - Find Your Best Option
description: Interactive tool to compare IVA, DMP, DRO, and Bankruptcy based on your specific circumstances. Get personalized recommendations.
---

## Debt Solution Comparator

Answer a few questions about your financial situation and we'll recommend the most suitable debt solutions for you.

<div class="calculator-intro">
  <p><strong>How it works:</strong> This tool analyzes your circumstances against the eligibility criteria for different debt solutions and ranks them from most to least suitable.</p>
  <p class="note"><strong>Takes 2-3 minutes</strong> • <strong>Completely confidential</strong> • <strong>Free to use</strong></p>
</div>

<div class="calculator-card">
  <form id="solutionComparator" class="calculator-form">
    
    <div class="calculator-section">
      <h3>Step 1: Your Debt Situation</h3>
      
      <div class="form-group">
        <label for="totalDebt">Total Unsecured Debt Amount</label>
        <div class="input-with-prefix">
          <span class="prefix">£</span>
          <input type="number" id="totalDebt" required min="0" step="100">
        </div>
        <small>Include credit cards, loans, overdrafts, catalogues (not mortgage or secured loans)</small>
      </div>

      <div class="form-group">
        <label for="creditorCount">Number of Different Creditors</label>
        <input type="number" id="creditorCount" required min="1" max="50">
        <small>How many different companies/lenders do you owe money to?</small>
      </div>

      <div class="form-group">
        <label>Are creditors taking legal action?</label>
        <div class="radio-group">
          <label>
            <input type="radio" name="legalAction" value="yes" required>
            Yes (CCJs, court letters, bailiffs)
          </label>
          <label>
            <input type="radio" name="legalAction" value="no">
            No
          </label>
          <label>
            <input type="radio" name="legalAction" value="threatened">
            Threatened but not yet started
          </label>
        </div>
      </div>
    </div>

    <div class="calculator-section">
      <h3>Step 2: Your Income</h3>
      
      <div class="form-group">
        <label for="monthlyIncome">Total Monthly Income (after tax)</label>
        <div class="input-with-prefix">
          <span class="prefix">£</span>
          <input type="number" id="monthlyIncome" required min="0" step="10">
        </div>
        <small>Include salary, benefits, pension - everything</small>
      </div>

      <div class="form-group">
        <label for="monthlyExpenses">Total Monthly Essential Expenses</label>
        <div class="input-with-prefix">
          <span class="prefix">£</span>
          <input type="number" id="monthlyExpenses" required min="0" step="10">
        </div>
        <small>Rent, bills, food, transport - essentials only</small>
      </div>

      <div class="form-total">
        <strong>Disposable Income:</strong>
        <span id="disposableIncome">£0.00</span>
      </div>

      <div class="form-group">
        <label>Employment Status</label>
        <select id="employmentStatus" required>
          <option value="">Select...</option>
          <option value="employed">Employed (PAYE)</option>
          <option value="self-employed">Self-employed</option>
          <option value="benefits">Benefits only</option>
          <option value="pension">Pension only</option>
          <option value="mixed">Mixed income</option>
          <option value="unemployed">Unemployed</option>
        </select>
      </div>
    </div>

    <div class="calculator-section">
      <h3>Step 3: Your Assets</h3>
      
      <div class="form-group">
        <label>Do you own your home?</label>
        <div class="radio-group">
          <label>
            <input type="radio" name="homeOwner" value="yes" required>
            Yes (with mortgage)
          </label>
          <label>
            <input type="radio" name="homeOwner" value="outright">
            Yes (owned outright)
          </label>
          <label>
            <input type="radio" name="homeOwner" value="no">
            No (renting or living with family)
          </label>
        </div>
      </div>

      <div id="equityQuestion" style="display:none;">
        <div class="form-group">
          <label for="homeEquity">Approximate Home Equity</label>
          <div class="input-with-prefix">
            <span class="prefix">£</span>
            <input type="number" id="homeEquity" min="0" step="1000">
          </div>
          <small>Home value minus mortgage balance</small>
        </div>
      </div>

      <div class="form-group">
        <label for="assetValue">Total Value of Other Assets</label>
        <div class="input-with-prefix">
          <span class="prefix">£</span>
          <input type="number" id="assetValue" required min="0" step="100">
        </div>
        <small>Car, savings, valuables (not essential furniture/belongings)</small>
      </div>

      <div class="form-group">
        <label for="vehicleValue">Vehicle Value (if applicable)</label>
        <div class="input-with-prefix">
          <span class="prefix">£</span>
          <input type="number" id="vehicleValue" value="0" min="0" step="100">
        </div>
        <small>Current market value of your car</small>
      </div>
    </div>

    <div class="calculator-section">
      <h3>Step 4: Your Preferences</h3>
      
      <div class="form-group">
        <label>What's most important to you?</label>
        <select id="priority" required>
          <option value="">Select...</option>
          <option value="write-off">Debt write-off (pay less than I owe)</option>
          <option value="speed">Quick resolution (shortest time)</option>
          <option value="cost">Lowest cost</option>
          <option value="asset-protection">Keeping my home/assets</option>
          <option value="flexibility">Flexibility to change/cancel</option>
          <option value="privacy">Avoiding public record</option>
          <option value="repay-full">Repaying in full (moral preference)</option>
        </select>
      </div>

      <div class="form-group">
        <label>How long can you commit to a debt solution?</label>
        <select id="commitment" required>
          <option value="">Select...</option>
          <option value="short">Short as possible (under 2 years)</option>
          <option value="medium">Medium term (2-4 years)</option>
          <option value="long">Long term (5-6 years OK)</option>
          <option value="flexible">As long as it takes</option>
        </select>
      </div>

      <div class="form-group">
        <label>Location</label>
        <select id="location" required>
          <option value="">Select...</option>
          <option value="england">England</option>
          <option value="wales">Wales</option>
          <option value="ni">Northern Ireland</option>
          <option value="scotland">Scotland</option>
        </select>
      </div>
    </div>

    <button type="submit" class="btn btn-primary btn-large">Compare My Options</button>
  </form>

  <div id="comparatorResult" class="calculator-result" style="display: none;">
    <div class="result-header">
      <h3>Your Personalized Debt Solution Comparison</h3>
    </div>
    
    <div id="resultContent"></div>

    <div class="result-actions">
      <button type="button" id="resetComparator" class="btn btn-secondary">Start Over</button>
    </div>
  </div>
</div>

## Understanding the Recommendations

### How Solutions Are Ranked

Our comparator evaluates each solution based on:

1. **Eligibility** - Do you meet the requirements?
2. **Suitability** - How well does it match your circumstances?
3. **Preferences** - Does it align with your priorities?
4. **Practicality** - Is it realistic for your situation?

### Recommendation Levels

**🟢 Highly Recommended**: Meets all criteria, strongly suits your situation

**🟡 Suitable**: Meets criteria, could work well

**🟠 Possible**: Meets basic requirements but has drawbacks

**🔴 Not Suitable**: Doesn't meet criteria or poor match

## What Each Solution Offers

### Individual Voluntary Arrangement (IVA)

**Best for**: Regular income, £6,000+ debt, want debt write-off

**Key features**:
- ✅ 60-70% debt written off
- ✅ Legal protection from creditors
- ✅ Keep home (usually)
- ❌ 5-6 year commitment
- ❌ £5,000-£8,000 fees

**Requires**:
- Minimum £6,000 debt
- £80-100+ monthly disposable income
- Regular income source
- 2+ creditors

[Full IVA Details →](/what-is-an-iva/)

---

### Debt Management Plan (DMP)

**Best for**: Any debt amount, want flexibility, repay in full

**Key features**:
- ✅ Often free
- ✅ Very flexible
- ✅ Can cancel anytime
- ❌ No debt write-off
- ❌ No legal protection

**Requires**:
- Some disposable income
- Willing to repay 100%
- Cooperative creditors

[DMP vs IVA →](/debt-solutions/iva-vs-dmp/)

---

### Debt Relief Order (DRO)

**Best for**: Low income, minimal assets, debts under £30k

**Key features**:
- ✅ Only £90 cost
- ✅ All debt written off
- ✅ Just 12 months
- ❌ Very strict criteria
- ❌ Asset/income limits

**Requires**:
- Debts under £30,000
- Disposable income under £75/month
- Assets under £2,000
- Not homeowner (effectively)

[DRO vs IVA →](/debt-solutions/iva-vs-dro/)

---

### Bankruptcy

**Best for**: Large debts, no way to repay, no significant assets

**Key features**:
- ✅ All debts written off
- ✅ Only 12 months
- ✅ Fresh start
- ❌ Home typically sold
- ❌ Assets taken
- ❌ Serious restrictions

**Requires**:
- Unable to pay debts
- £680 upfront fee

[Bankruptcy vs IVA →](/debt-solutions/iva-vs-bankruptcy/)

---

### Full & Final Settlement

**Best for**: Have lump sum available, want quick resolution

**Key features**:
- ✅ Quick resolution
- ✅ Partial debt write-off
- ✅ Avoids insolvency
- ❌ Need substantial lump sum
- ❌ No guarantee of acceptance

**Requires**:
- Lump sum (typically 30-50% of debt)
- Creditor agreement

## Example Comparisons

### Scenario 1: Medium Debt, Regular Income

**Profile**:
- Debt: £18,000
- Income: £1,800/month
- Expenses: £1,600/month
- Disposable: £200/month
- Homeowner: Yes (£30k equity)
- Creditors: Threatening court

**Recommended Solutions**:
1. 🟢 **IVA** - Highly recommended
   - Protects home
   - Writes off ~£10,000
   - Stops creditor action
   - Payment: £200/month for 60 months

2. 🟡 **DMP** - Suitable alternative
   - More flexible
   - No fees
   - But pay full £18,000
   - Duration: 90 months

3. 🔴 **DRO** - Not eligible
   - Over £75 disposable income
   - Homeowner
   - Over £2,000 assets

---

### Scenario 2: Low Income, Low Debt, No Assets

**Profile**:
- Debt: £12,000
- Income: £900/month (benefits)
- Expenses: £850/month
- Disposable: £50/month
- Renting
- Assets: £500

**Recommended Solutions**:
1. 🟢 **DRO** - Highly recommended
   - Only £90 cost
   - All debt written off
   - 12 months complete
   - Perfect eligibility match

2. 🟠 **Bankruptcy** - Possible
   - Writes off debt
   - But £680 cost
   - Same outcome as DRO but more expensive

3. 🔴 **IVA** - Not suitable
   - Below minimum payment
   - Not cost-effective
   - Fees too high for debt level

---

### Scenario 3: High Debt, Homeowner

**Profile**:
- Debt: £45,000
- Income: £2,500/month
- Expenses: £1,900/month
- Disposable: £600/month
- Homeowner: Yes (£80k equity)
- No legal action yet

**Recommended Solutions**:
1. 🟢 **IVA** - Highly recommended
   - Protects £80k home equity
   - Write off ~£27,000
   - Payment: £600/month
   - May need equity release year 5

2. 🟡 **DMP** - Suitable if prefer
   - Keep flexibility
   - Repay full £45,000
   - Free option available
   - Duration: 75 months

3. 🔴 **Bankruptcy** - Not recommended
   - Would lose £80k equity
   - IVA much better option

## Common Questions

**Q: Why might I be recommended multiple solutions?**  
A: Different solutions suit different priorities. You may qualify for several options with different pros/cons.

**Q: Can I ignore the recommendation?**  
A: Yes. Recommendations are guidance based on typical scenarios. Your personal preferences matter - speak to advisors about all options.

**Q: What if no solution is recommended?**  
A: Rare, but could mean: 1) Need more info, 2) Informal options better, 3) Your situation needs specialist advice.

**Q: Is the recommendation binding?**  
A: No. This is guidance only. Professional debt advisors will give personalized recommendations after full assessment.

**Q: What if I'm between two solutions?**  
A: Common situation. Key differences usually come down to: debt write-off vs flexibility, or cost vs duration. Speak to advisors about both.

**Q: Does the tool consider my credit score?**  
A: No, because all formal debt solutions damage credit similarly (6 years). Your current score doesn't affect solution choice.

**Q: Can I use two solutions together?**  
A: No. You choose one solution for all your qualifying debts.

**Q: What if my situation changes after starting?**  
A: Most solutions have provisions for changes. IVAs have annual reviews. DMPs are flexible. DRO/Bankruptcy are fixed duration.

## Important Considerations

### Scotland Residents

If you selected Scotland, note:

**Different options available**:
- **Trust Deed** (instead of IVA)
- **Sequestration** (instead of bankruptcy)
- **DAS Debt Payment Programme**

**Not available**:
- IVA (England/Wales/NI only)
- DRO (England/Wales/NI only)

[Scottish debt solutions →](https://www.mygov.scot/debt)

### When to Seek Emergency Advice

**Contact advisors urgently if**:
- Bailiffs visiting
- Court date set
- Eviction threatened
- Utilities being disconnected
- Can't afford essentials

**Emergency helplines**:
- **StepChange**: 0800 138 1111
- **National Debtline**: 0808 808 4000
- **Citizens Advice**: Find local bureau

### Professional Advice

This tool provides guidance but **cannot replace professional advice**.

**Always speak to advisors before deciding** because:
- They see your full financial picture
- Can negotiate with creditors
- Know which providers are reputable
- Can spot issues you might miss
- Give FCA-regulated advice

## Next Steps Based on Your Result

### If IVA Was Recommended

1. [Check detailed eligibility](/calculators/eligibility/)
2. [Calculate exact payment](/calculators/monthly-payment/)
3. [Understand IVA process](/iva-process/)
4. Contact 2-3 licensed Insolvency Practitioners
5. Compare offers

### If DMP Was Recommended

1. Contact free debt charities:
   - **StepChange**: 0800 138 1111
   - **National Debtline**: 0808 808 4000
   - **PayPlan**: 0800 280 2816
2. Prepare income/expense breakdown
3. List all creditors
4. Discuss creditor cooperation likelihood

### If DRO Was Recommended

1. Contact approved intermediaries:
   - **Citizens Advice**: Local bureau
   - **StepChange**: 0800 138 1111
2. Gather financial evidence
3. List all debts and assets
4. Complete application with their help

### If Bankruptcy Was Recommended

1. Understand bankruptcy process
2. Consider alternatives first
3. Seek debt advice
4. Understand implications
5. Prepare £680 fee

### If Multiple Solutions Recommended

1. Review [full comparison table](/debt-solutions/comparison-table/)
2. Consider your priorities
3. Speak to debt advisors about pros/cons
4. Get quotes/estimates for each
5. Make informed decision

## Get Professional Help

**Free debt advice** (highly recommended):

- **StepChange Debt Charity**
  - Phone: 0800 138 1111
  - Online: stepchange.org
  - Free, confidential, expert advice

- **National Debtline**
  - Phone: 0808 808 4000
  - Online: nationaldebtline.org
  - Free fact sheets and tools

- **Citizens Advice**
  - Online: citizensadvice.org.uk
  - Local bureaux: Face-to-face help
  - Free, impartial advice

- **PayPlan**
  - Phone: 0800 280 2816
  - Online: payplan.com
  - Free debt management services

**Warning**: Avoid companies that:
- Charge upfront fees for debt advice
- Pressure you to decide immediately
- Guarantee debt write-off without assessment
- Are not FCA authorized

---

**Remember**: This tool provides guidance based on typical scenarios. Your actual best option depends on many personal factors. Always get professional advice before deciding on a debt solution.

[Back to Calculators](/calculators/) | [Compare All Solutions →](/debt-solutions/comparison-table/)

<script src="/js/solution-comparator.js"></script>
