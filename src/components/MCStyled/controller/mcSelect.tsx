import { Controller } from "react-hook-form";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import { EnumModType } from '../../../API/Enum/EnumModType';

export default function McSelect() {
  return (
    <Controller
      name="mods.type"
      render={({ field }) => {
        return (
          <FormControl fullWidth>
            <InputLabel id="type-select" />
            <Select
              sx={{
                "& .MuiSelect-outlined": {
                  backgroundColor: "black",
                  borderRadius: "0px",
                  border: "2px solid rgb(170,170 ,170)",
                  color: "white",
                  fontFamily: "Minecraft,Gal11",
                  padding: "12px",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  "border-color": "transparent !important",
                },
              }}
              {...field}
              labelId="type-select"
            >
{/*               <MenuItem value={EnumModType.zip}>일반 ZIP파일</MenuItem>
              <MenuItem value={EnumModType.instance}>CurseForge Instance Zip파일</MenuItem> */}
              <MenuItem value={EnumModType.curseforge_url}>CurseForge URL</MenuItem>
            </Select>
            
          </FormControl>

        );
      }}
    ></Controller>
  );
}
