import HomeLatestsPostsContainer from "../containers/HomeLatestsPostsContainer";

export default function HomeLatestsPosts(props) {
  return (
    <section>
      {props.latestsPosts.map((post, index) => (
        <HomeLatestsPostsContainer
          key={index}
          id={post._id}
          photoUrl={post.photoUrl}
          title={post.title}
          text={post.text}
          tagId={post.tag._id}
          tagName={post.tag.name}
        />
      ))}
    </section>
  );
}

//Shows Post on Home Page
