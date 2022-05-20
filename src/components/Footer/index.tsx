import Flex from "../common/Flex";
import Box from "../common/Box";
import Image from "../common/Image";
import MediumIcon from "../../assets/imgs/medium-1889501-1597561.webp";
import TelegramIcon from "../../assets/imgs/logo-1889481-1597541.png";
import TwitterIcon from "../../assets/imgs/logo-1889529-1597589.png";
import GithubIcon from "../../assets/imgs/developer-tool-1889494-1597554.webp";
import DiscordIcon from "../../assets/imgs/discord-2474808-2056094.png";
import Logo from "../../assets/imgs/apple-touch-icon.png";
import { Link } from "react-router-dom";
import SocialIcon from "../common/SocialIcon";

const Footer = () => {
  const socialIcons = [
    { icon: TwitterIcon, link: "" },
    { icon: MediumIcon, link: "" },
    { icon: TelegramIcon, link: "" },
    { icon: DiscordIcon, link: "" },
    { icon: GithubIcon, link: "" },
  ];

  return (
    <Box cssClasses={["footer"]}>
      <Box cssClasses={["footer-container"]}>
        <Flex cssClasses={["container"]} direction="row" justifyContent="start">
          <Box cssClasses={["col-md-2", "col-12"]}>
            <Link to="/" className="navbar-brand pointer p-0">
              <Image src={Logo} cssClasses={["footer-logo-img"]} />
            </Link>
          </Box>
          <Box cssClasses={["col-md-2", "col-12", "mt-4", "mt-md-0"]}>
            <p className="font-size-md-4 fw-700 text-uppercase mb-4 fw-bold footer-menu-title">
              DOCUMENTATION
            </p>
            <p className="font-size-sm-2 opacity-color mb-2">
              <Link
                to={{
                  pathname:
                    "https://docs.neonomad.finance/tokenomics-fundamentals/nni-tokenomics",
                }}
                target="_blank"
              >
                Tokenomics
              </Link>
            </p>
            <p className="font-size-sm-2 opacity-color mb-2">
              <Link
                to={{
                  pathname:
                    "https://docs.neonomad.finance/tokenomics-fundamentals/whitepaper",
                }}
                target="_blank"
              >
                Whitepaper
              </Link>
            </p>
            <p className="font-size-sm-2 opacity-color mb-2">
              <Link
                to={{
                  pathname:
                    "https://docs.neonomad.finance/nni-smart-contracts/nni-token-address",
                }}
                target="_blank"
              >
                Smart contracts
              </Link>
            </p>
            <p className="font-size-sm-2 opacity-color mb-2">Roadmap</p>
            <p className="font-size-sm-2 opacity-color mb-2">Team</p>
          </Box>
          <Box cssClasses={["col-md-2", "col-12", "mt-4", "mt-md-0"]}>
            <p className="font-size-md-4 fw-700 text-uppercase mb-4 fw-bold footer-menu-title">
              DEFI
            </p>
            <p className="font-size-sm-2 opacity-color mb-2">
              <Link
                to={{ pathname: "https://app.neonomad.exchange" }}
                target="_blank"
              >
                Trade
              </Link>
            </p>
            <p className="font-size-sm-2 opacity-color mb-2">
              <Link
                to={{ pathname: "https://app.neonomad.exchange/staking" }}
                target="_blank"
              >
                Stake
              </Link>
            </p>
            <p className="font-size-sm-2 opacity-color mb-2">
              <Link
                to={{ pathname: "https://app.neonomad.exchange/farms/" }}
                target="_blank"
              >
                Farm
              </Link>
            </p>
            <p className="font-size-sm-2 opacity-color mb-2">
              <Link
                to={{ pathname: "https://app.neonomad.exchange/pools/" }}
                target="_blank"
              >
                Pools
              </Link>
            </p>
            <p className="font-size-sm-2 opacity-color mb-2">
              <Link
                to={{ pathname: "https://app.neonomad.exchange/nomadpad/" }}
                target="_blank"
              >
                Launchpad
              </Link>
            </p>
          </Box>
          <Box cssClasses={["col-md-3", "col-12", "mt-4", "mt-md-0"]}>
            <p className="font-size-md-4 fw-700 text-uppercase mb-4 fw-bold footer-menu-title">
              TOOLS
            </p>
            <p className="font-size-sm-2 opacity-color mb-2">
              <Link
                to={{ pathname: "https://www.neonomad.finance/verification" }}
                target="_blank"
              >
                Official Media Verification
              </Link>
            </p>
          </Box>
          <Box cssClasses={["col-md-3", "col-12", "mt-4", "mt-md-0"]}>
            <p className="font-size-md-4 fw-700 text-uppercase mb-4 fw-bold footer-menu-title">
              SOCIALS
            </p>
            <Flex direction="row" justifyContent="start" cssClasses={["mt-3"]}>
              {socialIcons.map((icon, index) => (
                <Box key={index} cssClasses={["me-xxl-4", "me-3"]}>
                  <SocialIcon icon={icon.icon} />
                </Box>
              ))}
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box cssClasses={["footer-copyright"]}>
        <Flex
          direction={"row"}
          justifyContent="center"
          alignItems="center"
          cssClasses={["p-3"]}
        >
          <div className="mx-4">
            <Link to="/">Copyright NeoNomad 2022</Link>
          </div>
          <div className="mx-4">
            <Link
              to={{ pathname: "https://docs.neonomad.finance/" }}
              target="_blank"
            >
              About the Company
            </Link>
          </div>
          <div className="mx-4">
            <Link
              to={{
                pathname:
                  "https://docs.neonomad.finance/neonomad-documentation/tokenomics-fundamentals/neonomad-terms-of-use",
              }}
              target="_blank"
            >
              Terms and conditions
            </Link>
          </div>
          <div className="mx-4">
            <Link
              to={{ pathname: "https://app.neonomad.exchange" }}
              target="_blank"
            >
              dApp
            </Link>
          </div>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
