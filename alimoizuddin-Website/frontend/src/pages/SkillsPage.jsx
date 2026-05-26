import React from "react";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import Competencies from "../components/Competencies";

export default function SkillsPage() {
  return (
    <Layout>
      <PageHeader
        kicker="§ 02 — Competencies"
        title="Skills"
        italicWord="Skills"
        sub="Five capability stacks engineered to compose. Filter to see the building blocks behind every system shipped on this site."
      />
      <Competencies />
    </Layout>
  );
}
