import Image from "next/image";

export default function ContactUs() {
    return (
      <section className="relative bg-white w-full min-w-[1000px]">
        <h2 className="text-[24px] md:text-4xl font-bold text-gray-800 mb-[104px] mt-[128px] text-center">CONTACT</h2>
        <div className="container mx-auto pb-[64px] pl-[100px] pr-[100px] flex flex-col lg:flex-row items-center gap-12">
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
          <div className="w-[528px] h-[656px] bg-[#F2F9FF] p-8 rounded-[50px] shadow-lg border-[1px] border-black">
            <h2 className="text-xl text-left ml-[30px] w-[400px] font-bold text-[#1A1B4B] mb-[30px] mt-[30px]">HAVE ANY QUESTIONS FOR US?</h2>
            <form className="flex flex-col gap-4 w-[400px] ml-[30px]">
              <input
                type="text"
                placeholder="Full name"
                className="p-3 rounded-[24px] border border-gray-300 outline-none bg-transparent focus:outline-none focus:bg-transparent"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 rounded-[24px] border border-gray-300  outline-none bg-transparent focus:outline-none focus:bg-transparent mt-[30px]"
              />
              <textarea
                placeholder="How can we help you?"
                rows="4"
                className="p-3 rounded-[24px] border border-gray-300  outline-none bg-transparent focus:outline-none focus:bg-transparent mt-[20px]"
              ></textarea>
              <div className="flex items-center justify-center mt-[100px]">
                <button className="bg-[#1A1B4B] h-[48px] w-[400px] text-white py-2 px-4 rounded-[50px] hover:bg-blue-800 ">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="relative bg-[#5CB338] text-white text-center py-6 mt-12 h-[244px] flex items-center justify-left ">
          <p className="text-[32px] pl-[80px] font-medium">ENERGY FOR TODAY, SOLUTIONS FOR TOMORROW!</p>
          <button className="absolute top-1/2 right-[80px] transform -translate-y-1/2 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600">
            CONTACT US
          </button>
        </div>
      </section>
    );
  }
  