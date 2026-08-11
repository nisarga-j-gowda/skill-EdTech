import React, { useState } from 'react';
import { ChatMessage } from '../types';
import { 
  Bot, 
  Send, 
  Sparkles, 
  User, 
  Code2, 
  Lightbulb, 
  Compass, 
  CheckCircle2, 
  Loader2,
  HelpCircle
} from 'lucide-react';

export const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'user',
      text: 'How can I become a full-stack developer?',
      timestamp: 'Just now',
    },
    {
      id: 'm2',
      sender: 'ai',
      text: `### 🚀 Your Personalized Full-Stack Engineering Path

1. **Frontend Core (React 19 & TypeScript)**
   - Master JSX, hooks (\`useState\`, \`useEffect\`, \`useMemo\`), and component state.
   - Build responsive UI with Tailwind CSS.

2. **Backend Engine (Node.js & Express)**
   - Build RESTful APIs, handle JSON payloads, and implement JWT authentication.
   - Design relational schemas in PostgreSQL.

3. **Production Capstone**
   - Build a full-stack E-Commerce SaaS or AI Chatbot and deploy to Cloud Run.

*Type any technical question or select a sample prompt below to try out the AI Tutor!*`,
      timestamp: 'Just now',
      provider: 'gemini',
    },
  ]);

  const [inputPrompt, setInputPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const samplePrompts = [
    'How can I become a full-stack developer?',
    'Explain React useEffect hooks clearly',
    '30-day Python & Data Science plan',
    'Best portfolio projects for backend jobs',
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const prompt = textToSend || inputPrompt;
    if (!prompt.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: prompt,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputPrompt('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/ai-tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: data.response || 'I am ready to help you learn. Ask me anything!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        provider: data.provider,
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error('Error contacting AI Tutor:', err);
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: '### 💡 Skill99 AI Tutor Tip\n\nTo master this concept, start by breaking down the problem into smaller logical steps and writing pseudo-code before typing implementation details.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        provider: 'fallback',
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-tutor" className="py-20 bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 text-white relative overflow-hidden">
      
      {/* Background Futuristic Ambient Rays */}
      <div className="absolute inset-0 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-indigo-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-wider border border-purple-500/30">
            <Sparkles className="w-3.5 h-3.5 text-purple-300" />
            <span>AI-Powered Mentorship</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Learn Smarter With <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300 bg-clip-text text-transparent">AI Assistance</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Get instant code explanations, personalized learning roadmaps, bug debugging assistance, and interview preparation.
          </p>
        </div>

        {/* Grid: Left Features List, Right Chat Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Feature Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/80 rounded-2xl p-6 space-y-5">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Bot className="w-5 h-5 text-purple-400" />
                How AI Enhances Your Learning
              </h3>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Smart Learning Paths</h4>
                    <p className="text-xs text-slate-400">Tailored study roadmaps based on your current skill level and goals.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Instant Code Debugging</h4>
                    <p className="text-xs text-slate-400">Paste syntax errors or broken functions for step-by-step corrections.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Lightbulb className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Concept Simplification</h4>
                    <p className="text-xs text-slate-400">Complex algorithms explained in simple, intuitive analogies.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-pink-500/20 text-pink-400 border border-pink-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Interview Practice</h4>
                    <p className="text-xs text-slate-400">Generate technical interview questions and feedback on your answers.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Chat Interface Box */}
          <div className="lg:col-span-7 bg-slate-800/90 backdrop-blur-xl border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[520px]">
            
            {/* Chat Top Header */}
            <div className="bg-slate-900 px-5 py-3.5 border-b border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs shadow-md shadow-purple-500/20">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Skill99 AI Learning Tutor</h4>
                  <p className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Gemini 3.6 Flash Engine
                  </p>
                </div>
              </div>
              <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-1 rounded border border-slate-700">
                Live Interactive Demo
              </span>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-3 ${
                    msg.sender === 'user' ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                      msg.sender === 'user'
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gradient-to-tr from-purple-600 to-indigo-600 text-white'
                    }`}
                  >
                    {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>

                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 text-xs leading-relaxed space-y-2 ${
                      msg.sender === 'user'
                        ? 'bg-indigo-600 text-white rounded-tr-none'
                        : 'bg-slate-900 border border-slate-700 text-slate-200 rounded-tl-none'
                    }`}
                  >
                    <div className="whitespace-pre-wrap font-sans">
                      {msg.text}
                    </div>
                    <div className="text-[10px] text-slate-400 text-right">
                      {msg.timestamp}
                    </div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex items-center gap-2 text-xs text-purple-300 bg-purple-950/50 p-3 rounded-xl border border-purple-800/40 w-fit">
                  <Loader2 className="w-4 h-4 animate-spin text-purple-400" />
                  <span>AI Mentor is thinking & generating response...</span>
                </div>
              )}
            </div>

            {/* Prompt Chips */}
            <div className="p-2.5 bg-slate-900/60 border-t border-slate-700/60 overflow-x-auto flex items-center gap-1.5 scrollbar-none">
              {samplePrompts.map((p) => (
                <button
                  key={p}
                  onClick={() => handleSendMessage(p)}
                  className="px-2.5 py-1 rounded-lg text-[10px] font-semibold text-purple-300 bg-purple-950/60 hover:bg-purple-900/80 border border-purple-800/50 whitespace-nowrap transition-colors cursor-pointer"
                >
                  ✨ {p}
                </button>
              ))}
            </div>

            {/* Chat Input Bar */}
            <div className="p-3 bg-slate-900 border-t border-slate-700 flex items-center gap-2">
              <input
                type="text"
                placeholder="Ask AI Tutor anything about coding, roadmaps, or projects..."
                value={inputPrompt}
                onChange={(e) => setInputPrompt(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1 bg-slate-800 text-xs text-white placeholder-slate-400 px-3.5 py-2.5 rounded-xl border border-slate-700 focus:outline-hidden focus:ring-1 focus:ring-purple-500"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={isLoading}
                className="p-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 transition-all cursor-pointer disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
