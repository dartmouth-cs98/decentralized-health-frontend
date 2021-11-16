import React from 'react';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SearchBar from '../common/SearchBar';

// Temporary state for UI prototyping
function createData(fileName, recordType, uploader, contents) {
  return {
    fileName, recordType, uploader, contents,
  };
}

const PatientFile = ({ fileHash, id }) => {
  // pass in file hash as prop, write a API hook to fetch file from blockchain
  const patientFile = {
    fileName: 'Test.file', recordType: 'Allergies', uploader: 'Doctor Hardy', contents: 'This is an example',
  }; // For now: Hardcoded files: ideal will be to call hook like useGetFileWithHash

  return (
    <>
      { console.log(id)}
      {patientFile
        ? (
          <TableRow
            key={id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 }, textDecoration: 'none' }}
          >
            <TableCell component="th" scope="row">
              {patientFile.fileName}
            </TableCell>
            <TableCell align="right">{patientFile.uploader}</TableCell>
            <TableCell align="right">
              {/* @TODO: figure out navigation for files */}
              <Link to={`${fileHash}`} style={{ textDecoration: 'none' }}>View File</Link>
            </TableCell>
          </TableRow>
        )
        : <tr><td>error {console.log(patientFile)}</td></tr>}
    </>
  );
};

const rows = {
  data: [
    createData('Allergies.txt', 'recordType', 'uploader', 'contents'),
    createData('Allergies.txt', 'recordType', 'uploader', 'contents'),
    createData('Allergies.txt', 'recordType', 'uploader', 'contents'),
    createData('Allergies.txt', 'recordType', 'uploader', 'contents'),
  ],
};

// END OF TEMPORARY STATE

const PatientFiles = (props) => {
//   const { pathname } = useLocation();

  const { data } = rows; // useGetPatientInfo, & from response extract files key to get list of file hashes and

  const tableContent = () => {
    if (data) {
      // using index for id for now
      return data.map((fileHash, id) => <PatientFile fileHash={fileHash} id={id + 1} />);
    } else {
      // Temporary, will be replaced with an error component
      return <tr><td>error</td></tr>;
    }
  };

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h1">Files</Typography>
        <SearchBar />
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><Typography variant="h6">Uploader</Typography></TableCell>
              <TableCell align="right"><Typography variant="h6">Uploader</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableContent()}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PatientFiles;
