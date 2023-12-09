function findNaughtyStep(original: string, modified: string): string {
  if (original === modified) return "";
  const originalIsLarger: boolean = original.length > modified.length;

  const diffSteps: string[] = [];
  for (let i: number = 0; i < modified.length; i++) {
    if (original[i] !== modified[i]) {
      const modifiedLetter = originalIsLarger ? original[i] : modified[i];
      diffSteps.push(modifiedLetter);
    }
  }
  return diffSteps[0];
}

export default findNaughtyStep;
