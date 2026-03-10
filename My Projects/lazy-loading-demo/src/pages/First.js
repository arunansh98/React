export default function First() {
  return (
    <h1>
      First Page Works
      {Array(1000)
        .fill(1)
        .map((_item, index) => index + 1)
        .map((item) => (
          <h2>
            Square of {item} is {item * item}
          </h2>
        ))}
    </h1>
  );
}
