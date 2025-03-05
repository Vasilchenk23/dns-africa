"use client";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext"; 
import Image from "next/image";

const translations = {
  EN: {
    title: "CONTACT",
    formTitle: "HAVE ANY QUESTIONS FOR US?",
    namePlaceholder: "Full Name",
    emailPlaceholder: "Email",
    questionPlaceholder: "How can we help you?",
    submitButton: "Submit",
    sendingButton: "Sending...",
    errorMessage: "An error occurred. Please try again.",
    successMessage: "Your message has been sent successfully!",
    footerText: "ENERGY FOR TODAY, SOLUTIONS FOR TOMORROW!",
  },
  FR: {
    title: "CONTACTEZ-NOUS",
    formTitle: "VOUS AVEZ DES QUESTIONS POUR NOUS ?",
    namePlaceholder: "Nom Complet",
    emailPlaceholder: "E-mail",
    questionPlaceholder: "Comment pouvons-nous vous aider ?",
    submitButton: "Envoyer",
    sendingButton: "Envoi en cours...",
    errorMessage: "Une erreur s'est produite. Veuillez réessayer.",
    successMessage: "Votre message a été envoyé avec succès !",
    footerText: "L'ÉNERGIE D'AUJOURD'HUI, LES SOLUTIONS DE DEMAIN !",
  },
};

export default function ContactUs() {
  const { language } = useLanguage(); 
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
        setSuccess(translations[language].successMessage);
        setFullName("");
        setEmail("");
        setQuestion("");
      } else {
        setError(translations[language].errorMessage);
      }
    } catch (err) {
      setError(translations[language].errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative bg-white w-full">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-16 mt-32 text-center" id="contact">
        {translations[language].title}
      </h2>

      <div className="container mx-auto pb-16 px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12">
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <Image
            src="/img/images.png"
            width={504}
            height={604}
            alt="Typing on a laptop"
            className="max-w-full h-auto"
          />
        </div>
        <div className="w-full max-w-md md:max-w-lg bg-[#F2F9FF] p-6 md:p-8 rounded-3xl shadow-lg border border-black">
          <h2 className="text-lg md:text-xl font-bold text-[#1A1B4B] mb-6 text-center md:text-left">
            {translations[language].formTitle}
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder={translations[language].namePlaceholder}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="p-3 rounded-xl border border-gray-300 bg-transparent focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder={translations[language].emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 rounded-xl border border-gray-300 bg-transparent focus:outline-none"
              required
            />
            <textarea
              placeholder={translations[language].questionPlaceholder}
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
              {loading ? translations[language].sendingButton : translations[language].submitButton}
            </button>
          </form>

          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
          {success && <p className="text-green-500 mt-4 text-center">{success}</p>}
        </div>
      </div>

      <div className="relative w-full h-[400px] flex items-center justify-between p-8">
        <img className="w-full h-full object-cover absolute top-0 left-0 z-0" src="/img/green.png" alt="Green Energy" />
        
        <div className="relative z-10 text-white flex flex-col md:flex-row items-center justify-between w-full">
          <p className="text-xl md:text-4xl font-medium mt-[100px] text-center md:text-left max-w-[900px]">
            {translations[language].footerText}
          </p>
          <button className="bg-orange-500 text-white mt-[100px] px-6 py-3 rounded-full hover:bg-orange-600">
            {translations[language].title}
          </button>
        </div>
      </div>
    </section>
  );
}
