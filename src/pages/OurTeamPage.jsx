import { ourTeamPage } from "../data/siteData";

function TeamCard({ member }) {
  return (
    <article className="team-card">
      <div className="team-photo-wrap">
        <img src={member.image} alt={member.name} />
        <div className="team-socials" aria-label={`${member.name} social links`}>
          {member.socials.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              className={index === 0 ? "social-highlight" : ""}
            >
              {item.short}
            </a>
          ))}
        </div>
      </div>
      <h2>{member.name}</h2>
      <p>{member.role}</p>
    </article>
  );
}

export function OurTeamPage() {
  return (
    <div className="team-page">
      <section className="team-title-band">
        <div className="container">
          <h1>{ourTeamPage.title}</h1>
          <p>{ourTeamPage.subtitle}</p>
        </div>
      </section>

      <section className="team-grid-section">
        <div className="container team-grid">
          {ourTeamPage.members.map((member) => (
            <TeamCard key={`${member.name}-${member.role}`} member={member} />
          ))}
        </div>
      </section>
    </div>
  );
}
