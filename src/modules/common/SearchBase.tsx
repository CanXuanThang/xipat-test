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
      size="small"
      variant="outlined"
      placeholder="Search"
      sx={{ maxWidth: 200, typography: "body2" }}
      {...props}
    />
  );
}

export default SearchBase;
