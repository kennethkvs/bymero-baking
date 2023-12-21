import React, { useState } from "react";

export default function ContactForm() {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("ready");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({
        fName: fname,
        lName: lname,
        email: email,
        msg: message,
      }),
    });

    setStatus("sent");
  }

  const resetForm = () => {
    setFName("");
    setLName("");
    setEmail("");
    setMessage("");
    setStatus("ready");
  };

  return status == "sent" ? (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-bold text-3xl">Thank you for contacting us!</h1>
      <p>We will get back to you as soon as we can.</p>
      <button
        onClick={() => resetForm()}
        className="my-2 rounded-3xl border-[1px] border-gray-500 bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
      >
        Send Another Message
      </button>
    </div>
  ) : (
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
          className={`my-2 rounded-3xl border-[1px] border-gray-500 px-4 py-2 text-white ${
            status == "sending"
              ? "bg-slate-300"
              : "bg-blue-500 hover:bg-blue-700"
          }`}
          type="submit"
        >
          {status == "sending" ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
