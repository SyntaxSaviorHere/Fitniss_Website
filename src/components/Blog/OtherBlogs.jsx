import classes from "./OtherBlogs.module.css";
import SideBlog from "./SideBlog";
const OtherBlogs = ({ otherBlogs }) => {
  return (
    <div className={classes.container}>
      <ul className={classes.listContainer}>
        {otherBlogs.map((blog) => {
          return <SideBlog key={otherBlogs.id} blog={blog} />;
        })}
      </ul>
    </div>
  );
};
export default OtherBlogs;
