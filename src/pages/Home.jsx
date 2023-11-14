import { Suspense } from "react";
import MainPosts from "../components/MainPosts";
import TagsSection from "../components/TagsSection";
import SectionPosts from "../components/SectionPosts";
import { getPosts, getTags } from "../api";
import { Await, defer, useLoaderData } from "react-router-dom";
import Loading from "../components/Loading";

export async function loader() {
  return defer({
    postsData: getPosts(),
    tagsData: await getTags(),
  });
}

export default function Home() {
  const { postsData, tagsData } = useLoaderData();

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={postsData}>
        {(data) => {
          return (
            <>
              <MainPosts postData={data.posts} />
              <TagsSection tagsData={tagsData.tags} />
              <SectionPosts postData={data.posts} />
            </>
          );
        }}
      </Await>
    </Suspense>
  );
}
