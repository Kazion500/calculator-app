type useCalculateType = (
  operator: string | null,
  firstNumber: string | null,
  secondNumber: string | null,
  clear: () => void,
  setResult: (result: number) => void
) => { handleCalculate: () => void };

const useCalculate: useCalculateType = (
  operator,
  firstNumber,
  secondNumber,
  clear,
  setResult
) => {
  const handleCalculate = () => {
    if (firstNumber === null || secondNumber === null) {
      return;
    }

    const first = parseFloat(firstNumber);
    const second = parseFloat(secondNumber);

    switch (operator) {
      case "+":
        clear();
        setResult(first + second);
        break;
      case "-":
        clear();
        setResult(first - second);
        break;
      case "×":
        clear();
        setResult(first * second);
        break;
      case "÷":
        clear();
        setResult(first / second);
        break;
      default:
        break;
    }
  };

  return { handleCalculate };
};

export default useCalculate;
