import { successStoriesPage } from "../data/siteData";

export function SuccessStoriesPage() {
  return (
    <div className="success-page">
      <section className="success-title-band">
        <div className="container">
          <h1>{successStoriesPage.title}</h1>
          <p>{successStoriesPage.subtitle}</p>
        </div>
      </section>

      <section className="success-stories-list" aria-label="Customer success stories">
        {successStoriesPage.stories.map((story, index) => (
          <article
            key={`${story.name}-${index}`}
            className={`success-story ${index % 2 === 0 ? "story-light" : "story-soft"}`}
          >
            <div className="success-story-inner">
              <img src={story.image} alt={story.name} />
              <p>{story.quote}</p>
              <div className="story-stars" aria-label={`${story.rating} star rating`}>
                {"★".repeat(story.rating)}
              </div>
              <h2>{story.name}</h2>
              <span>{story.role}</span>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
