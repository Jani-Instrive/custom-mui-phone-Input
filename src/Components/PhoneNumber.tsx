import React, { useState, useRef, useEffect } from "react";
import { CountriesData } from "../utils/CountryUtils";
import {
  Box,
  TextField,
  FormControl,
  InputAdornment,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";

interface PhoneNumberInputProps {
  defaultCountry?: string;
  label?: string;
  fullWidth?: boolean;
  onCountryCodeChange: (countryCode: string) => void;
  sx?: any;
  placeholder?: string;
  onChange: (fullPhoneNumber: string) => void;
  phoneNumber: string;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  defaultCountry = "IN",
  label = "Phone Number",
  onChange,
  placeholder,
  fullWidth,
  onCountryCodeChange,
  sx,
  phoneNumber,
  setPhoneNumber,
}) => {
  const [countryCode, setCountryCode] = useState(defaultCountry);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    onCountryCodeChange(countryCode);
  }, [countryCode, onCountryCodeChange, setPhoneNumber]);

  const handleCountryCodeChange = (event: any) => {
    const newCountryCode = event.target.value as string;
    setCountryCode(newCountryCode);
    onCountryCodeChange(newCountryCode);
  };

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let newPhoneNumber = event.target.value;
    if (newPhoneNumber.length > 15) {
      newPhoneNumber = newPhoneNumber.slice(0, 15);
    }
    setPhoneNumber(newPhoneNumber);
    updateFullPhoneNumber(newPhoneNumber, countryCode);
  };

  const updateFullPhoneNumber = (phone: string, code: string) => {
    const dialCode = CountriesData.find(
      (country) => country.code === code
    )?.phone;
    onChange(`${dialCode}${phone}`);
  };

  const handleSelectOpen = () => {
    setIsOpen(true);
  };

  const handleSelectClose = () => {
    setIsOpen(false);
  };

  return (
    <TextField
      sx={{
        ...sx,
        "& .css-1q6at85-MuiInputBase-root-MuiOutlinedInput-root": {
          paddingLeft: 0,
        },
        width: fullWidth ? "100%" : 360,
      }}
      fullWidth={fullWidth}
      placeholder={placeholder}
      label={label}
      variant="outlined"
      value={phoneNumber}
      onChange={handlePhoneNumberChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <FormControl fullWidth>
              <Select
                value={countryCode}
                onChange={handleCountryCodeChange}
                displayEmpty
                MenuProps={{
                  anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left",
                  },
                  transformOrigin: {
                    vertical: "top",
                    horizontal: "left",
                  },
                  PaperProps: {
                    style: {
                      width: fullWidth ? "100%" : 360,
                    },
                  },
                }}
                inputProps={{ "aria-label": "Without label" }}
                open={isOpen}
                onClose={handleSelectClose}
                onOpen={handleSelectOpen}
                ref={selectRef}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      component="img"
                      loading="lazy"
                      width="27"
                      src={`https://flagcdn.com/w20/${selected.toLowerCase()}.png`}
                      alt=""
                      sx={{ marginRight: 2 }}
                    />
                    {
                      CountriesData.find((country) => country.code === selected)
                        ?.phone
                    }
                  </Box>
                )}
                sx={{
                  ".MuiOutlinedInput-notchedOutline": { border: "none" },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: "transparent",
                    outline: "none",
                  },
                  "&.Mui-focused": {
                    outline: "none",
                  },
                  ml: 0,
                }}
              >
                {CountriesData.map((option) => (
                  <MenuItem key={option.code} value={option.code}>
                    <Box sx={{ display: "flex", alignItems: "center", p: 1 }}>
                      <Box
                        component="img"
                        loading="lazy"
                        width="20"
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        alt=""
                        sx={{ marginRight: 2 }}
                      />
                    </Box>
                    {option.label}
                    <Typography
                      sx={{
                        color: "grey",
                        ml: 1,
                      }}
                    >
                      {option.phone}
                    </Typography>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PhoneNumberInput;
