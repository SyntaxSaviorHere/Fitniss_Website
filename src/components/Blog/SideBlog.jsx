import classes from "./SideBlog.module.css";
import { useNavigate } from "react-router";
const SideBlog = ({ blog }) => {
  const { id, text, title, img, description } = blog;
  const navigate = useNavigate();

  const read = () => {
    navigate(`/blog/read`, { state: blog }); // Navigate to the desired route
  };
  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <img className={classes.img} src={img} alt="" />
      </div>
      <div>
        <h3>{title}</h3>
        <p dangerouslySetInnerHTML={{ __html: description }} />
        <button onClick={read} className={classes.readBtn}>
          Read
        </button>
      </div>
    </div>
  );
};
export default SideBlog;
