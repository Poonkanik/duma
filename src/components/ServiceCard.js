export default function ServiceCard({ title, image, onView }) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 hover:scale-105 transition transform duration-300 fade-in">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>

      <button
        onClick={onView}
        className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition"
      >
        View Sample
      </button>

      {image && (
        <img
          src={image}
          alt={title}
          className="mt-4 rounded-lg"
        />
      )}
    </div>
  );
}
