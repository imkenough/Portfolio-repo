import { Octokit } from "octokit";

// Initialize Octokit with your GitHub personal access token (if available)
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  topics: string[];
  created_at: string;
  updated_at: string;
}

/**
 * Fetch a user's GitHub repositories
 * @param username GitHub username
 * @param options Options for sorting and filtering repositories
 * @returns Array of repositories
 */
export async function getRepositories(
  username: string,
  options: {
    sort?: "created" | "updated" | "pushed" | "full_name";
    direction?: "asc" | "desc";
    per_page?: number;
    page?: number;
  } = {}
): Promise<Repository[]> {
  try {
    const { data } = await octokit.rest.repos.listForUser({
      username,
      sort: options.sort || "updated",
      direction: options.direction || "desc",
      per_page: options.per_page || 10,
      page: options.page || 1,
    });

    return data as Repository[];
  } catch (error) {
    console.error("Error fetching GitHub repositories:", error);
    return [];
  }
}

/**
 * Fetch a single repository by owner and name
 * @param owner Repository owner
 * @param repo Repository name
 * @returns Repository object or null if not found
 */
export async function getRepository(
  owner: string,
  repo: string
): Promise<Repository | null> {
  try {
    const { data } = await octokit.rest.repos.get({
      owner,
      repo,
    });

    return data as Repository;
  } catch (error) {
    console.error("Error fetching GitHub repository:", error);
    return null;
  }
}

/**
 * Fetch repositories with additional details like topics
 * @param username GitHub username
 * @param options Options for filtering repositories
 * @returns Array of enhanced repository objects
 */
export async function getEnhancedRepositories(
  username: string,
  options: {
    sort?: "created" | "updated" | "pushed" | "full_name";
    direction?: "asc" | "desc";
    per_page?: number;
    page?: number;
  } = {}
): Promise<Repository[]> {
  try {
    const repos = await getRepositories(username, options);

    // For each repository, fetch topics
    const enhancedRepos = await Promise.all(
      repos.map(async (repo) => {
        try {
          const { data } = await octokit.rest.repos.getAllTopics({
            owner: username,
            repo: repo.name,
          });

          return {
            ...repo,
            topics: data.names || [],
          };
        } catch (error) {
          console.error(`Error fetching topics for ${repo.name}:`, error);
          return {
            ...repo,
            topics: [],
          };
        }
      })
    );

    return enhancedRepos;
  } catch (error) {
    console.error("Error fetching enhanced repositories:", error);
    return [];
  }
}
