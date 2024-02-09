import Link from "next/link";
import { Inter } from "next/font/google";

interface IOurWorkCard {
  img1: string;
  img2: string;
  link: string;
  title: string;
  description: string;
}
const OurWorkCard: React.FC<IOurWorkCard> = ({
  img1,
  img2,
  link,
  title,
  description,
}) => {
  return (
    <Link
      href={link}
      className="   hover:shadow-2xl border rounded-lg shadow-lg pb-4 w-full text-[#263659]"
    >
      <div className="flex flex-col  items-center bg-[#ECF0F5]">
        <img
          src={img1}
          alt="img"
          width={200}
          height={200}
          className="md:h-40 md:w-40 w-20 h-20  "
        />
        <img
          src={img2}
          alt="img"
          width={200}
          height={200}
          className="w-full "
        />
      </div>
      <div className="mt-4  ps-4">
        <h3 className=" font-bold text-xl mt-4 ">{title}</h3>
        <p className="font-semibold mt-1">{description}</p>
      </div>
    </Link>
  );
};

export default OurWorkCard;
