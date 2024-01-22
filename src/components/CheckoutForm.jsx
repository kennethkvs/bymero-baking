import { useState } from "react";

export default function CheckoutForm({ handleSubmit }) {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="text-bold text-3xl">Contact Information</h1>
      <form onSubmit={handleSubmit} className="flex w-full content-center">
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

          <input
            className="my-2 rounded-3xl border-[1px] border-gray-500 px-4 py-2"
            placeholder="Phone Number"
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            className="my-2 rounded-3xl border-[1px] border-gray-500 px-4 py-2"
            placeholder="Address"
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />

          <textarea
            className="my-2 rounded-3xl border-[1px] border-gray-500 px-4 py-2"
            placeholder="Any additional information?"
            rows={4}
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
      </form>
    </div>
  );
}

// status == "sent" ? (
//     <div className="flex flex-col items-center justify-center">
//       <h1 className="text-bold text-3xl">Thank you for supporting us!</h1>
//       <p>Your order means a lot!</p>
//       <Link href="/order">
//         <button
//           onClick={() => resetForm()}
//           className="my-2 rounded-3xl border-[1px] border-gray-500 bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
//         >
//           Order More Goodies
//         </button>
//       </Link>
//     </div>
//   ) :
