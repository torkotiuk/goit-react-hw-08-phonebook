// import React, { Component, useState } from 'react';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import users from '../../users.json';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function UsersListPage() {
  const classes = useStyles();

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">ip-address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(
              ({ id, first_name, last_name, email, gender, ip_address }) => (
                <TableRow key={id}>
                  <TableCell component="th" scope="row">
                    {first_name}
                  </TableCell>
                  <TableCell align="right">{last_name}</TableCell>
                  <TableCell align="right">{email}</TableCell>
                  <TableCell align="right">{gender}</TableCell>
                  <TableCell align="right">{ip_address}</TableCell>
                </TableRow>
              ),
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
