export default function Contact() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            Contact <span className="text-yellow-400">Us</span>
          </h1>
          <p className="text-gray-400">
            Fill out the form below and we’ll get back to you soon.
          </p>
        </div>

        {/* Form */}
        <div className="bg-gray-900 p-8 rounded-xl border border-white/10">
          <form className="space-y-6">

            {/* Name */}
            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-3 rounded bg-black border border-white/10 text-white
                           focus:outline-none focus:border-yellow-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-3 rounded bg-black border border-white/10 text-white
                           focus:outline-none focus:border-yellow-400"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Tell us about your project"
                className="w-full p-3 rounded bg-black border border-white/10 text-white
                           focus:outline-none focus:border-yellow-400"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-yellow-400 text-black font-semibold
                         hover:bg-yellow-500 transition"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
