import React, { useState } from 'react';
import { 
  Award, 
  CheckCircle2, 
  Share2, 
  Download, 
  Sparkles, 
  QrCode,
  ShieldCheck,
  Building2
} from 'lucide-react';

export const CertificateShowcase: React.FC<{ onExploreCertifications: () => void }> = ({ onExploreCertifications }) => {
  const [studentName, setStudentName] = useState('Alex Morgan');
  const [selectedCourse, setSelectedCourse] = useState('Full Stack Web Development Masterclass');

  const courseOptions = [
    'Full Stack Web Development Masterclass',
    'Applied AI & Machine Learning with Python',
    'Data Structures & Algorithms in Java',
    'UI/UX Design Systems & Product Strategy',
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
            <Award className="w-3.5 h-3.5 text-amber-300" />
            <span>Verified Industry Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Learn. Complete. <span className="bg-gradient-to-r from-amber-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">Get Recognized.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Earn official, shareable Skill99 certificates complete with unique verification IDs and direct LinkedIn integration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Certificate Customizer Controls */}
          <div className="lg:col-span-5 space-y-6 bg-slate-800/80 backdrop-blur-xl border border-slate-700/80 rounded-3xl p-6 sm:p-7 shadow-2xl">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              Live Interactive Certificate Preview
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Type your name below to generate your personalized Skill99 Certificate preview in real-time!
            </p>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">
                  Your Name (Recruiter / Student):
                </label>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Enter full name..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white font-bold focus:outline-hidden focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">
                  Select Completed Track:
                </label>
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white font-medium focus:outline-hidden focus:ring-2 focus:ring-amber-400 cursor-pointer"
                >
                  {courseOptions.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Key Benefits List */}
            <div className="space-y-2.5 pt-4 border-t border-slate-700">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Verified Learning & Capstone Audit</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Recruiter Recognized Credential ID</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>1-Click Add to LinkedIn Profile</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onExploreCertifications}
                className="w-full py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-lg shadow-amber-500/20 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Award className="w-4 h-4" />
                <span>Explore All Certifications</span>
              </button>
            </div>
          </div>

          {/* Right Column: Premium Certificate Frame Mockup */}
          <div className="lg:col-span-7">
            <div className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-4 border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl text-slate-900 space-y-6 overflow-hidden">
              
              {/* Gold Ornamental Corner Accents */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-amber-400/80" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-amber-400/80" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-amber-400/80" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-amber-400/80" />

              {/* Certificate Header */}
              <div className="flex items-center justify-between border-b border-amber-500/20 pb-4 text-white">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 to-yellow-500 text-slate-950 flex items-center justify-center font-bold text-sm shadow-md">
                    S99
                  </div>
                  <div>
                    <span className="text-lg font-bold tracking-tight block">Skill99 EdTech</span>
                    <span className="text-[10px] text-amber-300 font-semibold tracking-widest uppercase">Verified Certificate</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-amber-300 font-semibold bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Credential ID #SK99-2026-X9</span>
                </div>
              </div>

              {/* Certificate Body */}
              <div className="text-center space-y-4 py-4">
                <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                  This Certificate is Proudly Awarded To
                </p>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
                  {studentName || 'Your Name'}
                </h3>
                <p className="text-xs text-slate-300 max-w-lg mx-auto leading-relaxed">
                  for successfully mastering the curriculum and constructing production capstone projects in
                </p>
                <div className="inline-block px-5 py-2 rounded-2xl bg-indigo-950/80 text-indigo-200 border border-indigo-700/60 font-bold text-base sm:text-lg">
                  {selectedCourse}
                </div>
              </div>

              {/* Certificate Footer Signatures & QR */}
              <div className="pt-6 border-t border-amber-500/20 flex flex-wrap items-end justify-between gap-4 text-xs text-slate-300">
                <div>
                  <p className="font-serif italic text-amber-300 text-sm">Alex Rivera</p>
                  <p className="text-[10px] text-slate-400 font-medium">Head of Engineering Education</p>
                </div>

                <div className="flex items-center gap-2 bg-slate-800/80 p-2 rounded-xl border border-slate-700">
                  <QrCode className="w-8 h-8 text-amber-400" />
                  <div className="text-[10px] text-slate-400 leading-tight">
                    <span className="font-bold text-white block">Scan to Verify</span>
                    <span>skill99.com/verify</span>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-semibold text-white">Issued: August 2026</p>
                  <p className="text-[10px] text-emerald-400 font-medium">Verified Status: ACTIVE</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
