import { useState } from "react";

const bgImages = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
];

const colors = ["text-yellow-400", "text-white", "text-green-400"];

export default function LogoGenerator() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [bg, setBg] = useState(null);
  const [color, setColor] = useState("");

  const generateLogo = () => {
    setBg(bgImages[Math.floor(Math.random() * bgImages.length)]);
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  return (
    <div className="max-w-md mx-auto bg-gray-900 p-6 rounded-xl">
      <input
        className="w-full mb-3 p-2 text-black rounded"
        placeholder="Brand Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="w-full mb-4 p-2 text-black rounded"
        placeholder="Subtitle"
        onChange={(e) => setTagline(e.target.value)}
      />

      <button
        onClick={generateLogo}
        className="w-full bg-yellow-400 text-black py-2 font-bold rounded pulse"
      >
        Generate Logo
      </button>

      {bg && (
        <div
          className="mt-6 h-40 flex flex-col justify-center items-center rounded-lg bg-cover bg-center fade-in"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <h2 className={`text-3xl font-bold ${color}`}>{name}</h2>
          <p className="text-sm text-white">{tagline}</p>
        </div>
      )}
    </div>
  );
}
