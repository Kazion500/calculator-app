export const validateAndsetValue = (
  value: string,
  number: string | null,
  setFunc: (value: string | any) => void,
  setResult: (value: number | null) => void
) => {
  if (number?.includes(".")) {
    value = value.replaceAll(".", "");
  }

  if (value.startsWith(".") && number === null) {
    value = "0.";
  }

  if (value.match(/^[0-9.-]+$/)) {
    setResult(null);
    setFunc((preState: string | null) =>
      preState === null ? value : preState + value
    );
  }
};
