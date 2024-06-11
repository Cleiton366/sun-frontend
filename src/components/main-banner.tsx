
export default function MainBanner() {
  return (
    <div
      style={{ backgroundSize: "50%" }}
      className="w-full h-[140rem]
      bg-parallax bg-fixed bg-no-repeat bg-center"
    >
      <div className="md:ml-52 ml-20 mb-[60rem]">
        <h1 className="text-white font-bold md:text-[30pt] mt-24">YOU CAN DO
          <span className="text-[#4F8BFF] font-sans"> ALL </span>
          THIS</h1>
        <p className="w-80 mt-5 md:text-[16pt]">
          Discover the Cosmos: Unleash Your Passion for Astronomy and Explore the Wonders of the Universe!
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-28">
        <div 
          className="flex flex-col items-center py-10 bg-black/60
            h-[34rem] w-[27rem] border rounded-lg border-[#FFDF8E]"
          >
            <h1 className="font-bold text-[#FABC1E] mt-10 text-[18pt]">Celestial Explorers</h1>
            <p className="text-center w-60 text-[14pt] mt-10">Unveiling the Universe for All. Discover the captivating wonders of astronomy, from distant galaxies to enigmatic black holes.</p>
            <img className="mt-20" src="./constellation 1.svg" alt="" />
        </div>
        <div 
          className="flex flex-col items-center py-10 bg-black/60
            h-[34rem] w-[27rem] border rounded-lg border-[#88B0FF]"
          >
            <h1 className="font-bold text-[#88B0FF] mt-10 text-[18pt]">Connect & Explore</h1>
            <p className="text-center w-60 text-[14pt] mt-10">Join a vibrant community of like-minded enthusiasts and embark on an extraordinary journey of exploration. Unleash your curiosity and unlock the mysteries of the cosmos.</p>
            <img className="mt-12 h-[4.5rem]" src="./astronomy 1.svg" alt="" />
        </div>
      </div>
    </div>
  );
}