const Card = ({ title, icon, altText, number, todaysNumber, todaysNumberIcon }) => {
    return (
        <div className="card">
            <div className="title">
                <p><img src={icon} alt={altText} /> {title}</p>
            </div>
            <div className="number">
                <h2>{number}</h2>
                <p>FOLLOWERS</p>
                <div className="todays">
                    <p><img src={todaysNumberIcon} alt="icon" />{todaysNumber} Today</p>
                </div>
            </div>
        </div>
    )
}
export default Card