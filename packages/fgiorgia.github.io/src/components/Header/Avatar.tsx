import Image from "next/image";
import avatar from "./images/profile_square_zoomed.jpg";

const Avatar: React.FC = () => {
  return (
    <Image
      priority={true}
      src={avatar}
      height={100}
      alt="Avatar"
      className="avatar absolute -bottom-12 rounded-full z-10"
      style={{ filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5))' }}
    />);
}

export default Avatar;