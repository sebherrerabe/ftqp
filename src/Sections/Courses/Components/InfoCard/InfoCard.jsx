import './InfoCard.css'

const InfoCard = ({ children, direction }) => {
    return <div className={`info-card ${direction === 'left' ? "mg-left-20" : "mg-right-20"}`}>
        {children}
    </div>
}

export default InfoCard;