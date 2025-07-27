import css from "./BookingForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePickerField from "../DatePickerField/DatePickerField.jsx";

const BookingSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  date: Yup.date().nullable(),
  comment: Yup.string(),
});

export default function BookingForm() {
  const handleSubmit = (values, actions) => {
    console.log("Booking form submitted:", values);
    actions.resetForm();
  };

  return (
    <div className={css.formContainer}>
      <div className={css.formTitle}>
        <h3 className={css.title}>Book your car now</h3>
        <p className={css.text}>
          Stay connected! We are always ready to help you.
        </p>
      </div>

      <div className={css.inputContainer}>
        <Formik
          initialValues={{ name: "", email: "", date: null, comment: "" }}
          validationSchema={BookingSchema}
          onSubmit={handleSubmit}
        >
          <Form className={css.formik}>
            <div className={css.fieldWrapper}>
              <Field
                className={css.input}
                type="text"
                name="name"
                placeholder="Name*"
              />
              <div className={css.errorWrapper}>
                <ErrorMessage name="name">
                  {(msg) => <div className={css.error}>{msg}</div>}
                </ErrorMessage>
              </div>
            </div>

            <div className={css.fieldWrapper}>
              <Field
                className={css.input}
                type="email"
                name="email"
                placeholder="Email*"
              />

              <div className={css.errorWrapper}>
                <ErrorMessage name="email">
                  {(msg) => <div className={css.error}>{msg}</div>}
                </ErrorMessage>
              </div>
            </div>

            <Field
              className={css.input}
              name="date"
              component={DatePickerField}
            />

            <Field
              as="textarea"
              name="comment"
              className={`${css.input} ${css.comment}`}
              placeholder="Comment"
            />
            <ErrorMessage
              name="comment"
              component="div"
              className={css.error}
            />

            <button className={css.btn} type="submit">
              Send
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
