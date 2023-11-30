import { getSinglePost, getComments } from "../services/api";
import {
  defer,
  useLoaderData,
  Await,
  Form,
  useParams,
} from "react-router-dom";
import { StyledSinglePost } from "../styles/singlePost/StyledSinglePost.styled";
import PostContent from "../containers/PostContent";
import { Suspense } from "react";
import Loading from "../utils/Loading";
import SinglePostComments from "../components/SinglePostComments";
import { useAuth } from "../context/AuthContext";

export async function loader({ params }) {
  return defer({
    singlePostData: getSinglePost(params.id),
    comments: getComments(params.id),
  });
}

export default function SinglePost() {
  const { singlePostData, comments } = useLoaderData();
  let { id } = useParams();
  const { authenticated } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Call the login function from the context, passing the form data
      const formData = new FormData(event.target);
      await fetch(`http://localhost:3000/api/posts/${id}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      // If login is successful, navigate to the desired location (e.g., "/")
    } catch (err) {
      // Handle login error, e.g., display an error message
      console.error("Login failed", err);
    }
  };

  return (
    <StyledSinglePost>
      <Suspense fallback={<Loading />}>
        <Await resolve={singlePostData}>
          {(data) => {
            return <PostContent postData={data.post} />;
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
    </StyledSinglePost>
  );
}
