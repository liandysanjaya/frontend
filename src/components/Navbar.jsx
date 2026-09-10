import { useState } from 'react';
import './Navbar.css';

// Array data menu — gampang ditambah/diubah tanpa sentuh JSX
const defaultMenuItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

// Komponen menerima props: title & items (opsional, ada default value)
function Navbar({ title = 'MyApp', items = defaultMenuItems }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">{title}</div>

      <button
        className="navbar-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
