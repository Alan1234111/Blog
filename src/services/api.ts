const BASE_API_URL = "http://localhost:3000";

async function fetchFromAPI(endpoint: string) {
  const url = `${BASE_API_URL}/api/${endpoint}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }

  return await response.json();
}

// Posts

export async function getPosts() {
  return fetchFromAPI("posts");
}

export async function getFirstFivePosts() {
  return fetchFromAPI("posts/first-five");
}

export async function getSinglePost(id: string) {
  return fetchFromAPI(`posts/${id}`);
}

export async function getPostFromTag(id: string) {
  return fetchFromAPI(`tags/${id}`);
}

export async function getLatestsPosts() {
  return fetchFromAPI(`posts/latests`);
}

// Tags

export async function getTags() {
  return fetchFromAPI("tags");
}

export async function getRandomTags() {
  return fetchFromAPI("tags/random");
}

// Comments

export async function getComments(id: string) {
  return fetchFromAPI(`posts/${id}/comments`);
}
