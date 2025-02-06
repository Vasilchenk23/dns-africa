import Image from "next/image";

export default function Footer() {
    return (
      <footer className="bg-[#F2F9FF]  pl-[80px] pr-[80px] pt-[64px]">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 pb-[24px]">
          <div className="text-center lg:text-left">
            <Image 
            src="./img/logo.svg" 
            alt="DNS Africa Logo" 
            className="w-32 mx-auto lg:mx-0"
            width={100}
            height={100} />
            <p className="mt-2 text-sm text-gray-700 font-medium">
              CONNECTING AFRICA, LIGHTING THE FUTURE
            </p>
          </div>
          <div className="text-center lg:text-left">
            <br/>
            <p className="text-blue-900 font-medium">Adress</p>
            <br/>
            <p className="text-blue-900 font-medium">Phone Number</p>
            <br/>
            <p className="text-blue-900 font-medium">Email</p>
            <br/>
          </div>
          <div className="text-center lg:text-left">
          <br/>
            <div className="flex gap-x-8">
              <p className="text-blue-900 font-medium">About Us</p>
              <p className="text-blue-900 font-medium pl-[42px]">Our Services</p>
            </div>
            <br/>
            <div className="flex gap-x-8">
              <p className="text-blue-900 font-medium">Projects</p>
              <p className="text-blue-900 font-medium pl-[42px]">Blog</p>
              <p className="text-blue-900 font-medium pl-[42px]">News</p>
            </div>
             <br/>
            <p className="text-blue-900 font-medium">Contact Us</p>
          </div>
        </div>
        <div className="border-t border-blue-900 my-6"></div>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <p className="text-sm text-gray-700">2024 Lorem Ipsum Dolor SiteIt. All Rights Reserved.</p>
          <div className="flex space-x-10 mt-4 lg:mt-0">
            <img src="/img/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
            <img src="/img/icons/youtube.svg" alt="YouTube" className="w-6 h-6" />
            <img src="/img/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
          </div>
        </div>
      </footer>
    );
  }
  