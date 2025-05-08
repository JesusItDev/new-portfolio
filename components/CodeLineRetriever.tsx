import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: "YOUR-TOKEN",
});

export default async function CodeLineRetriever() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();
  return <ul></ul>;
}
