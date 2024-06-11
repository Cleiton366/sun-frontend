export default function Header() {
  return (
<header className="flex items-center md:px-80 w-screen">
      <div>
        <img className="w-0 md:w-52 h-52" src="./Logo.svg" alt="logo image" />
      </div>
      <div className="w-screen">
        <div 
          style={{boxShadow: '0 0 14rem 14rem rgba(148,148,148,0.700)', marginTop: '-200px', marginLeft: '16rem'}} 
          className="w-1 h-1 bg-[#c3c3c3] opacity-100 rounded-full"
        />
        <div style={{marginTop: '200px'}} className="flex justify-center md:justify-end">
          <ul className="flex mt-5 w-[30rem] px-10 justify-between md:px-0 md:text-[18pt] sm:text-[12pt]">
            <li>
              <a className="hover:text-[#4F8BFF]" href="#">Home</a>
            </li>
            <li>
              <a className="hover:text-[#4F8BFF]" href="#">About</a>
            </li>
            <li>
              <a className="hover:text-[#4F8BFF]" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}