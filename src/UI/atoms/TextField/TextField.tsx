import * as React from 'react';
import { TextField as MuiTextField } from '@mui/material';
import { TextFieldProps } from '@mui/material/TextField';

// type Props = { text: string; Props: TextFieldProps }

// export type CustomTextFieldProps = { mylabel: string; muiProps: TextFieldProps }
// export type CustomTextFieldProps = { mylabel: string, TextFieldProps}

const TextField = (props: TextFieldProps) => {
  return <MuiTextField {...props} />;
};
export default TextField;
