export default function Footer() {
  return (
    <footer className="text-white p-4 text-center">
      <div className="flex flex-col md:flex-row gap-5 md:gap-20 mb-10">
        <div className="flex cursor-pointer">
          <img className="w-14" src="./facebook-icon.svg" alt="" />
          <span className="text-center mt-6 ml-1">Facebook</span>
        </div>
        <div className="flex mt-3 cursor-pointer">
          <img className="w-12" src="./instagram-icon.svg" alt="" />
          <span className="text-center mt-3 ml-2">Instagram</span>
        </div>
        <div className="flex mt-3 cursor-pointer">
          <img className="w-12" src="./github-icon.svg" alt="" />
          <span className="text-center mt-3 ml-2">Github</span>
        </div>
      </div>
      <p className="mb-10">© 2021 - All rights reserved</p>
      <p className="text-[#434343]/5">This website is empty like the universe :D</p>
    </footer>
  );
}