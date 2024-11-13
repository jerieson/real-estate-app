import Link from "next/link";

const Hero = () => (
  <div className="relative h-[480px] md:h-[882px] w-full">
    <div
      className="absolute inset-0 bg-black/50"
      style={{
        backgroundImage: "url('/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 h-full flex flex-col justify-center md:max-w-6xl">
        <h1 className="z-20 text-3xl text-center md:text-left md:max-w-sm md:text-5xl lg:text-6xl text-white font-bold mb-4">
          Beautiful homes made
          <br />
          for you
        </h1>
        <p className="z-20 text-sm text-center md:text-left md:max-w-[19rem] text-white/70">
          In oculis quidem se esse admonere interesse enim maxime placeat,
          facere possimus, omnis. Et quidem faciunt, ut labore et accurate
          disserendum et harum quidem exercitus quid.
        </p>
      </div>
    </div>
    <Link
      href="/properties"
      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 px-6 py-2 bg-white text-black font-bold hover:bg-white/90 md:w-[1096px] md:flex md:items-center md:px-7 md:text-xl md:h-[100px]"
    >
      See all listings{" "}
      <span className="text-[#FFAC12] text-sm ml-2 font-bold md:text-2xl">
        →
      </span>
    </Link>
    <div className="absolute bottom-0 h-[480px] md:h-[882px] w-full z-10 bg-gradient-to-t from-black/80 to-transparent" />
  </div>
);

export default Hero;
