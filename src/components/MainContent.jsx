// src/components/MainContent.jsx
import { useState } from 'react'

export default function MainContent() {
  const [openFaq, setOpenFaq] = useState(null)
  const [activeModal, setActiveModal] = useState(null) // 'apply' | 'visit' | 'call' | null
  const [formSubmitted, setFormSubmitted] = useState(false)


  return (
    <>
      {/* --- Why Choose Section --- */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200 rounded-full mb-3">
            Core Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Why Choose EAK International School?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            We at EAK International School believe that every child is a gem with unique potential. Our mission is to help each student discover their brilliance through a nurturing, inspiring, and joyful learning environment. We don't just educate minds; we empower futures.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 list-none p-0 m-0">
          {[
            "World-Class Education",
            "Nurturing Environment",
            "Experienced Teachers",
            "Holistic Development",
            "Safe & Secure Campus",
            "Modern Facilities",
            "Focus on Individuality",
            "Extracurricular Activities",
          ].map((item, idx) => (
            <li
              key={idx}
              className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-blue-400 hover:-translate-y-0.5 transition-all duration-200 font-semibold text-gray-800"
            >
              <span className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 font-bold text-sm">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* --- Academic Programs Section --- */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-full mb-3">
            Curriculum & Age Criteria
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Academic Programs
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Structured developmental stages designed to guide students from early childhood exploration to board exam excellence.
          </p>
        </div>

        {/* Table Card */}
        <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0f2e5a] text-white">
                  <th className="py-4 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider">
                    Class / Grade
                  </th>
                  <th className="py-4 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-right sm:text-left">
                    Eligible Age Group
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm sm:text-base text-gray-700">
                {/* Group 1: Primary */}
                <tr className="bg-slate-100/90 border-t-2 border-indigo-500">
                  <td colSpan={2} className="py-3 px-6 text-xs font-bold uppercase tracking-wider text-indigo-950">
                    Primary Classes (LKG – V)
                  </td>
                </tr>
                {[
                  { class: "LKG", age: "4–5 Years" },
                  { class: "UKG", age: "5–6 Years" },
                  { class: "Class 1", age: "6–7 Years" },
                  { class: "Class 2", age: "7–8 Years" },
                  { class: "Class 3", age: "8–9 Years" },
                  { class: "Class 4", age: "9–10 Years" },
                  { class: "Class 5", age: "10–11 Years" },
                ].map((item, idx) => (
                  <tr key={idx} className="hover:bg-indigo-50/50 transition-colors">
                    <td className="py-3.5 px-6 font-semibold text-gray-900">{item.class}</td>
                    <td className="py-3.5 px-6 text-right sm:text-left">
                      <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-md bg-gray-100 text-gray-700">
                        {item.age}
                      </span>
                    </td>
                  </tr>
                ))}

                {/* Group 2: Middle & Secondary */}
                <tr className="bg-slate-100/90 border-t-2 border-indigo-500">
                  <td colSpan={2} className="py-3 px-6 text-xs font-bold uppercase tracking-wider text-indigo-950">
                    Middle & Secondary Classes (VI – X)
                  </td>
                </tr>
                {[
                  { class: "Class 6", age: "11–12 Years" },
                  { class: "Class 7", age: "12–13 Years" },
                  { class: "Class 8", age: "13–14 Years" },
                  { class: "Class 9", age: "14–15 Years" },
                  { class: "Class 10", age: "15–16 Years" },
                ].map((item, idx) => (
                  <tr key={idx} className="hover:bg-indigo-50/50 transition-colors">
                    <td className="py-3.5 px-6 font-semibold text-gray-900">{item.class}</td>
                    <td className="py-3.5 px-6 text-right sm:text-left">
                      <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-md bg-gray-100 text-gray-700">
                        {item.age}
                      </span>
                    </td>
                  </tr>
                ))}

                {/* Group 3: Senior Secondary */}
                <tr className="bg-slate-100/90 border-t-2 border-indigo-500">
                  <td colSpan={2} className="py-3 px-6 text-xs font-bold uppercase tracking-wider text-indigo-950">
                    Senior Secondary Classes (XI – XII)
                  </td>
                </tr>
                {[
                  { class: "Class 11", age: "16–17 Years" },
                  { class: "Class 12", age: "17–18 Years" },
                ].map((item, idx) => (
                  <tr key={idx} className="hover:bg-indigo-50/50 transition-colors">
                    <td className="py-3.5 px-6 font-semibold text-gray-900">{item.class}</td>
                    <td className="py-3.5 px-6 text-right sm:text-left">
                      <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-md bg-gray-100 text-gray-700">
                        {item.age}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Sub-note Footer */}
          <div className="p-4 sm:p-5 bg-gray-50/80 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block shrink-0"></span>
              <span>Age calculation is considered as of <strong>March 31st</strong> of the admission year.</span>
            </div>
            <span className="font-semibold text-indigo-700">
              Streams for XI-XII: Science | Commerce | Humanities
            </span>
          </div>
        </div>
      </div>


      {/* --- Highlights Section --- */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full mb-3">
            Key Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Highlights of EAK International School
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-emerald-400 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-center text-center">
            <span className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-base mx-auto mb-4">
              ★
            </span>
            <p className="font-bold text-gray-900 text-base leading-snug">
              25+ years of excellence in education
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-emerald-400 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-center text-center">
            <span className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-base mx-auto mb-4">
              ★
            </span>
            <p className="font-bold text-gray-900 text-base leading-snug">
              State of-the-art infrastructure
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-emerald-400 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-center text-center">
            <span className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-base mx-auto mb-4">
              ★
            </span>
            <p className="font-bold text-gray-900 text-base leading-snug">
              Experienced & dedicated faculty
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-emerald-400 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-center text-center">
            <span className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-base mx-auto mb-4">
              ★
            </span>
            <p className="font-bold text-gray-900 text-base leading-snug">
              Focus on Extracurricular Activities for holistic development
            </p>
          </div>
        </div>
      </div>

      {/* --- Infrastructure Section --- */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-100 rounded-full mb-3">
            Campus & Facilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            World-Class Infrastructure
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Designed to provide a safe, modern, and inspiring environment where students explore, create, and thrive.
          </p>
        </div>

        {/* Infrastructure Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {[
            {
              title: "Smart Classrooms",
              badge: "Digital Learning",
              color: "from-blue-500 to-indigo-600",
              description: "Equipped with interactive touch displays, ergonomic furniture, and high-speed Wi-Fi to foster collaborative, tech-enabled learning.",
              features: ["Smart Boards", "Audio-Visual Systems", "Air Conditioned"],
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              ),
            },
            {
              title: "Science & Computer Labs",
              badge: "STEM Hub",
              color: "from-emerald-500 to-teal-600",
              description: "State-of-the-art physics, chemistry, biology, and robotics setups with high-performance workstations for practical exploration.",
              features: ["Modern Equipment", "Coding Stations", "Safety Compliant"],
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              ),
            },
            {
              title: "Library & Media Center",
              badge: "Knowledge Hub",
              color: "from-amber-500 to-orange-600",
              description: "A sanctuary for curious minds featuring over 15,000 titles, research journals, e-book subscriptions, and quiet study alcoves.",
              features: ["15,000+ Volumes", "Digital Catalog", "Quiet Reading Pods"],
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              ),
            },
            {
              title: "Sports & Athletics Arena",
              badge: "Fitness & Play",
              color: "from-rose-500 to-red-600",
              description: "Spacious outdoor grounds, indoor synthetic courts, athletic tracks, and dedicated coaching for basketball, football, and cricket.",
              features: ["All-Weather Turf", "Indoor Badminton", "Certified Coaches"],
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              ),
            },
            {
              title: "Safe Transport Fleet",
              badge: "Transit & Safety",
              color: "from-yellow-500 to-amber-600",
              description: "Modern AC buses equipped with real-time GPS tracking, CCTV surveillance, speed governors, and trained female attendants.",
              features: ["Real-Time GPS", "CCTV Monitoring", "Female Attendants"],
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h8m-8 4h8m-9 7h10a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zm1-2a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
              ),
            },
            {
              title: "Medical & Infirmary Support",
              badge: "Health & Care",
              color: "from-cyan-500 to-blue-600",
              description: "Dedicated infirmary staffed by full-time nurses, routine health check-ups, and tie-ups with leading hospitals for immediate emergency response.",
              features: ["Full-Time Nurse", "First-Aid Stations", "Emergency Ready"],
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              ),
            },
            {
              title: "Hygienic Cafeteria",
              badge: "Nutrition",
              color: "from-green-500 to-emerald-600",
              description: "Clean, spacious dining hall offering fresh, nutritious meals and balanced snacks prepared under strict food hygiene standards.",
              features: ["Balanced Diet", "Strict Hygiene", "Spacious Seating"],
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V4a1 1 0 011-1h4a1 1 0 011 1v4a5 5 0 01-5 5v0zm0 0a5 5 0 01-5-5V4a1 1 0 011-1h4a1 1 0 011 1v4z" />
              ),
            },
            {
              title: "Auditorium & Arts Studio",
              badge: "Creative Arts",
              color: "from-purple-500 to-violet-600",
              description: "Acoustically engineered auditorium for performing arts, music, drama, and school celebrations with high-definition projection.",
              features: ["Acoustic Sound", "Seating for 800+", "Dance & Music Wing"],
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              ),
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Top subtle highlight border on hover */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div>
                {/* Header: Icon & Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {item.icon}
                    </svg>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">
                    {item.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Feature Tags Footer */}
              <div className="mt-5 pt-4 border-t border-gray-100">
                <div className="flex flex-wrap gap-1.5">
                  {item.features.map((feat, fIdx) => (
                    <span
                      key={fIdx}
                      className="text-[11px] font-medium text-gray-600 bg-gray-50 border border-gray-200/60 px-2 py-0.5 rounded-md"
                    >
                      ✓ {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Admission Process Section --- */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-full mb-3">
            Admissions Open
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Admission Process in 5 Simple Steps
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            A transparent, hassle-free journey designed to help you secure your child&apos;s seat smoothly.
          </p>
        </div>

        {/* Steps Flow (Mobile: Stacked with timeline connector / Desktop: 5-column flow) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {[
            {
              step: "01",
              title: "Enquiry",
              tag: "Initial Contact",
              description: "Submit an online enquiry or visit the campus to meet our admissions team and collect the prospectus.",
            },
            {
              step: "02",
              title: "Application",
              tag: "Registration",
              description: "Fill out the registration form with academic history and upload the required supporting documents.",
            },
            {
              step: "03",
              title: "Assessment / Interaction",
              tag: "Evaluation",
              description: "Participate in an age-appropriate interaction or foundational concept assessment in a friendly setting.",
            },
            {
              step: "04",
              title: "Selection",
              tag: "Offer Letter",
              description: "Receive the formal admission offer letter based on the interaction review and seat availability.",
            },
            {
              step: "05",
              title: "Enrollment",
              tag: "Final Step",
              description: "Complete fee submission, verify original documents, and receive the official student welcome kit.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-indigo-400 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Number & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-600 text-white font-black text-lg tracking-wider shadow-sm">
                    {item.step}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                    {item.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Progress Step Indicator */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400 font-medium">
                <span>Step {index + 1} of 5</span>
                {index < 4 ? (
                  <span className="text-indigo-500 font-bold tracking-tight">Next &rarr;</span>
                ) : (
                  <span className="text-emerald-600 font-semibold">Done &#10003;</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Important Dates Section --- */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200 rounded-full mb-3">
            Academic Session 2027 – 2028
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Important Admission Dates
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Mark your calendar with the key milestones for the upcoming 2027–2028 academic year.
          </p>
        </div>

        {/* Dates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            {
              month: "NOV 2026",
              day: "15",
              event: "Application Opening",
              exactDate: "Sunday, Nov 15, 2026",
              status: "Open Soon",
              statusColor: "bg-blue-100 text-blue-800 border-blue-200",
              description: "Online registration portal opens and physical prospectus available at the school front desk.",
            },
            {
              month: "JAN 2027",
              day: "15",
              event: "Application Deadline",
              exactDate: "Friday, Jan 15, 2027",
              status: "Final Submission",
              statusColor: "bg-amber-100 text-amber-800 border-amber-200",
              description: "Last day to submit completed application forms along with required academic records.",
            },
            {
              month: "FEB 2027",
              day: "01-10",
              event: "Assessment & Interaction",
              exactDate: "Feb 1 – Feb 10, 2027",
              status: "Evaluation Slot",
              statusColor: "bg-purple-100 text-purple-800 border-purple-200",
              description: "Scheduled slots for student interaction sessions and foundational competency assessments.",
            },
            {
              month: "FEB 2027",
              day: "20",
              event: "Result Announcement",
              exactDate: "Saturday, Feb 20, 2027",
              status: "Merit List",
              statusColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
              description: "Provisional merit list declared and formal admission offer letters sent via email and SMS.",
            },
            {
              month: "MAR 2027",
              day: "15",
              event: "Enrollment Deadline",
              exactDate: "Monday, Mar 15, 2027",
              status: "Seat Confirmation",
              statusColor: "bg-rose-100 text-rose-800 border-rose-200",
              description: "Deadline for fee deposit, original document verification, and confirmation of student seat.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Calendar Tile & Status Tag */}
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-slate-900 text-white rounded-xl text-center px-3 py-2 w-20 shadow-sm">
                    <span className="block text-[10px] font-bold tracking-wider text-slate-300 uppercase">
                      {item.month}
                    </span>
                    <span className="block text-xl font-black tracking-tight leading-tight mt-0.5">
                      {item.day}
                    </span>
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md border ${item.statusColor}`}>
                    {item.status}
                  </span>
                </div>

                {/* Event Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {item.event}
                </h3>

                {/* Formatted Date */}
                <p className="text-xs font-semibold text-blue-600 mb-2.5">
                  {item.exactDate}
                </p>

                {/* Description */}
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Milestone Indicator */}
              <div className="mt-5 pt-3 border-t border-gray-100 text-[11px] font-medium text-gray-400 flex items-center justify-between">
                <span>Milestone {index + 1} of 5</span>
                {index === 4 ? (
                  <span className="text-rose-600 font-bold">Final Date</span>
                ) : (
                  <span className="text-gray-500 font-semibold">&rarr;</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Session Commencement Notice Box */}
        <div className="mt-10 bg-blue-50 border border-blue-200 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-blue-900">
              New Academic Session Starts: Monday, April 5, 2027
            </h4>
            <p className="text-xs text-blue-700 mt-0.5">
              Orientation day for newly enrolled students and parents will be held on Saturday, April 3, 2027.
            </p>
          </div>
          <span className="shrink-0 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors cursor-pointer">
            Download Schedule PDF
          </span>
        </div>
      </div>

      {/* --- Required Documents Section --- */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full mb-3">
            Admissions Checklist
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Required Documents
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Please keep both original documents and self-attested photocopies prepared for verification.
          </p>
        </div>

        {/* Checklist Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Birth Certificate",
              type: "Mandatory for All",
              copies: "Original + 2 Photocopies",
              description: "Official municipal corporation or government-issued birth certificate to verify date of birth and legal name.",
              accepted: ["Municipal Birth Certificate", "Hospital Record", "Passport"],
            },
            {
              title: "Previous School Records",
              type: "Grade 1 & Above",
              copies: "Original TC + 1 Copy of Marksheet",
              description: "Official Transfer Certificate (TC) countersigned by the education board and report card of the previous academic grade.",
              accepted: ["Transfer Certificate (TC)", "Report Card", "Bonafide Certificate"],
            },
            {
              title: "Passport-Size Photographs",
              type: "Mandatory for All",
              copies: "6 Student + 2 Parents",
              description: "Recent color photographs with white background (student in formal attire) and parent/guardian passport photos.",
              accepted: ["Recent Color Photos", "White Background", "Within Last 3 Months"],
            },
            {
              title: "Address & Residence Proof",
              type: "Mandatory for All",
              copies: "1 Photocopy (Self-Attested)",
              description: "Current residential address proof where the student currently lives for school transport and communication.",
              accepted: ["Aadhaar Card", "Utility Bill", "Passport", "Registered Rent Agreement"],
            },
            {
              title: "Parent / Guardian ID Proof",
              type: "Mandatory for All",
              copies: "1 Copy of Each Parent",
              description: "Valid government-issued photo identification proof of both father and mother, or legal guardian.",
              accepted: ["Aadhaar Card", "PAN Card", "Voter ID", "Passport"],
            },
            {
              title: "Medical & Health Record",
              type: "Recommended",
              copies: "1 Completed Form",
              description: "Student immunization & vaccination chart, known allergy disclosure, and emergency blood group certificate.",
              accepted: ["Immunization Record", "Blood Group Report", "Doctor Fitness Certificate"],
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-emerald-400 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header with Checkmark and Tag */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                    {item.type}
                  </span>
                </div>

                {/* Document Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {item.title}
                </h3>

                {/* Copies Info */}
                <p className="text-xs font-semibold text-emerald-600 mb-2">
                  Requirement: {item.copies}
                </p>

                {/* Description */}
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Accepted Formats Tags */}
              <div className="pt-3 border-t border-gray-100">
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Accepted Documents:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.accepted.map((doc, dIdx) => (
                    <span
                      key={dIdx}
                      className="text-[11px] font-medium text-gray-600 bg-gray-50 border border-gray-200/70 px-2 py-0.5 rounded-md"
                    >
                      {doc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instructions Notice Banner */}
        <div className="mt-10 bg-amber-50 border border-amber-200 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center shrink-0 mt-0.5 font-bold text-sm">
              !
            </div>
            <div>
              <h4 className="text-sm font-bold text-amber-900">
                Important Verification Instructions
              </h4>
              <p className="text-xs text-amber-800 mt-0.5">
                Please bring all <strong>original documents</strong> along with <strong>self-attested copies</strong> on the day of document verification. Originals will be returned immediately after verification.
              </p>
            </div>
          </div>
          <span className="shrink-0 text-xs font-bold text-amber-900 bg-amber-200/70 hover:bg-amber-200 px-4 py-2 rounded-lg transition-colors cursor-pointer border border-amber-300">
            Print Checklist
          </span>
        </div>
      </div>

      {/* --- Fee Information Section --- */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-800 bg-sky-50 border border-sky-200 rounded-full mb-3">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Fee Information
          </h2>
        </div>

        {/* Table Card */}
        <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0f2e5a] text-white">
                  <th className="py-4 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider">
                    Grade
                  </th>
                  <th className="py-4 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider">
                    Annual Fee
                  </th>
                  <th className="py-4 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider">
                    Admission Fee
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm sm:text-base text-gray-700">
                {[
                  { grade: "Grade 1–5", annualFee: "Rs. 45,000", admissionFee: "Rs. 8,000" },
                  { grade: "Grade 6–8", annualFee: "Rs. 58,000", admissionFee: "Rs. 10,000" },
                  { grade: "Grade 9–12", annualFee: "Rs. 72,000", admissionFee: "Rs. 12,000" },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className={`transition-colors duration-150 hover:bg-sky-50/60 ${
                      idx % 2 === 1 ? "bg-slate-50/70" : "bg-white"
                    }`}
                  >
                    <td className="py-4 px-6 font-semibold text-gray-900">
                      {row.grade}
                    </td>
                    <td className="py-4 px-6 font-medium text-gray-700">
                      {row.annualFee}
                    </td>
                    <td className="py-4 px-6 font-medium text-gray-700">
                      {row.admissionFee}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Sub-note / Information Footer */}
          <div className="p-4 sm:p-5 bg-gray-50/80 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block shrink-0"></span>
              <span>Admission fee is a one-time non-refundable charge payable at enrollment.</span>
            </div>
            <span className="font-semibold text-sky-700">
              Quarterly payment options available
            </span>
          </div>
        </div>
      </div>

      {/* --- Parent Testimonials Section --- */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 rounded-full mb-3">
            Community Voices
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            What Parents Say
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Hear from our parent community about their journey and experiences at EAK International School.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              initials: "PS",
              name: "Priya Sharma",
              relation: "Mother of Aarav (Grade 4)",
              tag: "Holistic Growth",
              rating: 5,
              quote:
                "The transformation in my son's confidence has been wonderful. The teachers truly focus on individual strengths rather than just rote learning.",
            },
            {
              initials: "VM",
              name: "Vikram Malhotra",
              relation: "Father of Kabir (Grade 2)",
              tag: "Safety & Care",
              rating: 5,
              quote:
                "As working parents, campus security and GPS-tracked buses were our priority. The transparent communication gives us complete peace of mind.",
            },
            {
              initials: "RK",
              name: "Dr. Rajesh Kulkarni",
              relation: "Father of Ananya (Grade 10)",
              tag: "Academic Excellence",
              rating: 5,
              quote:
                "The balance between board exam preparation and sports coaching is exceptional. The faculty goes above and beyond to support every learner.",
            },
            {
              initials: "MI",
              name: "Meenakshi Iyer",
              relation: "Mother of Diya (Grade 7)",
              tag: "Modern Facilities",
              rating: 5,
              quote:
                "From smart classrooms to well-equipped STEM labs, the practical exposure is outstanding. It is truly world-class education at reasonable fees.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Category Tag & 5-Star Rating */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200/60">
                    {item.tag}
                  </span>
                  <span className="text-amber-400 text-sm tracking-widest select-none">
                    {"★".repeat(item.rating)}
                  </span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm text-gray-700 leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Parent Info Footer (Initials Avatar + Details, Zero Images) */}
              <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-sm">
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 leading-snug">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-gray-500 font-medium">
                    {item.relation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stat Banner */}
        <div className="mt-10 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-lg font-bold">
              98% Parent Satisfaction Rate
            </h3>
            <p className="text-xs text-slate-300 mt-1 max-w-xl">
              Rated highly across academic quality, campus safety, faculty support, and extracurricular engagement in our annual parent feedback surveys.
            </p>
          </div>
          <div className="flex items-center gap-6 shrink-0">
            <div className="text-center">
              <span className="block text-2xl font-black text-amber-400">4.9 / 5</span>
              <span className="text-[11px] text-slate-400">Parent Rating</span>
            </div>
            <div className="h-8 w-px bg-slate-700"></div>
            <div className="text-center">
              <span className="block text-2xl font-black text-amber-400">2,500+</span>
              <span className="text-[11px] text-slate-400">Happy Families</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- FAQ Accordion Section --- */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-full mb-3">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Everything you need to know about our admission procedure, tests, documentation, and campus visits.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {[
            {
              q: "What is the step-by-step admission process?",
              a: "Our admission process is divided into 5 simple stages: 1. Initial enquiry and prospectus collection, 2. Online registration and application form submission, 3. Age-appropriate assessment or interaction, 4. Provisional admission offer letter, and 5. Document verification and enrollment fee payment.",
            },
            {
              q: "Which documents are required during the enrollment stage?",
              a: "Parents must submit the official birth certificate, recent passport-size photographs of the student and parents, proof of residential address (Aadhaar, Passport, or Utility bill), previous grade report cards, and a countersigned Transfer Certificate (TC) for Grade 1 and above. Original documents are inspected for verification only.",
            },
            {
              q: "What does the entrance assessment and interaction involve?",
              a: "For Kindergarten (LKG & UKG), it is an informal, friendly interaction designed to assess verbal expression and school readiness. For Grades 1 through 12, a foundational assessment is conducted in English, Mathematics, and Science to evaluate general grade-level readiness.",
            },
            {
              q: "Which classes and grades are currently accepting applications?",
              a: "Admissions for the 2027–2028 academic year are currently open for all classes from Lower Kindergarten (LKG) up to Grade 11 across Science, Commerce, and Humanities streams, subject to available seats per grade.",
            },
            {
              q: "How can parents schedule a campus visit or guided tour?",
              a: "You can book a personalized campus tour by submitting our online enquiry form, emailing admissions@eakschool.edu, or contacting our admissions helpdesk. Campus tours are conducted Monday through Saturday between 9:00 AM and 2:00 PM.",
            },
            {
              q: "Are transport and school bus facilities available across all routes?",
              a: "Yes, the school operates a comprehensive fleet of air-conditioned buses equipped with real-time GPS tracking, CCTV surveillance, speed limiters, and trained female attendants covering all major city neighborhoods.",
            },
          ].map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className={`bg-white border rounded-2xl shadow-sm transition-all duration-200 overflow-hidden ${
                  isOpen ? "border-indigo-500 shadow-md" : "border-gray-200 hover:border-indigo-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer select-none"
                >
                  <span
                    className={`text-base sm:text-lg font-bold transition-colors ${
                      isOpen ? "text-indigo-600" : "text-gray-900"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`ml-4 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 shrink-0 ${
                      isOpen
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 transform transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100/80">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Helpdesk Contact Footer Card */}
        <div className="mt-12 bg-indigo-50/70 border border-indigo-200/80 rounded-2xl p-6 sm:p-8 text-center sm:flex sm:items-center sm:justify-between sm:text-left gap-6">
          <div>
            <h3 className="text-lg font-bold text-indigo-950">
              Still have questions about admissions?
            </h3>
            <p className="text-sm text-indigo-800/80 mt-1">
              Our admissions counselors are available Monday to Saturday to guide you through every step.
            </p>
          </div>
          <span className="mt-4 sm:mt-0 shrink-0 inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-sm transition-colors cursor-pointer">
            Contact Admissions Desk
          </span>
        </div>
      </div>
      
      {/* --- Final Call to Action Section --- */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 text-white p-8 sm:p-14 lg:p-16 shadow-2xl overflow-hidden border border-indigo-900/50">
          {/* Subtle Decorative Background Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Top Badge */}
            <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-300 bg-amber-400/10 border border-amber-400/20 rounded-full mb-4">
              ✦ Admissions Open for 2027–2028
            </span>

            {/* Main Strong Headline */}
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Give Your Child a Future-Ready Education
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Equip them with confidence, creativity, and academic brilliance. Join EAK International School and take the first step toward their extraordinary journey.
            </p>

            {/* Three Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
              {/* Primary CTA: Apply Now */}
              <button
                type="button"
                onClick={() => {
                  setActiveModal("apply");
                  setFormSubmitted(false);
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm sm:text-base text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-lg hover:shadow-amber-400/20 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                Apply Now &rarr;
              </button>

              {/* Secondary CTA: Book a Campus Visit */}
              <button
                type="button"
                onClick={() => {
                  setActiveModal("visit");
                  setFormSubmitted(false);
                }}
                className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-sm sm:text-base text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                Book a Campus Visit
              </button>

              {/* Tertiary CTA: Talk to Admissions */}
              <button
                type="button"
                onClick={() => {
                  setActiveModal("call");
                  setFormSubmitted(false);
                }}
                className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-sm sm:text-base text-indigo-200 bg-indigo-900/50 hover:bg-indigo-900 border border-indigo-700/50 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                Talk to Our Admissions Team
              </button>
            </div>

            {/* Quick Contact Micro-Row */}
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
                Admissions Desk: +91 (080) 1234-5678
              </span>
              <span>Email: admissions@eakschool.edu</span>
              <span>Mon – Sat: 9:00 AM – 3:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- Frontend-Only Enquiry Modal --- */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 overflow-hidden">
            {/* Modal Close Button */}
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 flex items-center justify-center transition-colors cursor-pointer text-lg font-bold"
            >
              &times;
            </button>

            {formSubmitted ? (
              /* Success Confirmation Screen */
              <div className="py-8 text-center">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900">
                  Enquiry Submitted!
                </h3>
                <p className="mt-2 text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
                  Thank you for your interest in EAK International School. Our admissions counselor will connect with you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="mt-6 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              /* Interactive Form Screen */
              <div>
                <span className="inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 rounded-full mb-2">
                  {activeModal === "apply" && "Online Admission Registration"}
                  {activeModal === "visit" && "Campus Tour Reservation"}
                  {activeModal === "call" && "Admissions Callback Request"}
                </span>

                <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900">
                  {activeModal === "apply" && "Apply for Academic Session 2027–28"}
                  {activeModal === "visit" && "Schedule Your Campus Visit"}
                  {activeModal === "call" && "Speak with an Admissions Counselor"}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1 mb-5">
                  Fill in your details below and our team will assist you immediately.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormSubmitted(true);
                  }}
                  className="space-y-4 text-left"
                >
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Parent / Guardian Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Priya Sharma"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="parent@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Grade Applying For
                      </label>
                      <select className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <option>LKG / UKG</option>
                        <option>Primary (Grade 1–5)</option>
                        <option>Middle (Grade 6–8)</option>
                        <option>Secondary (Grade 9–10)</option>
                        <option>Senior Secondary (Grade 11–12)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        {activeModal === "visit" ? "Preferred Visit Date" : "Best Time to Call"}
                      </label>
                      <input
                        type={activeModal === "visit" ? "date" : "text"}
                        defaultValue={activeModal === "visit" ? "" : "Morning (9am - 12pm)"}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl shadow-md transition-colors cursor-pointer"
                    >
                      {activeModal === "apply" && "Submit Application Enquiry"}
                      {activeModal === "visit" && "Confirm Campus Visit Request"}
                      {activeModal === "call" && "Request Callback"}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

    </>
  )
}
