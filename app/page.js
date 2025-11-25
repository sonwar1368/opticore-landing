export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 md:px-8 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-800/20 blur-3xl animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
        <div className="opacity-0 -translate-x-12 transition-all duration-1000 ease-out [animation:fadeInLeft_1s_ease-out_forwards] hover:scale-105">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            OptiCore
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mt-4 md:mt-8 font-light">
            DevOps Pipeline as a Service
          </p>
          <p className="text-base md:text-xl text-gray-400 mt-4 md:mt-6 max-w-2xl">
            Fuel your development velocity with expert, done-for-you pipeline optimization. From infrastructure monitoring and automated deployments to performance analytics — we handle it all.
          </p>
          <button className="mt-8 md:mt-12 px-8 md:px-12 py-4 md:py-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-base md:text-xl font-bold rounded-xl md:rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 hover:shadow-3xl">
            Get Early Access →
          </button>
        </div>

        <div className="opacity-0 scale-90 transition-all duration-1000 ease-out [animation:fadeInRight_1s_ease-out_0.3s_forwards] hover:scale-105">
          <div className="bg-black/40 backdrop-blur-2xl rounded-xl md:rounded-3xl p-6 md:p-10 border border-purple-500/30 shadow-2xl">
            <pre className="text-cyan-400 text-xs md:text-sm font-mono leading-relaxed overflow-x-auto">
{`name: "Accelerated CI/CD Pipeline"

on: [push, pull_request]

jobs:
  opticore_optimize:
    runs-on: opticore-runners
    steps:
      - uses: opticore/pipeline-accelerator@v3
      - name: "AI-Powered Analytics"
        with:
          mode: "intelligent"`}
            </pre>
          </div>
        </div>
      </div>

      <style global jsx>{`
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @media (max-width: 768px) {
          h1 { text-align: center; }
          p { text-align: center; }
          button { width: 100%; max-width: 300px; margin: 0 auto; display: block; }
          .grid-cols-2 { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}
