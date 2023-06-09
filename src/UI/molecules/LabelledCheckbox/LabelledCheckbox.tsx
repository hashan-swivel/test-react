import React from 'react';
import FormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';

// control={<CheckBox />} label='my new label'
// A checkbox, radio or a switch can be passed as the control
// text to appear on the label should be passed in for the label prop

const LabelledCheckbox = (props: FormControlLabelProps) => {
  return (
    <>
      <FormControlLabel {...props} />
    </>
  );
};

export default LabelledCheckbox;
