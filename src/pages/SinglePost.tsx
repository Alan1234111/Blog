import { getSinglePost, getComments } from "../services/api";
import {
  defer,
  useLoaderData,
  Await,
  Form,
  useParams,
} from "react-router-dom";
import SinglePostContainer from "../containers/SinglePostContainer";
import { Suspense } from "react";
import Loading from "../utils/Loading";
import SinglePostComments from "../components/SinglePostComments";
import { useAuth } from "../context/AuthContext";
import { Post } from "../types";

type ParamsType = {
  params: {
    [key: string]: string;
  };
};

export async function loader({ params }: ParamsType) {
  console.log(params);
  return defer({
    singlePostData: getSinglePost(params.id),
    comments: getComments(params.id),
  });
}

export default function SinglePost() {
  const { singlePostData, comments } = useLoaderData() as {
    singlePostData: Post;
    comments: Comment[];
  };

  let { id } = useParams();

  return (
    <section>
      <Suspense fallback={<Loading />}>
        <Await resolve={singlePostData}>
          {(data) => {
            return <SinglePostContainer postData={data.post} />;
          }}
        </Await>
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Await resolve={comments}>
          {(comments) => (
            <SinglePostComments commentsData={comments} />
          )}
        </Await>
      </Suspense>
    </section>
  );
}
