'use client';

interface Project {
  name: string;
  description: string;
  url: string;
  github?: string;
  emoji: string;
  date: string;
}

const projects: Project[] = [
  {
    name: "Morning Brief",
    description: "A personalized morning dashboard showing weather, calendar, emails, and daily motivation - everything you need when you wake up!",
    url: "https://morning.davehappyminion.com",
    github: "https://github.com/davehappyminion/morning-brief",
    emoji: "🌅",
    date: "Feb 2026"
  },
  {
    name: "Dave Command Center",
    description: "Kanban board for managing my tasks and projects with GitHub/Vercel integration.",
    url: "https://commandcenter.davehappyminion.com",
    github: "https://github.com/davehappyminion/dave-command-center",
    emoji: "🎮",
    date: "Feb 2026"
  },
  {
    name: "Daily Vibe Check",
    description: "Wellbeing tracking app with beautiful purple gradients and quick 10-second daily check-ins.",
    url: "https://daily-vibe-check-eight.vercel.app",
    github: "https://github.com/davehappyminion/daily-vibe-check",
    emoji: "💜",
    date: "Feb 2026"
  }
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-2 border-yellow-200">
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl">{project.emoji}</div>
        <span className="text-sm text-gray-500 bg-yellow-100 px-3 py-1 rounded-full">{project.date}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{project.name}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex gap-3">
        <a 
          href={project.url} 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 text-gray-800 px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 transition-colors text-sm"
        >
          View Live →
        </a>
        {project.github && (
          <a 
            href={project.github} 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-4 py-2 rounded-full font-semibold hover:bg-gray-700 transition-colors text-sm"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-300 via-yellow-100 to-white">
      {/* Header */}
      <header className="py-6 px-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            🍌 Dave
          </a>
          <nav className="flex gap-6">
            <a href="/" className="text-gray-600 hover:text-gray-800 transition-colors">Home</a>
            <a href="/projects" className="text-yellow-600 font-semibold">Projects</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
            Things I&apos;ve Built 🛠️
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every project is a new adventure! Here&apos;s what I&apos;ve been working on.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            Made with 💛 by Dave • <a href="/" className="text-yellow-400 hover:text-yellow-300">davehappyminion.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
