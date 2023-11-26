import Card from "./Card";
import iconUp from '../assets/images/icon-up.svg';
import iconDown from '../assets/images/icon-down.svg';
import FacebookIcon from '../assets/images/icon-facebook.svg';
import twitterIcon from '../assets/images/icon-twitter.svg';
import instaIcom from '../assets/images/icon-instagram.svg';
import youtubeIcom from '../assets/images/icon-youtube.svg';
const CardsContainer = () => {
    return (
        <main>
            <div className="container">
                <div className="socialmedia-cards">

                    <Card title={'@nathanf'} number={'1987'} icon={FacebookIcon} todaysNumber={'12'} todaysNumberIcon={iconUp} />
                    <Card title={'@nathanf'} number={'1044'} todaysNumber={'99'} todaysNumberIcon={iconUp} icon={twitterIcon} />
                    <Card title={'@realnathanf'} number={'11k'} todaysNumber={'1099'} todaysNumberIcon={iconUp} icon={instaIcom} />
                    <Card title={'Nathan F.'} number={'8239'} todaysNumber={'144'} todaysNumberIcon={iconDown} icon={youtubeIcom} />
                </div>

            </div>
        </main>
    )
}
export default CardsContainer