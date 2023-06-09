import React from 'react'
import { Checkbox as MuiCheckbox } from '@mui/material/'
import { CheckboxProps } from '@mui/material/Checkbox'

const CheckBox = (props: CheckboxProps) => {
  return (
    <>
      <MuiCheckbox {...props} />
    </>
  )
}

export default CheckBox
