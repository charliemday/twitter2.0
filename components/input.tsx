import { Avatar, OutlinedInput, Stack } from "@mui/material";
import React from "react";

interface Props {}

export const TweetInput: React.FC<Props> = () => (
  <div>
    <Stack direction="row" spacing={2}>
      <Avatar />
      <OutlinedInput
        sx={{
          backgroundColor: "white",
        }}
        placeholder="What's happening?"
      />
    </Stack>
  </div>
);
