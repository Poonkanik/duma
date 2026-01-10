import LogoGenerator from "../components/LogoGenerator";

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
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            We Create
            <span className="block mt-2 text-yellow-400">Stunning Designs</span>
          </h1>

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

          {/* Logo Generator Section */}
          <div className="mt-10 pt-12 border-t border-white/20">
            <h2 className="text-4xl font-bold mb-4 text-yellow-400">
              Free Logo Text Generator
            </h2>
            <p className="text-gray-300 mb-10">
              Customize your brand name with colors and font styles
            </p>

            <div className="flex justify-center">
              <LogoGenerator />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
