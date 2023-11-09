const BASE_API_URL = "http://localhost:3000";

async function fetchFromAPI(endpoint) {
  const url = `${BASE_API_URL}/api/${endpoint}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }

  return await response.json();
}

export async function getPosts() {
  return fetchFromAPI("posts");
}

export async function getSinglePost(id) {
  return fetchFromAPI(`posts/${id}`);
}

export async function getTags() {
  return fetchFromAPI("tags");
}
