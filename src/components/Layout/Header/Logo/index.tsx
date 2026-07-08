import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center gap-3">
      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden ">
        <Image
          src={getImgPath("/images/brand/vertex-mark.png")}
          alt="Vertex logo icon"
          width={44}
          height={44}
          quality={100}
          className="h-full w-full object-cover"
          priority
        />
      </span>
      <span className="leading-none">
        <span className="block text-lg font-black tracking-normal text-midnight_text dark:text-white">
          Vertex
        </span>
        <span className="mt-1 hidden text-[10px] font-bold uppercase tracking-[0.16em] text-secondary dark:text-white/55 sm:block">
          Digital Solutions Agency
        </span>
      </span>
    </Link>
  );
};

export default Logo;
