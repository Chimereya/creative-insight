

export default function GigCard({ gig, onBuy, showCTA = true }) {
  return (
    <div className="bg-white rounded-xl border shadow-sm hover:shadow-md transition p-4 w-72">
      
      {/* Gig Category */}
      <span className="text-xs uppercase tracking-wide text-blue-600 font-semibold">
        {gig.category}
      </span>

      {/* Gig Title */}
      <h3 className="font-semibold text-lg mt-2 line-clamp-2">
        {gig.title}
      </h3>

      {/* Short description preview */}
      <p className="text-sm text-gray-600 mt-2 line-clamp-3">
        {gig.description}
      </p>

      {/* Divider */}
      <div className="border-t my-4" />

      {/* Pricing & Delivery */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xs text-gray-500">Starting at</p>
          <p className="text-lg font-bold text-green-600">
            ${gig.price}
          </p>
        </div>

        <div className="text-right">
          <p className="text-xs text-gray-500">Delivery</p>
          <p className="text-sm font-medium">
            {gig.delivery_days} day{gig.delivery_days > 1 && 's'}
          </p>
        </div>
      </div>

      {/* Call To Action */}
      {showCTA && (
        <button
          onClick={() => onBuy?.(gig.id)}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Continue
        </button>
      )}
    </div>
  );
}
