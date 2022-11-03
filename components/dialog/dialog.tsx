import * as React from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import { TextField } from "@mui/material";

const DialogTweet = ({ open, setOpen, send, fetch }) => {
  const [text, setText] = React.useState("");
  return (
    <Dialog
      onClose={() => {
        setOpen(false);
      }}
      open={open}
    >
      <DialogTitle>New Tweet</DialogTitle>
      <TextField
        onChange={(e) => setText(e.target.value)}
        value={text}
        id="outlined-basic"
        label="Write tweet"
        variant="outlined"
        maxLength-={140}
        multiline
        maxRows={6}
      />
      <Button
        variant="contained"
        onClick={() => {
          send({ user: 1, content: text });
        }}
      >
        New Tweet
      </Button>
    </Dialog>
  );
};

export default DialogTweet;
