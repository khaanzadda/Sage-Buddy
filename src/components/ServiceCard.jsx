import { Link } from "react-router-dom";

export function ServiceCard({ item }) {
  return (
    <article className="service-card">
      <div className="service-icon" aria-hidden="true">
        <span>{item.icon}</span>
      </div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <Link to={item.href}>Learn More</Link>
    </article>
  );
}
