import React, { memo, ReactNode, useState } from 'react';
import DatePicker, { registerLocale } from "react-datepicker";
import { addDays, addYears } from "date-fns";
import ru from "date-fns/locale/ru";

import css from "./InputDatePicker.module.css"
import "react-datepicker/dist/react-datepicker.css";

type TInputDatePickerProps = {
  birthday: Date
  renderFormInput: () => ReactNode | Element;
}

export const InputDatePicker: React.FC<TInputDatePickerProps> = memo((props) => {
  const {
    birthday,
    renderFormInput,
  } = props;

  const [startDate, setStartDate] = useState<Date>(birthday);

  registerLocale('ru',ru);

  return (
    <div>
      <DatePicker
        locale={'ru'}
        autoComplete={'new-password'}
        wrapperClassName={css.DatePicker}
        customInput={renderFormInput()}
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        minDate={addYears(new Date(), -14)}
        maxDate={addDays(new Date(), 5)}
        showDisabledMonthNavigation
        dateFormat="d MMMM, yyyy г."
      />
    </div>
  );
});
