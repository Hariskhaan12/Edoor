import React from 'react'
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import Stack from "@mui/material/Stack";
const Alerts = () => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        This is a success alert — check it out!
      </Alert>
      </Stack>
  )
}

export default Alerts