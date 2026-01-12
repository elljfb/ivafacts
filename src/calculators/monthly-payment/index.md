---
layout: page.njk
title: IVA Monthly Payment Calculator - Estimate Your IVA Payments
description: Calculate your potential IVA monthly payment based on your income and essential expenses. Free, confidential calculator.
---

## IVA Monthly Payment Calculator

Calculate your potential IVA monthly payment using our free calculator. This tool estimates your disposable income and shows what you'd likely pay each month in an Individual Voluntary Arrangement.

<div class="calculator-intro">
  <p><strong>How it works:</strong> Your IVA payment is based on your disposable income - what's left after your essential living expenses. This calculator helps you understand what you could afford.</p>
  <p class="note"><strong>Note:</strong> This is an estimate only. Your actual IVA payment will be determined by a licensed Insolvency Practitioner after a detailed assessment of your circumstances.</p>
</div>

<div class="calculator-card">
  <form id="paymentCalculator" class="calculator-form">
    <div class="calculator-section">
      <h3>Your Income</h3>
      <p class="section-note">Include all sources of regular monthly income</p>
      
      <div class="form-group">
        <label for="employmentIncome">Employment Income (after tax)</label>
        <div class="input-with-prefix">
          <span class="prefix">£</span>
          <input type="number" id="employmentIncome" value="0" min="0" step="0.01">
        </div>
        <small>Net monthly salary/wages</small>
      </div>

      <div class="form-group">
        <label for="benefitsIncome">Benefits Income</label>
        <div class="input-with-prefix">
          <span class="prefix">£</span>
          <input type="number" id="benefitsIncome" value="0" min="0" step="0.01">
        </div>
        <small>Universal Credit, PIP, ESA, etc.</small>
      </div>

      <div class="form-group">
        <label for="otherIncome">Other Income</label>
        <div class="input-with-prefix">
          <span class="prefix">£</span>
          <input type="number" id="otherIncome" value="0" min="0" step="0.01">
        </div>
        <small>Pension, maintenance, rental income, etc.</small>
      </div>

      <div class="form-total">
        <strong>Total Monthly Income:</strong>
        <span id="totalIncome">£0.00</span>
      </div>
    </div>

    <div class="calculator-section">
      <h3>Your Essential Expenses</h3>
      <p class="section-note">List your necessary monthly living costs</p>

      <div class="form-group">
        <label for="mortgageRent">Mortgage/Rent</label>
        <div class="input-with-prefix">
          <span class="prefix">£</span>
          <input type="number" id="mortgageRent" value="0" min="0" step="0.01">
        </div>
      </div>

      <div class="form-group">
        <label for="councilTax">Council Tax</label>
        <div class="input-with-prefix">
          <span class="prefix">£</span>
          <input type="number" id="councilTax" value="0" min="0" step="0.01">
        </div>
      </div>

      <div class="form-group">
        <label for="utilities">Utilities (Gas, Electric, Water)</label>
        <div class="input-with-prefix">
          <span class="prefix">£</span>
          <input type="number" id="utilities" value="0" min="0" step="0.01">
        </div>
      </div>

      <div class="form-group">
        <label for="food">Food & Housekeeping</label>
        <div class="input-with-prefix">
          <span class="prefix">£</span>
          <input type="number" id="food" value="0" min="0" step="0.01">
        </div>
      </div>

      <div class="form-group">
        <label for="transport">Transport Costs</label>
        <div class="input-with-prefix">
          <span class="prefix">£</span>
          <input type="number" id="transport" value="0" min="0" step="0.01">
        </div>
        <small>Car, fuel, public transport, insurance</small>
      </div>

      <div class="form-group">
        <label for="insurance">Insurance</label>
        <div class="input-with-prefix">
          <span class="prefix">£</span>
          <input type="number" id="insurance" value="0" min="0" step="0.01">
        </div>
        <small>Home, life, contents insurance</small>
      </div>

      <div class="form-group">
        <label for="childcare">Childcare Costs</label>
        <div class="input-with-prefix">
          <span class="prefix">£</span>
          <input type="number" id="childcare" value="0" min="0" step="0.01">
        </div>
      </div>

      <div class="form-group">
        <label for="other">Other Essential Expenses</label>
        <div class="input-with-prefix">
          <span class="prefix">£</span>
          <input type="number" id="other" value="0" min="0" step="0.01">
        </div>
        <small>Prescriptions, phone, TV license, etc.</small>
      </div>

      <div class="form-total">
        <strong>Total Monthly Expenses:</strong>
        <span id="totalExpenses">£0.00</span>
      </div>
    </div>

    <div class="calculator-section">
      <h3>Household Information</h3>
      
      <div class="form-group">
        <label for="adults">Number of Adults in Household</label>
        <input type="number" id="adults" value="1" min="1" max="10">
      </div>

      <div class="form-group">
        <label for="children">Number of Children</label>
        <input type="number" id="children" value="0" min="0" max="10">
      </div>
    </div>

    <button type="submit" class="btn btn-primary btn-large">Calculate My IVA Payment</button>
  </form>

  <div id="calculatorResult" class="calculator-result" style="display: none;">
    <div class="result-header">
      <h3>Your Estimated IVA Payment</h3>
    </div>
    
    <div id="resultContent"></div>

    <div class="result-actions">
      <a href="/calculators/eligibility/" class="btn btn-primary">Check Full Eligibility</a>
      <button type="button" id="resetCalculator" class="btn btn-secondary">Recalculate</button>
    </div>
  </div>
</div>

## Understanding Your IVA Payment

### What is Disposable Income?

Your **disposable income** is what's left after you've paid all your essential living expenses. This is the amount available to pay your creditors through an IVA.

**Formula**:
```
Total Monthly Income
MINUS Essential Expenses
= Disposable Income (Your IVA Payment)
```

### What Counts as Essential Expenses?

IVA payments are based on reasonable allowances for essential spending:

**✅ Always Allowed**:
- Mortgage or rent
- Council tax
- Utilities (gas, electric, water)
- Food and housekeeping
- Transport to work
- Essential insurance
- Childcare costs
- Medical necessities
- Phone/internet (reasonable)

**⚠️ Sometimes Allowed**:
- Gym memberships (if medical need)
- Charitable donations (small amounts)
- School trips (reasonable amounts)
- Pet food (essential pets only)

**❌ Not Usually Allowed**:
- Credit card payments
- Loan repayments (unless secured)
- Luxury expenses
- Holidays
- Entertainment subscriptions
- High-end phone contracts

### Household Size Guidelines

Your household size affects your allowances:

**Single Person**:
- Food & housekeeping: £200-£350/month typical
- Higher in London

**Couple**:
- Food & housekeeping: £400-£550/month typical

**With Children**:
- Additional £70-£100 per child for food
- School meals, uniforms, activities allowed

### Minimum IVA Payment

Most IVA providers require:
- **Minimum**: £80-£100 per month
- **Typical**: £150-£250 per month
- **No maximum**: Based on affordability

**Below £80-£100?** IVA may not be suitable. Consider:
- Debt Relief Order (DRO)
- Debt Management Plan (DMP)
- Bankruptcy

### Annual Payment Reviews

Your IVA payment isn't fixed forever:

**Annual Reviews**:
- Conducted every 12 months
- Income and expenses reassessed
- Payment may increase or decrease
- Based on current circumstances

**Payment Increases If**:
- Income increases significantly
- Expenses decrease
- Household changes reduce costs

**Payment Decreases If**:
- Income reduces
- Essential expenses increase
- New dependents

**Typical scenarios**:
- Promotion → Payment may increase 50% of income rise
- Redundancy → Payment may reduce or pause
- New baby → Payment may reduce

## Example Calculations

### Example 1: Typical IVA Payment

**Income**:
- Employment: £1,800/month
- Total income: £1,800

**Expenses**:
- Rent: £650
- Council tax: £110
- Utilities: £120
- Food: £250
- Transport: £150
- Insurance: £40
- Phone: £30
- Total expenses: £1,350

**Calculation**:
```
£1,800 - £1,350 = £450 disposable income
Proposed IVA payment: £450/month ✅
```

**Result**: Suitable for IVA. Payment is above minimum and affordable.

---

### Example 2: Low Disposable Income

**Income**:
- Employment: £1,200/month
- Benefits: £300
- Total income: £1,500

**Expenses**:
- Rent: £550
- Council tax: £100
- Utilities: £110
- Food: £280
- Transport: £120
- Other: £280
- Total expenses: £1,440

**Calculation**:
```
£1,500 - £1,440 = £60 disposable income
```

**Result**: ❌ Below IVA minimum (£80-£100). Consider DRO instead.

---

### Example 3: High Income, High Payment

**Income**:
- Employment: £3,200/month
- Total income: £3,200

**Expenses**:
- Mortgage: £850
- Council tax: £150
- Utilities: £140
- Food: £400
- Transport: £200
- Insurance: £80
- Childcare: £600
- Other: £180
- Total expenses: £2,600

**Calculation**:
```
£3,200 - £2,600 = £600 disposable income
Proposed IVA payment: £600/month ✅
```

**Result**: Suitable for IVA. High payment but affordable and will clear debt faster.

---

### Example 4: Couple with Children

**Income**:
- Person 1: £1,600/month
- Person 2: £900/month
- Child benefit: £150
- Total income: £2,650

**Expenses**:
- Mortgage: £700
- Council tax: £130
- Utilities: £160
- Food: £500 (family of 4)
- Transport: £180
- Insurance: £60
- Childcare: £400
- Other: £220
- Total expenses: £2,350

**Calculation**:
```
£2,650 - £2,350 = £300 disposable income
```

**Note**: Only the person with debts enters IVA. If both have debts, both can enter individual IVAs.

**Result**: £300/month payment suitable ✅

## Factors That Affect Your Payment

### 1. Income Changes

**During IVA**:
- Payrise → Payment likely increases
- Bonus/overtime → May need to contribute part
- New job → Payment reassessed
- Redundancy → Payment reduces or pauses

### 2. Expense Changes

**Increases allowed**:
- Utility price rises
- Council tax increases
- Rent increases
- Transport cost rises
- New essential expenses

**Decreases**:
- Mortgage reduction → Payment increases
- Children leave home → Payment may increase
- Lower rent → Payment increases

### 3. Household Changes

**Payment may reduce**:
- New baby
- Partner loses job
- Dependents move in
- Caring responsibilities

**Payment may increase**:
- Partner gets job
- Children become independent
- Shared expenses reduce

### 4. Windfall Policy

**Lump sums during IVA**:
- Inheritance, bonuses, tax refunds typically go to IVA
- Small windfall (under £500) may keep
- Large windfall may end IVA early
- Each case assessed individually

## Payment Protection

### If You Can't Afford Payment

**Options**:
- **Payment break**: 1-3 months (extends IVA)
- **Payment reduction**: If circumstances change
- **Variation**: Modify IVA terms (needs creditor approval)
- **Failure**: Last resort (debts return)

### Payment Flexibility

**Limited flexibility**:
- Can request payment changes at annual review
- Can request payment break for emergencies
- Cannot simply reduce payments yourself

**Unlike DMP**:
- DMP allows flexible changes anytime
- IVA requires IP approval
- IVA is legally binding

## Comparing Monthly Payments

### IVA vs Other Solutions

**IVA**:
- Payment: £150/month typical
- Duration: 60 months
- Total paid: £9,000
- Debt written off: Yes ✅

**DMP**:
- Payment: £150/month
- Duration: 180 months (if £27k debt)
- Total paid: £27,000
- Debt written off: No ❌

**DRO**:
- Payment: £0/month
- Duration: 12 months
- Total paid: £90 (application)
- Debt written off: Yes ✅

**Bankruptcy**:
- Payment: Variable based on income
- Duration: 36 months payments
- Total paid: £680 + payments
- Debt written off: Yes ✅

## Common Questions

**Q: Is my IVA payment fixed for 5-6 years?**  
A: No. It's reviewed annually and can change based on your circumstances.

**Q: What if my income increases?**  
A: Your payment typically increases by 50% of the net income rise. Example: £100/month payrise = £50/month IVA increase.

**Q: Can I make extra payments to finish faster?**  
A: Not usually beneficial. Speak to your IP about early settlement if you get a lump sum.

**Q: What if I lose my job during the IVA?**  
A: Contact your IP immediately. Payments can be reduced or paused. IVA can be extended.

**Q: Are bonuses included in IVA payments?**  
A: Usually yes. Typically 50% of net bonus goes to IVA.

**Q: Can I increase voluntary expenses to reduce my payment?**  
A: No. Your IP uses standard expense guidelines. Excessive expenses won't be accepted.

**Q: What's included in "reasonable" living expenses?**  
A: IPs use Standard Financial Statement (SFS) guidelines based on household size and location.

**Q: Does my partner's income affect my IVA payment?**  
A: Only for shared household expenses. Your partner's income isn't included directly unless joint IVA.

## Next Steps

### 1. Check Full Eligibility

Your payment amount is just one factor. Check if you meet all IVA criteria:

[IVA Eligibility Calculator →](/calculators/eligibility/)

### 2. Understand IVA Costs

Your monthly payment includes fees. Understand the full cost:

[IVA Cost Breakdown Tool →](/calculators/cost-breakdown/)

### 3. Compare Solutions

See if IVA is better than alternatives for your situation:

[Debt Solution Comparator →](/calculators/solution-comparator/)

### 4. Get Professional Advice

Speak to debt advisors for personalized assessment:

**Free Advice**:
- **StepChange**: 0800 138 1111
- **National Debtline**: 0808 808 4000
- **Citizens Advice**: Local bureau

**Licensed IPs** (for IVA quotes):
- Compare 2-3 different providers
- Check FCA authorization
- Get fee breakdown in writing

---

**Remember**: This calculator provides estimates only. Your actual IVA payment will be determined by a licensed Insolvency Practitioner based on detailed assessment of your income, expenses, and circumstances.

[Back to Calculators](/calculators/)

<script src="/js/payment-calculator.js"></script>
