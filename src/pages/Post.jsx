import { getSinglePost, getComments } from "../api";
import {
  defer,
  useLoaderData,
  Await,
  Form,
  useParams,
} from "react-router-dom";
import { StyledSinglePost } from "../components/styles/StyledSinglePost";
import PostContent from "../components/PostContent";
import { Suspense } from "react";
import Loading from "../components/Loading";
import Comment from "../components/Comment";
import { useAuth } from "../components/AuthContext";

export async function loader({ params }) {
  return defer({
    postData: getSinglePost(params.id),
    commentsData: getComments(params.id),
  });
}

export default function Post() {
  const { postData, commentsData } = useLoaderData();
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
        <Await resolve={postData}>
          {(data) => {
            return <PostContent postData={data.post} />;
          }}
        </Await>
      </Suspense>
      <div className="comment-container">
        <h3>Comments</h3>
        {authenticated ? (
          <Form method="POST" onSubmit={handleSubmit}>
            <textarea
              name="comment"
              id="comment"
              cols="130"
              rows="3"
              placeholder="Enter your comment here"
            ></textarea>
            <button type="submit">Submit</button>
          </Form>
        ) : (
          <p>You need to be logged in to add a comment</p>
        )}
        <Suspense fallback={<Loading />}>
          <Await resolve={commentsData}>
            {(comments) => {
              return comments.map((comment) => (
                <Comment
                  author="Al an"
                  date="August 16, 2023"
                  content={comment.comment}
                  like={4}
                />
              ));
            }}
          </Await>
        </Suspense>
      </div>
    </StyledSinglePost>
  );
}
