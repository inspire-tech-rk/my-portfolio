export default function ServiceCard({ icon, title, desc, color }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6 sm:p-8 lg:p-10 text-center">
      <div
        className={`w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full flex items-center justify-center text-white text-3xl sm:text-4xl shadow-xl ${color}`}
      >
        {icon}
      </div>

      <h3 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-4">
        {title}
      </h3>

      <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
        {desc}
      </p>
    </div>
  );
}