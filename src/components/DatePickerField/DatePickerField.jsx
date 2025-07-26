import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePickerField({ field, form, ...props }) {
  const { name, value } = field;
  const { setFieldValue, touched, errors } = form;

  return (
    <div>
      <DatePicker
        id={name}
        selected={value || null}
        onChange={(val) => setFieldValue(name, val)}
        dateFormat="dd/MM/yyyy"
        minDate={new Date()}
        placeholderText="Booking date"
        {...props}
      />
      {touched[name] && errors[name] && <div>{errors[name]}</div>}
    </div>
  );
}
