import { RevealOnScroll } from "../RevealOnScroll";
export const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Next",
  ];
  const backendSkills = [
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "REST API",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 z-10"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I'm a full-stack developer with 1 year of experience. I specialize
              in building web applications using modern technologies like React,
              Node.js,Next.js, Prisma and MongoDB.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech) => (
                    <span
                      className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech) => (
                    <span
                      className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <p className="text-gray-300">
                I completed a Higher National Diploma in Multiplatform
                Application Development at IES Eduardo Primo Marqués in Carlet,
                Valencia.
              </p>
            </div>
            <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Experience</h3>
              <p className="text-gray-300">
                Internship at Buscalia During my internship at Buscalia, I
                gained hands-on experience in software development, applying my
                academic knowledge to real-world projects and enhancing my
                technical and problem-solving skills. Full-Stack Developer at
                112maps (Part-time) Currently, I am working part-time at 112maps
                as a Full-Stack Developer, where I contribute to both front-end
                and back-end development, building scalable solutions and
                improving the performance of web applications.
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
