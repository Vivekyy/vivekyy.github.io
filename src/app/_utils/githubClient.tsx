import { Octokit } from '@octokit/core';
import dotenv from 'dotenv';
dotenv.config();

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export function getCommitsByRepo(owner: string, repo: string, per_page?: number) {
  return octokit.request('GET /repos/{owner}/{repo}/commits', {
    owner,
    repo,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    },
    per_page,
  });
}

export function getReposByUser(username: string, per_page?: number) {
  return octokit.request('GET /users/{username}/repos', {
    username,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    },
    type: 'all',
    sort: 'updated',
    per_page,
  });
}