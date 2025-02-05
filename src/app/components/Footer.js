export default function Footer() {
    return (
      <footer className="bg-blue-50 py-8 px-6">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
          <div className="text-center lg:text-left">
            <img src="/images/logo.png" alt="DNS Africa Logo" className="w-32 mx-auto lg:mx-0" />
            <p className="mt-2 text-sm text-gray-700 font-medium">
              CONNECTING AFRICA, LIGHTING THE FUTURE
            </p>
          </div>
          <div className="text-center lg:text-left">
            <p className="text-blue-900 font-medium">Adress</p>
            <p className="text-blue-900 font-medium">Phone Number</p>
            <p className="text-blue-900 font-medium">Email</p>
          </div>
          <div className="text-center lg:text-left space-y-1">
            <p className="text-blue-900 font-medium">About Us</p>
            <p className="text-blue-900 font-medium">Our Services</p>
            <p className="text-blue-900 font-medium">Projects</p>
            <p className="text-blue-900 font-medium">Blog</p>
            <p className="text-blue-900 font-medium">News</p>
            <p className="text-blue-900 font-medium">Contact Us</p>
          </div>
        </div>
        <div className="border-t border-blue-900 my-6"></div>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <p className="text-sm text-gray-700">2024 Lorem Ipsum Dolor SiteIt. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
            <img src="/icons/youtube.svg" alt="YouTube" className="w-6 h-6" />
            <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
          </div>
        </div>
      </footer>
    );
  }
  