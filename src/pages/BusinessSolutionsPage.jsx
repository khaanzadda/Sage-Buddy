import { Link } from "react-router-dom";
import { businessSolutionsPage } from "../data/siteData";

function FeatureCard({ item }) {
  return (
    <article className="business-feature-card">
      <div className="business-feature-icon" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <h4>{item.title}</h4>
      <p>{item.text}</p>
    </article>
  );
}

function ShowcaseRow({ item, index }) {
  return (
    <section
      className={`business-showcase-row ${index % 2 === 0 ? "media-left" : "media-right"}`}
    >
      <div className="business-showcase-media">
        <div className="business-media-frame">
          <img src={item.image} alt={item.title} />
        </div>
        {item.overlayImage ? (
          <div className="business-media-overlay">
            <img src={item.overlayImage} alt="" />
          </div>
        ) : null}
      </div>

      <div className="business-showcase-copy">
        <span className="business-kicker">{item.eyebrow}</span>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        {item.bullets ? (
          <ul className="business-bullet-list">
            {item.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}

export function BusinessSolutionsPage() {
  return (
    <div className="business-page">
      <section className="business-hero">
        <div className="business-hero-overlay" />
        <div className="container business-hero-inner">
          <div className="business-hero-copy">
            <span className="business-kicker">{businessSolutionsPage.hero.eyebrow}</span>
            <h1>{businessSolutionsPage.hero.title}</h1>
            <p>{businessSolutionsPage.hero.description}</p>
            <Link to={businessSolutionsPage.hero.ctaHref} className="button button-primary">
              {businessSolutionsPage.hero.ctaLabel}
            </Link>
          </div>
        </div>
      </section>

      <div className="business-content-shell">
        <div className="container">
          {businessSolutionsPage.sections.map((item, index) => (
            <ShowcaseRow key={item.title} item={item} index={index} />
          ))}

          <section className="business-closing">
            <div className="business-closing-copy">
              <span className="business-kicker">{businessSolutionsPage.closing.eyebrow}</span>
              <h2>{businessSolutionsPage.closing.title}</h2>
              <p>{businessSolutionsPage.closing.description}</p>
              <Link
                to={businessSolutionsPage.closing.ctaHref}
                className="button button-accent"
              >
                {businessSolutionsPage.closing.ctaLabel}
              </Link>
            </div>

            <div className="business-closing-grid">
              {businessSolutionsPage.closing.cards.map((item) => (
                <FeatureCard key={item.title} item={item} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
