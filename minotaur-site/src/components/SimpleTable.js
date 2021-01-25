import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '20%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',


  },
  table: {
    minWidth: 200,
    
  },
  tablecell: {
    fontSize: '15pt',
    
  },
  tablehead: {
    fontSize: '22pt',
    fontWeight: 'bolder',

    
  },
})

let id = 0;
function createData(name, calories) {
  id += 1;
  return { id, name, calories};
}

const rows = [
  createData('Monday', '10AM - 6PM'),
  createData('Tuesday', '10AM - 6PM'),
  createData('Wednesday', '10AM - 6PM'),
  createData('Thursday', '10AM - 8PM'),
  createData('Friday', '10AM - 8PM'),
  createData('Saturday', '10AM - 6PM'),
  createData('Sunday', '1PM - 5PM'),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tablehead}>
              Store Hours
            </TableCell>
            <TableCell>

            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell className={classes.tablecell} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);