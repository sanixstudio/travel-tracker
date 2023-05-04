import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

const style = {
  p: 4,
  top: "50%",
  left: "50%",
  width: 400,
  boxShadow: 24,
  display: "flex",
  borderRadius: "10px",
  position: "absolute",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  bgcolor: "background.paper",
  transform: "translate(-50%, -50%)",
};

export default function LoginModal({ open, setOpen }) {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
            <img
              src="https://adi-personal.s3.amazonaws.com/travel_cat.png"
              width={96}
              height={96}
              alt=""
            />
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
          </Box>
          <Box component="form">
            <TextField
              margin="normal"
              required
              fullWidth
              type="email"
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              color="teal"
              variant="contained"
              disabled={isLoading}
              sx={{ mt: 3, mb: 2, color: "#fff" }}
            >
              Sign In
            </Button>
          </Box>
          <Button color="teal" onClick={() => setOpen(false)}>
            {"cancel"}
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
