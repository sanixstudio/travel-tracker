import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Alert, TextField } from "@mui/material";
import AlertButton from "../AlertButton/AlertButton";
import axios from "axios";

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

export default function RegisterModal({ open, setOpen }) {
  const [isOkOpen, setIsOkOpen] = React.useState(false);
  const [erroMessage, setErrorMessage] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleClose = () => setOpen(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const newUserData = {
      username: data.get("username"),
      email: data.get("email"),
      password: data.get("password"),
    };

    console.log(newUserData);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_HOST}/user/register`,
        newUserData
      );

      const user = await res.json();

      if (user) {
        console.log(user);
      }
    } catch (err) {
      console.log("Error: " + err);
      setErrorMessage(err);
    }
  };

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
              Register
            </Typography>
          </Box>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              type="text"
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              type="email"
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="password"
            />
            {erroMessage ? (
              <Alert variant="filled" severity="error">
                {erroMessage}
              </Alert>
            ) : null}
            <AlertButton open={isOkOpen} setOpen={setIsOkOpen} />
            <Button
              type="submit"
              fullWidth
              color="teal"
              variant="contained"
              //   disabled={isLoading}
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
