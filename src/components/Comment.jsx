import dayjs from "dayjs";
import {StyledComment} from "./styles/Comment.styled";
import {useEffect, useState} from "react";
import {useAuth} from "./AuthContext";
import {useNavigate} from "react-router-dom";

export default function Comment(props) {
  const date = dayjs(props.createdAt);
  const formattedDate = date.format("DD/MM/YYYY");
  const {authenticated} = useAuth();
  const [likeClicked, setLikeClicked] = useState(false);
  const navigate = useNavigate();

  const checkLikedComments = (id) => {
    if (props.likes.includes(id)) {
      setLikeClicked(true);
    } else {
      setLikeClicked(false);
    }
  };

  const getUserIdFromToken = (token) => {
    // Split the token into its three parts: header, payload, and signature
    const [header, payload, signature] = token.split(".");

    // Decode the base64-encoded payload
    const decodedPayload = atob(payload);

    // Parse the JSON data in the payload
    const user = JSON.parse(decodedPayload);

    return user.userId;
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = getUserIdFromToken(token);

    checkLikedComments(userId);
  }, [authenticated]);

  const handleLike = async (id) => {
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
    }
  };

  return (
    <StyledComment>
      <div className="comment-information">
        <p className="author">{props.author}</p>
        <p className="date">{formattedDate}</p>
      </div>
      <p className="content">{props.content}</p>
      <div className="action-section">
        <button onClick={() => handleLike(props.id)}>
          <img src={likeClicked ? "/like_filled.svg" : "/like_unfilled.svg"} alt="like" /> {props.like}
        </button>
      </div>
      <hr></hr>
    </StyledComment>
  );
}
