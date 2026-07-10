import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
   <Link
  href="/"
  className="flex items-center transition-transform duration-300 hover:-translate-y-0.5"
>
  <Image
    src={getImgPath("/images/logo/logo-white.svg")}
    alt="Vertex logo"
    width={120}
    height={28}
    quality={100}
    priority
    className="h-8 w-auto transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110 sm:h-9"
  />
</Link>
  );
};

export default Logo;
