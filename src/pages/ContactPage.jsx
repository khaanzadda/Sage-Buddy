import { contactInfo, contactPage } from "../data/siteData";

function ContactInfoCard({ item }) {
  return (
    <article className="contact-info-card">
      <div className="contact-info-icon" aria-hidden="true">
        {item.icon}
      </div>
      <div>
        <h2>{item.title}</h2>
        <p>{item.text}</p>
      </div>
    </article>
  );
}

export function ContactPage() {
  return (
    <div className="contact-page">
      <section className="contact-title-band">
        <div className="container">
          <h1>{contactPage.title}</h1>
          <p>{contactPage.subtitle}</p>
        </div>
      </section>

      <section className="contact-main">
        <div className="container contact-grid">
          <div className="contact-form-panel">
            <span className="contact-kicker">{contactPage.eyebrow}</span>
            <h2>{contactPage.heading}</h2>
            <form className="contact-form" aria-label="Contact form">
              <input type="text" name="name" placeholder="Name" defaultValue="" />
              <div className="contact-form-row">
                <input type="email" name="email" placeholder="Email" />
                <input type="tel" name="phone" placeholder="Phone" />
              </div>
              <textarea name="message" placeholder="Message" rows="6" />
              <label className="captcha-box">
                <span className="captcha-check" />
                <span>I'm not a robot</span>
                <strong>↻</strong>
              </label>
              <button type="submit" className="contact-submit">
                Sign Now
              </button>
            </form>
          </div>

          <aside className="contact-info-panel" aria-label="Contact information">
            {contactPage.infoCards.map((item) => (
              <ContactInfoCard key={item.title} item={item} />
            ))}
            <article className="contact-info-card">
              <div className="contact-info-icon" aria-hidden="true">
                ✉
              </div>
              <div>
                <h2>Email Us</h2>
                <p>{contactInfo.email}</p>
              </div>
            </article>
          </aside>
        </div>
      </section>
    </div>
  );
}
