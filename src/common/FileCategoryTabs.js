import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function a11yProps(index) {
  return {
    id: `file-category-tab-${index}`,
  };
}

export default function FileCategoryTabs({ setSortTag }) {
  const [value, setValue] = React.useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSortTag(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <Tabs value={value} onChange={handleChange} aria-label="File Category Tabs">
          <Tab disableRipple label="All Files" value="" {...a11yProps(0)} />
          <Tab disableRipple label="Medical History" value="Medical history" {...a11yProps(1)} />
          <Tab disableRipple label="Blood Tests" value="Blood test" {...a11yProps(2)} />
          <Tab disableRipple label="Procedures" value="Procedure" {...a11yProps(3)} />
        </Tabs>
      </Box>
    </Box>
  );
}
