import VideoHomePage from '../../assets/images/hero.mp4'

const HomePage = () => {
    return (
        <div className="homepage-container">
            <video autoPlay loop muted controls width="100%" height="600px">
                <source  src={VideoHomePage} type="video/webm" />
            </video>
        </div>
    )
}

export default HomePage;