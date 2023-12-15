import { Suspense } from "react";
import HomeMainPosts from "../components/HomeMainPosts";
import TagsSection from "../components/TagsSection";
import HomeLatestsPosts from "../components/HomeLatestsPosts";
import {
  getLatestsPosts,
  getRandomTags,
  getFirstFivePosts,
} from "../services/api";
import { Await, defer, useLoaderData } from "react-router-dom";
import Loading from "../utils/Loading";
import { Post, Tag } from "../types";

export async function loader() {
  return defer({
    firstFivePosts: getFirstFivePosts(),
    latestsPosts: getLatestsPosts(),
    randomTags: getRandomTags(),
  });
}

export default function Home() {
  const { firstFivePosts, latestsPosts, randomTags } =
    useLoaderData() as {
      firstFivePosts: Post[];
      latestsPosts: Post[];
      randomTags: Tag[];
    };

  return (
    <>
      {/* Home Main Posts Section  */}
      <Suspense fallback={<Loading />}>
        <Await resolve={firstFivePosts}>
          {(postsData) => {
            return <HomeMainPosts postsData={postsData.posts} />;
          }}
        </Await>
      </Suspense>

      {/* Tags Section */}
      <Suspense fallback={<Loading />}>
        <Await resolve={randomTags}>
          {(randomTagsData) => {
            return <TagsSection randomTags={randomTagsData.tags} />;
          }}
        </Await>
      </Suspense>

      {/* Latests Posts Section */}
      <Suspense fallback={<Loading />}>
        <Await resolve={latestsPosts}>
          {(latestsPostsData) => {
            return (
              <HomeLatestsPosts
                latestsPosts={latestsPostsData.posts}
              />
            );
          }}
        </Await>
      </Suspense>
    </>
  );
}
