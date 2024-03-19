import { nanoid } from "nanoid";
import { links } from "../../data/links";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="container">
      <ul className="link-list">
        {links.map((link) => (
          <NavItem key={nanoid()} link={link} />
        ))}
      </ul>
    </nav>
  );
}

function NavItem({ link }) {
  return (
    <li className="list-item">
      <a
        className={`link ${
          window.location.pathname === link.href && "current"
        }`}
        href={link.href}
      >
        {link.title}
      </a>
    </li>
  );
}
