import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaServer,
  FaDatabase,
  FaTools,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaCode />,
      title: "Frontend Development",
      desc: "Building responsive and user-friendly interfaces using React.js, Tailwind CSS and modern JavaScript.",
      color: "bg-blue-600",
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      desc: "Creating server-side APIs using Node.js, Express.js and MVC structure for clean backend development.",
      color: "bg-green-600",
    },
    {
      icon: <FaDatabase />,
      title: "MongoDB Integration",
      desc: "Connecting applications with MongoDB Atlas using Mongoose models, schemas and database operations.",
      color: "bg-emerald-600",
    },
    {
      icon: <FaMobileAlt />,
      title: "API Integration",
      desc: "Integrating frontend with backend APIs using Axios for contact forms, authentication and data handling.",
      color: "bg-yellow-500",
    },
    {
      icon: <FaPaintBrush />,
      title: "Responsive UI Design",
      desc: "Designing clean, mobile-friendly and professional layouts using Tailwind CSS components.",
      color: "bg-purple-600",
    },
    {
      icon: <FaTools />,
      title: "Project Enhancement",
      desc: "Improving project structure, fixing bugs, adding features and making applications more usable.",
      color: "bg-rose-500",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="text-blue-400 uppercase tracking-widest font-semibold">
          What I Can Do
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-4">
          My <span className="text-blue-500">Skills & Services</span>
        </h1>

        <p className="text-gray-400 text-base sm:text-lg mt-6 max-w-3xl mx-auto">
          As a fresher Full Stack Developer, I focus on building MERN stack
          projects, responsive frontend designs, backend APIs and database-driven
          web applications.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:-translate-y-3 hover:border-blue-500 transition duration-300"
            >
              <div
                className={`${service.color} w-20 h-20 rounded-full flex items-center justify-center text-4xl shadow-xl mx-auto`}
              >
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-center mt-8">
                {service.title}
              </h3>

              <p className="text-gray-400 text-center mt-4 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-20">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Looking for a Fresher Full Stack Developer?
          </h2>

          <p className="mt-4 text-blue-100">
            I am ready to apply my MERN stack skills, learn from real projects
            and contribute with dedication.
          </p>

          <a
            href="/contact"
            className="inline-block mt-8 bg-white text-black px-8 py-4 rounded-full font-bold"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}