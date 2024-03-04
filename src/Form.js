import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const CustomForm = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "", amount: 0, currency: "", text: "", terms: false }}
      validationSchema={Yup.object({
        name: Yup.string().min(2, "Minimum two characters!").required("Required field"),
        email: Yup.string().email("Mandatory field!").required("Required field"),
        amount: Yup.number().min(5, "Not less than 5").required("Required field"),
        currency: Yup.string().required("Select currency"),
        text: Yup.string().min(10, "Not less than 10"),
        terms: Yup.boolean().required("Necessary coordination").oneOf([true], "Necessary coordination"),
      })}
      onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
    >
      <Form className="form">
        <h2>Send a donation</h2>
        <label htmlFor="name">Your name</label>
        <Field id="name" name="name" type="text" />
        <ErrorMessage className="error" name="name" component="div" />
        <label htmlFor="email">Your mail</label>
        <Field id="email" name="email" type="email" />
        <ErrorMessage className="error" name="email" component="div" />
        <label htmlFor="amount">Quantity</label>
        <Field id="amount" name="amount" type="number" />
        <ErrorMessage className="error" name="amount" component="div" />
        <label htmlFor="currency">Currency</label>
        <Field id="currency" name="currency" as="select">
          <option value="">Choose a currency</option>
          <option value="USD">USD</option>
          <option value="UAH">UAH</option>
          <option value="EUR">EUR</option>
        </Field>
        <ErrorMessage className="error" name="currency" component="div" />
        <label htmlFor="text">Your message</label>
        <Field id="text" name="text" as="textarea" />
        <ErrorMessage className="error" name="text" component="div" />
        <label className="checkbox">
          <Field name="terms" type="checkbox" />
          Do you agree with the privacy policy?
        </label>
        <ErrorMessage className="error" name="terms" component="div" />
        <button type="submit">Send</button>
      </Form>
    </Formik>
  );
};

export default CustomForm;
