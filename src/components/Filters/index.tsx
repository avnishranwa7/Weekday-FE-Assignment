import { FC } from "react";
import { Autocomplete, TextField } from "@mui/material";

// styles imports
import classes from "./index.module.css";

// local imports
import { EMPLOYEES, LOCATION_TYPE } from "./data";

interface Props {
  roles: Array<string>;
}

const Filters: FC<Props> = ({ roles }) => {
  return (
    <div className={classes.filters}>
      <Autocomplete
        multiple
        disablePortal
        id="combo-box-demo"
        options={roles}
        sx={{
          width: "fit-content",
          ".MuiInputBase-root": { padding: 0, width: "150px" },
          ".MuiFormLabel-root": {
            lineHeight: "normal",
            top: "-5px",
            fontSize: 14,
          },
          ".MuiOutlinedInput-root .MuiAutocomplete-endAdornment": { right: 0 },
        }}
        renderInput={(params) => <TextField {...params} label="Roles" />}
      />
      <Autocomplete
        multiple
        disablePortal
        id="combo-box-demo"
        options={EMPLOYEES}
        sx={{
          width: "fit-content",
          ".MuiInputBase-root": { padding: 0, width: "200px" },
          ".MuiFormLabel-root": {
            lineHeight: "normal",
            top: "-5px",
            fontSize: 14,
          },
          ".MuiOutlinedInput-root .MuiAutocomplete-endAdornment": { right: 0 },
        }}
        renderInput={(params) => (
          <TextField {...params} label="Number Of Employees" />
        )}
      />
      <Autocomplete
        multiple
        disablePortal
        id="combo-box-demo"
        options={Array.from(Array(11).keys()).splice(1)}
        sx={{
          width: "fit-content",
          ".MuiInputBase-root": { padding: 0, width: "120px" },
          ".MuiFormLabel-root": {
            lineHeight: "normal",
            top: "-5px",
            fontSize: 14,
          },
          ".MuiOutlinedInput-root .MuiAutocomplete-endAdornment": { right: 0 },
        }}
        renderInput={(params) => <TextField {...params} label="Experience" />}
      />
      <Autocomplete
        multiple
        disablePortal
        id="combo-box-demo"
        options={LOCATION_TYPE}
        sx={{
          width: "fit-content",
          ".MuiInputBase-root": { padding: 0, width: "100px" },
          ".MuiFormLabel-root": {
            lineHeight: "normal",
            top: "-5px",
            fontSize: 14,
          },
          ".MuiOutlinedInput-root .MuiAutocomplete-endAdornment": { right: 0 },
        }}
        renderInput={(params) => <TextField {...params} label="Remote" />}
      />
      <Autocomplete
        multiple
        disablePortal
        id="combo-box-demo"
        options={Array.from(Array(8).keys()).map((num) => `${num * 10}L`)}
        sx={{
          width: "fit-content",
          ".MuiInputBase-root": { padding: 0, width: "220px" },
          ".MuiFormLabel-root": {
            lineHeight: "normal",
            top: "-5px",
            fontSize: 14,
          },
          ".MuiOutlinedInput-root .MuiAutocomplete-endAdornment": { right: 0 },
        }}
        renderInput={(params) => (
          <TextField {...params} label="Mimimum Base Pay Salary" />
        )}
      />
      <TextField
        id="outlined-basic"
        label="Search Company Name"
        variant="outlined"
        sx={{
          ".MuiInputBase-root": { padding: 0, width: "200px" },
          ".MuiInputBase-input": { padding: "7.5px 4px 7.5px 5px" },
          ".MuiFormLabel-root": {
            lineHeight: "normal",
            top: "-5px",
            fontSize: 14,
          },
        }}
      />
    </div>
  );
};

export default Filters;
