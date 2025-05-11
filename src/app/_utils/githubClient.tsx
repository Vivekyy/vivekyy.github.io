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

export function getEventsByUser(username: string, per_page?: number) {
  return octokit.request('GET /users/{username}/events', {
    username,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    },
    per_page,
  });
}

export function getPushesByUser(username: string, max_events: number) {
  return getEventsByUser(username, 100).then((res) => {
    const events = res.data;
    const pushes = events.filter((event) => event.type === 'PushEvent');
    const pushesToReturn = pushes.slice(0, max_events);
    return pushesToReturn;
  });
}