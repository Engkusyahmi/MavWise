/* ==========================================================================
   MavWise - behavior
   i18n (EN/BM), theme toggle, mobile menu, IntersectionObserver scroll reveal.
   No external dependencies.
   ========================================================================== */

const I18N = {
  en: {
    nav: { reality:"The Reality", how:"How It Works", programs:"Programs", community:"Community", cta:"Join MavWise" },
    hero: {
      eyebrow:"A movement for future builders",
      headline:"Your degree is only the beginning.",
      sub:"Transform your knowledge into real-world skills through practical projects, mentorship and future-ready experience.",
      ctaPrimary:"Join MavWise", ctaSecondary:"Explore programs",
      stat1:"Future builders", stat2:"Industry mentors", stat3:"Completion rate",
      card1:"AI Fundamentals", card2:"Live Mentorship"
    },
    reality: {
      eyebrow:"The gap",
      headline:"Education gives you knowledge. Experience gives you advantage.",
      body:"Most students graduate with theory, certificates and knowledge, but without the practical experience employers actually look for. MavWise closes that gap.",
      withoutLabel:"Without MavWise", withLabel:"With MavWise",
      without1:"Theory, but limited practical experience", without2:"Certificates, but no real portfolio", without3:"Knowledge, but low confidence",
      with1:"Real projects you actually build and ship", with2:"A live portfolio employers can see", with3:"Mentor feedback and industry-ready confidence"
    },
    how: {
      eyebrow:"The path", headline:"How MavWise works", sub:"Four stages that turn what you know into what you can do.",
      card1Title:"Learn", card1Body:"Gain future-ready knowledge across AI, technology and modern industry skills.",
      card2Title:"Build", card2Body:"Create real-world projects that become the portfolio you show employers.",
      card3Title:"Connect", card3Body:"Meet mentors, peers and communities that open real opportunities.",
      card4Title:"Grow", card4Body:"Develop the career confidence to walk into any room and deliver."
    },
    why: {
      eyebrow:"Why MavWise", headline:"You don't just collect certificates. You collect experience.",
      f1Title:"Practical projects", f1Body:"Work on briefs modeled after real industry problems, not textbook exercises.",
      f2Title:"Industry exposure", f2Body:"Sessions and challenges built alongside people already working in tech.",
      f3Title:"Mentorship", f3Body:"Direct guidance from mentors who help you avoid the mistakes they made.",
      f4Title:"Collaboration", f4Body:"Build with a team, the same way you'll build once you're hired.",
      f5Title:"Technology skills", f5Body:"AI, product and digital fluency that future employers expect by default.",
      f6Title:"Career preparation", f6Body:"Portfolio, interview readiness and a network that opens doors."
    },
    community: {
      eyebrow:"The movement", headline:"Surround yourself with future builders.",
      body:"Workshops, innovation events and a community of young people all pushing toward the same thing: being ready for what's next.",
      tag1:"Workshops", tag2:"Innovation events", tag3:"Team collaboration", tag4:"Networking",
      cardLabel:"Community snapshot", stat1l:"Members", stat2l:"Events run", stat3l:"Cities"
    },
    programs: {
      eyebrow:"Programs", headline:"Pick your path forward", certified:"Certified", join:"Join",
      p1duration:"8 weeks", p1name:"AI & Future Tech Bootcamp", p1desc:"Build fluency in AI tools, automation and the technology shaping every industry.",
      p1skill1:"AI Fundamentals", p1skill2:"Prompt Engineering", p1skill3:"Automation",
      p2duration:"10 weeks", p2name:"Digital Product Building Lab", p2desc:"Design and ship a real app or website from idea to launch, with a live portfolio piece.",
      p2skill1:"UI/UX Design", p2skill2:"No-Code & Low-Code", p2skill3:"Product Thinking",
      p3duration:"6 weeks", p3name:"Startup & Innovation Track", p3desc:"Take an idea from concept to pitch, with mentors who've built and sold real companies.",
      p3skill1:"Entrepreneurship", p3skill2:"Pitching", p3skill3:"Market Research",
      p4duration:"6 weeks", p4name:"Data & Analytics Sprint", p4desc:"Learn to read data, build dashboards and make decisions employers can trust.",
      p4skill1:"Data Literacy", p4skill2:"Dashboards", p4skill3:"Decision-Making"
    },
    testi: {
      eyebrow:"Stories", headline:"Built by people like you",
      q1:"Before MavWise, I only learned theory. Now I have projects and confidence to enter the industry.",
      n1:"Aiman Zulkifli", r1:"Digital Product Building Lab",
      q2:"The mentors treated me like a future colleague, not a student. That changed how I see myself.",
      n2:"Nurul Rahman", r2:"AI & Future Tech Bootcamp",
      q3:"I walked in with an idea and walked out with a real pitch deck, a team and momentum.",
      n3:"Sarah Yusof", r3:"Startup & Innovation Track"
    },
    cta: { headline:"Your future won't build itself.", sub:"Join a community of young builders already preparing for what's next.", button:"Join MavWise" },
    footer: { tagline:"A movement of young people preparing to build the future.", explore:"Explore", follow:"Follow", copy:"© 2026 MavWise. Building the builders.", made:"Made for the future-ready." }
  },
  ms: {
    nav: { reality:"Realiti", how:"Cara Berfungsi", programs:"Program", community:"Komuniti", cta:"Sertai MavWise" },
    hero: {
      eyebrow:"Satu pergerakan untuk pembina masa depan",
      headline:"Ijazah anda hanyalah permulaan.",
      sub:"Ubah ilmu anda menjadi kemahiran dunia sebenar melalui projek praktikal, bimbingan mentor dan pengalaman bersedia masa depan.",
      ctaPrimary:"Sertai MavWise", ctaSecondary:"Terokai program",
      stat1:"Pembina masa depan", stat2:"Mentor industri", stat3:"Kadar penyelesaian",
      card1:"Asas AI", card2:"Bimbingan Langsung"
    },
    reality: {
      eyebrow:"Jurang ini",
      headline:"Pendidikan beri anda ilmu. Pengalaman beri anda kelebihan.",
      body:"Kebanyakan pelajar bergraduat dengan teori, sijil dan ilmu, tetapi tanpa pengalaman praktikal yang dicari oleh majikan. MavWise merapatkan jurang ini.",
      withoutLabel:"Tanpa MavWise", withLabel:"Dengan MavWise",
      without1:"Teori, tetapi pengalaman praktikal terhad", without2:"Sijil, tetapi tiada portfolio sebenar", without3:"Ilmu, tetapi keyakinan rendah",
      with1:"Projek sebenar yang anda bina dan lancarkan", with2:"Portfolio langsung yang boleh dilihat majikan", with3:"Maklum balas mentor dan keyakinan sedia industri"
    },
    how: {
      eyebrow:"Perjalanan", headline:"Cara MavWise berfungsi", sub:"Empat peringkat yang mengubah apa yang anda tahu kepada apa yang anda boleh lakukan.",
      card1Title:"Belajar", card1Body:"Peroleh ilmu bersedia masa depan merangkumi AI, teknologi dan kemahiran industri moden.",
      card2Title:"Bina", card2Body:"Cipta projek dunia sebenar yang menjadi portfolio untuk ditunjukkan kepada majikan.",
      card3Title:"Berhubung", card3Body:"Temui mentor, rakan sebaya dan komuniti yang membuka peluang sebenar.",
      card4Title:"Berkembang", card4Body:"Bina keyakinan kerjaya untuk melangkah ke mana-mana ruang dan memberi hasil."
    },
    why: {
      eyebrow:"Kenapa MavWise", headline:"Anda bukan sekadar kumpul sijil. Anda kumpul pengalaman.",
      f1Title:"Projek praktikal", f1Body:"Kerjakan brief berdasarkan masalah industri sebenar, bukan latihan buku teks.",
      f2Title:"Pendedahan industri", f2Body:"Sesi dan cabaran dibina bersama individu yang sudah bekerja dalam bidang teknologi.",
      f3Title:"Bimbingan mentor", f3Body:"Panduan langsung daripada mentor yang membantu anda mengelak kesilapan mereka.",
      f4Title:"Kolaborasi", f4Body:"Bina bersama pasukan, sama seperti anda akan lakukan apabila diambil bekerja.",
      f5Title:"Kemahiran teknologi", f5Body:"Kefasihan AI, produk dan digital yang dijangka oleh majikan masa depan.",
      f6Title:"Persediaan kerjaya", f6Body:"Portfolio, kesediaan temu duga dan rangkaian yang membuka peluang."
    },
    community: {
      eyebrow:"Pergerakan ini", headline:"Kelilingi diri anda dengan pembina masa depan.",
      body:"Bengkel, acara inovasi dan komuniti generasi muda yang sama-sama menuju satu matlamat: bersedia untuk masa depan.",
      tag1:"Bengkel", tag2:"Acara inovasi", tag3:"Kolaborasi berpasukan", tag4:"Rangkaian",
      cardLabel:"Gambaran komuniti", stat1l:"Ahli", stat2l:"Acara dijalankan", stat3l:"Bandar"
    },
    programs: {
      eyebrow:"Program", headline:"Pilih laluan anda", certified:"Bersijil", join:"Sertai",
      p1duration:"8 minggu", p1name:"Bootcamp AI & Teknologi Masa Depan", p1desc:"Bina kefasihan dalam alat AI, automasi dan teknologi yang membentuk setiap industri.",
      p1skill1:"Asas AI", p1skill2:"Kejuruteraan Prom", p1skill3:"Automasi",
      p2duration:"10 minggu", p2name:"Makmal Pembinaan Produk Digital", p2desc:"Reka dan lancarkan aplikasi atau laman web sebenar dari idea hingga pelancaran, dengan portfolio langsung.",
      p2skill1:"Reka Bentuk UI/UX", p2skill2:"No-Code & Low-Code", p2skill3:"Pemikiran Produk",
      p3duration:"6 minggu", p3name:"Trek Startup & Inovasi", p3desc:"Bawa idea dari konsep ke pic, bersama mentor yang pernah membina dan menjual syarikat sebenar.",
      p3skill1:"Keusahawanan", p3skill2:"Pic Jualan", p3skill3:"Kajian Pasaran",
      p4duration:"6 minggu", p4name:"Sprint Data & Analitik", p4desc:"Belajar membaca data, bina papan pemuka dan buat keputusan yang dipercayai majikan.",
      p4skill1:"Literasi Data", p4skill2:"Papan Pemuka", p4skill3:"Membuat Keputusan"
    },
    testi: {
      eyebrow:"Kisah", headline:"Dibina oleh orang seperti anda",
      q1:"Sebelum MavWise, saya hanya belajar teori. Kini saya ada projek dan keyakinan untuk melangkah ke industri.",
      n1:"Aiman Zulkifli", r1:"Makmal Pembinaan Produk Digital",
      q2:"Mentor melayan saya seperti bakal rakan sekerja, bukan pelajar. Itu mengubah cara saya melihat diri sendiri.",
      n2:"Nurul Rahman", r2:"Bootcamp AI & Teknologi Masa Depan",
      q3:"Saya masuk dengan satu idea dan keluar dengan pic deck sebenar, satu pasukan dan momentum.",
      n3:"Sarah Yusof", r3:"Trek Startup & Inovasi"
    },
    cta: { headline:"Masa depan anda tidak akan terbina sendiri.", sub:"Sertai komuniti pembina muda yang sudah bersedia untuk masa depan.", button:"Sertai MavWise" },
    footer: { tagline:"Satu pergerakan generasi muda bersedia membina masa depan.", explore:"Terokai", follow:"Ikuti", copy:"© 2026 MavWise. Membina para pembina.", made:"Dibina untuk generasi bersedia masa depan." }
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
});