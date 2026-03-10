export default function Second() {
  return (
    <h1>
      Second Page Works
      {Array(10000)
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
