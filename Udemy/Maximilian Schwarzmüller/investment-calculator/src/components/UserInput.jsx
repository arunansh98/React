export default function UserInput({investmentInput, handleInputChange}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={investmentInput.initialInvestment}
            onChange={(event) => handleInputChange(event, "initialInvestment")}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={investmentInput.annualInvestment}
            onChange={(event) => handleInputChange(event, "annualInvestment")}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={investmentInput.expectedReturn}
            onChange={(event) => handleInputChange(event, "expectedReturn")}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={investmentInput.duration}
            onChange={(event) => handleInputChange(event, "duration")}
          />
        </p>
      </div>
    </section>
  );
}
