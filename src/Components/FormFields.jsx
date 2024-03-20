import "./formField.css";
import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from "yup";
import useStep from "../Context/useStepContext";

const FormField = () => {
  const { userData, setUserData } = useStep();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Must be 3 chars or more")
      .required("This field is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("This field is required"),
    telephone: Yup.string()
      .matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, "Invalid phone number")
      .typeError("Doesn't look like a phone number")
      .min(8)
      .required("This field is required"),
  });

  return (
    <Formik
      initialValues={userData}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        // resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form className="step-1">
          <h2>Personal info</h2>
          <p>Please provide your name, email address, and phone number.</p>
          <div className="form-fields">
            <div className="label">
              <label htmlFor="name">Name </label>

              <ErrorMessage
                name="name"
                type="span"
                component="div"
                id="error-label"
              />
            </div>

            <Field
              type="text"
              name="name"
              placeholder="e.g Alaba Azeez"
              style={{
                border:
                  errors.name && touched.name
                    ? "1px hsl(354, 84%, 57%) solid"
                    : "",
              }}
            />
          </div>

          <div className="form-fields">
            <div className="label">
              <label htmlFor="email">Email Address</label>

              <ErrorMessage
                name="email"
                type="span"
                component="div"
                id="error-label"
              />
            </div>
            <Field
              type="email"
              name="email"
              placeholder="e.g AlabaAzeez@lorem.com"
              style={{
                border:
                  errors.email && touched.email
                    ? "1px hsl(354, 84%, 57%) solid"
                    : "",
              }}
            />
          </div>

          <div className="form-fields">
            <div className="label">
              <label htmlFor="telephone">Phone Number</label>

              <ErrorMessage
                name="telephone"
                type="span"
                component="div"
                id="error-label"
              />
            </div>
            <Field
              type="tel"
              placeholder="e.g +1 234 567 890"
              name="telephone"
              style={{
                border:
                  errors.telephone && touched.telephone
                    ? "1px hsl(354, 84%, 57%) solid"
                    : "",
              }}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormField;
