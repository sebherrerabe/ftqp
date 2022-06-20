import './CourseCard.css'


const CourseCard = ({ title, img, direction }) => {
    return <div className={`course-card ${direction === 'left' ? "mg-left-20" : "mg-right-20"}`}>
        <div className="course-card-top">
            <h3 className={direction === 'left' ? "h3-left" : "h3-right"}>{title}</h3>
        </div>
        <div className="course-card-bottom">
            <img src={img} alt="" />
        </div>
    </div>
}

export default CourseCard;