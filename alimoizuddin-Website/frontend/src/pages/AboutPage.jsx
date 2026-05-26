import React from "react";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import About from "../components/About";

export default function AboutPage() {
  return (
    <Layout>
      <PageHeader
        kicker="§ 01 — Identity"
        title="About"
        italicWord="About"
        sub="An MA in English Literature gave me the cognitive scaffolding. AI gave me the tooling. The combination is what makes the work compound."
      />
      <About />
    </Layout>
  );
}
