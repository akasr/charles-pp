import "./Blogs.scss";
import ReadBtn from "./ReadBtn";

const Blogs = () => {
  return (
    <div className="blogs">
      <article className="blogs__article blue">
        <h2>Building a blog with Jekyll, Docker and Gitlab</h2>
        <p className="blogs__article__date">May 22, 2015 - 2 minute read</p>
        <p className="blogs__article__summary">
          Developing a blog with Jekyll, Docker and Gitlab is a great way to get
          started with static site generators. In this article, I will show you
          how to set up a blog with Jekyll, Docker and Gitlab.
        </p>
        <ReadBtn />
      </article>
      <article className="blogs__article">
        <h2>Building a blog with Jekyll, Docker and Gitlab</h2>
        <p className="blogs__article__date">May 22, 2015 - 2 minute read</p>
        <p className="blogs__article__summary">
          Developing a blog with Jekyll, Docker and Gitlab is a great way to get
          started with static site generators. In this article, I will show you
          how to set up a blog with Jekyll, Docker and Gitlab.
        </p>
        <ReadBtn />
      </article>
      <article className="blogs__article black">
        <h2>Building a blog with Jekyll, Docker and Gitlab</h2>
        <p className="blogs__article__date">May 22, 2015 - 2 minute read</p>
        <p className="blogs__article__summary">
          Developing a blog with Jekyll, Docker and Gitlab is a great way to get
          started with static site generators. In this article, I will show you
          how to set up a blog with Jekyll, Docker and Gitlab.
        </p>
        <ReadBtn />
      </article>
      <article className="blogs__article">
        <h2>Building a blog with Jekyll, Docker and Gitlab</h2>
        <p className="blogs__article__date">May 22, 2015 - 2 minute read</p>
        <p className="blogs__article__summary">
          Developing a blog with Jekyll, Docker and Gitlab is a great way to get
          started with static site generators. In this article, I will show you
          how to set up a blog with Jekyll, Docker and Gitlab.
        </p>
        <ReadBtn />
      </article>
    </div>
  );
};

export default Blogs;