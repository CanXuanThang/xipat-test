import {
  Box,
  InputAdornment,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import { Control, RegisterOptions, useController } from "react-hook-form";

type Props = TextFieldProps & {
  title: string;
  control: Control<any>;
  rules: Omit<
    RegisterOptions<any, any>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  name: string;
  colorBox?: boolean;
  handleOpenColor?: () => void;
};

function InputBase(props: Props) {
  const {
    title,
    control,
    rules,
    name,
    type = "text",
    colorBox,
    handleOpenColor,
    ...rest
  } = props;
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  });

  return (
    <Box>
      <Typography variant="subtitle1" color="#115BB2">
        {title}:
      </Typography>

      <TextField
        name={name}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        value={value || ""}
        error={!!error}
        inputRef={ref}
        variant="outlined"
        helperText={error?.message || ""}
        type={type}
        fullWidth
        {...rest}
        sx={{ div: { pr: 0 } }}
        InputProps={{
          endAdornment: colorBox && (
            <InputAdornment position="end" sx={{ px: "2px", ml: 0 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 54,
                  width: 54,
                  backgroundColor: value,
                  marginLeft: 10,
                  borderRadius: "6px",
                  border: "1px solid #000",
                  cursor: "pointer",
                }}
                onClick={handleOpenColor}
              ></Box>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

export default InputBase;
