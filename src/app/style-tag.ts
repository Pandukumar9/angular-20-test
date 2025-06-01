// style-tag.ts
export function css(strings: TemplateStringsArray, ...expressions: any[]): string {
  return strings.reduce((result, str, i) => {
    const expr = expressions[i] !== undefined ? expressions[i] : '';
    return result + str + expr;
  }, '');
}
