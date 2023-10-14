import React, { useState } from "react";

export default function ContactForm() {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    // You can add your own logic here to send the form data to a server or API
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-1/2 content-center">
      <div className="flex w-full flex-col justify-center">
        <input
          className="my-2 rounded-3xl border-[1px] border-gray-500 px-4 py-2"
          placeholder="First Name"
          type="text"
          id="fname"
          value={fname}
          onChange={(e) => setFName(e.target.value)}
          required
        />

        <input
          className="my-2 rounded-3xl border-[1px] border-gray-500 px-4 py-2"
          placeholder="Last Name"
          type="text"
          id="lname"
          value={lname}
          onChange={(e) => setLName(e.target.value)}
          required
        />

        <input
          className="my-2 rounded-3xl border-[1px] border-gray-500 px-4 py-2"
          placeholder="Email"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <textarea
          className="my-2 rounded-3xl border-[1px] border-gray-500 px-4 py-2"
          placeholder="What's on your mind?"
          rows={4}
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button
          className="my-2 rounded-3xl border-[1px] border-gray-500 bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
          type="submit"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
