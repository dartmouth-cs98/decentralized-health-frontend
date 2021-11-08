import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {
  Paper, Button, Box, Typography,
} from '@mui/material';
import SearchBar from '../common/SearchBar';

function createData(fileName, dateModified, physician) {
  return {
    fileName, dateModified, physician,
  };
}

const rows = [
  createData('Blood_Work_194o78797.txt', '10 / 20 / 2017', 'Dr. Harid Isogi'),
  createData('Blood_Work_194o78797.txt', '9 / 29 / 2019', 'Dr. Harid Isogi'),
  createData('Blood_Work_194o78797.txt', '10 / 20 / 2017', 'Dr. Harid Isogi'),
  createData('Blood_Work_194o78797.txt', '10 / 20 / 2017', 'Dr. Harid Isogi'),
  createData('Blood_Work_194o78797.txt', '10 / 20 / 2017', 'Dr. Harid Isogi'),
  createData('Blood_Work_194o78797.txt', '10 / 20 / 2017', 'Dr. Harid Isogi'),
  createData('Blood_Work_194o78797.txt', '10 / 20 / 2017', 'Dr. Harid Isogi'),
  createData('Blood_Work_194o78797.txt', '10 / 20 / 2017', 'Dr. Harid Isogi'),
];

const headerStyle = {
  fontWeight: 'bold',
};

export default function FileTable() {
  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h1">Allergies</Typography>
        <SearchBar />
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={headerStyle} align="left">Health Record</TableCell>
              <TableCell style={headerStyle} align="left">Date Modified&nbsp;(MM/DD/YY)</TableCell>
              <TableCell style={headerStyle} align="left">Physician</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">{row.fileName}</TableCell>
                <TableCell align="left">{row.dateModified}</TableCell>
                <TableCell align="left">{row.physician}</TableCell>
                <TableCell align="left"><Button>View</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>

  );
}
