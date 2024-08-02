import { InputAdornment, TextField, TextFieldProps } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBase(props: TextFieldProps) {
  return (
    <TextField
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      fullWidth
      size="small"
      variant="outlined"
      placeholder="Search"
      sx={{ typography: "body2" }}
      {...props}
    />
  );
}

export default SearchBase;
