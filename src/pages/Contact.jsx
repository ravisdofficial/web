import React from "react";
import { useForm } from "react-hook-form";
import contactBackground from "../assets/home/contactBackground.webp";
import maskShape from "../assets/home/Maskgroup.png";
import vectorShape from "../assets/home/Vector_form.png";

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    reset();
  };

  return (
    <section
      id="contact"
      className="flex flex-col md:flex-row w-full min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${contactBackground})`,
      }}
    >
      <div className="flex justify-center items-center md:w-1/2 bg-black/60 text-white px-6 md:px-10 py-16">
        <div className="w-full max-w-[560px] flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-8">
          <h2 className="text-[70px] leading-[100%] tracking-[0px] align-middle uppercase font-normal font-maharlika">
            REACH OUT TO VIBEZ ESTATES
          </h2>

          <p className="text-base md:text-lg leading-relaxed opacity-90 font-poppins font-normal text-[20px]">
            Connect with us to explore luxurious living and investment
            opportunities that redefine comfort and profitability.
          </p>
          <div className="bg-[#6b4b3e] px-10 py-10 rounded-lg shadow-lg w-full max-w-[560px] mx-auto mt-8">
            <div className="flex justify-center">
              <h3 className="font-semibold text-2xl mb-8 text-center md:text-left tracking-wide">
                Contact details
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-x-12 text-sm md:text-base text-white">
              <div className="space-y-6">
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <p className="opacity-90">info@vibezclub.com</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">Phone number</p>
                  <p className="opacity-90">+91 8152 88 33 88</p>
                </div>
              </div>

              <div>
                <p className="font-semibold mb-1">Address</p>
                <p className="opacity-90 leading-relaxed">
                  #200, 4th floor, 10th cross, CBI Main Road,<br />
                  Ganganagar, Bangalore – 560032.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div
        className="relative flex justify-center items-start md:w-1/2 text-gray-800 overflow-hidden bg-[#f8f5f2] pt-20 pb-16"
        style={{
          backgroundImage: `url(${maskShape}), url(${vectorShape})`,
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundPosition: "top left, bottom right",
          backgroundSize: "250px, 480px",
        }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative grid grid-cols-1 gap-6 w-full max-w-[460px] p-10 z-10"
        >
          <h3 className="text-2xl font-semibold mb-2">Get in touch</h3>
          <p className="text-sm text-gray-600 mb-4">
            Please fill out the form below and we’ll get back to you.
          </p>

          {[
            { name: "name", label: "Name", type: "text" },
            { name: "email", label: "Email id", type: "email" },
            { name: "phone", label: "Phone number", type: "tel" },
            { name: "project", label: "Project name", type: "text" },
          ].map((field) => (
            <div key={field.name}>
              <input
                type={field.type}
                placeholder={`${field.label}*`}
                className="w-full border-b border-gray-400 focus:border-[#6b4b3e] outline-none py-3 bg-transparent placeholder:text-gray-700"
                {...register(field.name, { required: `${field.label} is required` })}
              />
              {errors[field.name] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[field.name].message}
                </p>
              )}
            </div>
          ))}

          <div>
            <textarea
              rows="3"
              placeholder="Message*"
              className="w-full border-b border-gray-400 focus:border-[#6b4b3e] outline-none py-3 bg-transparent resize-none placeholder:text-gray-700"
              {...register("message", { required: "Message is required" })}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          <div className="flex justify-start mt-4">
            <button
              type="submit"
              className="border border-[#6b4b3e] text-[#6b4b3e] py-2 px-10 hover:bg-[#6b4b3e] hover:text-white transition"
            >
              SEND
            </button>
          </div>
        </form>
      </div>

    </section>
  );
}
