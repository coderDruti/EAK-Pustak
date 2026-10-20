export default function Hero() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand: Logo & School Name */}
        <div className="flex items-center gap-3.5 shrink-0">
          <img
            src="./src/assets/logo.jpg"
            alt="logo"
            className="w-12 h-12 rounded-full object-cover shadow-sm ring-2 ring-blue-600/10"
          />
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
            EAK International School
          </h2>
        </div>

        {/* Admissions Announcement Heading */}
        <h1 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/80 px-4 py-2 rounded-full text-center">
          Admissions Open For Academic Session 2027-28
        </h1>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 shrink-0">
          <button className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm py-2.5 px-5 rounded-xl shadow-sm hover:shadow hover:-translate-y-0.5 transition-all cursor-pointer">
            APPLY NOW
          </button>

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm py-2.5 px-5 rounded-xl shadow-sm hover:shadow hover:-translate-y-0.5 transition-all cursor-pointer">
            ENQUIRE NOW
          </button>
        </div>
      </div>
    </header>
  )
}
