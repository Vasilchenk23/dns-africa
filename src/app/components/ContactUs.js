"use client"
import { useState } from "react";
import Image from "next/image";

export default function ContactUs() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, email, question }),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess("Your message has been sent successfully!");
        setFullName("");
        setEmail("");
        setQuestion("");
      } else {
        setError("Failed to send the message. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative bg-white w-full">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-16 mt-32 text-center">
        CONTACT
      </h2>

      <div className="container mx-auto pb-16 px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Section with Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <Image
            src="/img/images.png"
            width={504}
            height={604}
            alt="Typing on a laptop"
            className="max-w-full h-auto"
          />
        </div>

        {/* Right Section with Form */}
        <div className="w-full max-w-md md:max-w-lg bg-[#F2F9FF] p-6 md:p-8 rounded-3xl shadow-lg border border-black">
          <h2 className="text-lg md:text-xl font-bold text-[#1A1B4B] mb-6 text-center md:text-left">
            HAVE ANY QUESTIONS FOR US?
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="p-3 rounded-xl border border-gray-300 bg-transparent focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 rounded-xl border border-gray-300 bg-transparent focus:outline-none"
              required
            />
            <textarea
              placeholder="How can we help you?"
              rows="4"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="p-3 rounded-xl border border-gray-300 bg-transparent focus:outline-none"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-[#1A1B4B] h-12 w-full text-white py-2 px-4 rounded-xl hover:bg-blue-800"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>

          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
          {success && <p className="text-green-500 mt-4 text-center">{success}</p>}
        </div>
      </div>

      <div className="bg-[#5CB338] text-white text-center py-6 mt-12 flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
        <p className="text-xl md:text-2xl font-medium text-center md:text-left">
          ENERGY FOR TODAY, SOLUTIONS FOR TOMORROW!
        </p>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 mt-4 md:mt-0">
          CONTACT US
        </button>
      </div>
    </section>
  );
}
