import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import OutlinedInput from '@mui/material/OutlinedInput';

const paperStyle = {
  padding: 25, marginTop: '1.5%', maxWidth: '75%',
};

const inputStyle = {
  display: 'flex', flexDirection: 'column',
};

const labelStyle = {
  fontSize: '18px', marginBottom: 10,
};

const BloodTestForm = (props) => {
  const [bloodType, setBloodType] = useState('');
  const [conditionTested, setConditionTest] = useState('');
  const [testDate, setTestDate] = useState(new Date());
  const [bloodTestNotes, setBloodTestNotes] = useState('');

  const validateInput = () => {
    // TODO: check input
  };

  const onAddFormClicked = async () => {
    // console.log('signupclicked ', `${bloodType}, ${conditionTested}, ${testDate}, ${bloodTestNotes}`);
    validateInput();
  };

  return (
    <Grid>
      <Grid>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h1">Blood Tests</Typography>
        </Box>

        <Paper elavation={10} style={paperStyle}>
          <Box sx={{
            display: 'grid',
            columnGap: 3,
            rowGap: 2,
            gridTemplateColumns: 'repeat(2, minMax(200px, 400px))',
          }}
          >
            <Box style={inputStyle}>
              <Typography style={labelStyle}>Blood Type</Typography>
              <OutlinedInput
                size="small"
                margin="normal"
                value={bloodType}
                onChange={(event) => { setBloodType(event.target.value); }}
                fullWidth
                required
              />
            </Box>

            <Box style={inputStyle}>
              <Typography style={labelStyle}>Condition(s) Tested</Typography>
              <OutlinedInput
                size="small"
                margin="normal"
                value={conditionTested}
                onChange={(event) => { setConditionTest(event.target.value); }}
                fullWidth
              />
            </Box>

            <Box style={inputStyle}>
              <Typography style={labelStyle}>Test Date</Typography>
              <OutlinedInput
                size="small"
                margin="normal"
                type="date"
                value={testDate}
                onChange={(event) => { setTestDate(event.target.value); }}
                fullWidth
              />
            </Box>
            <Box style={inputStyle} />

            <Box style={inputStyle}>
              <Typography style={labelStyle}>Notes</Typography>
              <OutlinedInput
                margin="normal"
                size="small"
                value={bloodTestNotes}
                onChange={(event) => { setBloodTestNotes(event.target.value); }}
                multiline
                fullWidth
                rows={4}
              />
            </Box>
          </Box>

          <Button
            sx={{ width: '250px', marginTop: 3 }}
            type="button"
            color="primary"
            variant="contained"
            onClick={onAddFormClicked}
          >Add Record
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default BloodTestForm;
