export default function Newsletter() {
  return (
    <section className="bg-[#f9f9f9] py-12 px-6">
      <div className="max-w-3xl mx-auto text-center bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-[#3b5b81] mb-4">
          Subscribe to our Newsletter
        </h2>
        <p className="text-gray-600 mb-6">
          Get the latest updates on new arrivals and special offers.
        </p>

        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b5b81]"
          />
          <button
            type="submit"
            className="bg-[#c07e2b] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b06c26] transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
