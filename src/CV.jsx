import { useState, useEffect } from 'react'
import './CV.css'
import portraitImage from './assets/william_image.jpeg'

/** +27 60 320 5204 — opens WhatsApp chat */
const WHATSAPP_URL = 'https://wa.me/27603205204'

const details = [
  { label: 'Nationality', value: 'South African & British' },
  { label: 'Passports held', value: 'South African; British' },
  { label: 'Date of Birth', value: '16/09/2003' },
  { label: 'Place of Birth', value: 'South Africa' },
  { label: 'Height', value: "193cm (6'4\")" },
  { label: 'Health', value: 'Excellent, non-smoker' },
  { label: 'Tattoos', value: 'None' },
  { label: 'Languages', value: 'English (Fluent)' },
  { label: 'Marital status', value: 'Single, no dependents' },
  { label: 'Current location', value: 'Antibes, France' },
  { label: 'Email', value: 'hamiltonw435@gmail.com', href: 'mailto:hamiltonw435@gmail.com' },
  { label: 'Phone', value: '+27 60 320 5204', href: WHATSAPP_URL, suffix: ' (available on WhatsApp)' },
]

const profileSummary = `Motivated and reliable entry-level deckhand holding an MCA Yacht Rating and AEC1 qualification, with a strong work ethic and hands-on experience in physically demanding environments. Recently gained basic mechanical exposure assisting with maintenance and troubleshooting of a Toyosha CS 86 tractor 3-cylinder diesel engine, developing general mechanical awareness and problem-solving skills. Physically fit, safety-conscious, and eager to develop a career within the yachting industry. Strong team player with a positive attitude, keen attention to detail, and a willingness to assist the engineering department when required while primarily focusing on deck operations.`

const qualifications = [
  'MCA Yacht Rating Certificate',
  'STCW 2010 Basic Safety Training (Exp: Jan 2031)',
  'ENG1 Seafarer Medical Certificate (Exp: Feb 2028)',
  'Elementary Seamanship for Yacht Crew',
  'MCA AEC1 (Approved Engine Course)',
  'IYT Small Powerboat and RIB Master (Exp: March 2031)',
  'IYT Basic VHF-SRC',
  'RYA PWC Proficiency',
  'RYA PWC Instructor',
  'PADI Advanced Open Water Diver',
]

const OPEN_DETAILS = 'details'
const OPEN_QUALIFICATIONS = 'qualifications'
const OPEN_ADDITIONAL = 'additional'

function CV() {
  const [openPanel, setOpenPanel] = useState(null)
  const [portraitLightboxOpen, setPortraitLightboxOpen] = useState(false)

  const togglePanel = (panel) => {
    setOpenPanel((current) => (current === panel ? null : panel))
  }

  useEffect(() => {
    if (!portraitLightboxOpen) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setPortraitLightboxOpen(false)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [portraitLightboxOpen])

  return (
    <article className="cv">
      <header className="cv-header">
        <div className="cv-header-text">
          <div className="cv-header-accent" />
          <h1 className="cv-name">William Douglas Hamilton</h1>
          <p className="cv-title">Deckhand · Yacht Crew</p>
          <div className="cv-header-contact">
            <span className="cv-header-phone-line">
              <a
                href={WHATSAPP_URL}
                className="cv-header-phone"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message on WhatsApp: +27 60 320 5204"
              >
                +27 60 320 5204
              </a>
              <span className="cv-header-phone-note"> (available on WhatsApp; click above)</span>
            </span>
            <a href="mailto:hamiltonw435@gmail.com" className="cv-cta">Get in touch via Email</a>
          </div>
        </div>
        <button
          type="button"
          className="cv-portrait-trigger"
          onClick={() => setPortraitLightboxOpen(true)}
          aria-label="View larger portrait photo"
        >
          <img
            className="cv-portrait"
            src={portraitImage}
            alt=""
          />
        </button>
      </header>

      {portraitLightboxOpen ? (
        <div
          className="cv-portrait-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Portrait photo"
          onClick={() => setPortraitLightboxOpen(false)}
        >
          <button
            type="button"
            className="cv-portrait-lightbox-close"
            onClick={() => setPortraitLightboxOpen(false)}
            aria-label="Close photo"
          >
            ×
          </button>
          <div
            className="cv-portrait-lightbox-frame"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              className="cv-portrait-lightbox-img"
              src={portraitImage}
              alt="William Douglas Hamilton"
            />
          </div>
        </div>
      ) : null}

      <section className={`cv-section cv-details cv-dropdown ${openPanel === OPEN_DETAILS ? 'is-open' : ''}`}>
        <h2 className="cv-section-title cv-dropdown-title-desktop">Details & Profile</h2>
        <button
          type="button"
          className="cv-dropdown-trigger"
          onClick={() => togglePanel(OPEN_DETAILS)}
          aria-expanded={openPanel === OPEN_DETAILS}
          aria-controls="cv-details-content"
          id="cv-details-trigger"
        >
          <span className="cv-dropdown-trigger-text">Details & Profile</span>
          <span className="cv-dropdown-chevron" aria-hidden />
        </button>
        <div id="cv-details-content" className="cv-dropdown-content" role="region" aria-labelledby="cv-details-trigger">
          <div className="cv-details-inner">
            <ul className="details-list">
              {details.map(({ label, value, href, suffix }) => (
                <li key={label} className="details-item">
                  <span className="details-label">{label}:</span>
                  <span className="details-value">
                    {href ? (
                      <>
                        <a
                          href={href}
                          className="details-link"
                          {...(href.startsWith('http')
                            ? { target: '_blank', rel: 'noopener noreferrer' }
                            : {})}
                        >
                          {value}
                        </a>
                        {suffix ? <span className="details-suffix">{suffix}</span> : null}
                      </>
                    ) : (
                      value
                    )}
                  </span>
                </li>
              ))}
            </ul>
            <div className="cv-details-profile">
              <p className="cv-profile">{profileSummary}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`cv-section cv-dropdown ${openPanel === OPEN_QUALIFICATIONS ? 'is-open' : ''}`}>
        <h2 className="cv-section-title cv-dropdown-title-desktop">Qualifications and licences</h2>
        <button
          type="button"
          className="cv-dropdown-trigger"
          onClick={() => togglePanel(OPEN_QUALIFICATIONS)}
          aria-expanded={openPanel === OPEN_QUALIFICATIONS}
          aria-controls="cv-qualifications-content"
          id="cv-qualifications-trigger"
        >
          <span className="cv-dropdown-trigger-text">Qualifications and licences</span>
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

      <section className={`cv-section cv-dropdown cv-additional ${openPanel === OPEN_ADDITIONAL ? 'is-open' : ''}`}>
        <h2 className="cv-section-title cv-dropdown-title-desktop">Additional Information</h2>
        <button
          type="button"
          className="cv-dropdown-trigger"
          onClick={() => togglePanel(OPEN_ADDITIONAL)}
          aria-expanded={openPanel === OPEN_ADDITIONAL}
          aria-controls="cv-additional-content"
          id="cv-additional-trigger"
        >
          <span className="cv-dropdown-trigger-text">Additional Information</span>
          <span className="cv-dropdown-chevron" aria-hidden />
        </button>
        <div id="cv-additional-content" className="cv-dropdown-content" role="region" aria-labelledby="cv-additional-trigger">
          <div className="cv-additional-inner">
            <div className="additional-block">
              <h3 className="additional-heading">Experience</h3>
              <p className="additional-subheading">Practical Mechanical Exposure (Informal)</p>
              <ul className="additional-list">
                <li>Assisted in maintenance and troubleshooting of a tractor diesel engine under supervision</li>
                <li>Gained basic understanding of mechanical systems and fault-finding</li>
                <li>Developed hands-on problem-solving skills in a workshop environment</li>
              </ul>
            </div>

            <div className="additional-block">
              <h3 className="additional-heading">Education</h3>
              <ul className="additional-list">
                <li>
                  <strong>Belgium Campus ITversity</strong> (2024–2025)
                  <span className="additional-li-detail">Diploma in Information Technology (2 years completed)</span>
                </li>
                <li>
                  <strong>Quest Africa</strong> (2023)
                  <span className="additional-li-detail">Gap Year Programme — Leadership, personal development and outdoor training</span>
                </li>
                <li>
                  <strong>GED — General Education Development</strong>
                  <span className="additional-li-detail">Completed 2023</span>
                </li>
              </ul>
            </div>

            <div className="additional-block">
              <h3 className="additional-heading">Interests and hobbies</h3>
              <p className="additional-prose">
                I enjoy a range of outdoor and skill-based activities, including target shooting at controlled ranges,
                horse riding, cycling, hiking, swimming and canoeing.
              </p>
            </div>

            <div className="additional-block">
              <h3 className="additional-heading">References</h3>
              <p className="additional-prose">References available upon request.</p>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}

export default CV
