import React from 'react';
import { Typography as MuiTypography } from '@mui/material/';
import { TypographyProps } from '@mui/material/Typography';

// type Props = {
//   children?: React.ReactNode
//   props: TypographyProps
// }

const Typography = (props: TypographyProps) => {
  return (
    <>
      <MuiTypography {...props}></MuiTypography>
    </>
  );
};

export default Typography;
