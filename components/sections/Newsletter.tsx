"use client";
import { useState, useRef, useEffect } from "react";
export default function Newsletter() {
  const [loading, setLoading] = useState(false); // State to track loading status
  const [error, setError] = useState<string | null>(null); // State to track error messages
  const [success, setSuccess] = useState(false); // State to track successful subscription
  const formRef = useRef<HTMLFormElement>(null); // Ref to the form element

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get the email value from the form
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    // Validate the email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Reset error and success states before making the request
    setError(null);
    setSuccess(false);
    // Make the POST request to subscribe the email
    try {
      setLoading(true); // Set loading state to true while the request is in progress
      setError(null); // Reset error state before making the request
      const response = await fetch(
        "http://localhost:5000/api/newsletter/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        },
      );
      // Check if the response is not OK and throw an error with the message from the response
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to subscribe");
      }
      setSuccess(true); // Set success state to true if the subscription is successful
    } catch (error) {
      setError((error as Error).message || "An error occurred");
    } finally {
      // Reset loading state after the request is completed
      setLoading(false);
    }
    formRef.current?.reset();
  };

  // Automatically clear the success message after 5 seconds
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <section className="bg-[#f9f9f9] py-12 px-6 dark:bg-gray-900 transition-colors">
      <div className="max-w-3xl mx-auto text-center bg-white rounded-xl shadow-lg p-8 dark:bg-gray-800 transition-colors">
        <h2 className="text-3xl font-bold text-[#3b5b81] mb-4 dark:text-white">
          Subscribe to our Newsletter
        </h2>
        <p className="text-gray-600 mb-6 dark:text-gray-300">
          Get the latest updates on new arrivals and special offers.
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full sm:flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b5b81] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          />
          {loading ? (
            <button
              type="button"
              className="bg-[#c07e2b] text-white px-6 py-3 rounded-lg font-semibold cursor-not-allowed"
              disabled
            >
              Subscribing...
            </button>
          ) : (
            <button
              type="submit"
              className="bg-[#c07e2b] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b06c26] transition duration-300 dark:bg-[#c07e2b] dark:hover:bg-[#b06c26]"
            >
              Subscribe
            </button>
          )}
        </form>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {loading && <p className="text-gray-500 mt-2">Loading...</p>}
        {success && (
          <p className="text-green-500 mt-2">Successfully subscribed!</p>
        )}
      </div>
    </section>
  );
}
