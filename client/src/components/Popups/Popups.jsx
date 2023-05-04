import { Popup } from "react-map-gl";
import { FaChevronDown, FaStar } from "react-icons/fa";
import { format } from "timeago.js";
import { v4 as uuidv4 } from "uuid";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { useState } from "react";
import "./style.css";

const Popups = ({ tracker, showAllPopup }) => {
  const handleExpandClick = () => {
    setShowDetails(!showDetails);
  };

  const [showDetails, setShowDetails] = useState(false);

  if (showAllPopup) {
    return (
      <Popup
        longitude={tracker.long}
        latitude={tracker.lat}
        anchor="bottom"
        closeButton={false}
        closeOnClick={false}
        style={{
          zIndex: showDetails ? 10 : "initial",
        }}
      >
        <Card sx={{ maxWidth: 400 }}>
          <CardHeader
            title={tracker.title}
            action={
              <FaChevronDown
                style={{
                  width: "20px",
                  height: "20px",
                  marginTop: ".7em",
                  marginLeft: "1em",
                  cursor: "pointer",
                }}
                onClick={handleExpandClick}
              />
            }
            sx={{
              background: '#0aadad',
              color: "white",
              p: ".5em 1.5em",
            }}
          />
          <CardContent sx={{ display: showDetails ? "block" : "none" }}>
            <Box sx={{ marginBottom: 2 }}>
              <Typography variant="subtitle2">Review</Typography>
              <Typography variant="body1">{tracker.desc}</Typography>
            </Box>
            <Box sx={{ marginBottom: 2 }}>
              <Typography variant="subtitle2">Ratings</Typography>
              <Box sx={{ display: "flex" }}>
                {[...Array(tracker.rating)].map((_, index) => (
                  <FaStar key={uuidv4()} color="gold" />
                ))}
              </Box>
            </Box>
            <Box>
              <Typography
                variant="subtitle2"
                sx={{ textTransform: "capitalize", fontWeight: "bold" }}
              >
                By {tracker.username}
              </Typography>
              <Typography variant="subtitle2">
                {format(tracker.createdAt)}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Popup>
    );
  } else return null;
};

export default Popups;
