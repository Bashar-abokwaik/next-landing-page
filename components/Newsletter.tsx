

function Newsletter() {
    return (
        <div className="bg-white py-8 px-4 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
            <p className="text-gray-600 mb-6">Get the latest updates on new arrivals and special offers.</p>
            <form className="flex flex-col sm:flex-row items-center">
                <input type="email" placeholder="Enter your email" className="w-full sm:w-auto flex-1 px-4 py-2 border border-gray-300 rounded mb-4 sm:mb-0 sm:mr-4 focus:outline-none focus:ring-2 focus:ring-gray-400" />
                <button type="submit" className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition duration-300">Subscribe</button>
            </form>
        </div>
    );
}

export default Newsletter;