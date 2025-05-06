
import PaymentMethods from "../components/checkout/PaymentMethodSelector";
import CartSummary from "../components/checkout/OrderSummary";

export default function CheckoutPage() {
  return (
    <main className="min-h-screen px-4 mt-20 sm:px-6 py-16 bg-gradient-to-br from-white to-green-50 dark:from-neutral-900 dark:to-neutral-800 transition-colors duration-300">
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

      <section className="lg:col-span-7 bg-white dark:bg-neutral-900 rounded-3xl shadow-xl border border-gray-200 dark:border-neutral-700 p-8 transition-all">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-green-700 dark:text-yellow-400 mb-6">
          Choose Payment Method
        </h2>
        <PaymentMethods />
      </section>
      <aside className="lg:col-span-5 bg-white dark:bg-neutral-900 rounded-3xl shadow-xl border border-gray-200 dark:border-neutral-700 p-8 sticky top-20 transition-all">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-green-700 dark:text-yellow-400 mb-6">
          Order Details
        </h2>
        <CartSummary />
      </aside>

    </div>
  </main>
  );
}
