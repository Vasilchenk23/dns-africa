import Image from "next/image";

export default function ContactUs() {
    return (
      <section className="relative bg-white py-12">
        <h2 className="text-[24px] md:text-4xl font-bold text-gray-800 mb-[104px] mt-[128px] text-center">CONTACT</h2>
        <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12">
          <div className="relative w-full lg:w-1/2 flex justify-center">
            <div >
              <Image
                src="/img/images.png"
                width={504}
                height={604}
                alt="Typing on a laptop"
                className=""
              />
            </div>
          </div>
          <div className="w-[528px] h-[656px] bg-[#F2F9FF] p-8 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-[#1A1B4B] mb-4">HAVE ANY QUESTIONS FOR US?</h2>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full name"
                className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="How can we help you?"
                rows="4"
                className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button className="bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="relative bg-green-600 text-white text-center py-6 mt-12">
          <p className="text-lg font-medium">ENERGY FOR TODAY, SOLUTIONS FOR TOMORROW!</p>
          <button className="absolute bottom-6 right-6 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600">
            CONTACT US
          </button>
        </div>
      </section>
    );
  }
  