import { useMemo, useState } from "react";
import { Calculator, ArrowRight } from "lucide-react";

export default function AutoLoanCalculator() {
  const [carPrice, setCarPrice] = useState(800000);
  const [downPayment, setDownPayment] = useState(150000);
  const [interestRate, setInterestRate] = useState(9.5);
  const [loanTenure, setLoanTenure] = useState(5);

  const loanAmount = Math.max(carPrice - downPayment, 0);

  const monthlyEmi = useMemo(() => {
    if (!loanAmount || !interestRate || !loanTenure) return 0;

    const monthlyRate = interestRate / 12 / 100;
    const numberOfPayments = loanTenure * 12;

    const emi =
      (loanAmount *
        monthlyRate *
        Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    return Math.round(emi);
  }, [loanAmount, interestRate, loanTenure]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="loan-calculator-card">
      <div className="loan-calculator-heading">
        <div className="loan-icon">
          <Calculator size={20} />
        </div>

        <div>
          <span>FINANCE YOUR CAR</span>
          <h3>Auto Loan Calculator</h3>
        </div>
      </div>

      <p className="loan-description">
        Calculate your estimated monthly payment and find a plan that fits
        your budget.
      </p>

      <div className="loan-fields">
        {/* Car Price */}
        <div className="loan-field">
          <label>Car Price</label>

          <div className="input-wrapper">
            <span>₹</span>

            <input
              type="number"
              value={carPrice}
              min="0"
              onChange={(e) => setCarPrice(Number(e.target.value))}
            />
          </div>
        </div>

        {/* Down Payment */}
        <div className="loan-field">
          <label>Down Payment</label>

          <div className="input-wrapper">
            <span>₹</span>

            <input
              type="number"
              value={downPayment}
              min="0"
              max={carPrice}
              onChange={(e) => setDownPayment(Number(e.target.value))}
            />
          </div>
        </div>

        {/* Interest */}
        <div className="loan-field">
          <label>Interest Rate</label>

          <div className="input-wrapper">
            <input
              type="number"
              value={interestRate}
              min="0"
              step="0.1"
              onChange={(e) => setInterestRate(Number(e.target.value))}
            />

            <span>%</span>
          </div>
        </div>

        {/* Tenure */}
        <div className="loan-field">
          <label>Loan Tenure</label>

          <div className="input-wrapper select-wrapper">
            <select
              value={loanTenure}
              onChange={(e) => setLoanTenure(Number(e.target.value))}
            >
              <option value={1}>1 Year</option>
              <option value={2}>2 Years</option>
              <option value={3}>3 Years</option>
              <option value={4}>4 Years</option>
              <option value={5}>5 Years</option>
              <option value={6}>6 Years</option>
              <option value={7}>7 Years</option>
            </select>
          </div>
        </div>
      </div>

      {/* Result */}
      <div className="loan-result">
        <div>
          <span>Estimated Monthly EMI</span>

          <strong>{formatCurrency(monthlyEmi)}</strong>
        </div>

        <div className="loan-summary">
          <div>
            <span>Loan Amount</span>
            <b>{formatCurrency(loanAmount)}</b>
          </div>

          <div>
            <span>Tenure</span>
            <b>{loanTenure} Years</b>
          </div>
        </div>
      </div>

      <button className="loan-enquire-btn">
        Enquire About This Car
        <ArrowRight size={18} />
      </button>
    </div>
  );
}