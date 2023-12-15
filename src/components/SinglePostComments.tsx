import { useAuth } from "../context/AuthContext";
import { StyledSinglePostComment } from "../styles/singlePost/SinglePostComment.styled";
import SinglePostCommentContainer from "../containers/SinglePostCommentContainer";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Comment } from "../types";

type PropsSinglePostComments = {
  commentsData: Comment[];
};

type FormValues = {
  comment: string;
};

export default function SinglePostComments(
  props: PropsSinglePostComments
) {
  const { authenticated } = useAuth();
  const { id } = useParams();
  const [comments, setComments] = useState(props.commentsData);

  // useForm
  const form = useForm<FormValues>({
    defaultValues: {
      comment: "",
    },
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = async (data: FormValues) => {
    const token = localStorage.getItem("token");
    console.log(data);

    if (!token) {
      return console.error("Token Expired");
    }

    try {
      const res = await fetch(
        `http://localhost:3000/api/posts/${id}/comments`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(data).toString(),
        }
      );

      if (res) {
        const newComment = await res.json();
        setComments([...comments, newComment.comment]);
      }
    } catch (err) {
      console.error("Add comment failed", err);
    }
  };

  const updateCommentsFromLike = (
    id: string,
    likeClicked: boolean
  ) => {
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
      {authenticated ? (
        <form method="POST" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            cols={130}
            rows={3}
            placeholder="Enter your comment here"
            {...register("comment", {
              required: "Conetnt is required",
            })}
          ></textarea>

          <p>{errors.comment?.message}</p>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>You need to be logged in to add a comment</p>
      )}

      {comments.map((comment, index) => (
        <SinglePostCommentContainer
          key={index}
          _id={comment._id}
          date={comment.createdAt}
          author={comment.user.username}
          content={comment.comment}
          likeCount={comment.likeCount}
          likes={comment.likes}
          updateCommentsFromLike={(
            id: string,
            likeClicked: boolean
          ) => updateCommentsFromLike(id, likeClicked)}
        />
      ))}
    </StyledSinglePostComment>
  );
}
