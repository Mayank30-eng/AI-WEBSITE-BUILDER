import {
  ArrowRight,
  Sparkles,
  Zap,
  LayoutTemplate,
  Download,
  Play,
  X,
} from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";

const demoPrompt =
  "Build a premium website for a design studio with a strong hero, service links, responsive layout, and polished visual style.";

const demoHtml = `<!doctype html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      color: #172033;
      background: #f6f8fb;
    }
    .shell { max-width: 1120px; margin: 0 auto; padding: 28px; }
    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      padding: 16px 0 34px;
    }
    .brand { display: flex; align-items: center; gap: 10px; font-weight: 800; }
    .mark { width: 34px; height: 34px; border-radius: 10px; background: #172033; }
    .links { display: flex; gap: 22px; color: #667085; font-size: 14px; }
    .hero {
      display: grid;
      grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
      align-items: center;
      gap: 44px;
      padding: 30px 0 24px;
    }
    .eyebrow {
      display: inline-flex;
      padding: 7px 12px;
      border-radius: 999px;
      background: #dff7ea;
      color: #087443;
      font-weight: 700;
      font-size: 13px;
      margin-bottom: 18px;
    }
    h1 { margin: 0; font-size: 54px; line-height: 1.02; letter-spacing: 0; }
    p { color: #667085; line-height: 1.7; font-size: 16px; }
    .actions { display: flex; gap: 12px; margin-top: 28px; flex-wrap: wrap; }
    button {
      border: 0;
      border-radius: 12px;
      padding: 13px 18px;
      font-weight: 800;
      cursor: pointer;
    }
    .primary { background: #172033; color: white; }
    .secondary { background: white; color: #172033; box-shadow: inset 0 0 0 1px #d0d5dd; }
    .panel {
      background: white;
      border: 1px solid #e4e7ec;
      border-radius: 22px;
      padding: 18px;
      box-shadow: 0 28px 80px rgba(23, 32, 51, 0.14);
    }
    .photo {
      min-height: 310px;
      border-radius: 18px;
      background:
        linear-gradient(145deg, rgba(23, 32, 51, 0.08), rgba(7, 116, 67, 0.16)),
        url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80");
      background-size: cover;
      background-position: center;
    }
    .stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      margin-top: 16px;
    }
    .stat { background: #f2f4f7; border-radius: 14px; padding: 14px; }
    .stat b { display: block; font-size: 22px; }
    .stat span { color: #667085; font-size: 12px; }
    @media (max-width: 760px) {
      .hero { grid-template-columns: 1fr; }
      .links { display: none; }
      h1 { font-size: 40px; }
      .stats { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <main class="shell">
    <nav>
      <div class="brand"><span class="mark"></span>Northline Studio</div>
      <div class="links"><span>Work</span><span>Services</span><span>Contact</span></div>
    </nav>
    <section class="hero">
      <div>
        <span class="eyebrow">Built from one prompt</span>
        <h1>Launch a polished studio website before lunch.</h1>
        <p>Strategy, design, and development for founders who need a sharp web presence without waiting weeks for a first draft.</p>
        <div class="actions">
          <button class="primary">Start a Project</button>
          <button class="secondary">View Work</button>
        </div>
      </div>
      <div class="panel">
        <div class="photo"></div>
        <div class="stats">
          <div class="stat"><b>12</b><span>sections</span></div>
          <div class="stat"><b>100%</b><span>responsive</span></div>
          <div class="stat"><b>1</b><span>HTML file</span></div>
        </div>
      </div>
    </section>
  </main>
</body>
</html>`;

const Home = () => {
  const navigate = useNavigate();
  const [showDemo, setShowDemo] = useState(false);
  return (
    <>
      <Navbar />
      <section className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
        {/* Glow background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-125 h-125 bg-indigo-600/20 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 right-0 w-125 h-125 bg-purple-600/20 rounded-full blur-[140px]" />
        </div>

        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff15 1px, transparent 1px), linear-gradient(to bottom, #ffffff15 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-white/10 rounded-full bg-white/5 backdrop-blur"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-300">AI Website Builder</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Build Websites with
            <br />
            <span className="bg-linear-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
              AI in Seconds
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto mt-6 text-lg text-gray-400"
          >
            Generate stunning, responsive websites instantly using AI. No coding
            required. Perfect for startups, creators and freelancers.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
          >
            <button
              onClick={() => navigate("/generate")}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-xl font-semibold transition"
            >
              Start Building
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => setShowDemo(true)}
              className="flex items-center justify-center gap-2 px-6 py-3 border border-white/20 hover:bg-white/10 rounded-xl transition"
            >
              <Play size={18} />
              Watch Demo
            </button>
          </motion.div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:border-indigo-400 transition">
              <Zap className="text-yellow-400 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Instant Generation</h3>
              <p className="text-sm text-gray-400">
                Describe your website and AI generates it instantly.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:border-indigo-400 transition">
              <LayoutTemplate className="text-indigo-400 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Responsive Layout</h3>
              <p className="text-sm text-gray-400">
                Websites look perfect on mobile, tablet and desktop.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:border-indigo-400 transition">
              <Download className="text-green-400 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Export Code</h3>
              <p className="text-sm text-gray-400">
                Download clean HTML, CSS and JS instantly.
              </p>
            </div>
          </div>
        </div>
      </section>
      {showDemo && (
        <div className="fixed inset-0 z-100 bg-black/80 backdrop-blur-xl px-4 py-6 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative w-full max-w-6xl max-h-[92vh] overflow-hidden rounded-3xl border border-white/10 bg-[#080808] shadow-2xl"
          >
            <div className="h-14 px-4 md:px-6 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3 min-w-0">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500 text-white">
                  <Play size={16} />
                </span>
                <span className="text-sm md:text-base font-semibold text-white truncate">
                  GenLoop Demo
                </span>
              </div>
              <button
                onClick={() => setShowDemo(false)}
                className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10"
              >
                <X size={18} />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-0">
              <div className="p-5 md:p-8 border-b lg:border-b-0 lg:border-r border-white/10">
                <p className="text-xs uppercase tracking-[0.2em] text-indigo-300 mb-4">
                  Sample prompt
                </p>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-relaxed text-zinc-200">
                  {demoPrompt}
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    "AI turns the prompt into a complete HTML page",
                    "Preview updates inside the editor",
                    "Deploy creates a shareable live link",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-black text-sm font-bold">
                        {index + 1}
                      </span>
                      <span className="text-sm text-zinc-200">{item}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() =>
                    navigate("/generate", { state: { prompt: demoPrompt } })
                  }
                  className="mt-6 w-full flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-black hover:bg-zinc-200 transition"
                >
                  Try This Flow
                  <ArrowRight size={18} />
                </button>
              </div>

              <div className="h-[58vh] min-h-[420px] bg-white">
                <iframe
                  title="GenLoop generated demo"
                  srcDoc={demoHtml}
                  className="h-full w-full border-0 bg-white"
                />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Home;
