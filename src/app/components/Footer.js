import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#F2F9FF] w-full border px-6 md:px-12 pt-16">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 pb-6">
        <div className="text-center lg:text-left">
          <Image 
            src="/img/logo.svg" 
            alt="DNS Africa Logo" 
            width={100}
            height={100} 
            className="w-32 mx-auto lg:mx-0"
          />
          <p className="mt-2 text-sm text-gray-700 font-medium">
            CONNECTING AFRICA, LIGHTING THE FUTURE
          </p>
        </div>

        <div className="text-center lg:text-left space-y-2">
          <p className="text-blue-900 font-medium">Address</p>
          <p className="text-blue-900 font-medium">Phone Number</p>
          <p className="text-blue-900 font-medium">Email</p>
        </div>

        <div className="text-center lg:text-left space-y-2">
          <div className="flex flex-wrap justify-center lg:justify-start gap-6">
            <p className="text-blue-900 font-medium">About Us</p>
            <p className="text-blue-900 font-medium">Our Services</p>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start gap-6">
            <p className="text-blue-900 font-medium">Projects</p>
            <p className="text-blue-900 font-medium">Blog</p>
            <p className="text-blue-900 font-medium">News</p>
          </div>
          <p className="text-blue-900 font-medium">Contact Us</p>
        </div>
      </div>

      <div className="border-t border-blue-900 my-6"></div>

      <div className="flex flex-col lg:flex-row justify-between items-center">
        <p className="text-sm text-gray-700">2024 Lorem Ipsum Dolor SiteIt. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4 lg:mt-0">
          <Image src="/img/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
          <Image src="/img/icons/youtube.svg" alt="YouTube" width={24} height={24} />
          <Image src="/img/icons/instagram.svg" alt="Instagram" width={24} height={24} />
        </div>
      </div>
    </footer>
  );
}
