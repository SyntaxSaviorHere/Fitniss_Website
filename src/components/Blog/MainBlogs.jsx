import { useNavigate } from "react-router";
import classes from "./MainBlogs.module.css";

const MainBlog = (props) => {
  const { img, title, id, text, description } = props.mainBlog;
  const navigate = useNavigate();

  const read = () => {
    navigate(`/blog/read`, { state: props.mainBlog }); // Navigate to the desired route
  };
  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <img className={classes.img} src={img} alt="" />
      </div>
      <div className={classes.description}>
        <h3>{title}</h3>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <button onClick={read} className={classes.readBtn}>
        Read
      </button>
    </div>
  );
};
export default MainBlog;
