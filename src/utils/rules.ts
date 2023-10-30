export function minCharacters(minExpected: number) {
  return (text: string) =>
    text.trim().length >= minExpected ||
    `Campo deve conter ${minExpected} caracteres ou mais`;
}
