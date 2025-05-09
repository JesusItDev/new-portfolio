import { Octokit } from "octokit";

const API_KEY = process.env.API_KEY;
const OWNER = process.env.OWNER;

const octokit = new Octokit({
  auth: API_KEY,
});

export default async function CodeLineRetriever() {
  const data = await octokit.request("GET /users/JesusItDev/repos", {
    //   owner: "github",
    //   repo: "docs",
    //   per_page: 2,
    // sort: "updated",
  });
  {
    console.log("Response: ", data.data);
  }
  return <p>{data.status}</p>;
}
