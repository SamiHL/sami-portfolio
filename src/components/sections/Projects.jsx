import { RevealOnScroll } from "../RevealOnScroll";
export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 z-10"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">SAMIFLIX</h3>
              <p className="text-gray-400 mb-4">
                SAMIFLIX is a full-featured Netflix clone built with modern
                JavaScript technologies. The project includes a secure
                authentication system with NextAuth, a scalable database layer
                managed with Prisma, and a responsive, professional UI designed
                with Tailwind CSS and ShadCN. It demonstrates the implementation
                of both front-end and back-end development in a production-ready
                environment, fully deployed on Vercel.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "Node.js",
                  "MongoDB",
                  "Next.js 14",
                  "TypeScript",
                  "Prisma",
                  "NextAuth",
                  "Tailwind CSS",
                  "ShadCN",
                  "Vercel",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://netflix-clon-navy.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              
            </div>
          </div>

          <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">INTERVIEWAI</h3>
            <p className="text-gray-400 mb-4">
              InterviewAI is a professional full-stack web application designed
              to conduct automated voice interviews using AI. The project
              includes secure user authentication with Clerk, integrated
              payments via Stripe, and a scalable SaaS architecture ready for
              production. This project demonstrates expertise in both front-end
              and back-end development, implementation of AI-driven features,
              and the creation of real-world, production-ready applications
              using modern JavaScript technologies.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {[
                "React",

                "Next.js 15",
                "TypeScript",
                "Prisma",
                "Stripe",
                "Clerk",
                "Voice AI",

                "Tailwind CSS",
                "ShadCN",
                "Vercel",
              ].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://techview.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View Project →
              </a>
            </div>
          </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
