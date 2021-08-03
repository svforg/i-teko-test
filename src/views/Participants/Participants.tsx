import React, { memo } from 'react';
import { Container } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

export const Participants = memo((props: any) => {
  const {
    participants,
  } = props;

  const columns = [
    {
      dataField: 'FIO',
      text: 'ФИО'
    },
    {
      dataField: 'date',
      text: 'Регистрации в забеге',
      sort: true
    },
    {
      dataField: 'email',
      text: 'Email'
    },
    {
      dataField: 'distance',
      text: 'Дистанция',
      sort: true
    },
    {
      dataField: 'payment',
      text: 'Сумма взноса',
      sort: true
    },
  ];

  return (
    <Container>
      <BootstrapTable
        bootstrap4
        keyField='FIO'
        data={Object.values(participants)}
        sort={{dataField: 'date', order: 'desc'}}
        columns={columns}
      />
    </Container>
  );
});
