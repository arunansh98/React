export default function Third() {
  return (
    <h1>
      Third Page Works
      {Array(100000)
        .fill(1)
        .map((_item, index) => index + 1)
        .map((item) => (
          <h2>
            Cube of {item} is {item * item * item}
          </h2>
        ))}
    </h1>
  );
}
