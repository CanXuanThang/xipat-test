import { TextField } from "@mui/material";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props extends ReactDatePickerProps<never, boolean> {
  error?: boolean;
  selectedDate: Date;
  onChange: (e: Date | null) => void;
  onBlur: () => void;
  helperText?: string;
}

function DatePickerBase(props: Props) {
  const { error, onChange, onBlur, selectedDate, helperText } = props;

  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date: Date | null) => {
        onChange(date);
        onBlur();
      }}
      customInput={
        <TextField
          variant="outlined"
          helperText={helperText}
          inputProps={{
            autoComplete: "new-password",
          }}
          fullWidth
          error={error}
        />
      }
    />
  );
}

export default DatePickerBase;
