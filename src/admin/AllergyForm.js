import React, { useState } from 'react';
import {
  Grid, Box, Button, Paper, Typography,
} from '@mui/material';
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

const AllergyForm = (props) => {
  const [allergyType, setAllergyType] = useState('');
  const [knownReaction, setKnownReaction] = useState('');
  const [allergyNotes, setAllergyNotes] = useState('');
  const [occurrences, setOccurrences] = useState(new Date());

  const validateInput = () => {
    // TODO: check input
  };

  const onAddFormClicked = async () => {
    console.log('signupclicked ', `${allergyType}, ${knownReaction}, ${occurrences}, ${allergyNotes}`);
    validateInput();
  };
  return (
    <Grid>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h1">Allergies</Typography>
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
            <Typography style={labelStyle}>Allergy Type</Typography>
            <OutlinedInput
              size="small"
              margin="normal"
              value={allergyType}
              onChange={(event) => { setAllergyType(event.target.value); }}
              fullWidth
              required
            />
          </Box>

          <Box style={inputStyle}>
            <Typography style={labelStyle}>Known Reaction (s)</Typography>
            <OutlinedInput
              size="small"
              margin="normal"
              value={knownReaction}
              onChange={(event) => { setKnownReaction(event.target.value); }}
              fullWidth
            />
          </Box>

          <Box style={inputStyle}>
            <Typography style={labelStyle}>Occurences</Typography>
            <OutlinedInput
              size="small"
              margin="normal"
              type="date"
              value={occurrences}
              onChange={(event) => { setOccurrences(event.target.value); }}
              fullWidth
            />
          </Box>
          <Box style={inputStyle} />

          <Box style={inputStyle}>
            <Typography style={labelStyle}>Notes</Typography>
            <OutlinedInput
              margin="normal"
              size="small"
              value={allergyNotes}
              onChange={(event) => { setAllergyNotes(event.target.value); }}
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
  );
};

export default AllergyForm;
