import React from "react";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import Experience from "../components/Experience";

export default function ExperiencePage() {
  return (
    <Layout>
      <PageHeader
        kicker="§ 06 — Track Record"
        title="Experience"
        italicWord="Experience"
        sub="Roles, certifications, and education. The receipts."
      />
      <Experience />
    </Layout>
  );
}
