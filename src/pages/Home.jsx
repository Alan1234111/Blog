import MainPosts from "../components/MainPosts";
import TagsSection from "../components/TagsSection";
import SectionPosts from "../components/SectionPosts";
import { getPosts, getTags } from "../api";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const postsData = await getPosts();
  const tagsData = await getTags();
  return { postsData, tagsData };
}

export default function Home() {
  const { postsData, tagsData } = useLoaderData();

  return (
    <>
      {postsData && postsData.posts ? (
        <>
          <MainPosts postData={postsData} />
          <TagsSection tagsData={tagsData} />
          <SectionPosts postData={postsData} />
        </>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
}
