import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Landing.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_933q9ll";
    const templateId = "template_0p7pabp";
    const publicKey = "jlRWPB9iLLeknuhH0";

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_phone: phone,
          from_email: email,
          message: message,
        },
        publicKey
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
      });

    e.target.reset();
  };

  return (
    <>
      <div className="bg-black text-white">
        <h1 className="about-title text-white text-7xl text-center py-9 pt-7">
          Drop a Line<span className="dot-c">!</span>
        </h1>

      </div>
      <div className="flex flex-row h-screen bg-black text-white">
        <div className="w-3/5 p-8">
          <form onSubmit={handleSubmit} className="rounded-lg p-4 text-black">
            <div className="flex flex-row mb-4">
              <div className="w-1/2 mr-2 ">
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="w-full p-3 text-xl rounded-xl bg-transparent text-white border border-white"
                  required
                />
              </div>
              <div className="w-1/2 ml-2">
                <input
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone"
                  className="w-full p-3 text-xl rounded-xl bg-transparent text-white border border-white"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full p-3 text-xl rounded-xl bg-transparent text-white border border-white"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                className="w-full p-3 text-xl rounded-xl bg-transparent text-white border border-white h-32"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-gold text-white text-3xl p-2 rounded-xl w-full hover:bg-yellow-500 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="w-1/3 p-8">
          <p className="text-lg">
          Hey there, dear visitor! Whether you have a question, a brilliant
          idea, or just want to say 'hello,' I'm all ears. Feel free to drop me
          a line below, and let's get the conversation started!
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
