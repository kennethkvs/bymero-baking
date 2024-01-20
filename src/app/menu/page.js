import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default async function MenuPage() {
  const res = await import("../api/menu/route");
  const menuItems = await (await res.GET()).json();

  const displayMenu = menuItems.map((item) => (
    <div key={item._id}>
      {" "}
      <Menu item={item} />
    </div>
  ));
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="pb-30 px-40">
        <div className="my-4 flex flex-row gap-4">{displayMenu}</div>
      </main>
      <Footer className="absolute bottom-0 h-20 w-full" />
    </div>
  );
}
