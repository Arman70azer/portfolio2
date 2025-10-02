import { ExternalLink, Code2 } from 'lucide-react';
import { golang, rust, js, flutter } from './card_description';

interface Project {
  title: string;
  description: string;
  img: string;
  url: string;
}

interface ProjectCardProps {
  project: Project;
  category: string;
}

import { useState } from "react";

function ProjectCard({ project, category }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case "golang": return "from-blue-500 to-cyan-500";
      case "rust": return "from-orange-500 to-red-500";
      case "js": return "from-yellow-400 to-orange-500";
      case "flutter": return "from-blue-400 to-cyan-400";
      default: return "from-gray-500 to-slate-500";
    }
  };

  return (
    <div className="relative bg-white rounded-2xl shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
      {/* Image */}
      <div className="aspect-video overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 relative">
        {project.img ? (
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Code2 className="w-16 h-16 text-gray-400" />
          </div>
        )}
        <div
          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm font-semibold bg-gradient-to-r ${getCategoryColor(
            category
          )}`}
        >
          {category.toUpperCase()}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col">
        <h3 className="text-xl font-bold text-gray-800 mb-3 transition-colors duration-500">
          {project.title}
        </h3>

        {/* Description tronquée */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
          {project.description}
        </p>

        {/* Flèche pour indiquer qu'il y a une suite */}
        {project.description.length > 200 && (
          <button
            className={`flex items-center justify-center w-8 h-8 bg-white rounded-full shadow transition-transform duration-300 ${
              isExpanded ? "rotate-180" : "rotate-0"
            } hover:bg-blue-100`}
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label={isExpanded ? "Réduire la description" : "Voir la description complète"}
          >
            <svg
              className="w-4 h-4 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}


        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-cyan-600 font-semibold transition-colors mt-4"
        >
          <span>See on GitHub</span>
          <ExternalLink className="w-4 h-4 transition-transform duration-500" />
        </a>
      </div>

      {/* Overlay description animé */}
      <div
        className={`absolute inset-0 bg-white p-6 rounded-2xl shadow-lg transition-all duration-500 ease-out transform ${
          isExpanded ? "translate-y-0 opacity-100" : "translate-y-full opacity-90 pointer-events-none"
        }`}
      >
       <h3 className="text-2xl md:text-2xl font-extrabold text-gray-900 mb-4 leading-snug tracking-tight">
          {project.title}
        </h3>

        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
          {project.description}
        </p>

        <button
            className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow hover:bg-blue-100 transition-colors transform"
            onClick={() => setIsExpanded(false)}
            aria-label="Fermer la description"
          >
            <svg
              className="w-5 h-5 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>


      </div>
    </div>
  );
}




// Petite fonction pour mélanger un tableau (algorithme de Fisher-Yates)
function shuffleArray(array: {
    category: string;
    title: string;
    description: string;
    img: string;
    url: string;
}[]) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function Portfolio() {
  const allProjects = [
    ...Object.entries(golang).map(([_, project]) => ({ ...project, category: "golang" })),
    ...Object.entries(rust).map(([_, project]) => ({ ...project, category: "rust" })),
    ...Object.entries(js).map(([_, project]) => ({ ...project, category: "js" })),
    ...Object.entries(flutter).map(([_, project]) => ({ ...project, category: "flutter" })),
  ];

  const shuffledProjects = shuffleArray(allProjects);

  return (
    <section id="portfolio" className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent py-1">
            My Projects
          </h2>
          <p className="text-lg text-gray-600">
            A selection of my achievements in web, mobile and systems development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shuffledProjects.map((project, index) => (
            <ProjectCard
              key={`${project.category}-${index}`}
              project={project}
              category={project.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

