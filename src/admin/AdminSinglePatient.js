import React from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

// url is admin/patients/:id
// read id, ask database for eth address, call getPatientInfoForDoctor(address)
// we call this twice: first to get id in admin/patients, and then to get info
// data can change, call seems inexpensive, fine to leave, question later
// unless we time cache, even then, data can change

// Temporary data for UI prototyping

const patient = {
  name: 'Gamit Napoor',
  num: 'call me at',
  dob: 'some date',
  address: 'some address',
  height: 'height',
  weight: 'weight',
  files: [],
};

const AdminSinglePatient = (props) => {
  // TODO: query db with id
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <Typography variant="h1">{patient.name}</Typography>
      <Box sx={{ display: 'flex' }}>
        <Card>
          <CardContent>
            {/* TODO: make generic (or not) */}
            <Box sx={{ margin: '5px 0 5px 0' }}>
              <Typography variant="h2">General Information</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0 10px 0' }}>
                <Typography sx={{ fontWeight: 'bold' }}>Date of birth</Typography>
                <Typography>{patient.dob}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0 10px 0' }}>
                <Typography sx={{ fontWeight: 'bold' }}>Phone number</Typography>
                <Typography>{patient.num}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0 10px 0' }}>
                <Typography sx={{ fontWeight: 'bold' }}>Address</Typography>
                <Typography>{patient.address}</Typography>
              </Box>
            </Box>
            <Box sx={{ margin: '40px 0 5px 0' }}>
              <Typography variant="h2">Nutritional Values</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0 10px 0' }}>
                <Typography sx={{ fontWeight: 'bold' }}>Height</Typography>
                <Typography>{patient.height}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0 10px 0' }}>
                <Typography sx={{ fontWeight: 'bold' }}>Weight</Typography>
                <Typography>{patient.weight}</Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* TOD0: handle menus for bloodtests, physicals, etc */}
      {/* TOD0: how do these differentiate from left drawer menu */}
    </div>
  );
};

export default AdminSinglePatient;
