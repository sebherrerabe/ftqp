import './Row.css';

const Row = ({ left, right }) => {
    return <div className="courses-row mg-top-40">
        <div className="row-left">
            {left}
        </div>
        <div className="row-right">
            {right}
        </div>
    </div>
}

export default Row;