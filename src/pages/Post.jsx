import { getSinglePost } from "../api";
import { defer, useLoaderData, Await } from "react-router-dom";
import { StyledSinglePost } from "../components/styles/StyledSinglePost";
import PostContent from "../components/PostContent";
import { Suspense } from "react";
import Loading from "../components/Loading";

export async function loader({ params }) {
  return defer({
    postData: getSinglePost(params.id),
  });
}

export default function Post() {
  const { postData } = useLoaderData();

  return (
    <StyledSinglePost>
      <Suspense fallback={<Loading />}>
        <Await resolve={postData}>
          {(data) => {
            return <PostContent postData={data.post} />;
          }}
        </Await>
      </Suspense>
    </StyledSinglePost>
  );
}
