import Image from "next/image";
import avatar from "./avatar.jpeg";

const Avatar: React.FC = () => {
  return (
    <Image src={avatar} height={100} alt="Avatar" className="avatar absolute -bottom-12 rounded-full" />);
}

export default Avatar;