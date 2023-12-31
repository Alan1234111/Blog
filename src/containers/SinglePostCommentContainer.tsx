import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getUserIdFromToken } from "../services/getUserIdFromToken";
import { getFormattedDate } from "../services/getFormattedDate";
import { StyledSinglePostCommentContainer } from "../styles/singlePost/SinglePostCommentContainer.styled";

type PropsSinglePostCommentsContainer = {
  _id: string;
  date: string;
  author: string;
  content: string;
  likeCount: number;
  likes: string[];
  updateCommentsFromLike: (id: string, likeClicked: boolean) => void;
};

export default function SinglePostCommentContainer(
  props: PropsSinglePostCommentsContainer
) {
  const date = getFormattedDate(props.date);
  const [likeClicked, setLikeClicked] = useState(false);
  const { authenticated } = useAuth();

  useEffect(() => {
    if (authenticated) {
      setLikeClicked(checkLikedComments());
    }
  }, []);

  const checkLikedComments = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const userId = getUserIdFromToken(token);
      return props.likes.includes(userId);
    }
    return false;
  };

  const handleLike = async (id: string) => {
    if (!authenticated) return;

    try {
      const token = localStorage.getItem("token");
      const idobject = {
        commentid: id,
      };
      const commentid = JSON.stringify(idobject);

      const res = await fetch(`http://localhost:3000/api/comments`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: commentid,
      });

      if (res.ok) {
        setLikeClicked((prev) => !prev);
        props.updateCommentsFromLike(id, likeClicked);
      } else {
        console.error("Failed to update like status");
      }
    } catch (err) {
      console.error("Error while updating like status", err);
    }
  };

  return (
    <StyledSinglePostCommentContainer>
      <div className="comment-information-container">
        <p className="author">{props.author}</p>
        <p className="date">{date}</p>
      </div>

      <p className="content">{props.content}</p>

      <div className="comment-action-container">
        <button onClick={() => handleLike(props._id)}>
          <img
            src={
              likeClicked ? "/like_filled.svg" : "/like_unfilled.svg"
            }
            alt="like"
          />
          {props.likeCount}
        </button>
      </div>
    </StyledSinglePostCommentContainer>
  );
}
