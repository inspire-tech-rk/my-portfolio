import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "NeoAI - Socializing Reinvented with AI",
      desc: "A full-stack social media web application built using MERN stack. It includes authentication, posts, reels, stories, likes, comments, profile, messaging, notifications and media upload features.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Cloudinary"],
      live: "https://neo-ai-socializing-reinvented-with.vercel.app/",
      github: "https://github.com/inspire-tech-rk?tab=repositories",
      images: [
        "/projects/neoai-home.png",
        "/projects/neoai-profile.png",
        "/projects/neoai-chat.png",
        "/projects/neoai-reels.png",
      ],
      features: [
        "Authentication system",
        "Posts, reels and stories",
        "Like and comment features",
        "Messaging system",
        "Profile and media upload",
      ],
    },
    {
      title: "Weather Widget Web Application",
      desc: "A responsive weather dashboard built using React.js and OpenWeather API. It shows real-time weather, forecast, geolocation weather, search history, dark/light mode and temperature conversion.",
      tech: ["React.js", "OpenWeather API", "Bootstrap", "JavaScript"],
      live: "#",
      github: "https://github.com/inspire-tech-rk?tab=repositories",
      images: [
        "/projects/weather-home.png",
        "/projects/weather-forecast.png",
        "/projects/weather-dark.png",
        "/projects/weather-map.png",
      ],
      features: [
        "Real-time weather data",
        "5-day forecast",
        "Geolocation weather",
        "Dark and light mode",
        "Temperature unit conversion",
      ],
    },
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center">
          <p className="text-blue-400 uppercase tracking-widest font-semibold">
            My Work
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-4">
            Featured <span className="text-blue-500">Projects</span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg mt-6 max-w-3xl mx-auto">
            Here are my practical projects where I used frontend, backend,
            database and API integration skills.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 mt-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-xl hover:border-blue-500 transition duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-5 sm:p-6">
                  <div className="grid grid-cols-2 gap-3">
                    {project.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`${project.title} screenshot ${i + 1}`}
                        className="w-full h-36 sm:h-44 object-cover rounded-2xl border border-white/10 hover:scale-105 transition duration-300"
                      />
                    ))}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex flex-col justify-center">
                  <h2 className="text-2xl sm:text-3xl font-bold">
                    {project.title}
                  </h2>

                  <p className="text-gray-400 mt-4 leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-6">
                    {project.tech.map((item, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-full bg-blue-600/20 text-blue-300 border border-blue-500/20 text-sm font-semibold"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-bold mb-3">Key Features</h3>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-300">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-blue-400">✔</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        project.live === "#"
                          ? "pointer-events-none opacity-50"
                          : ""
                      } bg-blue-600 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition`}
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-white/30 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-white hover:text-black transition"
                    >
                      <FaGithub /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}