import { Suspense } from "react";
import { getPostFromTag } from "../services/api";
import { StyledTagsPage } from "../styles/tagsPage/TagsPage.styled";
import { Await, defer, useLoaderData } from "react-router-dom";
import Loading from "../utils/Loading";
import AsidePostContainer from "../containers/AsidePostContainer";
import { Post, Tag } from "../types";

type ParamsType = {
  params: {
    id: string;
  };
};

type PostsFromTag = {
  posts: Post[];
  tag: Tag;
};

export async function loader({ params }: ParamsType) {
  return defer({
    postsFromTag: getPostFromTag(params.id),
  });
}

export default function TagPosts() {
  const { postsFromTag } = useLoaderData() as {
    postsFromTag: Post[];
  };

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={postsFromTag}>
        {(data: PostsFromTag) => (
          <StyledTagsPage>
            <h2>#{data.tag.name}</h2>

            <div>
              {data.posts.map((post, index) => (
                <AsidePostContainer
                  key={index}
                  _id={post._id}
                  photoUrl={post.photoUrl}
                  title={post.title}
                  text={post.text}
                  tag={data.tag}
                />
              ))}
            </div>
          </StyledTagsPage>
        )}
      </Await>
    </Suspense>
  );
}
