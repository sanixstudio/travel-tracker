import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

export default function AlertButton({ open, setOpen }) {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "300px",
        bottom: 0,
        left: "calc(50% - 150px)",
      }}
    >
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Added Successfully
        </Alert>
      </Collapse>
    </Box>
  );
}
