import React, { Fragment, useState } from 'react'
import { FormGroup, Checkbox, FormControlLabel } from "@material-ui/core"

export default function FinalPage(props) {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const [option, updatedOption] = useState();
  return (
    <>
      <FormGroup row>
        <FormControlLabel control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />} label="Secondary" />
        <FormControlLabel control={<Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" color="primary" />} label="Primary" />
        <FormControlLabel control={<Checkbox checked={state.checkedF} onChange={handleChange} name="checkedF" />} label="Secondary" />
        <FormControlLabel control={<Checkbox checked={state.checkedG} onChange={handleChange} name="checkedG" color="primary" />} label="Primary" />
      </FormGroup>
    </>
  )
}

