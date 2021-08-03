import React, {memo} from 'react';
import {Container, Table} from "react-bootstrap";
import {TableRow} from "./TableRow";

export const Participants = memo(() => {

  return (
    <Container>
      <Table striped bordered hover size="sm" responsive="xl">
        <thead>
          <tr>
            <th>ФИО</th>
            <th>Регистрации в забеге</th>
            <th>Email</th>
            <th>Дистанция</th>
            <th>Сумма взноса</th>
          </tr>
        </thead>
        <tbody>
          <TableRow/>
          <TableRow/>
          <TableRow/>
        </tbody>
      </Table>
    </Container>
  );
});
