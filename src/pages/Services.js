export default function Services() {
  const services = [
    {
      title: "Branding Services",
      desc: "Build a strong and memorable brand identity that connects with your audience."
    },
    {
      title: "Professional Logo Design",
      desc: "Unique, creative, and meaningful logo designs tailored to your brand."
    },
    {
      title: "Envelope Covering",
      desc: "Custom-designed envelopes that add professionalism to your business."
    },
    {
      title: "Visiting Cards",
      desc: "Premium visiting card designs that leave a lasting first impression."
    },
    {
      title: "Name Boards",
      desc: "Eye-catching name boards designed to enhance your brand visibility."
    },
    {
      title: "Invitations",
      desc: "Beautiful invitation designs for weddings, events, and special occasions."
    },
    {
      title: "Greetings",
      desc: "Creative greeting designs that express emotions in a unique way."
    },
    {
      title: "Wristbands",
      desc: "Customized wristband designs for branding, events, and promotions."
    },
    {
      title: "Calendars",
      desc: "Creative and functional calendar designs for personal or business use."
    },
    {
      title: "Notices",
      desc: "Clear and professional notice designs for offices and institutions."
    },
    {
      title: "Bags",
      desc: "Custom bag designs that promote your brand wherever they go."
    },
    {
      title: "Keychains",
      desc: "Compact and creative keychain designs for branding and gifting."
    }
  ];

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our <span className="text-yellow-400">Services</span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
            We offer a wide range of creative design and branding services
            to help your business stand out and grow.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-xl border border-white/10
                         hover:border-yellow-400 hover:-translate-y-1
                         transition duration-300"
            >
              <h2 className="text-xl font-semibold mb-3">
                {service.title}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
