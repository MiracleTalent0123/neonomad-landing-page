import Image from "./Image";

export interface SocialIconProps {
  icon: any;
  link?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Image styles={{width: '40px'}} src={icon} />
    </a>
  );
};

export default SocialIcon;
