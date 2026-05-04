import { useState, useEffect } from 'react'
import './CV.css'
import portraitImage from './assets/WhatsApp Image 2026-05-04 at 20.53.02.jpeg'

/** +27 60 320 5204 — opens WhatsApp chat */
const WHATSAPP_URL = 'https://wa.me/27603205204'
const CONTACT_PHONE_DISPLAY = '+27 60 320 5204'
const CONTACT_EMAIL = 'hamiltonw435@gmail.com'

function useIsMobileCv() {
  const query = '(max-width: 639px)'
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false
  )

  useEffect(() => {
    const media = window.matchMedia(query)
    const sync = () => setIsMobile(media.matches)
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  return isMobile
}

function CollapsibleSection({
  sectionKey,
  titleId,
  title,
  className,
  isMobile,
  openSectionKey,
  onToggle,
  children,
}) {
  const isOpen = !isMobile || openSectionKey === sectionKey

  return (
    <section
      className={`cv-doc-section ${className}${isMobile ? (isOpen ? ' cv-doc-section--accordion-open' : ' cv-doc-section--accordion-closed') : ''}`}
      aria-labelledby={titleId}
    >
      <h2
        id={titleId}
        className={`cv-doc-section-title${isMobile ? ' cv-doc-section-title--accordion' : ''}`}
      >
        {isMobile ? (
          <button
            type="button"
            className="cv-doc-section-title-btn"
            onClick={() => onToggle(sectionKey)}
            aria-expanded={isOpen}
            aria-controls={`${titleId}-panel`}
          >
            <span className="cv-doc-section-title-label">{title}</span>
            <span className="cv-doc-section-chevron" aria-hidden />
          </button>
        ) : (
          title
        )}
      </h2>
      <div
        id={`${titleId}-panel`}
        className={`cv-doc-section-panel${isOpen ? ' cv-doc-section-panel--open' : ''}`}
        aria-hidden={isMobile && !isOpen ? true : undefined}
      >
        <div className="cv-doc-section-panel-inner">{children}</div>
      </div>
    </section>
  )
}

const details = [
  { label: 'Nationality', value: 'South African & British' },
  { label: 'Passports held', value: 'South African | British' },
  { label: 'D.O.B', value: '16/09/2003 | South Africa' },
  { label: 'Height', value: "193cm | 6'4\"" },
  { label: 'Health', value: 'Excellent | non-smoker | no tattoos' },
  { label: 'Languages', value: 'English | Fluent' },
  { label: 'Marital status', value: 'Single | no dependents' },
  { label: 'Current location', value: 'Athens, Greece' },
  { label: 'Email', value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { label: 'Phone', value: CONTACT_PHONE_DISPLAY, href: WHATSAPP_URL, suffix: ' | WhatsApp' },
]

const profileSummary = `I'm a Motivated and reliable entry-level deckhand with an MCA Yacht Rating and AEC1. I've developed a strong work ethic through living and working on a farm, along with hands-on experience in physically demanding roles. I have basic sailing experience, I'm confident using electrical tools, and I've gained practical mechanical exposure by assisting with diesel engine maintenance. I'm physically fit, safety-conscious, and genuinely eager to build a long-term career in the yachting industry. I work well in a team, pay attention to detail, and I'm always willing to help wherever needed, whether on deck or supporting the engineering side.`

const qualifications = [
  { bold: 'MCA Yacht Rating', rest: ' – Certified by the Maritime and Coastguard Agency' },
  {
    bold: 'AEC1 (Approved Engine Course 1)',
    rest: ' – Entry-level engineering certification, providing foundational knowledge in marine engine systems, maintenance, and onboard safety',
  },
  { bold: 'STCW 2010', rest: ' Basic Safety Training (Exp: Jan 2031)' },
  { bold: 'ENG1', rest: ' Seafarer Medical Certificate (Exp: Feb 2028)' },
  { bold: 'Elementary Seamanship', rest: ' for Yacht Crew' },
  { bold: 'MCA Yacht Rating', rest: ' Certificate' },
  { bold: 'IYT Small Powerboat', rest: ' and RIB Master (Exp: March 2031)' },
  { bold: 'IYT Basic', rest: ' VHF-SRC' },
  { bold: 'RYA PWC', rest: ' Proficiency' },
  { bold: 'RYA PWC', rest: ' Instructor' },
  { bold: 'PADI Advanced', rest: ' Open Water Diver' },
]

const skills = [
  'Basic sailing experience',
  'Competent with electrical tools',
  'Basic mechanical knowledge (diesel engines)',
  'Strong physical fitness and work ethic',
]

const hobbiesList = [
  'Target shooting (controlled ranges)',
  'Horse riding',
  'Cycling',
  'Hiking',
  'Swimming',
  'Canoeing',
]

function CV() {
  const [portraitLightboxOpen, setPortraitLightboxOpen] = useState(false)
  /** Mobile accordion: one open at a time, or none; Contact open on first load. Desktop ignores this. */
  const [openSectionKey, setOpenSectionKey] = useState('contact')
  const isMobileCv = useIsMobileCv()

  const toggleSection = (key) => {
    setOpenSectionKey((prev) => (prev === key ? null : key))
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
    <article className="cv cv-document">
      <header className="cv-doc-header">
        <div className="cv-doc-header-identity">
          <button
            type="button"
            className="cv-portrait-trigger"
            onClick={() => setPortraitLightboxOpen(true)}
            aria-label="View larger portrait photo"
          >
            <img className="cv-portrait" src={portraitImage} alt="" />
          </button>
          <div className="cv-doc-header-main">
            <div className="cv-doc-header-text">
              <p className="cv-doc-role">Junior Deckhand</p>
              <h1 className="cv-doc-name">William Douglas Hamilton</h1>
            </div>
            <div className="cv-header-contact">
              <span className="cv-header-phone-line">
                <a
                  href={WHATSAPP_URL}
                  className="cv-header-phone"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Get in touch via WhatsApp: ${CONTACT_PHONE_DISPLAY}`}
                >
                  <span className="cv-header-btn-label">Get in touch via WhatsApp</span>
                  <span className="cv-header-btn-detail">{CONTACT_PHONE_DISPLAY}</span>
                </a>
              </span>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="cv-cta"
                aria-label={`Get in touch via Email: ${CONTACT_EMAIL}`}
              >
                <span className="cv-header-btn-label">Get in touch via Email</span>
                <span className="cv-header-btn-detail">{CONTACT_EMAIL}</span>
              </a>
            </div>
          </div>
        </div>
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

      <div className="cv-doc-grid">
        <div className="cv-doc-col cv-doc-col--left">
          <CollapsibleSection
            sectionKey="contact"
            titleId="sec-contact"
            title="Contact"
            className="cv-doc-section--contact"
            isMobile={isMobileCv}
            openSectionKey={openSectionKey}
            onToggle={toggleSection}
          >
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
          </CollapsibleSection>

          <CollapsibleSection
            sectionKey="edu"
            titleId="sec-edu"
            title="Education"
            className="cv-doc-section--edu"
            isMobile={isMobileCv}
            openSectionKey={openSectionKey}
            onToggle={toggleSection}
          >
            <ul className="additional-list additional-list--education">
              <li>
                <strong>Belgium Campus ITversity</strong> (2024–2025)
                <span className="additional-li-detail">Diploma in Information Technology | 2 years completed</span>
              </li>
              <li>
                <strong>Quest Africa</strong> | 2023 | Gap Year Programme
                <span className="additional-li-detail">Leadership, personal development and outdoor training</span>
              </li>
              <li>
                <strong>GED — General Education Development</strong>
                <span className="additional-li-detail">Completed 2023</span>
              </li>
            </ul>
          </CollapsibleSection>

          <CollapsibleSection
            sectionKey="skills"
            titleId="sec-skills"
            title="Skills"
            className="cv-doc-section--skills"
            isMobile={isMobileCv}
            openSectionKey={openSectionKey}
            onToggle={toggleSection}
          >
            <ul className="qualifications-list">
              {skills.map((s) => (
                <li key={s} className="qualification-item">
                  <strong>{s}</strong>
                </li>
              ))}
            </ul>
          </CollapsibleSection>

          <CollapsibleSection
            sectionKey="hobbies"
            titleId="sec-hobby"
            title="Hobbies"
            className="cv-doc-section--hobbies"
            isMobile={isMobileCv}
            openSectionKey={openSectionKey}
            onToggle={toggleSection}
          >
            <p className="additional-prose additional-prose--lead">I enjoy a variety of outdoor and skill-based activities.</p>
            <ul className="additional-list">
              {hobbiesList.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </CollapsibleSection>

          <CollapsibleSection
            sectionKey="ref"
            titleId="sec-ref"
            title="References"
            className="cv-doc-section--ref"
            isMobile={isMobileCv}
            openSectionKey={openSectionKey}
            onToggle={toggleSection}
          >
            <p className="additional-prose">References available upon request.</p>
          </CollapsibleSection>
        </div>

        <div className="cv-doc-col cv-doc-col--right">
          <CollapsibleSection
            sectionKey="summary"
            titleId="sec-summary"
            title="Summary"
            className="cv-doc-section--summary"
            isMobile={isMobileCv}
            openSectionKey={openSectionKey}
            onToggle={toggleSection}
          >
            <p className="cv-profile">{profileSummary}</p>
          </CollapsibleSection>

          <CollapsibleSection
            sectionKey="exp"
            titleId="sec-exp"
            title="Experience"
            className="cv-doc-section--exp"
            isMobile={isMobileCv}
            openSectionKey={openSectionKey}
            onToggle={toggleSection}
          >
            <ul className="additional-list">
              <li>Practical Mechanical Exposure (Informal)</li>
              <li>Assisted in maintenance and troubleshooting of a tractor diesel engine under supervision.</li>
              <li>Gained basic understanding of mechanical systems and fault-finding.</li>
              <li>Developed hands-on problem-solving skills in a workshop environment.</li>
            </ul>
          </CollapsibleSection>

          <CollapsibleSection
            sectionKey="qual"
            titleId="sec-qual"
            title="Qualification | licences"
            className="cv-doc-section--qual"
            isMobile={isMobileCv}
            openSectionKey={openSectionKey}
            onToggle={toggleSection}
          >
            <ul className="qualifications-list">
              {qualifications.map(({ bold, rest }, i) => (
                <li key={i} className="qualification-item">
                  <strong>{bold}</strong>
                  {rest}
                </li>
              ))}
            </ul>
          </CollapsibleSection>
        </div>
      </div>
    </article>
  )
}

export default CV
