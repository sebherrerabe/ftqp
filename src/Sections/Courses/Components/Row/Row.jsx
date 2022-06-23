import './Row.css';

const Row = ({ newClass, left, right }) => {
    return <div className={"courses-row mg-top-40 " + newClass}>
        <div className="row-left">
            {left}
        </div>
        <div className="row-right">
            {right}
        </div>
    </div>
}

export default Row;  