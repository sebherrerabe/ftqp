
import './Titles.css';

export const TitleLeft = ({ icon, title }) => {
    return (<div className="title-left">
        <h2>{icon}{title}</h2>
    </div>);
}

export const TitleRight = () => {
    return (<></>);
}
