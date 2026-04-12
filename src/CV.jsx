import { useState } from 'react'
import './CV.css'
import portraitImage from './assets/william_image.jpeg'

const details = [
  { label: 'Email', value: 'hamiltonw435@gmail.com', href: 'mailto:hamiltonw435@gmail.com' },
  { label: 'Phone', value: '+27 60 320 5204', href: 'tel:+27603205204' },
  { label: 'Nationality', value: 'South African' },
  { label: 'Languages', value: 'English' },
  { label: 'Date of birth', value: '16 September 2003' },
  { label: "Visas", value: 'N/A — British Passport' },
  { label: 'Health status', value: 'Excellent' },
  { label: 'Smoker', value: 'No' },
  { label: 'Tattoos', value: 'None' },
  { label: 'Current location', value: 'Antibes' },
  { label: 'Availability', value: 'Immediately' },
  { label: 'Height', value: '6ft 4in' },
]

const qualifications = [
  'ENG1 (valid 12 February 2026 to 12 February 2028)',
  'STCW 2010 (issued January 2026)',
  'IYT Small Powerboat and RIB Master (valid 5 March 2026 to 4 March 2031)',
  'MCA AEC1 Approved Engine Course',
  'RYA Personal Watercraft Certificate of Proficiency (PWC)',
  'RYA Temporary Instructor Certificate (PWI)',
  'PADI Open Water',
  'PADI Advanced Open Water',
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
        <div className="cv-header-text">
          <div className="cv-header-accent" />
          <h1 className="cv-name">William Douglas Hamilton</h1>
          <p className="cv-title">Deckhand · Yacht Crew</p>
          <div className="cv-header-contact">
            <a href="tel:+27603205204" className="cv-header-phone">+27 60 320 5204</a>
            <a href="mailto:hamiltonw435@gmail.com" className="cv-cta">Get in touch via Email</a>
          </div>
        </div>
        <img
          className="cv-portrait"
          src={portraitImage}
          alt="William Douglas Hamilton"
        />
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
                <span className="details-label">{label}:</span>
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
            {qualifications.map((q, i) => (
              <li key={i} className="qualification-item">{q}</li>
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
            Hard-working and well-presented individual seeking a Deckhand position on a yacht.
            Strong team player with a hands-on work ethic and high attention to detail.
            STCW certified and ready to contribute to maintaining exceptional standards of
            safety, cleanliness, and guest experience onboard.
            I enjoy a range of outdoor and skill-based activities, including target shooting at
            controlled ranges, horse riding, cycling, and hiking.
          </p>
        </div>
      </section>
    </article>
  )
}

export default CV
