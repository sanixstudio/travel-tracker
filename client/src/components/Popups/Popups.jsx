import { Popup } from "react-map-gl";
import { FaChevronDown, FaStar } from "react-icons/fa";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { format } from "timeago.js";
import { v4 as uuidv4 } from "uuid";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  CardContent,
  Typography,
} from "@mui/material";
import "./style.css";

const Popups = ({ tracker, showAllPopup }) => {
  if (showAllPopup) {
    return (
      <Popup
        longitude={tracker.long}
        latitude={tracker.lat}
        anchor="bottom"
        closeButton={false}
        closeOnClick={false}
      >
        <Accordion>
          <AccordionSummary
            expandIcon={<FaChevronDown />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{tracker.title}</Typography>
            <MoreHorizIcon />
          </AccordionSummary>
          <AccordionDetails>
            <CardContent sx={{ display: "block" }}>
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
          </AccordionDetails>
        </Accordion>
      </Popup>
    );
  } else return null;
};

export default Popups;
