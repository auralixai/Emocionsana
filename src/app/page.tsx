"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-teal-200 selection:text-teal-900">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 text-2xl font-semibold text-teal-800">
            <Image 
              src="/logo.png" 
              alt="Emoción Sana Logo" 
              width={200} 
              height={50} 
              className="h-10 w-auto"
              priority
            />
          </div>
          <nav className="hidden md:flex space-x-8 text-base font-medium text-stone-600">
            <a href="#mission" className="hover:text-teal-600 transition-colors">Our Mission</a>
            <a href="#solutions" className="hover:text-teal-600 transition-colors">Corporate Wellness</a>
            <a href="#sponsorship" className="hover:text-teal-600 transition-colors">Become a Sponsor</a>
          </nav>
          <a href="#contact" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-teal-600 hover:bg-teal-700 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
            Partner With Us
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-stone-900 text-white overflow-hidden">
        {/* Soft, warm background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-stone-800 to-stone-900 opacity-95"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-8">
            <span className="inline-block py-1 px-3 rounded-full bg-teal-800/50 border border-teal-500/30 text-teal-200 text-sm font-medium tracking-wide">
              Mental Health for All
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-stone-50">
              Healing minds, <br/>
              <span className="text-teal-400">strengthening communities.</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-300 max-w-lg leading-relaxed">
              We believe everyone deserves emotional support. By partnering with Emoción Sana, you're not just investing in your team's mental well-being—you're funding life-saving psychological care for vulnerable populations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#contact" className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-base font-medium rounded-full text-teal-900 bg-amber-400 hover:bg-amber-300 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
                Fund Our Mission
              </a>
              <a href="#solutions" className="inline-flex justify-center items-center px-8 py-3.5 border border-stone-400 text-base font-medium rounded-full text-stone-100 hover:bg-stone-800 hover:border-stone-300 transition-all">
                Corporate Plans
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center w-full">
             {/* Emotive imagery placeholder */}
            <div className="w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative border border-stone-700/50">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000" 
                alt="Compassionate therapist and community member" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By / Partners & Allies Logo Cloud */}
      <section className="py-12 border-b border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-stone-500 tracking-wide uppercase mb-8">
            Trusted By Our Partners & Allies
          </p>
          <div className="flex flex-wrap justify-center gap-10 md:gap-16 items-center opacity-60 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0">
            <div className="flex items-center justify-center">
              <span className="text-xl font-serif font-bold text-stone-800">US Congress</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-xl font-bold text-stone-800">Habitat for Humanity</span>
            </div>
            <div className="flex items-center justify-center text-center leading-tight">
              <span className="text-lg font-bold text-stone-800">Fundación<br/>Baltazar y Nicolás</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-xl font-bold text-stone-800">Fundación Teletón</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-2xl font-black italic tracking-tighter text-stone-800">LWI</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Mission / Heart of the Nonprofit */}
      <section id="mission" className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800">The Power of Emotional Health</h2>
          <p className="text-xl text-stone-600 leading-relaxed">
            Unprocessed trauma and chronic stress don't just affect individuals; they fracture families and communities. Our foundation provides accessible, professional psychological support to those who need it most, helping them process, heal, and rebuild their lives with dignity.
          </p>
          <div className="w-full rounded-3xl overflow-hidden shadow-2xl mt-12 mb-8">
            <img 
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=formathttps://images.unsplash.com/photo-1529156069898-49953eb1b5ce?auto=format&fit=crop&q=80&w=1000fit=crophttps://images.unsplash.com/photo-1529156069898-49953eb1b5ce?auto=format&fit=crop&q=80&w=1000q=80https://images.unsplash.com/photo-1529156069898-49953eb1b5ce?auto=format&fit=crop&q=80&w=1000w=1000" 
              alt="Diverse community connecting"
              className="w-full h-80 object-cover"
            />
          </div>
          <div className="pt-8">
             <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Value Proposition for Corporates (The B2B Engine) */}
      <section id="solutions" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800">Why Companies Partner With Us</h2>
            <p className="mt-6 text-lg text-stone-600 leading-relaxed mb-12">
              Bring the heart of our mission into your workplace. Our corporate mental health solutions reduce burnout, boost productivity, and fulfill your CSR goals—all while funding community care.
            </p>
          </div>

          <div className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl mb-16">
            <img 
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=1000" 
              alt="Corporate wellness and CSR initiatives"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-10 rounded-3xl bg-stone-50 border border-stone-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-teal-100 text-teal-700 rounded-2xl flex items-center justify-center mb-6 text-2xl shadow-sm">🌱</div>
              <h3 className="text-xl font-bold text-stone-800 mb-4">Nurture Your Team</h3>
              <p className="text-stone-600 leading-relaxed">Provide your employees with confidential, expert psychological care. Reduce absenteeism and create a workplace culture rooted in empathy and resilience.</p>
            </div>
            <div className="p-10 rounded-3xl bg-stone-50 border border-stone-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center mb-6 text-2xl shadow-sm">🤝</div>
              <h3 className="text-xl font-bold text-stone-800 mb-4">Fulfill CSR Goals</h3>
              <p className="text-stone-600 leading-relaxed">Every corporate plan subsidizes free therapy for vulnerable individuals. Turn your HR benefits into a powerful driver for Corporate Social Responsibility.</p>
            </div>
            <div className="p-10 rounded-3xl bg-stone-50 border border-stone-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-teal-100 text-teal-700 rounded-2xl flex items-center justify-center mb-6 text-2xl shadow-sm">📈</div>
              <h3 className="text-xl font-bold text-stone-800 mb-4">Measurable Impact</h3>
              <p className="text-stone-600 leading-relaxed">Receive detailed impact reports outlining the lives touched by your sponsorship, alongside anonymized wellness metrics for your own organization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section id="impact" className="py-20 bg-teal-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-50">Healing by the Numbers</h2>
            <p className="mt-4 text-teal-100 max-w-2xl mx-auto text-lg">
              The real-world difference our community and corporate partners make together.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-teal-800">
            <div className="space-y-3">
              <div className="text-4xl md:text-5xl font-bold text-amber-400">10k+</div>
              <div className="text-sm text-teal-100 font-medium tracking-wide">Sessions Delivered</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl md:text-5xl font-bold text-amber-400">50+</div>
              <div className="text-sm text-teal-100 font-medium tracking-wide">Corporate Allies</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl md:text-5xl font-bold text-amber-400">95%</div>
              <div className="text-sm text-teal-100 font-medium tracking-wide">Satisfaction Rate</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl md:text-5xl font-bold text-amber-400">100%</div>
              <div className="text-sm text-teal-100 font-medium tracking-wide">Heart Driven</div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Sponsorship Tiers */}
      <section id="tiers" className="py-24 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800">Corporate Sponsorship Tiers</h2>
            <p className="mt-4 text-lg text-stone-600">
              Partner with us to make a lasting impact. Choose the level of support that aligns with your organization's philanthropic goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto items-center">
            {/* Tier 1: Community Supporter */}
            <div className="bg-stone-50 rounded-3xl p-8 border border-stone-200 shadow-sm flex flex-col h-full relative">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-stone-800">Community Supporter</h3>
                <div className="mt-4 flex items-baseline text-4xl font-extrabold text-stone-900">
                  $5,000
                  <span className="ml-1 text-xl font-medium text-stone-500">/year</span>
                </div>
                <p className="mt-4 text-stone-600 leading-relaxed">
                  Directly funds 50 specialized therapy sessions.
                </p>
              </div>
              <ul className="mt-6 space-y-4 flex-1">
                <li className="flex gap-3">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span className="text-stone-600">Logo on our Partner wall</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span className="text-stone-600">Quarterly impact newsletter</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span className="text-stone-600">Tax-deductible receipt</span>
                </li>
              </ul>
              <a href="#contact" className="mt-8 block w-full py-3 px-4 border border-teal-600 rounded-xl text-center font-medium text-teal-700 bg-transparent hover:bg-teal-50 transition-colors">
                Partner With Us
              </a>
            </div>

            {/* Tier 2: Corporate Champion */}
            <div className="bg-teal-900 rounded-3xl p-8 border border-teal-700 shadow-xl flex flex-col h-full relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-amber-400 text-teal-950 text-sm font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                  Most Popular
                </span>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-stone-50">Corporate Champion</h3>
                <div className="mt-4 flex items-baseline text-4xl font-extrabold text-white">
                  $15,000
                  <span className="ml-1 text-xl font-medium text-teal-200">/year</span>
                </div>
                <p className="mt-4 text-teal-100 leading-relaxed">
                  Funds 150 therapy sessions + provides one dedicated mental health workshop for your own corporate employees.
                </p>
              </div>
              <ul className="mt-6 space-y-4 flex-1">
                <li className="flex gap-3">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span className="text-teal-50">All Community Supporter perks</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span className="text-teal-50">CSR PR toolkit</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span className="text-teal-50">Highlighted logo placement</span>
                </li>
              </ul>
              <a href="#contact" className="mt-8 block w-full py-3 px-4 rounded-xl text-center font-medium text-teal-900 bg-amber-400 hover:bg-amber-300 shadow-lg transition-colors">
                Partner With Us
              </a>
            </div>

            {/* Tier 3: Institutional Partner */}
            <div className="bg-stone-50 rounded-3xl p-8 border border-stone-200 shadow-sm flex flex-col h-full relative">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-stone-800">Institutional Partner</h3>
                <div className="mt-4 flex items-baseline text-4xl font-extrabold text-stone-900">
                  $50,000+
                  <span className="ml-1 text-xl font-medium text-stone-500">/year</span>
                </div>
                <p className="mt-4 text-stone-600 leading-relaxed">
                  Fully funds an entire vulnerable community program for a year.
                </p>
              </div>
              <ul className="mt-6 space-y-4 flex-1">
                <li className="flex gap-3">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span className="text-stone-600">Custom quarterly ESG impact reporting</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span className="text-stone-600">Dedicated account manager</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span className="text-stone-600">Co-branded psychoeducational campaigns</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span className="text-stone-600">3 corporate employee workshops</span>
                </li>
              </ul>
              <a href="#contact" className="mt-8 block w-full py-3 px-4 border border-teal-600 rounded-xl text-center font-medium text-teal-700 bg-transparent hover:bg-teal-50 transition-colors">
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Sponsorship & Donors (Conversion) */}
      <section id="sponsorship" className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800">Become a Corporate Sponsor</h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                By sponsoring Emoción Sana, your organization directly funds community healing while gaining powerful tax advantages and positive brand association. Let's build a healthier society, together.
              </p>
              
              <div className="space-y-6 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-teal-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-stone-800">Tax-Deductible Contributions</h4>
                    <p className="text-stone-600 mt-1">Optimize your philanthropic budget with recognized tax benefits.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-teal-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-stone-800">Brand Alignment</h4>
                    <p className="text-stone-600 mt-1">Co-branded community wellness workshops showcasing your commitment to social good.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-teal-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-stone-800">ESG Reporting</h4>
                    <p className="text-stone-600 mt-1">Receive comprehensive impact reports to bolster your ESG metrics.</p>
                  </div>
                </div>
              </div>
            </div>

            <div id="contact" className="lg:w-1/2 w-full max-w-md lg:max-w-none bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-stone-100 relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              
              <div className="relative">
                <h3 className="text-2xl font-bold text-stone-800 mb-2">Let's Talk</h3>
                <p className="text-stone-500 mb-8">Fill out the form below and our partnerships team will reach out.</p>
                
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Company Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-shadow" placeholder="Acme Corp" />
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1.5">First Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-shadow" placeholder="Jane" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1.5">Last Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-shadow" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Work Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-shadow" placeholder="jane@acmecorp.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Partnership Interest</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-shadow bg-white">
                      <option>Corporate Sponsorship / Donors</option>
                      <option>Employee Mental Health Benefits</option>
                      <option>Other Collaboration</option>
                    </select>
                  </div>
                  <button className="w-full py-4 px-4 mt-2 rounded-xl shadow-md bg-teal-600 text-white font-medium hover:bg-teal-700 transition-all transform hover:-translate-y-0.5">
                    Request Information
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-16 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-3 text-xl font-bold text-stone-50 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center text-xs text-white">ES</div>
              Emoción Sana
            </div>
            <p className="mb-6 max-w-md leading-relaxed">
              Empowering organizations and healing communities through accessible, professional emotional support.
            </p>
          </div>
          <div>
            <h4 className="text-stone-50 font-semibold mb-6">Partner With Us</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Corporate Wellness</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Sponsorships</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Impact Reports</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-stone-50 font-semibold mb-6">Organization</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-stone-800 text-sm text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <span>© {new Date().getFullYear()} Emoción Sana. All rights reserved.</span>
          <span className="flex items-center gap-1">Made with <span className="text-amber-500">♥</span> for the community.</span>
        </div>
      </footer>
    </div>
  );
}
