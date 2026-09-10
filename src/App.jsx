// import "./App.css";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

//function App() {
//  return (
//    <div className="min-h-screen bg-gray-50">
//      <Navbar />
//      <Hero />
//      <Features />
//      <Footer />
//    </div>
//  );
//}
import { useState } from 'react'
import './App.css'

const menuItems = [
  { id: 1, label: "Home", href: "#home" },
  { id: 2, label: "Skill", href: "#skills" },
  { id: 3, label: "Proyek", href: "#projects" },
  { id: 4, label: "Kontak", href: "#contact" },
]

const skills = [
  { id: 1, name: "HTML & CSS", level: 90 },
  { id: 2, name: "JavaScript", level: 80 },
  { id: 3, name: "React", level: 75 },
  { id: 4, name: "UI/UX Design", level: 70 },
]

const projects = [
  { id: 1, title: "Website Toko Online", desc: "Landing page e-commerce responsive.", tag: "React" },
  { id: 2, title: "Aplikasi Catatan", desc: "Aplikasi to-do list sederhana.", tag: "JavaScript" },
  { id: 3, title: "Portfolio Desainer", desc: "Website portfolio untuk desainer grafis.", tag: "HTML/CSS" },
]

function App() {
  return (
    <>
      <nav className="navbar">
        <h1 className="navbar-title">Ekel.dev</h1>
        <ul className="navbar-menu">
          {menuItems.map((item) => (
            <li key={item.id}><a href={item.href}>{item.label}</a></li>
          ))}
        </ul>
      </nav>

      <section id="home" className="hero">
        <div className="avatar">👨‍💻</div>
        <h1>Halo, Saya Frontend Developer</h1>
        <p>Saya membangun website yang cepat, modern, dan mudah digunakan.</p>
        <button className="cta-btn">Lihat Proyek Saya</button>
      </section>

      <section id="skills" className="skills">
        <h2>Keahlian</h2>
        <div className="skill-list">
          {skills.map((skill) => (
            <div className="skill-item" key={skill.id}>
              <div className="skill-name">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="projects">
        <h2>Proyek Saya</h2>
        <div className="project-grid">
          {projects.map((p) => (
            <div className="project-card" key={p.id}>
              <span className="project-tag">{p.tag}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact" className="footer">
        <p>&copy; 2026 Ekel.dev — Semua hak dilindungi.</p>
      </footer>
    </>
  )
}

export default App

export default App;
