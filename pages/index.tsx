import DialogTweet from "../components/dialog/dialog";
import { useEffect, useState } from "react";
import Navigate from "../components/nav/navigate";

const BASE_URL = "https://twitter.fly.dev";

export default function Home() {
  const [openNewTweet, setOpenNewTweet] = useState(false);
  const [tweets, setTweets] = useState([]);

  const fetchTweets = async () => {
    const response = await fetch(`${BASE_URL}/tweets/`)
      .then((r) => r.json())
      .then((r) => setTweets(r));
  };

  const createTweets = async (body: { user: number; content: string }) => {
    await fetch("/tweets/", {
      method: "POST",
      body: JSON.stringify(body),
    });
  };

  const fetchTweet = async (id: number) => {
    const response = await fetch(`/tweet/${id}`);
  };

  const deleteTweet = async (id: number) => {
    const response = await fetch(`/tweet/${id}`, {
      method: "DELETE",
    });
  };

  const getUsers = async () => {
    const response = await fetch("/users/");
  };

  const fetchUser = async (id: number) => {
    const response = await fetch(`/user/${id}`);
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  console.log(tweets);

  return (
    <div>
      <DialogTweet open={openNewTweet} setOpen={setOpenNewTweet} />
      <Navigate setOpenNewTweet={setOpenNewTweet} />
      <div
        style={{
          position: "absolute",
          top: 10,
          left: 300,
        }}
      >
        {tweets.map((tweet, key) => (
          <div key={key}>
            {/* @ts-ignore */}
            <p>{tweet.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
