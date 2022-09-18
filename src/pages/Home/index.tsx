import { useState } from "react";
import GridButton from "~/components/GridButton";
import { OPERATOR_TYPE } from "~/constants";
import useCalculate from "~/hooks/useCalculate";
import {
  CalculatorApp,
  CalculatorContainer,
  DisplayPanel,
  MaterialUISwitch,
} from "~/pages/Home/home.styled";
import { validateAndsetValue } from "~/utils/validateAndsetNumber";

function Home() {
  const [firstNumber, setFirstNumber] = useState<string | null>(null);
  const [secondNumber, setSecondNumber] = useState<string | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [result, setResult] = useState<number | null>(null);

  const { handleCalculate } = useCalculate(
    operator,
    firstNumber,
    secondNumber,
    clear,
    setResult
  );

  function getValue(value: string) {
    if (result) {
      setFirstNumber(result.toString());
      setResult(null);
    }
    if (operator === null) {
      validateAndsetValue(value, firstNumber, setFirstNumber, setResult);
    }

    if (operator !== null) {
      validateAndsetValue(value, secondNumber, setSecondNumber, setResult);
    }

    if (OPERATOR_TYPE.includes(value)) {
      if (!firstNumber && !result) return;

      if (result) {
        setFirstNumber(result.toString());
        setResult(null);
      }

      if (firstNumber && operator && secondNumber) {
        handleCalculate();
      }

      setOperator(value);
    }
  }

  function handleClearAll() {
    setFirstNumber(null);
    setSecondNumber(null);
    setOperator(null);
    setResult(null);
  }

  function clear() {
    setFirstNumber(null);
    setSecondNumber(null);
    setOperator(null);
  }

  console.log({ result, firstNumber, secondNumber, operator });

  return (
    <CalculatorApp>
      <MaterialUISwitch />
      <CalculatorContainer>
        <DisplayPanel>
          {result && <span>{result}</span>}
          {firstNumber && <span>{firstNumber}</span>}
          {operator && <span>{operator}</span>}
          {secondNumber && <span>{secondNumber}</span>}
        </DisplayPanel>
        <GridButton
          getValue={getValue}
          handleClear={handleClearAll}
          handleCalculate={handleCalculate}
        />
      </CalculatorContainer>
    </CalculatorApp>
  );
}

export default Home;
