export default function OrderCard({ item, handleAddToCart }) {
  return (
    <div className="flex grow flex-col flex-wrap items-center justify-center rounded-md bg-neutral-200">
      <img src={item.img} className="rounded-t-md" />
      <div className="mt-4 text-2xl font-bold text-accent-100">{item.name}</div>
      <div className="mt-0 text-center text-accent-200">{item.spelling}</div>
      <div className="mt-0 text-center text-accent-200">${item.price}</div>
      <button
        className="mt-4 w-full rounded-b-md bg-brand-200 py-2 text-center text-brand-100 hover:bg-brand-300"
        onClick={() =>
          handleAddToCart({
            item: item,
            qty: 1,
          })
        }
      >
        Add to Cart
      </button>
    </div>
  );
}
