import logoImage from '../assets/INOV_TECHNOLOGY_250x250.png';

type LogoProps = {
  className?: string;
};

export default function Logo({ className = '' }: LogoProps) {
  return (
    <img
      src={logoImage}
      alt="INOV TECHNOLOGY Logo"
      className={className}
      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      loading="eager"
    />
  );
}
