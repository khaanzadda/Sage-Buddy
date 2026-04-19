import { Link } from "react-router-dom";
import { MetricCircle } from "../components/MetricCircle";
import { PlaceholderIllustration } from "../components/PlaceholderIllustration";
import { SectionHeading } from "../components/SectionHeading";
import { ServiceCard } from "../components/ServiceCard";
import {
  aboutContent,
  heroContent,
  services,
  statsContent,
  testimonial,
} from "../data/siteData";

export function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">{heroContent.eyebrow}</span>
            <h1>{heroContent.title}</h1>
            <p>{heroContent.description}</p>
            <Link to={heroContent.ctaHref} className="button button-primary">
              {heroContent.ctaLabel}
            </Link>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container about-grid">
          <div className="about-collage" aria-hidden="true">
            <img src={aboutContent.images[0]} alt="" />
            <img src={aboutContent.images[1]} alt="" />
          </div>
          <div>
            <SectionHeading
              eyebrow={aboutContent.eyebrow}
              title={aboutContent.title}
              description={aboutContent.paragraphs[0]}
            />
            <p className="body-copy">{aboutContent.paragraphs[1]}</p>
          </div>
        </div>
      </section>

      <section className="solutions-section">
        <div className="container">
          <SectionHeading
            eyebrow="Our Features"
            title="Solutions for your Business"
            align="center"
          />
          <div className="services-grid">
            {services.map((item) => (
              <ServiceCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-grid">
          <PlaceholderIllustration />
          <MetricCircle stats={statsContent} />
        </div>
      </section>

      <section className="testimonial-section">
        <div className="container">
          <SectionHeading
            eyebrow="Reviews"
            title="10k Happy Customers"
            description={testimonial.quote}
            align="center"
          />
          <div className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} />
            <h3>{testimonial.name}</h3>
            <p>{testimonial.role}</p>
          </div>
        </div>
      </section>
    </>
  );
}
