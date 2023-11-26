const OverviewCard = ({ icon, socialIcon, title, viewsNum, viewsPercent }) => {
    return (
        <div className="overview-card">
            <div className="title"><p>{title}</p></div>
            <div className="social-icon"><img src={socialIcon} alt="social icon" /></div>
            <div className="views-num"><h3>{viewsNum}</h3></div>
            <div className="views-icon"><img src={icon} alt="icon" /> <span>{viewsPercent}%</span></div>
        </div >
    )
}
export default OverviewCard