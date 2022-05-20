import VideoPlayer from "../../components/common/VideoPlayer";
import MediumIcon from "../../assets/imgs/medium-1889501-1597561.webp";
import TelegramIcon from "../../assets/imgs/logo-1889481-1597541.png";
import TwitterIcon from "../../assets/imgs/logo-1889529-1597589.png";
import { DESCS, FEATURES, LISTED, POWERED } from "../../constants";
import Desc from "../../components/common/Desc";
import BG from "../../assets/imgs/6192453ad18750d72b7fd4df_ABPK-Veins-2-GRAD_3 1.png";
import SolanaGlass from "../../assets/imgs/Solana_Glass_04.png";
import Feature from "../../components/Feature";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const HeroVideo = require("../../assets/imgs/landing.mp4");

const Home = () => {
  return (
    <div>
      <div className="home-hero">
        {/* <div className="home-hero-bg">
          <div className="home-hero-bg-overlay" />
          <img src={BG} alt="background" />
        </div> */}
        <div className="home-hero-video">
          <VideoPlayer source={HeroVideo} />
        </div>
        <div className="home-hero-content d-flex justify-content-center flex-column align-items-center text-center">
          <div className="font-outfit title mb-2">
            NeoNomad{" "}
            <span style={{ fontSize: 50, color: "#8152B6" }}>Xchange</span>
          </div>
          <div className="font-raleway title1">
            One platform for all your financial needs
          </div>
          <div className="font-outfit title2">
            Invest, Swap, Stake and Spend.
          </div>
          <div className="font-outfit title3 mb-3">
            ~ we make DeFi easy for everyone!
          </div>
          <div className="d-flex social-icons mb-4">
            <img src={MediumIcon} alt="social icon" />
            <img src={TelegramIcon} alt="social icon" />
            <img src={TwitterIcon} alt="social icon" />
          </div>
          <button className="btn-primary mt-4">BUY NNI</button>
        </div>
      </div>
      <div className="container d-flex flex-wrap justify-content-center features-container">
        {FEATURES.map((feature, index) => (
          <div className="col-md-4 col-12" key={index}>
            <Feature props={feature} />
          </div>
        ))}
      </div>
      <div className="container my-4 py-4">
        <div className="home-row d-md-flex justify-content-between align-items-center px-md-4">
          <div className="p-4 col-md-7 col-12">
            <div className="desc-type">FUNCTIONALITY</div>
            <h3 className="fw-bold mt-2">
              Follow our journey to a decentralized world!
            </h3>
            <p className="my-4 pb-4">
              NeoNomad is a DeFi service built on Solana and powered by Serum's
              on-chain infrastructure. Built to support 100s of millions of
              users, it serves as a permissionless, cheap, and scalable protocol
              that democratizes borrowing, lending, and leverage trading.
              Allowing you to make the most of your capital.
            </p>
            <button>Roadmap</button>
          </div>
          <div className="p-4 col-md-4 col-12 m-auto">
            <img src={SolanaGlass} className="w-100 p-4" alt="solana logo" />
          </div>
        </div>
      </div>
      <div className="col-md-8 my-4 py-4 mx-auto">
        <div className="font-outfit title title-sm title-black mb-2  text-center">
          Why <span style={{ fontSize: 35, color: "#8152B6" }}>NeoNomad</span> ?
        </div>
        <div>
          {DESCS.map((desc, index) => (
            <Desc
              key={index}
              img={desc.img}
              title={desc.title}
              desc={desc.desc}
              type={desc.type}
            />
          ))}
        </div>
      </div>
      <div className="my-4 pb-4">
        <div className="listed-logo-title fw-bold font-outfit text-center">POWERED BY</div>
        <div className="col-md-8 m-auto d-flex flex-wrap align-items-center mt-4">
          {POWERED.map((powered, index) => 
            <div key={index} className="col-md-4 col-12 d-flex justify-content-center align-items-center py-2">
              <Link to={powered.link}>
                <img src={powered.img} alt="logo" style={{height: powered.height}} />
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="pt-4 my-4">
        <div className="listed-logo-title fw-bold font-outfit text-center">
          LISTED ON
        </div>
        <div className="listed-logo-container mt-4">
          <Slider
            {...{
              infinite: true,
              slidesToShow: 5,
              slidesToScroll: 1,
              arrows: false,
              autoplay: true,
              responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  },
                },
              ],
            }}
          >
            {LISTED.map((listed, index) => (
              <div key={index} className="p-4 h-100 d-flex justify-content-center align-items-center">
                <Link to={listed.link}>
                  <img src={listed.img} alt="listed logo" className="w-100" />
                </Link>
              </div>
            ))}
            {LISTED.map((listed, index) => (
              <div
                key={`second${index}`}
                className="p-4 h-100 d-flex justify-content-center align-items-center"
              >
                <Link to={listed.link}>
                  <img src={listed.img} alt="listed logo" className="w-100" />
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="container">
        <div className="footer-row p-4 d-flex justify-content-between align-items-center">
          <div className="col-md-8 col-12 px-0 px-md-4">
            <div className="footer-row-title title font-outfit">
              45,100 Nomads Globally
            </div>
            <p className="font-outfit">
              The Nomad Community is at the core of our project, products and
              services. NeoNomad’s mission is to provide the community with a
              more inclusive DeFi ecosystem to enable financial stability,
              sustainable growth, and wealth for all. We are all Nomads in
              spirit and we value each Nomad that is part of our community!
            </p>
            <div className="mt-4">
              <button className="btn-primary mt-4">
                Buy NNI Native Tokens
              </button>
            </div>
          </div>
          <div className="col-md-8 col-12 footer-row-bg">
            <img src={BG} className="w-100" alt="background" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
