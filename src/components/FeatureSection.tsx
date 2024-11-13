import Button from "./Button";
import ArrowWhite from "../app/ArrowWhite.svg";

const FeatureSection = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="bg-gradient-to-r from-black to-[#271A00] text-white py-16 text-center">
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center gap-8">
        <div className="h-1 w-16 bg-gradient-to-r from-[#FFAC12] to-black md:w-[169px]" />
        <div className="flex-1">
          <h2 className="text-2xl md:text-center md:justify-center font-bold lg:text-5xl">
            {title}
          </h2>
          <p className="text-xs text-white/70 md:text-xl md:text-center md:max-w-[428px] py-3">
            {description}
          </p>
          <div className="flex justify-center">
            <Button
              label="Learn more"
              variant="primary"
              Icon={ArrowWhite} // Use the imported SVG as the Icon prop
              onClick={() => console.log("Next button clicked")}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FeatureSection;
