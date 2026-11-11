import { useState } from 'react';
import { Sparkles, CheckCircle2, RotateCcw } from 'lucide-react';

export default function App() {
  const [clicked, setClicked] = useState(false);

  const headingText = clicked
    ? 'Congratulations! Your app is working!'
    : 'Welcome to My First AI Studio App';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/40 text-slate-800 flex flex-col items-center justify-center p-6 selection:bg-blue-100">
      {/* Background ambient decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl" />
      </div>

      <main className="relative w-full max-w-lg bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-xl shadow-slate-200/50 p-8 sm:p-10 text-center transition-all duration-300">
        {/* Status pill icon */}
        <div className="inline-flex items-center justify-center mb-6">
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-sm ${
              clicked
                ? 'bg-emerald-500 text-white scale-110 shadow-emerald-200'
                : 'bg-blue-600 text-white shadow-blue-200'
            }`}
          >
            {clicked ? (
              <CheckCircle2 className="w-7 h-7 animate-in zoom-in-50 duration-300" />
            ) : (
              <Sparkles className="w-7 h-7" />
            )}
          </div>
        </div>

        {/* Dynamic Heading */}
        <h1
          key={headingText}
          className={`text-2xl sm:text-3xl font-bold tracking-tight transition-all duration-300 leading-snug ${
            clicked ? 'text-emerald-700' : 'text-slate-900'
          }`}
        >
          {headingText}
        </h1>

        <p className="mt-3 text-slate-500 text-sm sm:text-base leading-relaxed">
          {clicked
            ? 'State updated successfully in React. Your interactive component is live.'
            : 'Click the button below to interact with this application.'}
        </p>

        {/* Action Button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setClicked(true)}
            className={`w-full sm:w-auto px-7 py-3 text-base font-medium rounded-xl transition-all duration-200 cursor-pointer shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              clicked
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/25 focus:ring-emerald-500 active:scale-95'
                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/25 focus:ring-blue-500 hover:shadow-lg active:scale-95'
            }`}
          >
            Click Me
          </button>

          {/* Reset option when clicked */}
          {clicked && (
            <button
              type="button"
              onClick={() => setClicked(false)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 text-sm font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 rounded-xl transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
          )}
        </div>

        {/* Footer meta badge */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-400 font-medium">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Interactive React Application</span>
        </div>
      </main>
    </div>
  );
}
