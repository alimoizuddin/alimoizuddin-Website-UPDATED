import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContentProvider } from "./context/ContentContext";
import { AuthProvider } from "./context/AuthContext";

// Lazy-load ALL pages so initial bundle is tiny
const Home = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const SkillsPage = lazy(() => import("./pages/SkillsPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const DocumentationPage = lazy(() => import("./pages/DocumentationPage"));
const AgentsPage = lazy(() => import("./pages/AgentsPage"));
const PhilosophyPage = lazy(() => import("./pages/PhilosophyPage"));
const ExperiencePage = lazy(() => import("./pages/ExperiencePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));

function RouteFallback() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] flex items-center justify-center">
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#888880]">
        Loading…
      </span>
    </main>
  );
}

function App() {
  return (
    <div className="App">
      <ContentProvider>
        <AuthProvider>
          <BrowserRouter>
            <Suspense fallback={<RouteFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/documentation" element={<DocumentationPage />} />
                <Route path="/agents" element={<AgentsPage />} />
                <Route path="/philosophy" element={<PhilosophyPage />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/case-studies/:id" element={<CaseStudy />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </AuthProvider>
      </ContentProvider>
    </div>
  );
}

export default App;
