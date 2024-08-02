import { Autocomplete, TextField } from "@mui/material";
import { SyntheticEvent } from "react";

interface Props {
  value: string | null;
  handleChange: (
    vent: SyntheticEvent<Element, Event>,
    value: string | null
  ) => void;
  data: any;
  title: string;
}

function FilterTable({ value, handleChange, data, title }: Props) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={data}
      fullWidth
      sx={{
        div: { div: { padding: "1px !important" }, label: { top: "-7px" } },
      }}
      renderInput={(params) => <TextField {...params} label={title} />}
      value={value}
      onChange={handleChange}
    />
  );
}

export default FilterTable;
