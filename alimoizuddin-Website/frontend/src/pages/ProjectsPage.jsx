import React from "react";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import Projects from "../components/Projects";

export default function ProjectsPage() {
  return (
    <Layout>
      <PageHeader
        kicker="§ 03 — Selected Work"
        title="Projects"
        italicWord="Projects"
        sub="Production-grade pipelines, agents, dashboards, and editorial engines. Each one shipped, measured, and still running."
      />
      <Projects />
    </Layout>
  );
}
