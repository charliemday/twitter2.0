import Head from "next/head";
import Image from "next/image";
import Navigate from "../components/nav/navigate";
import styles from "../styles/Home.module.css";

const BASE_URL = "https://twitter.fly.dev";

export default function Home() {
  const fetchTweets = async () => {
    const response = await fetch("/tweets/");
  };

  const createTweets = async (body: any) => {
    await fetch("/tweets/", {
      method: "POST",
      body,
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
    const response = await fetch('/users/')
  };

  const fetchUser = async (id: number) => {
    const response = await fetch(`/user/${id}`)
  };

  return (
    <div>
      <Navigate />
    </div>
  );
}
