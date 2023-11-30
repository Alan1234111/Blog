import { Suspense } from "react";
import { getPostFromTag } from "../services/api";
import { StyledTagsPage } from "../styles/tagsPage/TagsPage.styled";
import { Await, defer, useLoaderData } from "react-router-dom";
import { StyledTag } from "../styles/utils/Tag.styled";
import { Link } from "react-router-dom";
import Loading from "../utils/Loading";

export async function loader({ params }) {
  return defer({
    postsFromTag: getPostFromTag(params.id),
  });
}

export default function Tags() {
  const dataPostsPromise = useLoaderData();

  function createMarkup(content) {
    const plainText = content.replace(/<[^>]*>/g, "");
    const first35Words = plainText.split(" ").slice(0, 35).join(" ");

    return {
      __html: first35Words + "...",
    };
  }

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={dataPostsPromise.postsFromTag}>
        {(data) => (
          <StyledTagsPage>
            <h2>#{data.tag.name}</h2>

            <div>
              {data.posts.map((post, i) => (
                <Link
                  className="post"
                  key={i}
                  to={`/posts/${post._id}`}
                >
                  <img
                    src={`http://localhost:3000/${post.photoUrl}`}
                    alt=""
                  />
                  <div className="post-information">
                    <h3>{post.title}</h3>
                    <div
                      dangerouslySetInnerHTML={createMarkup(
                        post.text
                      )}
                    />

                    <StyledTag>{data.tag.name}</StyledTag>
                  </div>
                </Link>
              ))}
            </div>
          </StyledTagsPage>
        )}
      </Await>
    </Suspense>
  );
}
