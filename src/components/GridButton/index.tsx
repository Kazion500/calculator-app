import React from "react";
import { Box, Stack } from "@mui/material";
import CalculatorButton from "~/components/CalculatorButton";

interface GridButtonProps {
  getValue: (number: string) => void;
  handleClear: () => void;
  handleCalculate: () => void;
}

const GridButton: React.FC<GridButtonProps> = (props) => {
  const { getValue, handleClear, handleCalculate } = props;

  return (
    <Box>
      <Stack spacing={1} direction={"row"} mt={1}>
        <CalculatorButton
          label="c"
          onClick={handleClear}
          style={{
            width: "100%",
          }}
        />
        <CalculatorButton
          label="÷"
          onClick={(e) => getValue(e.currentTarget.textContent as string)}
        />
        <CalculatorButton
          label="×"
          onClick={(e) => getValue(e.currentTarget.textContent as string)}
        />
      </Stack>
      <Stack spacing={1} direction={"row"} mt={1}>
        <CalculatorButton
          label="7"
          onClick={(e) => getValue(e.currentTarget.textContent as string)}
        />
        <CalculatorButton
          label="8"
          onClick={(e) => getValue(e.currentTarget.textContent as string)}
        />
        <CalculatorButton
          label="9"
          onClick={(e) => getValue(e.currentTarget.textContent as string)}
        />
        <CalculatorButton
          label="-"
          onClick={(e) => getValue(e.currentTarget.textContent as string)}
        />
      </Stack>
      <Stack spacing={1} direction={"row"} mt={1}>
        <CalculatorButton
          label="4"
          onClick={(e) => getValue(e.currentTarget.textContent as string)}
        />
        <CalculatorButton
          label="5"
          onClick={(e) => getValue(e.currentTarget.textContent as string)}
        />
        <CalculatorButton
          label="6"
          onClick={(e) => getValue(e.currentTarget.textContent as string)}
        />
        <CalculatorButton
          label="+"
          onClick={(e) => getValue(e.currentTarget.textContent as string)}
        />
      </Stack>
      <Stack spacing={1} direction={"row"} mt={1}>
        <CalculatorButton
          label="1"
          onClick={(e) => getValue(e.currentTarget.textContent as string)}
        />
        <CalculatorButton
          label="2"
          onClick={(e) => getValue(e.currentTarget.textContent as string)}
        />
        <CalculatorButton
          label="3"
          onClick={(e) => getValue(e.currentTarget.textContent as string)}
        />
        <CalculatorButton
          label="="
          variant="contained"
          onClick={handleCalculate}
        />
      </Stack>
      <Stack spacing={1} direction={"row"} mt={1}>
        <CalculatorButton
          style={{
            width: "100%",
          }}
          label="0"
          onClick={(e) => getValue(e.currentTarget.textContent as string)}
        />
        <CalculatorButton
          label="."
          onClick={(e) => getValue(e.currentTarget.textContent as string)}
        />
      </Stack>
    </Box>
  );
};

export default GridButton;
