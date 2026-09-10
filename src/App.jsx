// import "./App.css";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from './components/Navbar';
import { useState } from 'react'
import './App.css'


function App() {
  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar title="Liandy Sanjaya" items={menuItems} />
      <Hero />
      <Features />
      <Footer />
    <div/>
  );
}

export default App;
