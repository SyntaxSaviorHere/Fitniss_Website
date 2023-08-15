import { Fragment } from "react";
import blogs from "../../../Blogs.json";
import classes from "./Blog.module.css";
import MainBlog from "./MainBlogs";
import OtherBlogs from "./OtherBlogs";
const Blog = () => {
  const mainBlog = blogs[0];
  const otherBlogs = blogs.slice(1);
  return (
    <Fragment>
      <h1 className={classes.h11}>Blogs</h1>
      <div className={classes.container}>
        <div className={classes.mainBlog}>
          <MainBlog mainBlog={mainBlog} />
        </div>

        <div className={classes.sideBlogs}>
          <OtherBlogs otherBlogs={otherBlogs} />
        </div>
      </div>
      <div className={classes.list}>
        <h2>More Blogs: </h2>
        <OtherBlogs otherBlogs={otherBlogs} />
      </div>
    </Fragment>
  );
};

export default Blog;
