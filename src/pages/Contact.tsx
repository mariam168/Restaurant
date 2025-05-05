import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-green-800 mb-2">📞 Contact Us</h1>
        <p className="text-gray-600 max-w-lg mx-auto">
          We'd love to hear from you. Reach out for orders, feedback, or just to say hi!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-yellow-500 text-xl mt-1" />
            <div>
              <h4 className="text-lg font-semibold text-green-700">Phone</h4>
              <p className="text-gray-600">+1 (123) 456-7890</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaEnvelope className="text-yellow-500 text-xl mt-1" />
            <div>
              <h4 className="text-lg font-semibold text-green-700">Email</h4>
              <p className="text-gray-600">support@yourrestaurant.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-yellow-500 text-xl mt-1" />
            <div>
              <h4 className="text-lg font-semibold text-green-700">Location</h4>
              <p className="text-gray-600">123 Food Street, Flavor Town</p>
            </div>
          </div>
        </div>
        <form className="bg-green-50 p-6 rounded-xl shadow space-y-4">
          <div>
            <label className="block text-sm font-semibold text-green-800 mb-1">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded border border-green-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-green-800 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded border border-green-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-green-800 mb-1">Message</label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 rounded border border-green-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Write your message..."
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-2 rounded-full transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
