import { getPosts } from "../services/api";
import { useLoaderData, defer, Await } from "react-router-dom";
import { Suspense } from "react";
import Loading from "../utils/Loading";
import AsidePostContainer from "../containers/AsidePostContainer";
import { AllPostsStyled } from "../styles/allPosts/AllPosts.styled";
import { Post } from "../types";

export async function loader() {
  return defer({ getPosts: getPosts() });
}

export default function AllPosts() {
  const { getPosts } = useLoaderData() as { getPosts: Post[] };

  return (
    <AllPostsStyled>
      <Suspense fallback={<Loading />}>
        <Await resolve={getPosts}>
          {(postsData) => {
            return postsData.posts.map(
              (post: Post, index: number) => (
                <AsidePostContainer
                  key={index}
                  _id={post._id}
                  photoUrl={post.photoUrl}
                  title={post.title}
                  text={post.text}
                  tag={post.tag}
                  $bg={false}
                />
              )
            );
          }}
        </Await>
      </Suspense>
    </AllPostsStyled>
  );
}
