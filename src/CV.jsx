import { useState } from 'react'
import './CV.css'
import yachtImage from './assets/image.png'

const details = [
  { label: 'Email', value: 'hamiltonw435@gmail.com', href: 'mailto:hamiltonw435@gmail.com' },
  { label: 'Phone', value: '+27 63 534 0030', href: 'tel:+27635340030' },
  { label: 'Nationality', value: 'South Africa' },
  { label: 'Languages', value: 'English' },
  { label: 'Date of birth', value: '16 September 2003' },
  { label: "Visas", value: 'N/A — British Passport' },
  { label: 'Health status', value: 'Excellent' },
  { label: 'Smoker', value: 'No' },
  { label: 'Tattoos', value: 'None' },
  { label: 'Current location', value: 'Bohobos, Antibes' },
  { label: 'Availability', value: 'Immediate' },
]

const qualifications = [
  'STCW',
  'ENG1',
  'AEC 1',
  'Jet Ski Instructor',
  'Small Powerboat & RIB Master',
  'Introduction to VHF Radio Operations',
]

const OPEN_DETAILS = 'details'
const OPEN_PROFILE = 'profile'
const OPEN_QUALIFICATIONS = 'qualifications'

function CV() {
  const [openPanel, setOpenPanel] = useState(null)

  const togglePanel = (panel) => {
    setOpenPanel((current) => (current === panel ? null : panel))
  }

  return (
    <article className="cv">
      <header className="cv-header">
        <div className="cv-header-accent" />
        <h1 className="cv-name">William Douglas Hamilton</h1>
        <p className="cv-title">Deckhand · Yacht Crew</p>
      </header>

      <section className={`cv-section cv-details cv-dropdown ${openPanel === OPEN_DETAILS ? 'is-open' : ''}`}>
        <h2 className="cv-section-title cv-dropdown-title-desktop">Details</h2>
        <button
          type="button"
          className="cv-dropdown-trigger"
          onClick={() => togglePanel(OPEN_DETAILS)}
          aria-expanded={openPanel === OPEN_DETAILS}
          aria-controls="cv-details-content"
          id="cv-details-trigger"
        >
          <span className="cv-dropdown-trigger-text">Details</span>
          <span className="cv-dropdown-chevron" aria-hidden />
        </button>
        <div id="cv-details-content" className="cv-dropdown-content" role="region" aria-labelledby="cv-details-trigger">
          <ul className="details-list">
            {details.map(({ label, value, href }) => (
              <li key={label} className="details-item">
                <span className="details-label">{label}</span>
                <span className="details-value">
                  {href ? (
                    <a href={href} className="details-link">{value}</a>
                  ) : (
                    value
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`cv-section cv-dropdown ${openPanel === OPEN_PROFILE ? 'is-open' : ''}`}>
        <h2 className="cv-section-title cv-dropdown-title-desktop">Profile</h2>
        <button
          type="button"
          className="cv-dropdown-trigger"
          onClick={() => togglePanel(OPEN_PROFILE)}
          aria-expanded={openPanel === OPEN_PROFILE}
          aria-controls="cv-profile-content"
          id="cv-profile-trigger"
        >
          <span className="cv-dropdown-trigger-text">Profile</span>
          <span className="cv-dropdown-chevron" aria-hidden />
        </button>
        <div id="cv-profile-content" className="cv-dropdown-content" role="region" aria-labelledby="cv-profile-trigger">
          <p className="cv-profile">
            Hardworking and well-presented individual seeking a Deckhand position on a yacht.
            Strong team player with a hands-on work ethic and high attention to detail.
            STCW certified and ready to contribute to maintaining exceptional standards of
            safety, cleanliness, and guest experience onboard.
          </p>
        </div>
      </section>

      <section className={`cv-section cv-dropdown ${openPanel === OPEN_QUALIFICATIONS ? 'is-open' : ''}`}>
        <h2 className="cv-section-title cv-dropdown-title-desktop">Qualifications</h2>
        <button
          type="button"
          className="cv-dropdown-trigger"
          onClick={() => togglePanel(OPEN_QUALIFICATIONS)}
          aria-expanded={openPanel === OPEN_QUALIFICATIONS}
          aria-controls="cv-qualifications-content"
          id="cv-qualifications-trigger"
        >
          <span className="cv-dropdown-trigger-text">Qualifications</span>
          <span className="cv-dropdown-chevron" aria-hidden />
        </button>
        <div id="cv-qualifications-content" className="cv-dropdown-content" role="region" aria-labelledby="cv-qualifications-trigger">
          <ul className="qualifications-list">
            {qualifications.map((q) => (
              <li key={q} className="qualification-item">{q}</li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="cv-footer">
        <a href="tel:+27635340030" className="cv-footer-phone">+27 63 534 0030</a>
        <a href="mailto:hamiltonw435@gmail.com" className="cv-cta">Get in touch via Email</a>
      </footer>

      <div className="cv-yacht-image">
        <img src={yachtImage} alt="Yacht sailing" />
      </div>
    </article>
  )
}

export default CV
