import { formatter, calculateInvestmentResults } from "../util/investment";

export default function Results({ investmentInput }) {
  function getFormattedValue(value) {
    return formatter.format(value);
  }

  const results = [
    ...calculateInvestmentResults(investmentInput).map((result) => ({
      ...result,
    })),
  ];

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => (
          <tr>
            <td>{result.year}</td>
            <td>{getFormattedValue(result.valueEndOfYear)}</td>
            <td>{getFormattedValue(result.interest)}</td>
            <td>{getFormattedValue(result.totalInterest)}</td>
            <td>{getFormattedValue(result.investedCapital)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
