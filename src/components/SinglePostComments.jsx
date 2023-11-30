import { useAuth } from "../context/AuthContext";
import { StyledSinglePostComment } from "../styles/singlePost/SinglePostComment.styled";
import SinglePostCommentContainer from "../containers/SinglePostCommentContainer";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function SinglePostComments(props) {
  const { authenticated } = useAuth();
  const { id } = useParams();

  const [comments, setComments] = useState(props.commentsData);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("You need to be logged in");
    }

    try {
      const formData = new FormData(event.target);
      const res = await fetch(
        `http://localhost:3000/api/posts/${id}/comments`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData).toString(),
        }
      );

      if (res) {
        const newComment = await res.json();
        setComments([...comments, newComment.comment]);
      }
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  const updateCommentsFromLike = (id, likeClicked) => {
    const updatedComments = comments.map((comment) => {
      if (comment._id === id && !likeClicked) {
        return {
          ...comment,
          likeCount: comment.likeCount + 1,
        };
      } else if (comment._id === id && likeClicked) {
        return {
          ...comment,
          likeCount: comment.likeCount - 1,
        };
      } else {
        return comment;
      }
    });

    setComments(updatedComments);
  };

  return (
    <StyledSinglePostComment>
      <h3>Comments</h3>

      {authenticated ? (
        <form method="POST" onSubmit={handleSubmit}>
          <textarea
            name="comment"
            id="comment"
            cols="130"
            rows="3"
            placeholder="Enter your comment here"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>You need to be logged in to add a comment</p>
      )}

      {comments.map((comment, index) => (
        <SinglePostCommentContainer
          key={index}
          id={comment._id}
          date={comment.createdAt}
          author={comment.user.username}
          content={comment.comment}
          likeCount={comment.likeCount}
          likes={comment.likes}
          updateCommentsFromLike={(id, likeClicked) =>
            updateCommentsFromLike(id, likeClicked)
          }
        />
      ))}
    </StyledSinglePostComment>
  );
}
