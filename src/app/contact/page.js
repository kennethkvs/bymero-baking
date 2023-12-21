"use client";

import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="pb-20">
        <div className="m-5 flex flex-col justify-center rounded-xl bg-slate-200 p-10">
          <h1 className="text-center text-4xl font-bold">
            Have a Burning Question?
          </h1>
          <p className="mb-4 text-center text-xl">Feel free to contact us!</p>
          <div className="flex justify-center">
            <p className="m-2 text-center text-sm">
              Email: bymerobaking@gmail.com
            </p>
            <p className="m-2 text-center text-sm ">Phone: 123-456-7890</p>
            <p className="m-2 text-center text-sm">Address: 1234 Main St.</p>
            <p className="m-2 text-center text-sm">Instagram: @bymero.baking</p>
          </div>
          <div className="flex flex-row content-center justify-center">
            <img src="/images/contact.png" className="w-1/3" />
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer className="absolute bottom-0 h-20 w-full" />
    </div>
  );
}
