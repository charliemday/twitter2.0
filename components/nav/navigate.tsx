import HomeIcon from "@mui/icons-material/Home";
import Box from "@mui/material/Box";
import TagIcon from "@mui/icons-material/Tag";
import TwitterIcon from "@mui/icons-material/Twitter";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Button from "@mui/material/Button";

const Navigate = ({ setOpenNewTweet }) => {
  return (
    <div style={{ maxWidth: "200px" }}>
      <TwitterIcon sx={{ marginLeft: "15px", marginTop: "15px" }} />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <TagIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Explore" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <NotificationsIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItemButton>
        </ListItem>
      </List>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          onClick={() => {
            setOpenNewTweet(true);
          }}
        >
          New Tweet
        </Button>
      </div>
    </div>
  );
};

export default Navigate;
