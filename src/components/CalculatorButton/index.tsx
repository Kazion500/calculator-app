import { Paper } from "@mui/material";
import Button, { ButtonProps } from "@mui/material/Button";

interface CalculatorButtonProps extends ButtonProps {
  label: string;
}

const CalculatorButton: React.FC<CalculatorButtonProps> = (props) => {
  return (
    <Paper style={{ ...props.style }}>
      <Button variant={props?.variant} {...props}>
        {props.label}
      </Button>
    </Paper>
  );
};

export default CalculatorButton;
