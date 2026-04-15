import { useState, useEffect } from 'react';

// ── IMAGES ────────────────────────────────────────────
const IMGS = {
  headshot:    '/images/img-headshot-1.jpeg',
  headshot2:   '/images/img-headshot-2.jpeg',
  surgery:     '/images/img-surgery.jpeg',
  conference:  '/images/img-conference.jpeg',
  campDesk:    '/images/img-camp-desk.jpeg',
  campConsult: '/images/img-camp-consult.jpeg',
  wellness1:   '/images/img-wellness-1.jpeg',
  wellness2:   '/images/img-wellness-2.jpeg',
  ptosisBa:    '/images/img-ptosis-ba.jpeg',
  cataractBa:  '/images/img-cataract-ba.jpeg',
  awardPhoto:  encodeURI('/images/WhatsApp Image 2026-04-14 at 9.35.03 PM.jpeg'),
};

const EXTRA_GALLERY_IMAGES = [
  '/images/WhatsApp Image 2026-04-14 at 9.35.03 PM.jpeg',
  '/images/WhatsApp Image 2026-04-14 at 9.35.03 PM (1).jpeg',
  '/images/WhatsApp Image 2026-04-14 at 9.35.03 PM (2).jpeg',
  '/images/WhatsApp Image 2026-04-14 at 9.35.04 PM - Copy.jpeg',
  '/images/WhatsApp Image 2026-04-14 at 9.35.04 PM (1) - Copy - Copy.jpeg',
  '/images/WhatsApp Image 2026-04-14 at 9.35.04 PM (1) - Copy.jpeg',
  '/images/WhatsApp Image 2026-04-14 at 9.35.05 PM - Copy.jpeg',
  '/images/WhatsApp Image 2026-04-14 at 9.35.05 PM (1) - Copy - Copy.jpeg',
  '/images/WhatsApp Image 2026-04-14 at 9.35.05 PM (1) - Copy.jpeg',
  '/images/WhatsApp Image 2026-04-14 at 9.35.05 PM (2) - Copy - Copy.jpeg',
  '/images/WhatsApp Image 2026-04-14 at 9.35.05 PM (2) - Copy.jpeg',
  '/images/WhatsApp Image 2026-04-14 at 9.35.06 PM - Copy - Copy.jpeg',
  
].map((src, i) => ({
  src: encodeURI(src),
  cat: 'camp',
  label: `Community camp image ${i + 1}`,
}));

// ── SCROLL HELPER ─────────────────────────────────────
function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

// ════════════════════════════════════════════════════════
// NAV
// ════════════════════════════════════════════════════════
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    ['home','Home'],['about','About'],['services','Services'],
    ['gallery','Gallery'],['reviews','Reviews'],['contact','Contact'],
  ];

  const go = (id) => { scrollTo(id); setMenuOpen(false); };

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-brand">
          <div className="nav-logo-circle">S</div>
          <div>
            <div className="nav-name">Dr. Sania A Sayed</div>
            <div className="nav-title">Eye Specialist &amp; Surgeon</div>
          </div>
        </div>
        <div className="nav-links">
          {links.map(([id,label]) => (
            <a key={id} onClick={() => go(id)}>{label}</a>
          ))}
          <a className="nav-cta" onClick={() => window.location.href = 'https://wa.me/917506013788?text=appointment%20confirmation'}>Book Appointment</a>
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(o => !o)}>
          <span/><span/><span/>
        </button>
      </nav>
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {links.map(([id,label]) => (
          <a key={id} onClick={() => go(id)}>{label}</a>
        ))}
        <a className="nav-cta" onClick={() => window.location.href = 'https://wa.me/917506013788?text=appointment%20confirmation'}>Book Appointment</a>
      </div>
    </>
  );
}

// ════════════════════════════════════════════════════════
// HERO
// ════════════════════════════════════════════════════════
function Hero() {
  return (
    <section id="home">
      <div className="hero-bg-dots" />
      <div className="hero-bg-circle" />
      <div className="hero-inner">
        <div className="hero-text">
          <div className="hero-badge"><span />Eye Specialist &amp; Surgeon, Mumbai</div>
          <h1 className="hero-h1">Caring for Your<br /><em>Vision</em> &amp; Eye Health</h1>
          <div className="hero-credentials">
            {['MBBS','D.O.M.S. (Gold Medalist)','Fellow – Asia','KJ Somaiya Faculty'].map(c => (
              <span key={c} className="cred-pill">{c}</span>
            ))}
          </div>
          <p className="hero-desc">
            Dr. Sania Afroz Sayed is a dedicated ophthalmologist with expertise in cataract surgery,
            oculoplasty, paediatric eye care, and comprehensive eye examinations — committed to
            restoring and preserving the gift of sight.
          </p>
          <div className="hero-btns">
            <a className="btn-primary" onClick={() => window.location.href = 'https://wa.me/917506013788?text=appointment%20confirmation'}>Book Appointment</a>
            <a className="btn-secondary" onClick={() => scrollTo('quiz')}>Take Vision Quiz</a>
          </div>
          <div className="hero-stats">
            {[['500+','Surgeries Performed'],['8+','Years Experience'],['1000+','Patients Treated']].map(([n,l]) => (
              <div key={l} className="hero-stat">
                <div className="num">{n}</div>
                <div className="lbl">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-img-wrap">
          <div className="hero-float-badge2">
            <div className="float2-num">Gold</div>
            <div className="float2-lbl">Medalist D.O.M.S.</div>
          </div>
          <div className="hero-img-card">
            <img src={IMGS.headshot} alt="Dr. Sania Afroz Sayed" />
          </div>
          <div className="hero-float-badge">
            <div className="float-icon">👁️</div>
            <div className="float-txt">
              <div className="ftop">International Speaker</div>
              <div className="fbot">Ophthalmology Conferences</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════
// ABOUT
// ════════════════════════════════════════════════════════
function About() {
  const creds = [
    { icon:'🎓', title:'MBBS & D.O.M.S. – Gold Medalist', sub:'K.J. Somaiya Medical College, Mumbai' },
    { icon:'🌍', title:'Fellow in Ophthalmology (Asia)',   sub:'International Ophthalmology Fellowship' },
    { icon:'🏥', title:'Faculty – Ophthalmology Dept.',   sub:'KJ Somaiya Medical College & Research Centre' },
    { icon:'🎤', title:'International Speaker & Presenter',sub:'Presented at global ophthalmology conferences in Europe' },
  ];
  return (
    <section id="about">
      <div className="about-grid">
        <div className="about-imgs">
          <div className="about-img-main">
            <img src={IMGS.headshot2} alt="Dr. Sania" />
          </div>
          <div className="about-img-sm">
            <img src={IMGS.conference} alt="International Conference" />
          </div>
          <div className="about-img-sm">
            <img src={IMGS.surgery} alt="Eye Surgery" />
          </div>
        </div>
        <div className="about-content">
          <div className="section-label">About the Doctor</div>
          <h2 className="section-title">Dr. Sania Afroz Sayed</h2>
          <p>Dr. Sania Afroz Sayed is a highly qualified ophthalmologist and faculty member at K.J. Somaiya
             Medical College &amp; Research Centre, Mumbai. She completed her MBBS and D.O.M.S. with a Gold
             Medal, reflecting her exceptional academic dedication.</p>
          <p>She is a Fellow in Ophthalmology (Asia) and has represented India at international conferences,
             presenting research on pathophysiology and management of complex eye conditions. She is deeply
             committed to community eye care through health camps and outreach programs.</p>
          <div className="credentials-list">
            {creds.map(c => (
              <div key={c.title} className="cred-item">
                <div className="cred-item-icon">{c.icon}</div>
                <div className="cred-item-text">
                  <div className="ct">{c.title}</div>
                  <div className="cs">{c.sub}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="about-achievements">
            {[['Gold','Medal – D.O.M.S.'],['500+','Surgeries'],['10+','Health Camps'],['3+','Publications']].map(([n,l]) => (
              <div key={l} className="achievement-card">
                <div className="ac-num">{n}</div>
                <div className="ac-lbl">{l}</div>
              </div>
            ))}
            <div className="achievement-card achievement-award">
              <img src={IMGS.awardPhoto} alt="Dr. Sania receiving award" />
              <div className="ac-lbl">Global Triumph Foundation Award</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════
// SERVICES
// ════════════════════════════════════════════════════════
const SERVICES = [
  { icon:'👁️', title:'Cataract Surgery',        desc:'Advanced phacoemulsification and small incision cataract surgery (SICS) for clear, restored vision with minimal downtime.' },
  { icon:'✂️', title:'Oculoplasty',             desc:'Surgical correction of ptosis, chalazion, eyelid tumours, and orbital conditions for function and aesthetics.' },
  { icon:'🔬', title:'Paediatric Eye Care',     desc:'Specialised care for children including amblyopia, congenital cataract, squint correction and vision screening.' },
  { icon:'💧', title:'Glaucoma Management',     desc:'Diagnosis and long-term management of glaucoma with medical therapy, laser treatment, and surgical intervention.' },
  { icon:'🩺', title:'Comprehensive Eye Exam',  desc:'Full ocular health assessment including refraction, slit lamp examination, fundus evaluation, and IOP measurement.' },
  { icon:'🌐', title:'Retina & Diabetic Eye',   desc:'Screening and treatment of diabetic retinopathy, macular degeneration, and other posterior segment conditions.' },
  { icon:'🦷', title:'Dry Eye Treatment',       desc:'Diagnosis and customised management plans for chronic dry eye syndrome using latest therapeutic options.' },
  { icon:'📱', title:'Teleconsultation',        desc:'Online video consultations for follow-ups, prescription renewals, and initial assessment from the comfort of your home.' },
];

function Services() {
  return (
    <section id="services">
      <div className="services-inner">
        <div className="services-header">
          <div className="section-label">What We Treat</div>
          <h2 className="section-title">Our Eye Care Services</h2>
          <p className="section-desc">Comprehensive ophthalmology care using modern technology and evidence-based treatments for all age groups.</p>
        </div>
        <div className="services-grid">
          {SERVICES.map(s => (
            <div key={s.title} className="service-card">
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="service-link">Learn more →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════
// GALLERY
// ════════════════════════════════════════════════════════
const GALLERY_ITEMS = [
  { src: IMGS.surgery,     cat:'clinical',    label:'Performing cataract surgery under Carl Zeiss microscope' },
  { src: IMGS.conference,  cat:'conference',  label:'Presenting at International Ophthalmology Conference, Europe' },
  { src: IMGS.ptosisBa,    cat:'results',     label:'Ptosis correction – Before & After results' },
  { src: IMGS.campDesk,    cat:'camp',        label:'Free eye care camp – patient consultation' },
  { src: IMGS.cataractBa,  cat:'results',     label:'Paediatric cataract – IOL implant before & after' },
  { src: IMGS.campConsult, cat:'camp',        label:'Health camp patient examination' },
  { src: IMGS.wellness1,   cat:'camp',        label:'Community health camp at Wellness Polyclinic' },
  { src: IMGS.wellness2,   cat:'camp',        label:'Recognition at Wellness Polyclinic & Day Care Centre' },
  { src: IMGS.headshot,    cat:'clinical',    label:'Dr. Sania Afroz Sayed – Ophthalmologist & Eye Surgeon' },
];

function Gallery() {
  const [activeTab, setActiveTab] = useState('all');
  const [lightbox, setLightbox] = useState(null);
  const tabs = [['all','All Photos'],['clinical','Clinical Work'],['conference','Conferences'],['camp','Health Camps'],['results','Patient Results']];
  const shown = GALLERY_ITEMS.filter(i => activeTab === 'all' || i.cat === activeTab);

  return (
    <section id="gallery">
      {lightbox && (
        <div className="lightbox open" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          <img src={lightbox} alt="" onClick={e => e.stopPropagation()} />
        </div>
      )}
      <div className="gallery-inner">
        <div className="gallery-header">
          <div className="section-label">Photo Gallery</div>
          <h2 className="section-title">Work &amp; Achievements</h2>
        </div>
        <div className="gallery-tabs">
          {tabs.map(([k,l]) => (
            <button key={k} className={`gallery-tab${activeTab===k?' active':''}`} onClick={() => setActiveTab(k)}>{l}</button>
          ))}
        </div>
        <div className="gallery-grid">
          {shown.map((item, i) => (
            <div key={i} className="gallery-item" onClick={() => setLightbox(item.src)}>
              <img src={item.src} alt={item.label} />
              <div className="gallery-overlay"><p>{item.label}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════
// APPOINTMENT
// ════════════════════════════════════════════════════════
function Appointment() {
  const [form, setForm] = useState({ firstName:'', lastName:'', phone:'', email:'', date:'', time:'Morning (11am–1pm)', service:'General Eye Examination', notes:'' });

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = () => {
    const message = `Appointment Request:\nName: ${form.firstName} ${form.lastName}\nPhone: ${form.phone}\nEmail: ${form.email}\nPreferred Date: ${form.date}\nPreferred Time: ${form.time}\nService: ${form.service}\nNotes: ${form.notes}`;
    const encodedMessage = encodeURIComponent(message);
    window.location.href = `https://wa.me/917506013788?text=${encodedMessage}`;
  };

  return (
    <section id="appointment">
      <div className="appt-bg" />
      <div className="appt-inner">
        <div className="appt-left">
          <div className="section-label">Schedule a Visit</div>
          <h2 className="section-title">Book Your Appointment</h2>
          <p>Whether you need a routine eye check-up, treatment for an eye condition, or a surgical consultation — we're here to help.</p>
          <div className="appt-info-list">
            {[
              ['📍','Location','KJ Somaiya Medical College, Sion, Mumbai – 400022'],
              ['📞','Phone / WhatsApp','+91 75060 13788'],
              ['🕐','OPD Hours','Mon–Sat: 11:00 AM – 5:00 PM'],
              ['📧','Email','dr.sania@kjsmc.edu.in'],
            ].map(([icon,label,val]) => (
              <div key={label} className="appt-info-item">
                <div className="appt-info-icon">{icon}</div>
                <div className="appt-info-text">
                  <div className="ait">{label}</div>
                  <div className="aiv">{val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="appt-form">
          <h3>Schedule Appointment</h3>
          <p>Fill in your details and we'll confirm within 24 hours.</p>
              <div className="form-row">
                <div className="form-group"><label>First Name</label><input name="firstName" placeholder="Ayesha" value={form.firstName} onChange={handleChange} /></div>
                <div className="form-group"><label>Last Name</label><input name="lastName" placeholder="Khan" value={form.lastName} onChange={handleChange} /></div>
              </div>
              <div className="form-row">
                <div className="form-group"><label>Phone</label><input name="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} /></div>
                <div className="form-group"><label>Email</label><input name="email" type="email" placeholder="you@email.com" value={form.email} onChange={handleChange} /></div>
              </div>
              <div className="form-row">
                <div className="form-group"><label>Preferred Date</label><input name="date" type="date" value={form.date} onChange={handleChange} /></div>
                <div className="form-group"><label>Preferred Time</label>
                  <select name="time" value={form.time} onChange={handleChange}>
                    <option>Morning (11am–1pm)</option>
                    <option>Afternoon (2pm–4pm)</option>
                    <option>Evening (4pm–5pm)</option>
                  </select>
                </div>
              </div>
              <div className="form-group"><label>Service Required</label>
                <select name="service" value={form.service} onChange={handleChange}>
                  {['General Eye Examination','Cataract Consultation','Oculoplasty / Eyelid Surgery','Paediatric Eye Care','Glaucoma Assessment','Retina / Diabetic Eye Check','Dry Eye Treatment','Teleconsultation'].map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div className="form-group"><label>Any Symptoms / Notes</label>
                <textarea name="notes" placeholder="Describe your symptoms or any relevant information..." value={form.notes} onChange={handleChange} />
              </div>
              <button className="submit-btn" onClick={handleSubmit}>Confirm Appointment ✓</button>
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════
// VISION QUIZ
// ════════════════════════════════════════════════════════
const QUESTIONS = [
  { q:'How often do you experience blurry or hazy vision?', s:'Even occasional blurriness is worth checking.', opts:['Never','Occasionally','Often','Almost always'] },
  { q:'Do you have difficulty seeing in low-light or night conditions?', s:'Night vision issues can indicate retinal or vitamin A problems.', opts:['No, my night vision is fine','Slight difficulty','Moderate difficulty','Significant difficulty'] },
  { q:'How many hours do you spend on screens daily?', s:'Prolonged screen use causes digital eye strain.', opts:['Less than 2 hours','2–4 hours','4–8 hours','More than 8 hours'] },
  { q:'Do you experience eye pain, redness, or irritation frequently?', s:'Persistent irritation should be evaluated.', opts:['Never','Rarely','Sometimes','Frequently'] },
  { q:'When did you last have a comprehensive eye examination?', s:'Regular check-ups are key to early detection.', opts:['Within the last year','1–2 years ago','3–5 years ago','Never / Don\'t remember'] },
  { q:'Do you have a family history of glaucoma or macular degeneration?', s:'Family history significantly increases your risk.', opts:['No family history','Not sure','One family member','Multiple family members'] },
  { q:'Do you experience frequent headaches, especially after reading or close work?', s:'This could indicate uncorrected refractive error.', opts:['Never','Occasionally','Often','Almost daily'] },
  { q:'Do you have diabetes, hypertension, or another systemic condition?', s:'Systemic conditions can directly affect eye health.', opts:['None','Hypertension only','Diabetes only','Both / Multiple conditions'] },
];

function Quiz() {
  const [idx, setIdx] = useState(0);
  const [scores, setScores] = useState({});
  const [done, setDone] = useState(false);

  const select = (i) => setScores(s => ({ ...s, [idx]: i }));
  const next = () => {
    if (idx < QUESTIONS.length - 1) setIdx(i => i + 1);
    else setDone(true);
  };
  const prev = () => setIdx(i => i - 1);
  const reset = () => { setIdx(0); setScores({}); setDone(false); };

  const pct = ((idx + 1) / QUESTIONS.length) * 100;
  const q = QUESTIONS[idx];

  let result = null;
  if (done) {
    const total = Object.values(scores).reduce((a, b) => a + b, 0);
    const max = QUESTIONS.length * 3;
    const r = total / max;
    if (r < 0.3) result = { icon:'🌟', score:'Excellent Eye Health', title:'Your Eyes Appear Healthy!', desc:'Your responses suggest your eyes are in good shape. Keep up with annual check-ups and protect your eyes from UV and screen strain.' };
    else if (r < 0.6) result = { icon:'👀', score:'Moderate Concern', title:'Some Signs Worth Watching', desc:'Your responses indicate a few areas of concern. We recommend scheduling a comprehensive eye examination with Dr. Sania to rule out early-stage conditions.' };
    else result = { icon:'⚠️', score:'Attention Needed', title:'Please See an Eye Doctor Soon', desc:'Your responses suggest you may have underlying eye health issues that need prompt attention. Please book an appointment with Dr. Sania as soon as possible.' };
  }

  return (
    <section id="quiz">
      <div className="quiz-inner">
        <div className="quiz-header">
          <div className="section-label">Eye Health Check</div>
          <h2 className="section-title">Quick Vision Screening Quiz</h2>
          <p style={{ fontSize:15, color:'var(--text2)', maxWidth:500, margin:'0 auto', lineHeight:1.6 }}>
            Answer a few quick questions to get a sense of your eye health. This is not a medical diagnosis — always consult your eye doctor.
          </p>
        </div>
        <div className="quiz-card">
          {!done ? (
            <>
              <div className="quiz-progress">
                <div className="quiz-progress-bar"><div className="quiz-progress-fill" style={{ width:`${pct}%` }} /></div>
                <span>Question {idx + 1} of {QUESTIONS.length}</span>
              </div>
              <div className="quiz-question">
                <h3>{q.q}</h3>
                <p>{q.s}</p>
                <div className="quiz-options">
                  {q.opts.map((o, i) => (
                    <button key={o} className={`quiz-option${scores[idx] === i ? ' selected' : ''}`} onClick={() => select(i)}>{o}</button>
                  ))}
                </div>
              </div>
              <div className="quiz-nav">
                <button className="quiz-btn quiz-btn-prev" onClick={prev} style={{ visibility: idx > 0 ? 'visible' : 'hidden' }}>← Back</button>
                <button className="quiz-btn quiz-btn-next" onClick={next} disabled={scores[idx] === undefined}>
                  {idx === QUESTIONS.length - 1 ? 'See Results →' : 'Next →'}
                </button>
              </div>
            </>
          ) : (
            <div className="quiz-result">
              <div className="result-icon">{result.icon}</div>
              <div className="result-score">{result.score}</div>
              <h3>{result.title}</h3>
              <p>{result.desc}</p>
              <a className="btn-primary" onClick={() => window.location.href = 'https://wa.me/917506013788?text=appointment%20confirmation'} style={{ display:'inline-block', marginBottom:16 }}>Book an Eye Check-up</a><br />
              <button className="quiz-btn quiz-btn-prev" onClick={reset} style={{ marginTop:12 }}>Retake Quiz</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════
// REVIEWS
// ════════════════════════════════════════════════════════
const REVIEWS = [
  { initials:'RK', name:'Rajan Kulkarni',   meta:'Cataract Surgery · Mumbai',         text:'"Dr. Sania operated on my mother\'s cataract and the results were incredible. She explained everything so patiently and the surgery was smooth. We are extremely grateful!"' },
  { initials:'NP', name:'Nadia Patel',       meta:'Paediatric Oculoplasty · Thane',    text:'"My son had a drooping eyelid since birth. Dr. Sania performed the ptosis correction and the transformation was amazing. She is very skilled and genuinely caring."' },
  { initials:'SS', name:'Sunita Sharma',     meta:'General Consultation · Sion',       text:'"I was nervous about my eye surgery but Dr. Sania made me feel so comfortable. She is incredibly knowledgeable yet speaks in a way patients easily understand."' },
  { initials:'MK', name:'Mohammed Khan',     meta:'Health Camp · Dharavi',             text:'"Attended Dr. Sania\'s free eye camp in our area. She is dedicated to helping people regardless of their background. A truly compassionate doctor."' },
  { initials:'FA', name:'Fatima Ansari',     meta:'Paediatric Cataract · Mumbai',      text:'"My 3-year-old had a cataract and we were devastated. Dr. Sania performed the surgery with great precision and he can see clearly now. We call her a miracle worker!"' },
  { initials:'VD', name:'Vivek Desai',       meta:'Teleconsultation · Pune',           text:'"The teleconsultation was very convenient. Dr. Sania reviewed my reports online and adjusted my treatment plan. Saved me a trip to the hospital. Great service!"' },
];

function Reviews() {
  return (
    <section id="reviews">
      <div className="reviews-inner">
        <div className="reviews-header">
          <div className="section-label">Patient Stories</div>
          <h2 className="section-title">What Our Patients Say</h2>
        </div>
        <div className="reviews-grid">
          {REVIEWS.map(r => (
            <div key={r.name} className="review-card">
              <div className="review-stars">⭐⭐⭐⭐⭐</div>
              <p className="review-text">{r.text}</p>
              <div className="review-author">
                <div className="review-avatar">{r.initials}</div>
                <div>
                  <div className="review-name">{r.name}</div>
                  <div className="review-meta">{r.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="reviews-summary">
          {[['4.9','Average Rating'],['200+','Happy Patients'],['100%','Recommend Rate'],['10+','Health Camps']].map(([n,l]) => (
            <div key={l} className="rs-item">
              <div className="rs-num">{n}</div>
              <div className="rs-lbl">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/*
// ════════════════════════════════════════════════════════
// BLOG
// ════════════════════════════════════════════════════════
const POSTS = [
  { emoji:'👁️', tag:'Cataract',  date:'March 2025',    title:'10 Early Signs of Cataract You Should Never Ignore', desc:'Blurry vision, glare from lights, and fading colours — learn the early warning signs that could indicate cataracts forming.', bg:'linear-gradient(135deg,#E1F5EE,#9FE1CB)' },
  { emoji:'👶', tag:'Children',  date:'February 2025', title:"Why Your Child's First Eye Check-Up Should Be Before Age 3", desc:'Paediatric eye conditions caught early lead to dramatically better outcomes. Here\'s what every parent should know.', bg:'linear-gradient(135deg,#EEEDFE,#AFA9EC)' },
  { emoji:'📱', tag:'Lifestyle', date:'January 2025',  title:'Screen Time & Your Eyes: The Truth in 2025', desc:'With increasing screen exposure, digital eye strain is becoming an epidemic. Here are science-backed ways to protect your vision.', bg:'linear-gradient(135deg,#FAEEDA,#EF9F27)' },
];

function Blog() {
  return (
    <section id="blog">
      <div className="blog-inner">
        <div className="blog-header">
          <div>
            <div className="section-label">Eye Health Tips</div>
            <h2 className="section-title">From Dr. Sania's Desk</h2>
          </div>
          <a href="#" style={{ fontSize:14, fontWeight:600, color:'var(--teal)' }}>View All Articles →</a>
        </div>
        <div className="blog-grid">
          {POSTS.map(p => (
            <div key={p.title} className="blog-card">
              <div className="blog-thumb" style={{ background: p.bg }}>
                <div className="blog-thumb-bg">{p.emoji}</div>
                <div className="blog-tag">{p.tag}</div>
              </div>
              <div className="blog-body">
                <div className="blog-date">{p.date}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="blog-read">Read Article →</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
*/

// ════════════════════════════════════════════════════════
// PATIENT LOGIN
// ════════════════════════════════════════════════════════
function PatientLogin() {
  const [tab, setTab] = useState('login');
  const [accountCreated, setAccountCreated] = useState(false);
  const features = [
    ['📋','View past prescriptions and reports'],
    ['📅','Track upcoming appointments'],
    ['💬','Message Dr. Sania directly'],
    ['📊','Monitor your vision health history'],
    ['💊','Get medication reminders'],
  ];

  const handleCreateAccount = () => {
    setAccountCreated(true);
    scrollTo('appointment');
    setTimeout(() => setAccountCreated(false), 3000);
  };

  return (
    <section id="patient-login">
      <div className="login-inner">
        <div className="login-info">
          <div className="section-label">Patient Portal</div>
          <h2>Manage Your Eye Health Online</h2>
          <p>Access your prescriptions, appointment history, test reports, and book follow-up visits — all from one place.</p>
          <div className="login-features">
            {features.map(([icon, text]) => (
              <div key={text} className="login-feature">
                <div className="lf-icon">{icon}</div>
                <div className="lf-text">{text}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="login-card">
          <div className="login-tabs">
            <button className={`login-tab${tab==='login'?' active':''}`} onClick={() => setTab('login')}>Patient Login</button>
            <button className={`login-tab${tab==='register'?' active':''}`} onClick={() => setTab('register')}>New Patient</button>
          </div>
          {tab === 'login' ? (
            <div>
              <div className="form-group"><label>Mobile Number / Email</label><input type="text" placeholder="+91 98765 43210" /></div>
              <div className="form-group"><label>Password</label><input type="password" placeholder="••••••••" /></div>
              <button className="submit-btn" style={{ marginBottom:12 }}>Login to Portal</button>
              <p style={{ textAlign:'center', fontSize:13, color:'var(--text3)' }}>Forgot password? <a href="#" style={{ color:'var(--teal)', fontWeight:500 }}>Reset here</a></p>
            </div>
          ) : (
            <div>
              <div className="form-row">
                <div className="form-group"><label>First Name</label><input type="text" placeholder="Ayesha" /></div>
                <div className="form-group"><label>Last Name</label><input type="text" placeholder="Khan" /></div>
              </div>
              <div className="form-group"><label>Mobile Number</label><input type="tel" placeholder="+91 98765 43210" /></div>
              <div className="form-group"><label>Email Address</label><input type="email" placeholder="you@email.com" /></div>
              <div className="form-group"><label>Date of Birth</label><input type="date" /></div>
              <button type="button" className="submit-btn" onClick={handleCreateAccount}>Create Patient Account</button>
              {accountCreated && (
                <div className="form-success" style={{ marginTop:16 }}>
                  <div className="fs-icon">✅</div>
                  <h4>Account Created!</h4>
                  <p>Thanks! Please continue to book your appointment in the Appointment section.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════
// CONTACT
// ════════════════════════════════════════════════════════
function Contact() {
  const [msgSent, setMsgSent] = useState(false);
  return (
    <section id="contact">
      <div className="contact-inner">
        <div className="contact-info">
          <div className="section-label">Find Us</div>
          <h2 className="section-title">Contact &amp; Location</h2>
          <p className="section-desc">We're located at KJ Somaiya Medical College, easily accessible from Sion and Central Mumbai.</p>
          <div className="contact-details">
            {[
              ['📍','Address','Dept. of Ophthalmology, KJ Somaiya Medical College & Research Centre, Sion, Mumbai – 400022'],
              ['📞','Phone','+91 98XXX XXXXX'],
              ['✉️','Email','dr.sania@kjsmc.edu.in'],
            ].map(([icon, label, val]) => (
              <div key={label} className="contact-detail-item">
                <div className="cd-icon">{icon}</div>
                <div className="cd-text">
                  <div className="cdt">{label}</div>
                  <div className="cdv">{val}</div>
                </div>
              </div>
            ))}
          </div>
          <h4 style={{ fontSize:15, color:'var(--navy)', marginBottom:16 }}>OPD Timings</h4>
          <table className="timing-table">
            <tbody>
              <tr><td>Monday – Friday</td><td>11:00 AM – 5:00 PM</td></tr>
              <tr><td>Saturday</td><td>11:00 AM – 2:00 PM</td></tr>
              <tr><td>Sunday</td><td>Closed (Emergency Only)</td></tr>
            </tbody>
          </table>
          <div className="social-links">
            <a className="social-link" href="https://www.linkedin.com/in/dr-sania-sayed-07a145292/" target="_blank" rel="noreferrer" title="LinkedIn">💼</a>
            <a className="social-link" href="#" title="WhatsApp">💬</a>
            <a className="social-link" href="#" title="Instagram">📸</a>
            <a className="social-link" href="#" title="YouTube">▶️</a>
          </div>
        </div>
        <div>
          <div className="map-placeholder">
            <div style={{ fontSize:48 }}>🗺️</div>
            <p>KJ Somaiya Medical College</p>
            <p style={{ fontSize:13, color:'var(--text3)' }}>Sion, Mumbai – 400022</p>
            <a className="map-btn" href="https://maps.google.com/?q=KJ+Somaiya+Medical+College+Sion+Mumbai" target="_blank" rel="noreferrer">Open in Google Maps ↗</a>
          </div>
          <div style={{ marginTop:24, background:'var(--cream2)', borderRadius:16, padding:24 }}>
            <h4 style={{ fontSize:15, color:'var(--navy)', marginBottom:16 }}>Send a Quick Message</h4>
            <div className="form-group"><label>Your Name</label><input type="text" placeholder="Full name" /></div>
            <div className="form-group"><label>Your Message</label><textarea placeholder="Hi Dr. Sania, I'd like to ask about..." style={{ minHeight:100 }} /></div>
            <button className="submit-btn" onClick={() => { setMsgSent(true); setTimeout(() => setMsgSent(false), 3000); }}
              style={{ background: msgSent ? 'var(--teal-dark)' : undefined }}>
              {msgSent ? 'Message Sent ✓' : 'Send Message'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════
// FOOTER
// ════════════════════════════════════════════════════════
function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div style={{ display:'flex', alignItems:'center', gap:12 }}>
            <div className="nav-logo-circle">S</div>
            <div>
              <div style={{ fontFamily:"'Playfair Display',serif", fontSize:16, fontWeight:600 }}>Dr. Sania Afroz Sayed</div>
              <div style={{ fontSize:12, color:'var(--teal-mid)' }}>Ophthalmologist &amp; Eye Surgeon</div>
            </div>
          </div>
          <p>MBBS, D.O.M.S. (Gold Medalist), Fellow (Asia). Dedicated to preserving and restoring vision for every patient, from children to seniors.</p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          {[['home','Home'],['about','About Dr. Sania'],['services','Services'],['gallery','Gallery']].map(([id,l]) => (
            <a key={id} onClick={() => scrollTo(id)}>{l}</a>
          ))}
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          {['Cataract Surgery','Oculoplasty','Paediatric Eye Care','Teleconsultation','Glaucoma'].map(s => (
            <a key={s} onClick={() => scrollTo('services')}>{s}</a>
          ))}
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <a>KJ Somaiya Medical College, Sion, Mumbai</a>
          <a>+91 98XXX XXXXX</a>
          <a>dr.sania@kjsmc.edu.in</a>
          <a onClick={() => window.location.href = 'https://wa.me/917506013788?text=appointment%20confirmation'}>Book Appointment →</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Dr. Sania Afroz Sayed. All Rights Reserved.</p>
        <p>Designed with <span className="teal">♥</span> for better eye health</p>
      </div>
    </footer>
  );
}

// ════════════════════════════════════════════════════════
// APP ROOT
// ════════════════════════════════════════════════════════
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Appointment />
      <Quiz />
      <Reviews />
      {/* <Blog /> */}
      <PatientLogin />
      <Contact />
      <Footer />
      <a className="whatsapp-float" href="https://wa.me/917506013788?text=appointment%20confirmation" target="_blank" rel="noreferrer" title="WhatsApp Dr. Sania">💬</a>
    </>
  );
}
