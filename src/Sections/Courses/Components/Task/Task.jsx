import "./Task.css";

const Task = ({ img, titre }) => {
  return (
    <div className="task">
      <div
        className="task-img"
        style={{ backgroundImage: `url(${img})`, backgroundPosition: "center", backgroundSize: "cover" }}
      ></div>
      <h4>{titre}</h4>
    </div>
  );
};

export default Task;
