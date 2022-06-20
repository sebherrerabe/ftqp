import './Task.css'

const Task = ({ img, title }) => {
    return <div className="task">
        <div className="task-img" style={{ backgroundImage: `url(${img})` }}>
        </div>
        <h4>{title}</h4>
    </div>
}

export default Task;