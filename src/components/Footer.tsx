import Image from "next/image";
import Button from "./Button";
import ArrowWhite from "../app/ArrowWhite.svg";

const Footer = () => (
  <footer className="bg-black text-white p-4 md:p-16">
    <div className="container mx-auto md:px-4 md:space-y-5">
      <div className="space-y-5 md:flex md:justify-between items-center mb-8">
        <h2 className="md:text-4xl text-2xl font-bold">
          Make your dreams a{" "}
          <span className="bg-gradient-to-r from-[#FFAC12] to-[#C87224] inline-block text-transparent bg-clip-text">
            reality
          </span>
        </h2>
        <Button
          label="Work with us"
          variant="primary"
          Icon={ArrowWhite} // Use the imported SVG as the Icon prop
          onClick={() => console.log("Next button clicked")}
        />
      </div>
      <div className="hidden bg-white/10 md:block md:h-[1px] md:w-full" />
      <div className="grid grid-cols-1 gap-8 md:flex md:justify-between md:items-center ">
        <div className="space-y-5">
          <Image
            className="mx-auto md:m-0"
            width={128}
            height={34}
            src="./logo.svg"
            alt="logo"
          />
          <div className="flex items-center justify-center mb-4">
            <div className="flex gap-8">
              <Image
                className="mx-auto"
                width={10}
                height={10}
                src="/001-facebook.svg"
                alt="logo"
              />
              <Image
                className="mx-auto"
                width={20}
                height={20}
                src="/003-twitter.svg"
                alt="logo"
              />
              <Image
                className="mx-auto"
                width={20}
                height={20}
                src="/004-instagram.svg"
                alt="logo"
              />
            </div>
          </div>
        </div>
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex">
            <ul className="space-y-2">
              <h3 className="font-bold mb-4">Column Heading</h3>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Link goes here
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Link goes here
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Link goes here
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
