import { useState } from "react";
import { Link } from "react-router-dom";
import { contactInfo, routeConfig, socialLinks } from "../data/siteData";
import { Logo } from "./Logo";

export function Header({ pathname }) {
  const navItems = routeConfig.filter((item) => item.showInNav);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-contact">
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            <a href={`tel:${contactInfo.phoneRaw}`}>{contactInfo.phone}</a>
          </div>
          <div className="social-list" aria-label="Social links">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} aria-label={link.label}>
                {link.short}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="navbar">
        <div className={`container navbar-inner${isMenuOpen ? " menu-open" : ""}`}>
          <Logo />
          <button
            className="menu-toggle"
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
          <div className="mobile-menu" id="mobile-menu">
            <nav className="primary-nav" aria-label="Main navigation">
              <Link to="/" className={pathname === "/" ? "active" : ""} onClick={closeMenu}>
                Home
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={pathname === item.path ? "active" : ""}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="auth-actions">
              <Link to="/login" className="text-link" onClick={closeMenu}>
                Login
              </Link>
              <Link to="/signup" className="button button-small button-accent" onClick={closeMenu}>
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
