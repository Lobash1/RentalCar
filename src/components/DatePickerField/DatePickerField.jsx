import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker-custom.css";

export default function DatePickerField({ field, form, ...props }) {
  const { name, value } = field;
  const { setFieldValue, touched, errors } = form;

  const selectedRange = Array.isArray(value) ? value : [null, null];

  return (
    <div>
      <DatePicker
        id={name}
        selectsRange
        startDate={selectedRange[0]}
        endDate={selectedRange[1]}
        selected={selectedRange[0]}
        onChange={(dates) => {
          setFieldValue(name, dates);
        }}
        dateFormat="dd/MM/yyyy"
        minDate={new Date()}
        placeholderText="Select date range"
        className="custom-datepicker"
        {...props}
      />
      {touched[name] && errors[name] && <div>{errors[name]}</div>}
    </div>
  );
}
