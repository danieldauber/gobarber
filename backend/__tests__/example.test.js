function soma(a, b) {
  return a + b;
}

test('example', () => {
  const result = soma(4, 5);

  expect(result).toBe(9);
});
