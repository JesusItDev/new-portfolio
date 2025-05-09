import { Octokit } from "octokit";

const API_KEY = process.env.API_KEY;

const octokit = new Octokit({
  auth: API_KEY,
});

export default async function CodeLineRetriever() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();
  return <ul></ul>;
}
