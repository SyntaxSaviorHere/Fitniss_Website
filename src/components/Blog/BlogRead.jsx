import { useLocation } from "react-router";
import classes from "./BlogRead.module.css";
import BackButton from "../../UI/BackButton";

const BlogRead = () => {
  const location = useLocation();
  const blog = location.state;
  const { title, text, id, img } = blog;

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <div className={classes.container}>
      <BackButton root={"/blog"} />
      <h1 className={classes.title}>{title}</h1>
      <div className={classes.imgContainer}>
        <img className={classes.img} src={img} alt="" />
      </div>
      <div
        className={classes.paraContainer}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
};
export default BlogRead;
