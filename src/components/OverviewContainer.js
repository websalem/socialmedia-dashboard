import OverviewCard from "./OverviewCard";
import iconUp from '../assets/images/icon-up.svg';
import iconDown from '../assets/images/icon-down.svg';
import facebookIcon from '../assets/images/icon-facebook.svg';
import twitterIcon from '../assets/images/icon-twitter.svg';
import instaIcon from '../assets/images/icon-instagram.svg';
import youtubeIcon from '../assets/images/icon-youtube.svg';
const OverviewContainer = () => {
    return (
        <div className="overview-container">

            <h2>Overview - Today</h2>

            <div className="container">

                <OverviewCard
                    title={'Page Views'}
                    socialIcon={facebookIcon}
                    viewsNum={'87'}
                    icon={iconUp}
                    viewsPercent={'3'}
                />
                <OverviewCard
                    title={'Likes'}
                    socialIcon={facebookIcon}
                    viewsNum={'52'}
                    icon={iconDown}
                    viewsPercent={'2'}

                />
                <OverviewCard
                    title={'Likes'}
                    socialIcon={instaIcon}
                    viewsNum={'5462'}
                    icon={iconUp}
                    viewsPercent={'2257'}
                />
                <OverviewCard
                    title={'Profile Views'}
                    socialIcon={instaIcon}
                    viewsNum={'52k'}
                    icon={iconUp}
                    viewsPercent={'1375'}
                />
                <OverviewCard
                    title={'Retweets'}
                    socialIcon={twitterIcon}
                    viewsNum={'117'}
                    icon={iconUp}
                    viewsPercent={'303'}
                />
                <OverviewCard
                    title={'Likes'}
                    socialIcon={twitterIcon}
                    viewsNum={'507'}
                    icon={iconUp}
                    viewsPercent={'553'}
                />
                <OverviewCard
                    title={'Likes'}
                    socialIcon={youtubeIcon}
                    viewsNum={'107'}
                    icon={iconDown}
                    viewsPercent={'19'}
                />
                <OverviewCard
                    title={'Total Views'}
                    socialIcon={youtubeIcon}
                    viewsNum={'1407'}
                    icon={iconDown}
                    viewsPercent={'12'}
                />
            </div>
        </div>
    )
}
export default OverviewContainer