"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-2xl font-bold text-teal-700">
            {/* Logo placeholder */}
            <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white text-sm">ES</div>
            Emoción Sana
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <a href="#solutions" className="hover:text-teal-600 transition">Corporate Solutions</a>
            <a href="#impact" className="hover:text-teal-600 transition">Our Impact</a>
            <a href="#sponsorship" className="hover:text-teal-600 transition">Become a Sponsor</a>
          </nav>
          <a href="#contact" className="hidden md:inline-flex items-center justify-center px-5 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 shadow-sm transition">
            Partner With Us
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-teal-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900 to-teal-700 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6">
            <span className="uppercase tracking-wider text-teal-200 font-semibold text-sm">B2B Mental Health Solutions</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Invest in Your Team's Mental Well-being
            </h1>
            <p className="text-lg md:text-xl text-teal-100 max-w-lg">
              Partner with Emoción Sana to provide expert psychological support to your associates. Reduce burnout, boost productivity, and build a thriving corporate culture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-teal-900 bg-white hover:bg-slate-100 shadow transition">
                Schedule a Consultation
              </a>
              <a href="#impact" className="inline-flex justify-center items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-teal-700 transition">
                View Impact Report
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
             {/* Abstract illustration placeholder for hero */}
            <div className="w-full max-w-md aspect-video bg-teal-700/50 rounded-xl border border-teal-500/30 flex items-center justify-center backdrop-blur-sm shadow-2xl">
              <span className="text-teal-200 font-medium">[ Hero Image Placeholder ]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition for Corporates */}
      <section id="solutions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900">Why Partner with Emoción Sana?</h2>
            <p className="mt-4 text-lg text-slate-600">
              An optimal emotional state empowers your workforce to live healthier, happier, and more productive lives. We provide scalable mental health frameworks for modern organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mb-6 text-xl">📈</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Boosted Productivity</h3>
              <p className="text-slate-600">Mental well-being directly correlates with focused, high-performing teams. Reduce absenteeism and presenteeism.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mb-6 text-xl">🤝</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Expert Care Network</h3>
              <p className="text-slate-600">Give your team access to a vetted network of clinical psychologists and mental health experts tailored to their needs.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mb-6 text-xl">📊</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Actionable Insights</h3>
              <p className="text-slate-600">Receive aggregated, anonymized metrics on organizational wellness to guide your HR strategies and measure ROI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics (Placeholder) */}
      <section id="impact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Our Impact at a Glance</h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              Real results driving real change across our corporate and community partners. (Metrics to be updated from Drive).
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-800">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-extrabold text-teal-400">10k+</div>
              <div className="text-sm text-slate-400 uppercase tracking-wide">Sessions Delivered</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-extrabold text-teal-400">50+</div>
              <div className="text-sm text-slate-400 uppercase tracking-wide">Corporate Allies</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-extrabold text-teal-400">95%</div>
              <div className="text-sm text-slate-400 uppercase tracking-wide">Satisfaction Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-extrabold text-teal-400">30%</div>
              <div className="text-sm text-slate-400 uppercase tracking-wide">Avg. ROI (HR)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Sponsorship & Donors */}
      <section id="sponsorship" className="py-20 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-teal-900">Become a Corporate Sponsor</h2>
              <p className="text-lg text-teal-800/80">
                Beyond internal benefits, your organization can sponsor mental health programs for vulnerable communities. Fulfill your CSR goals while making a tangible difference in society.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 mt-1">✓</span>
                  <span className="text-teal-900">Tax-deductible contributions (where applicable).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 mt-1">✓</span>
                  <span className="text-teal-900">Co-branded community wellness workshops.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 mt-1">✓</span>
                  <span className="text-teal-900">Detailed impact reporting for your ESG metrics.</span>
                </li>
              </ul>
              <div className="pt-4">
                <a href="#contact" className="inline-flex items-center px-6 py-3 border border-teal-600 text-base font-medium rounded-md text-teal-700 hover:bg-teal-100 transition">
                  Download Sponsorship Deck
                </a>
              </div>
            </div>
            <div className="md:w-1/2 bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Let's Talk</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                  <input type="text" className="w-full px-4 py-2 rounded-md border border-slate-300 focus:ring-teal-500 focus:border-teal-500" placeholder="Acme Corp" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                    <input type="text" className="w-full px-4 py-2 rounded-md border border-slate-300 focus:ring-teal-500 focus:border-teal-500" placeholder="Jane" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                    <input type="text" className="w-full px-4 py-2 rounded-md border border-slate-300 focus:ring-teal-500 focus:border-teal-500" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Work Email</label>
                  <input type="email" className="w-full px-4 py-2 rounded-md border border-slate-300 focus:ring-teal-500 focus:border-teal-500" placeholder="jane@acmecorp.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Inquiry Type</label>
                  <select className="w-full px-4 py-2 rounded-md border border-slate-300 focus:ring-teal-500 focus:border-teal-500">
                    <option>Employee Benefit Program</option>
                    <option>Corporate Sponsorship / CSR</option>
                    <option>General Partnership</option>
                  </select>
                </div>
                <button className="w-full py-3 px-4 rounded-md shadow bg-teal-600 text-white font-medium hover:bg-teal-700 transition">
                  Request Information
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 text-xl font-bold text-white mb-4">
              <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-xs">ES</div>
              Emoción Sana
            </div>
            <p className="mb-4 max-w-sm">
              Empowering organizations and communities through accessible, professional mental health support.
            </p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-teal-400 transition">For Companies</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">For Sponsors</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Impact Reports</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-teal-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Contact</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm text-center">
          © {new Date().getFullYear()} Emoción Sana. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
