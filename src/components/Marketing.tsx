import Image from "next/image";
import Button from "./Button";
import ArrowYellow from "../app/ArrowYellow.svg";

const Marketing = ({
  isReverse,
  imageUrl,
  title,
  description,
}: {
  isReverse: boolean;
  imageUrl: string;
  title: string;
  description: string;
  url: string;
}) => (
  <div
    className={`relative flex mx-auto max-w-[1440px] md:gap-0 ${
      isReverse
        ? "flex-col-reverse md:flex-row md:items-center"
        : "flex-col md:flex-row-reverse"
    } py-12 gap-10`}
  >
    <div className="flex flex-col justify-center w-3/4 gap-5 px-6">
      <div className="h-1 w-16 bg-gradient-to-r from-[#FFAC12] to-black md:w-[169px]" />
      <h2 className="text-2xl font-bold lg:text-5xl">{title}</h2>
      <p className="md:text-xl md:max-w-[428px]">{description}</p>
      <Button
        label="Learn more"
        variant="secondary"
        Icon={ArrowYellow} // Use the imported SVG as the Icon prop
        onClick={() => console.log("Next button clicked")}
      />
    </div>
    <Image width={704} height={657} src={imageUrl} alt="marketing" />
  </div>
);

export default Marketing;
