import { Github, Linkedin, Mail } from 'lucide-react';
import logo from "../assets/logo.png"

export default function Hero() {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in-up text-center">
            <img 
              src={logo} 
              alt="logo" 
              className="w-40 h-40 md:w-64 md:h-64 mx-auto mb-4" 
            />
            <h2 className="text-2xl md:text-3xl text-gray-700 font-medium mb-6">
              Full Stack Developer
            </h2>
          </div>

          <div className="mb-12 animate-fade-in-up animation-delay-200">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Passionate about web and mobile development, I create modern and high-performance applications.
              Specializing in React, TypeScript, Go, Rust, and Flutter, I transform ideas into innovative digital solutions.
            </p>
          </div>

          <div className="flex justify-center space-x-6 animate-fade-in-up animation-delay-400">
            <a
              href="https://github.com/Arman70azer"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            >
              <Github className="w-6 h-6 text-gray-700" />
            </a>
            <a
              href="https://linkedin.com/in/arman-auvray-005a58338"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6 text-blue-600" />
            </a>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            >
              <Mail className="w-6 h-6 text-cyan-600" />
            </button>
          </div>

          <div className="mt-16 animate-fade-in-up animation-delay-600">
            <button
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              See Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
