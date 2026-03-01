import LogoGenerator from "../components/LogoGenerator";
import '../pages/Home.css'
import profile1 from "../assets/profile2.png";
export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')",
      }}
    >
      {/* Overlay */}
      <div className="w-full bg-black/70">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center text-white">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full mb-6 bg-white/10 backdrop-blur-md border border-white/20">
            ✨ Crafting Visual Excellence
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-10">
            We Create
            <span className="block mt-2 text-yellow-400">Stunning Designs</span>
          </h1>

          {/* Profile Image + Text */}
          <div className="flex flex-col items-center mb-10">
            <img
          src={profile1}
          alt="Surya"
          className="w-[260px] h-[260px] rounded-full object-cover border-4 border-yellow-400 shadow-lg"
        />
                   <p className="mt-6 text-4xl md:text-6xl font-bold text-yellow-400">
          Hi I am Surya
        </p>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-semibold mb-6">
            The Adventure Never Ends
          </p>

          {/* Description */}
          <p className="text-base md:text-lg max-w-3xl mx-auto mb-16 opacity-90">
            At Duma Groups, every design is a new journey. From professional logos
            to stunning brand identities, wristbands to calendars — we craft
            visual stories that captivate, inspire, and leave lasting impressions.
            Your creative adventure starts here.
          </p>
          <LogoGenerator/>

        </div>
      </div>
    </div>
  );
}