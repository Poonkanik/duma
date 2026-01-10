export default function About() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            About <span className="text-yellow-400">Duma Groups</span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
            The Adventure Never Ends — we believe every brand has a story,
            and our mission is to bring that story to life through design.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Who We Are
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Duma Groups is a creative branding and graphic design studio
              based in Coimbatore. We specialize in building strong visual
              identities that help businesses stand out in a competitive world.
            </p>

            <p className="text-gray-300 leading-relaxed">
              From professional logo design to complete branding solutions,
              we combine creativity, strategy, and passion to deliver designs
              that leave a lasting impression.
            </p>
          </div>

          {/* Right Content */}
          <div className="bg-gray-900 rounded-xl p-8 border border-white/10">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                Our Mission
              </h3>
              <p className="text-gray-300">
                To empower brands with meaningful designs that communicate
                clearly, inspire trust, and drive growth.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                Our Vision
              </h3>
              <p className="text-gray-300">
                To become a trusted creative partner for businesses by delivering
                innovative and impactful design solutions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                Our Values
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Creativity with purpose</li>
                <li>Commitment to quality</li>
                <li>Customer-focused approach</li>
                <li>Integrity and transparency</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Highlight */}
        <div className="mt-20 text-center">
          <p className="text-lg text-gray-300">
            At <span className="text-yellow-400 font-semibold">Duma Groups</span>,
            every project is a new adventure — and we’re excited to design yours.
          </p>
        </div>

      </div>
    </section>
  );
}
