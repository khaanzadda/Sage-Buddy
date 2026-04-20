import { Link } from "react-router-dom";
import { SectionHeading } from "../components/SectionHeading";
import { services } from "../data/siteData";
import { BusinessSolutionsPage } from "./BusinessSolutionsPage";
import { OurTeamPage } from "./OurTeamPage";
import { SuccessStoriesPage } from "./SuccessStoriesPage";

export function BasicPage({ page }) {
  if (page.path === "/our-team") {
    return <OurTeamPage />;
  }

  if (page.path === "/success-stories") {
    return <SuccessStoriesPage />;
  }

  if (page.path === "/business-solutions") {
    return <BusinessSolutionsPage />;
  }

  return (
    <section className="inner-page">
      <div className="container inner-page-grid">
        <div>
          <SectionHeading
            eyebrow={page.eyebrow || "Inner Page"}
            title={page.title}
            description={page.description}
          />
          <p className="body-copy">
            This page uses the same site shell, spacing system, buttons, and
            card components as the homepage so new content can be added quickly.
          </p>
          <Link to="/" className="button button-primary">
            Back to Home
          </Link>
        </div>
        <div className="page-sidebar">
          <h3>Ready-to-use blocks</h3>
          <div className="sidebar-links">
            {services.slice(0, 4).map((service) => (
              <Link key={service.title} to={service.href}>
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
