import { useMemo, useState } from "react";
import { Calculator, ArrowRight } from "lucide-react";

export default function AutoLoanCalculator() {
  const [carPrice, setCarPrice] = useState("0");
  const [downPayment, setDownPayment] = useState("0");
  const [interestRate, setInterestRate] = useState("0");
  const [loanTenure, setLoanTenure] = useState(1);

  // Convert input values to numbers for calculation
  const price = Number(carPrice) || 0;
  const payment = Number(downPayment) || 0;
  const rate = Number(interestRate) || 0;

  const loanAmount = Math.max(price - payment, 0);

  const monthlyEmi = useMemo(() => {
    if (!loanAmount || !rate || !loanTenure) return 0;

    const monthlyRate = rate / 12 / 100;
    const numberOfPayments = loanTenure * 12;

    const emi =
      (loanAmount *
        monthlyRate *
        Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    return Math.round(emi);
  }, [loanAmount, rate, loanTenure]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Handles 0 → first typed number
  const handleNumberInput = (value, setter) => {
    if (value === "") {
      setter("0");
    } else {
      setter(value.replace(/^0+(?=\d)/, ""));
    }
  };

  return (
    <div className="loan-calculator-card">

      {/* =========================================
          HEADING
      ========================================= */}

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


      {/* =========================================
          INPUT FIELDS
      ========================================= */}

      <div className="loan-fields">

        {/* Car Price */}
        <div className="loan-field">
          <label>Car Price</label>

          <div className="input-wrapper">
            <span>₹</span>

            <input
              type="number"
              min="0"
              value={carPrice}
              onChange={(e) =>
                handleNumberInput(e.target.value, setCarPrice)
              }
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
              min="0"
              value={downPayment}
              onChange={(e) =>
                handleNumberInput(e.target.value, setDownPayment)
              }
            />
          </div>
        </div>


        {/* Interest Rate */}
        <div className="loan-field">
          <label>Interest Rate</label>

          <div className="input-wrapper">

            <input
              type="number"
              min="0"
              step="0.1"
              value={interestRate}
              onChange={(e) =>
                handleNumberInput(e.target.value, setInterestRate)
              }
            />

            <span>%</span>

          </div>
        </div>


        {/* Loan Tenure */}
        <div className="loan-field">
          <label>Loan Tenure</label>

          <div className="input-wrapper select-wrapper">

            <select
              value={loanTenure}
              onChange={(e) =>
                setLoanTenure(Number(e.target.value))
              }
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


      {/* =========================================
          RESULT
      ========================================= */}

      <div className="loan-result">

        <div>
          <span>Estimated Monthly EMI</span>

          <strong>
            {formatCurrency(monthlyEmi)}
          </strong>
        </div>


        <div className="loan-summary">

          <div>
            <span>Loan Amount</span>

            <b>
              {formatCurrency(loanAmount)}
            </b>
          </div>


          <div>
            <span>Tenure</span>

            <b>
              {loanTenure} Years
            </b>
          </div>

        </div>

      </div>


      {/* =========================================
          ENQUIRE BUTTON
      ========================================= */}

      <button className="loan-enquire-btn">
        Enquire About This Car

        <ArrowRight size={18} />
      </button>

    </div>
  );
}