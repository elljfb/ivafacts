---
layout: page.njk
title: IVA Eligibility Calculator
description: Check if you meet the basic requirements for an Individual Voluntary Arrangement with our free eligibility calculator.
---

## Check Your IVA Eligibility

Answer the following questions to see if you meet the basic criteria for an Individual Voluntary Arrangement.

<div class="calculator-container">
  <form id="eligibility-calculator">
    
    <div class="calculator-section">
      <h3>Debt Information</h3>
      
      <div class="form-group">
        <label for="total-debt">What is your total unsecured debt?</label>
        <select id="total-debt" name="total-debt" required>
          <option value="">Select amount...</option>
          <option value="under-6000">Under £6,000</option>
          <option value="6000-10000">£6,000 - £10,000</option>
          <option value="10000-20000">£10,000 - £20,000</option>
          <option value="20000-50000">£20,000 - £50,000</option>
          <option value="over-50000">Over £50,000</option>
        </select>
        <small>Include credit cards, loans, overdrafts, but NOT mortgage or car finance</small>
      </div>
      
      <div class="form-group">
        <label for="num-creditors">How many creditors do you owe money to?</label>
        <select id="num-creditors" name="num-creditors" required>
          <option value="">Select number...</option>
          <option value="1">1 creditor</option>
          <option value="2-3">2-3 creditors</option>
          <option value="4-6">4-6 creditors</option>
          <option value="7-10">7-10 creditors</option>
          <option value="over-10">More than 10 creditors</option>
        </select>
      </div>
    </div>
    
    <div class="calculator-section">
      <h3>Income & Employment</h3>
      
      <div class="form-group">
        <label>Do you have a regular income?</label>
        <div class="radio-group">
          <input type="radio" id="income-yes" name="regular-income" value="yes" required>
          <label for="income-yes">Yes</label>
          <input type="radio" id="income-no" name="regular-income" value="no">
          <label for="income-no">No</label>
        </div>
      </div>
      
      <div class="form-group">
        <label for="employment-status">What is your employment status?</label>
        <select id="employment-status" name="employment-status" required>
          <option value="">Select status...</option>
          <option value="employed">Employed (PAYE)</option>
          <option value="self-employed">Self-employed</option>
          <option value="benefits">Receiving benefits</option>
          <option value="pension">Pension income</option>
          <option value="mixed">Mixed income sources</option>
          <option value="unemployed">Currently unemployed</option>
        </select>
      </div>
      
      <div class="form-group">
        <label for="monthly-income">What is your approximate monthly income (after tax)?</label>
        <input type="number" id="monthly-income" name="monthly-income" min="0" step="100" placeholder="£0" required>
      </div>
      
      <div class="form-group">
        <label for="monthly-expenses">What are your essential monthly expenses?</label>
        <input type="number" id="monthly-expenses" name="monthly-expenses" min="0" step="100" placeholder="£0" required>
        <small>Include rent/mortgage, utilities, food, transport, insurance</small>
      </div>
    </div>
    
    <div class="calculator-section">
      <h3>Assets & Circumstances</h3>
      
      <div class="form-group">
        <label>Do you own your home?</label>
        <div class="radio-group">
          <input type="radio" id="homeowner-yes" name="homeowner" value="yes" required>
          <label for="homeowner-yes">Yes (with mortgage)</label>
          <input type="radio" id="homeowner-outright" name="homeowner" value="outright">
          <label for="homeowner-outright">Yes (owned outright)</label>
          <input type="radio" id="homeowner-no" name="homeowner" value="no">
          <label for="homeowner-no">No (renting or living with family)</label>
        </div>
      </div>
      
      <div class="form-group">
        <label>Do you have significant assets (car worth over £2,000, savings, investments)?</label>
        <div class="radio-group">
          <input type="radio" id="assets-yes" name="assets" value="yes" required>
          <label for="assets-yes">Yes</label>
          <input type="radio" id="assets-no" name="assets" value="no">
          <label for="assets-no">No</label>
        </div>
      </div>
      
      <div class="form-group">
        <label>Where do you live?</label>
        <select id="location" name="location" required>
          <option value="">Select location...</option>
          <option value="england">England</option>
          <option value="wales">Wales</option>
          <option value="northern-ireland">Northern Ireland</option>
          <option value="scotland">Scotland</option>
        </select>
        <small>IVAs are available in England, Wales, and Northern Ireland. Scotland has Trust Deeds instead.</small>
      </div>
    </div>
    
    <button type="submit" class="btn btn-primary btn-large">Check My Eligibility</button>
  </form>
  
  <div id="eligibility-results" class="calculator-results hidden">
    <div class="results-header">
      <h3>Your Results</h3>
    </div>
    <div id="results-content"></div>
    <div class="results-actions">
      <button id="reset-calculator" class="btn btn-secondary">Start Over</button>
    </div>
  </div>
</div>

<div class="calculator-disclaimer">
  <h3>Important Information</h3>
  <ul>
    <li>This is an indication only - not a guarantee of IVA approval</li>
    <li>Final eligibility depends on creditor approval and IP assessment</li>
    <li>Always seek advice from a licensed Insolvency Practitioner</li>
    <li>This tool does not constitute financial advice</li>
  </ul>
</div>

## What Happens Next?

### If You're Likely Eligible
1. Research licensed Insolvency Practitioners
2. Book free consultations with 2-3 IPs
3. Prepare your financial documents
4. Read our [IVA Process Guide](/iva-process/)

### If You're Not Eligible
Don't worry - other debt solutions may be more suitable:
- [Debt Relief Order (DRO)](/debt-solutions/iva-vs-dro/) for lower debts
- [Debt Management Plan (DMP)](/debt-solutions/iva-vs-dmp/) for informal repayment
- [Compare all solutions](/calculators/solution-comparator/)

## Free Professional Advice

These organizations offer free, impartial debt advice:

- **StepChange**: 0800 138 1111
- **National Debtline**: 0808 808 4000
- **Citizens Advice**: Visit your local bureau
- **Money Helper**: 0800 138 7777

<script src="/js/eligibility-calculator.js"></script>
