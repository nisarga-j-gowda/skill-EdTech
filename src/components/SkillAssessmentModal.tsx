import React, { useState } from 'react';
import { X, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

interface AssessmentProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

export const SkillAssessmentModal: React.FC<AssessmentProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState('');
  const [experience, setExperience] = useState('');
  const [commitment, setCommitment] = useState('');
  const [recommendedTrack, setRecommendedTrack] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleFinish = () => {
    let track = 'Full Stack Web Development Masterclass';
    if (goal === 'ai') track = 'Applied AI & Machine Learning with Python';
    else if (goal === 'mobile') track = 'Cross-Platform Mobile Apps with React Native';
    else if (goal === 'data') track = 'Data Analytics with SQL, Python & Tableau';

    setRecommendedTrack(track);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl space-y-6 relative border border-slate-200">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!recommendedTrack ? (
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">
                {step}/3
              </span>
              <h3 className="text-xl font-bold text-slate-900">Discover Your Recommended Career Track</h3>
            </div>

            {step === 1 && (
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-700 block">1. What is your primary career goal?</label>
                <div className="space-y-2">
                  {[
                    { id: 'web', label: '🚀 Full-Stack Web Engineering (React, Node, SQL)' },
                    { id: 'ai', label: '🤖 Artificial Intelligence & Python Machine Learning' },
                    { id: 'mobile', label: '📱 Cross-Platform Mobile Apps (React Native)' },
                    { id: 'data', label: '📊 Data Analytics & SQL Business Intelligence' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setGoal(opt.id)}
                      className={`w-full p-3 rounded-xl border text-xs font-bold text-left transition-colors cursor-pointer ${
                        goal === opt.id ? 'border-indigo-600 bg-indigo-50 text-indigo-900' : 'border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-700 block">2. What is your current coding background?</label>
                <div className="space-y-2">
                  {[
                    { id: 'beginner', label: '🌱 Complete Beginner (Zero prior coding experience)' },
                    { id: 'some', label: '⚡ Some Fundamentals (HTML, basic JS or Python)' },
                    { id: 'experienced', label: '💻 Intermediate (Built small scripts or websites)' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setExperience(opt.id)}
                      className={`w-full p-3 rounded-xl border text-xs font-bold text-left transition-colors cursor-pointer ${
                        experience === opt.id ? 'border-indigo-600 bg-indigo-50 text-indigo-900' : 'border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-700 block">3. How many hours can you study per week?</label>
                <div className="space-y-2">
                  {[
                    { id: '5h', label: '⏱️ 3-5 hours/week (Self-paced relaxed learning)' },
                    { id: '10h', label: '⚡ 8-12 hours/week (Accelerated career track)' },
                    { id: '20h+', label: '🔥 15+ hours/week (Full immersion bootcamp speed)' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setCommitment(opt.id)}
                      className={`w-full p-3 rounded-xl border text-xs font-bold text-left transition-colors cursor-pointer ${
                        commitment === opt.id ? 'border-indigo-600 bg-indigo-50 text-indigo-900' : 'border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step Navigation */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              {step > 1 ? (
                <button
                  onClick={() => setStep(step - 1)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer"
                >
                  Back
                </button>
              ) : <div />}

              {step < 3 ? (
                <button
                  onClick={() => setStep(step + 1)}
                  disabled={(step === 1 && !goal) || (step === 2 && !experience)}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 disabled:opacity-50 cursor-pointer"
                >
                  Next Question
                </button>
              ) : (
                <button
                  onClick={handleFinish}
                  disabled={!commitment}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-md cursor-pointer"
                >
                  Generate Recommendation
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center space-y-5 py-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded">
                Match Found (98% Alignment)
              </span>
              <h3 className="text-2xl font-bold text-slate-900">{recommendedTrack}</h3>
            </div>

            <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
              Based on your target goals and schedule, this course track provides the optimal balance of fundamental theory, portfolio capstones, and career preparation.
            </p>

            <button
              onClick={() => {
                onNavigate('courses');
                onClose();
              }}
              className="w-full py-3.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Matched Track</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
