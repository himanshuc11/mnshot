import Head from "next/head";
import Link from "next/link";

import { api } from "@/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  const test = async () => {
    const response = await fetch("/api/send", {
      method: "POST",
    });
    console.log(response)
  }

  return (
    <>
      <button onClick={test}>CLick Me</button>
    </>
  );
}