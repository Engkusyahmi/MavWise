/* ==========================================================================
   MavWise - behavior
   i18n (EN/BM), theme toggle, mobile menu, IntersectionObserver scroll reveal.
   No external dependencies.
   ========================================================================== */

const I18N = {
  en: {
    nav: { reality:"The Gap", how:"The Cycle", programs:"Get Involved", community:"Founding Partners", cta:"Become a Founding Partner" },
    hero: {
      eyebrow:"Phase Zero · Applications open for our first 100",
      headline:"University prepares you academically. MavWise prepares you for life.",
      sub:"MavWise is a Youth Development Ecosystem that bridges the gap between academic learning and the real world — through practical learning, real-world application and meaningful opportunities.",
      ctaPrimary:"Become a Founding Partner", ctaSecondary:"Explore Practice Engines\u2122",
      stat1:"Founding Partners", stat2:"Soft launch", stat3:"University leaders",
      card1:"AI & Technology", card2:"Founding Team Mentorship"
    },
    reality: {
      eyebrow:"The gap",
      headline:"Knowledge alone is no longer enough.",
      body:"Traditional education has successfully equipped generations with knowledge, but today's employers look for graduates who can communicate, collaborate, solve problems and create value from day one. That's why Practice Engines\u2122 exist \u2014 not to replace education, but to complement it.",
      withoutLabel:"Without Practice Engines\u2122", withLabel:"With Practice Engines\u2122",
      without1:"Theory learned, rarely applied", without2:"Certificates, but no lived experience", without3:"Capabilities only developed after entering the workforce",
      with1:"Every lesson becomes an opportunity to practise", with2:"Real conversations, real challenges, real responsibility", with3:"Confidence built through consistent action, not theory"
    },
    how: {
      eyebrow:"The MavWise cycle", headline:"Learn. Apply. Earn. Grow.", sub:"Learning only becomes valuable when it's applied. Every participant continuously moves through one cycle of growth.",
      card1Title:"Learn", card1Body:"Acquire practical knowledge through workshops, coaching, AI-powered learning and financial education.",
      card2Title:"Apply", card2Body:"Immediately practise every capability through structured real-world experiences inside our Practice Engines\u2122.",
      card3Title:"Earn", card3Body:"Create meaningful value while developing experience, reputation and real opportunities.",
      card4Title:"Grow", card4Body:"Build stronger capability, confidence, leadership and character \u2014 then begin the cycle again."
    },
    why: {
      eyebrow:"Future-ready capabilities", headline:"You don't just collect certificates. You build capability.",
      f1Title:"Leadership", f1Body:"Develop the initiative and responsibility future-ready leaders are built on, whether or not you hold a title.",
      f2Title:"Communication", f2Body:"Every conversation, presentation and challenge strengthens how clearly you express and connect.",
      f3Title:"Personal finance", f3Body:"Build the financial literacy and confidence that formal education rarely teaches.",
      f4Title:"AI & technology", f4Body:"Gain hands-on exposure to the AI tools and technology reshaping every industry.",
      f5Title:"Real-world application", f5Body:"Practise inside real Practice Engines\u2122, not textbook exercises or simulations.",
      f6Title:"Mentorship", f6Body:"Direct guidance from the MavWise Founding Team as you learn, apply and grow."
    },
    community: {
      eyebrow:"Phase Zero · First 100", headline:"Become one of our first 100 Founding Partners.",
      body:"We're not looking for thousands of people. We're looking for the right people \u2014 student leaders who believe the future is created by those who choose to learn, apply and take action, before MavWise's official Soft Launch.",
      tag1:"Student leadership", tag2:"Real-world application", tag3:"Founding Team mentorship", tag4:"Priority access",
      cardLabel:"Founding cohort", stat1l:"Founding Partners", stat2l:"Soft launch", stat3l:"University leaders"
    },
    programs: {
      eyebrow:"Get involved", headline:"Two ways to start, one ecosystem to grow with.", certified:"Applications open", join:"Apply",
      p1duration:"First 100", p1name:"Founding Partner", p1desc:"Join the founding generation of university student leaders shaping MavWise from day one, with mentorship, priority access and real-world application through Practice Engines\u2122.",
      p1skill1:"Leadership", p1skill2:"Practice Engines\u2122", p1skill3:"Mentorship",
      p3duration:"Ongoing", p3name:"Practice Engines\u2122", p3desc:"Structured real-world learning environments where every capability you build gets applied through real conversations, challenges and responsibilities.",
      p3skill1:"Learn", p3skill2:"Apply", p3skill3:"Grow",
      p3cert:"Core ecosystem", p3join:"Discover"
    },
    testi: {
      eyebrow:"Our philosophy", headline:"Confidence is built, never downloaded.",
      q1:"Every conversation develops communication. Every presentation develops confidence.",
      n1:"Communication", r1:"Practice Engines\u2122 principle",
      q2:"Every challenge develops resilience. Every rejection develops emotional strength.",
      n2:"Resilience", r2:"Practice Engines\u2122 principle",
      q3:"Every success creates momentum. Every experience prepares you for greater opportunities.",
      n3:"Momentum", r3:"Practice Engines\u2122 principle"
    },
    cta: { headline:"Applications for our first 100 Founding Partners are open.", sub:"Cohort 2026. Learn beyond the classroom, apply what you learn in the real world, and grow alongside an ambitious community.", button:"Become a Founding Partner" },
    footer: { tagline:"A Youth Development Ecosystem preparing future-ready generations through practical learning, real-world application and meaningful opportunities.", explore:"Explore", follow:"Follow", copy:"\u00a9 2026 Maverick Intelligence Sdn. Bhd. All Rights Reserved.", made:"Phase Zero \u00b7 First 100 Founding Partners.", contact:"Contact", address:"No 11, Jalan 9/6, Taman IKS, Seksyen 9, 43650 Bandar Baru Bangi, Selangor, Malaysia" }
  },
  ms: {
    nav: { reality:"Jurang Ini", how:"Kitaran", programs:"Sertai Kami", community:"Rakan Pengasas", cta:"Jadi Rakan Pengasas" },
    hero: {
      eyebrow:"Fasa Sifar · Permohonan 100 Rakan Pengasas dibuka",
      headline:"Universiti sediakan anda dari segi akademik. MavWise sediakan anda untuk kehidupan.",
      sub:"MavWise ialah Ekosistem Pembangunan Belia yang merapatkan jurang antara pembelajaran akademik dan dunia sebenar, melalui pembelajaran praktikal, aplikasi dunia sebenar dan peluang yang bermakna.",
      ctaPrimary:"Jadi Rakan Pengasas", ctaSecondary:"Terokai Practice Engines\u2122",
      stat1:"Rakan Pengasas", stat2:"Pelancaran lembut", stat3:"Pemimpin universiti",
      card1:"AI & Teknologi", card2:"Bimbingan Pasukan Pengasas"
    },
    reality: {
      eyebrow:"Jurang ini",
      headline:"Ilmu semata-mata sudah tidak mencukupi.",
      body:"Pendidikan tradisional berjaya membekalkan ilmu kepada generasi demi generasi, tetapi majikan hari ini mencari graduan yang boleh berkomunikasi, bekerjasama, menyelesaikan masalah dan mencipta nilai sejak hari pertama. Itulah sebabnya Practice Engines\u2122 diwujudkan, bukan untuk menggantikan pendidikan, tetapi untuk melengkapkannya.",
      withoutLabel:"Tanpa Practice Engines\u2122", withLabel:"Dengan Practice Engines\u2122",
      without1:"Teori dipelajari, jarang diamalkan", without2:"Sijil, tetapi tiada pengalaman sebenar", without3:"Kemahiran hanya dibina selepas mula bekerja",
      with1:"Setiap pelajaran menjadi peluang untuk berlatih", with2:"Perbualan sebenar, cabaran sebenar, tanggungjawab sebenar", with3:"Keyakinan dibina melalui tindakan berterusan, bukan teori"
    },
    how: {
      eyebrow:"Kitaran MavWise", headline:"Belajar. Amal. Peroleh. Berkembang.", sub:"Pembelajaran hanya bernilai apabila diamalkan. Setiap peserta terus bergerak melalui satu kitaran pertumbuhan.",
      card1Title:"Belajar", card1Body:"Peroleh ilmu praktikal melalui bengkel, bimbingan (coaching), pembelajaran berkuasa AI dan pendidikan kewangan.",
      card2Title:"Amal", card2Body:"Amalkan setiap kemahiran serta-merta melalui pengalaman dunia sebenar dalam Practice Engines\u2122 kami.",
      card3Title:"Peroleh", card3Body:"Cipta nilai bermakna sambil membina pengalaman, reputasi dan peluang sebenar.",
      card4Title:"Berkembang", card4Body:"Bina kemahiran, keyakinan, kepimpinan dan sahsiah yang lebih kukuh, kemudian mulakan kitaran semula."
    },
    why: {
      eyebrow:"Kemahiran bersedia masa depan", headline:"Anda bukan sekadar kumpul sijil. Anda bina kemahiran.",
      f1Title:"Kepimpinan", f1Body:"Bina inisiatif dan tanggungjawab yang menjadi asas pemimpin masa depan, dengan atau tanpa jawatan.",
      f2Title:"Komunikasi", f2Body:"Setiap perbualan, pembentangan dan cabaran mengukuhkan cara anda menyampaikan dan berhubung.",
      f3Title:"Kewangan peribadi", f3Body:"Bina literasi dan keyakinan kewangan yang jarang diajar dalam pendidikan formal.",
      f4Title:"AI & teknologi", f4Body:"Peroleh pendedahan praktikal kepada alat AI dan teknologi yang membentuk semula setiap industri.",
      f5Title:"Aplikasi dunia sebenar", f5Body:"Berlatih dalam Practice Engines\u2122 sebenar, bukan latihan buku teks atau simulasi.",
      f6Title:"Bimbingan mentor", f6Body:"Panduan langsung daripada Pasukan Pengasas MavWise semasa anda belajar, mengamal dan berkembang."
    },
    community: {
      eyebrow:"Fasa Sifar · 100 Pertama", headline:"Jadi salah seorang daripada 100 Rakan Pengasas pertama kami.",
      body:"Kami tidak mencari beribu-ribu orang. Kami mencari orang yang tepat, iaitu pemimpin pelajar yang percaya masa depan dicipta oleh mereka yang memilih untuk belajar, mengamal dan bertindak, sebelum Pelancaran Lembut rasmi MavWise.",
      tag1:"Kepimpinan pelajar", tag2:"Aplikasi dunia sebenar", tag3:"Bimbingan Pasukan Pengasas", tag4:"Akses keutamaan",
      cardLabel:"Kohort pengasas", stat1l:"Rakan Pengasas", stat2l:"Pelancaran lembut", stat3l:"Pemimpin universiti"
    },
    programs: {
      eyebrow:"Sertai kami", headline:"Dua cara untuk bermula, satu ekosistem untuk berkembang bersama.", certified:"Permohonan dibuka", join:"Mohon",
      p1duration:"100 Pertama", p1name:"Rakan Pengasas", p1desc:"Sertai generasi pengasas pemimpin pelajar universiti yang membentuk MavWise sejak hari pertama, dengan bimbingan, akses keutamaan dan aplikasi dunia sebenar melalui Practice Engines\u2122.",
      p1skill1:"Kepimpinan", p1skill2:"Practice Engines\u2122", p1skill3:"Bimbingan Mentor",
      p3duration:"Berterusan", p3name:"Practice Engines\u2122", p3desc:"Persekitaran pembelajaran dunia sebenar yang tersusun, di mana setiap kemahiran yang anda bina diamalkan melalui perbualan, cabaran dan tanggungjawab sebenar.",
      p3skill1:"Belajar", p3skill2:"Amal", p3skill3:"Berkembang",
      p3cert:"Teras ekosistem", p3join:"Ketahui lagi"
    },
    testi: {
      eyebrow:"Falsafah kami", headline:"Keyakinan dibina, bukan dimuat turun.",
      q1:"Setiap perbualan membina komunikasi. Setiap pembentangan membina keyakinan.",
      n1:"Komunikasi", r1:"Prinsip Practice Engines\u2122",
      q2:"Setiap cabaran membina daya tahan. Setiap penolakan membina kekuatan emosi.",
      n2:"Daya Tahan", r2:"Prinsip Practice Engines\u2122",
      q3:"Setiap kejayaan mencipta momentum. Setiap pengalaman menyediakan anda untuk peluang yang lebih besar.",
      n3:"Momentum", r3:"Prinsip Practice Engines\u2122"
    },
    cta: { headline:"Permohonan untuk 100 Rakan Pengasas pertama kami kini dibuka.", sub:"Kohort 2026. Belajar melangkaui bilik kuliah, amalkan apa yang anda pelajari di dunia sebenar, dan berkembang bersama komuniti yang bercita-cita tinggi.", button:"Jadi Rakan Pengasas" },
    footer: { tagline:"Ekosistem Pembangunan Belia yang menyediakan generasi bersedia masa depan melalui pembelajaran praktikal, aplikasi dunia sebenar dan peluang yang bermakna.", explore:"Terokai", follow:"Ikuti", copy:"\u00a9 2026 Maverick Intelligence Sdn. Bhd. Hak Cipta Terpelihara.", made:"Fasa Sifar \u00b7 100 Rakan Pengasas Pertama.", contact:"Hubungi", address:"No 11, Jalan 9/6, Taman IKS, Seksyen 9, 43650 Bandar Baru Bangi, Selangor, Malaysia" }
  }
};

function getPath(obj, path){
  return path.split('.').reduce((o, k) => (o && o[k] !== undefined) ? o[k] : null, obj);
}

let currentLang = 'en';

function applyLang(lang){
  currentLang = lang;
  document.documentElement.lang = lang === 'ms' ? 'ms' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = getPath(I18N[lang], el.getAttribute('data-i18n'));
    if (val !== null) el.textContent = val;
  });
  const label = lang === 'ms' ? 'BM' : 'EN';
  const langLabel = document.getElementById('langLabel');
  const langLabelMobile = document.getElementById('langLabelMobile');
  if (langLabel) langLabel.textContent = label;
  if (langLabelMobile) langLabelMobile.textContent = lang === 'ms' ? 'BM - Switch to English' : 'EN - Switch to Bahasa Melayu';
}

function toggleLang(){
  document.body.style.opacity = '0.55';
  document.body.style.transition = 'opacity .18s ease';
  setTimeout(() => {
    applyLang(currentLang === 'en' ? 'ms' : 'en');
    document.body.style.opacity = '1';
  }, 140);
}

function applyTheme(isLight){
  document.documentElement.classList.toggle('light', isLight);
  document.getElementById('iconMoon').style.display = isLight ? 'none' : 'block';
  document.getElementById('iconSun').style.display = isLight ? 'block' : 'none';
}

function initScrollReveal(){
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  // language
  document.getElementById('langBtn')?.addEventListener('click', toggleLang);
  document.getElementById('langBtnMobile')?.addEventListener('click', toggleLang);
  const browserLang = (navigator.language || 'en').toLowerCase();
  applyLang(browserLang.startsWith('ms') ? 'ms' : 'en');

  // theme
  document.getElementById('themeBtn')?.addEventListener('click', () => {
    applyTheme(!document.documentElement.classList.contains('light'));
  });
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  applyTheme(!!prefersLight);

  // mobile menu
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  menuBtn?.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  mobileMenu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

  // scroll reveal
  initScrollReveal();

  // scroll-aware glass nav
  const siteNav = document.querySelector('.site-nav');
  let navTicking = false;
  window.addEventListener('scroll', () => {
    if (navTicking) return;
    navTicking = true;
    requestAnimationFrame(() => {
      siteNav?.classList.toggle('scrolled', window.scrollY > 12);
      navTicking = false;
    });
  }, { passive: true });

  // interactive cursor spotlight on cards (fine pointers only)
  if (window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const spotlightEls = document.querySelectorAll('.reality-card, .bento-item, .program-card, .testi-card, .community-panel');
    spotlightEls.forEach(el => {
      el.addEventListener('pointermove', (e) => {
        const rect = el.getBoundingClientRect();
        el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
        el.style.setProperty('--my', `${e.clientY - rect.top}px`);
      });
    });
  }
});