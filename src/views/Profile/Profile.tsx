import React, { memo, useCallback } from 'react';
import { Button, Container, Form } from "react-bootstrap";
import { useHistory } from "react-router";

import { useFormik } from "formik";
import InputMask from 'react-input-mask';
import * as Yup from 'yup';
import RangeSlider from 'react-bootstrap-range-slider';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

import { InputDatePicker } from "../../components/InputDatePicker/InputDatePicker";
import { IFormValues } from "../../store/participants/reducer";

type THomeProps = {
  currentUser: IFormValues
  agreement: any

  updateCurrentParticipant: (values: IFormValues) => void
  setCurrentUser: (values: IFormValues) => void
}

export const Profile: React.FC<THomeProps> = memo((props) => {
  const {
    currentUser,

    updateCurrentParticipant,
    setCurrentUser
  } = props;

  const {
    FIO,
    birthday,
    email,
    phone,
    distance,
    payment,
    password,
  } = currentUser;

  const initialValues: IFormValues = {
    FIO,
    birthday,
    email,
    phone,
    distance,
    payment,
    password,
  };

  const validationSchema = Yup.object({
    FIO: Yup.string().required('Поле обязательно'),

    email: Yup.string().email('Некорректная почта').required('Поле обязательно'),

    phone: Yup.string().required('Поле обязательно'),

    password:  Yup.string().required('Поле обязательно')
      .min(3, 'Минимум 3 символа')
      .max(10, 'Максимум 10 символов')
  });

  const history = useHistory();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      //alert(JSON.stringify(values, null, 2));
      setCurrentUser(values);
      updateCurrentParticipant(values);
      history.push("/participants");
    },
  });

  const renderFormInput = useCallback(() => (
    <Form.Control {...formik.getFieldProps("birthday")} />
  ), [formik]);

  return (
    <Container>
      <Form
        onSubmit={formik.handleSubmit}
        className="row"
      >
        <Form.Group className="col-xs-12 col-md-6 mb-3" controlId="FIO">
          <Form.Label>Фамилия Имя Отчество</Form.Label>

          <Form.Control {...formik.getFieldProps("FIO")} />

          {formik.errors.FIO ? <div className="invalid-field">{formik.errors.FIO}</div> : null}
        </Form.Group>

        <Form.Group className="col-xs-12 col-md-6 mb-3" controlId="birthday">
          <Form.Label>Дата рождения</Form.Label>

          <InputDatePicker
            renderFormInput={renderFormInput}
            birthday={birthday}
          />
        </Form.Group>

        <Form.Group className="col-xs-12 col-md-6 mb-3" controlId="email">
          <Form.Label>Email</Form.Label>

          <Form.Control {...formik.getFieldProps("email")} />

          {formik.errors.email ? <div className="invalid-field">{formik.errors.email}</div> : null}
        </Form.Group>

        <Form.Group className="col-xs-12 col-md-6 mb-3" controlId="phone">
          <Form.Label>Телефон</Form.Label>

          <InputMask
            mask="+7 (999) 999-99-99"
            className="form-control"
            {...formik.getFieldProps("phone")}
          />

          {formik.errors.phone ? <div className="invalid-field">{formik.errors.phone}</div> : null}
        </Form.Group>

        <Form.Group className="col-xs-12 col-md-6 mb-3" controlId="distance">
          <Form.Label>Дистанция</Form.Label>

          <Form.Control
            as="select"
            onChange={formik.handleChange('distance')}
            value={formik.values.distance}
          >
            <option value="3">3 км.</option>
            <option value="5">5 км.</option>
            <option value="10">10 км.</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="col-xs-12 col-md-6 mb-3" controlId="payment">
          <Form.Label>Сумма взноса, руб.</Form.Label>

          <RangeSlider
            inputProps={{name: "payment"}}
            min={100}
            max={10000}
            tooltipPlacement="top"
            onChange={formik.handleChange('payment')}
            value={formik.values.payment}
          />
        </Form.Group>

        <Form.Group className="col-xs-12 col-md-6 mb-3" controlId="password">
          <Form.Label>Пароль</Form.Label>

          <Form.Control type="password" {...formik.getFieldProps("password")} />

          {formik.errors.password ? <div className="invalid-field">{formik.errors.password}</div> : null}
        </Form.Group>

        <Form.Group className="mb-3">
          <Button
            variant="primary"
            type="submit"
            style={{maxWidth: 200}}
            disabled={!!formik.errors.password || !!formik.errors.email}>
            Сохранить
          </Button>
        </Form.Group>

      </Form>
    </Container>
  );
});