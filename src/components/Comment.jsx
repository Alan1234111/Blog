import { StyledComment } from "./styles/Comment.styled";

export default function Comment(props) {
  return (
    <StyledComment>
      <div className="comment-information">
        <p className="author">{props.author}</p>
        <p className="date">{props.date}</p>
      </div>
      <p className="content">{props.content}</p>
      <div className="action-section">
        <button>
          <img src="/like_unfilled.svg" alt="like" /> {props.like}
        </button>
      </div>
      <hr></hr>
    </StyledComment>
  );
}
