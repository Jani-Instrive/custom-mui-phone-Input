import { useEffect, useRef, useState } from "react";
import { Button, Grid } from "@mui/material";
import PhoneNumber from "./Components/PhoneNumber";
import { Form, Formik } from "formik";
import { getValidationSchema } from "./utils/ValidationRegexUtils";

function App() {
  const [countryCode, setCountryCode] = useState("IN");
  const [phoneNumber, setPhoneNumber] = useState("");
  const countryCodeRef = useRef("IN");
  const [formValidate, setFormValidate] = useState(
    getValidationSchema(countryCode)
  );
  const formikRef: any = useRef();

  const initialValues = {
    phoneNumber: "",
  };

  const handlePhoneNumberChange = (
    fullPhoneNumber: any,
    setFieldValue: any
  ) => {
    setFieldValue("phoneNumber", fullPhoneNumber);
  };

  const handleCountryCodeChange = (newCountryCode: any) => {
    countryCodeRef.current = newCountryCode;
    setCountryCode(newCountryCode);
  };
  useEffect(() => {
    // countryCodeRef.current = countryCode;
    setFormValidate(getValidationSchema(countryCode));
    if (formikRef.current) {
      setPhoneNumber("");
      formikRef.current.resetForm();
    }
  }, [countryCode]);

  return (
    <div className="App">
      <Grid
        container
        spacing={2}
        sx={{ maxWidth: 360, margin: "auto", mt: 10 }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={formValidate}
          onSubmit={(values) => console.log("Submitted Values:", values)}
          innerRef={(formik: any) => (formikRef.current = formik)}
        >
          {({ setFieldValue, errors, touched }) => (
            <Form>
              <PhoneNumber
                onChange={(fullPhoneNumber) =>
                  handlePhoneNumberChange(fullPhoneNumber, setFieldValue)
                }
                defaultCountry={countryCodeRef.current}
                onCountryCodeChange={handleCountryCodeChange}
                label=""
                placeholder="Enter Phone Number"
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
              />
              {touched.phoneNumber && errors.phoneNumber && (
                <div style={{ color: "red" }}>{errors.phoneNumber}</div>
              )}
              <Button type="submit">Submit</Button>
            </Form>
          )}
        </Formik>
      </Grid>
    </div>
  );
}

export default App;
