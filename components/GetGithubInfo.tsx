import { Type } from "lucide-react";
import { Octokit } from "octokit";
import TypeAni from "./TypeAni";

const API_KEY = process.env.API_KEY;
const OWNER = process.env.OWNER;

const octokit = new Octokit({
  auth: API_KEY,
});

async function GetGithubInfo() {
  const repoList = await octokit.request("GET /users/JesusItDev/repos", {
    //   per_page: 2,
    sort: "updated-asc",
  });
  const commitList = await octokit.request(
    "GET /repos/JesusItDev/new-portfolio/commits",
    {
      //   per_page: 2,
      //sort: "updated",
    }
  );

  {
    console.log("Response Repo: ", repoList.data[0].contents_url.length());
  }

  let response = [];
  response.push(commitList.data[0].commit.message);
  response.push(commitList.data[1].commit.message);
  response.push(commitList.data[2].commit.message);

  const contentsList = await octokit.request(repoList.data[0].contents_url, {
    //   per_page: 2,
    sort: "updated",
  });

  console.log("CommitList Content: ", response);

  return (
    <>
      <p className="text-2xl">{`C:\\Lastest Commits: `}</p>
      <TypeAni content={response} />
    </>
  );
}

export default GetGithubInfo;
