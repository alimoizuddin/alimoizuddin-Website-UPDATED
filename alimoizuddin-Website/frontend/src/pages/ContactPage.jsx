import React from "react";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <Layout>
      <PageHeader
        kicker="§ 07 — Contact"
        title="Contact"
        italicWord="Contact"
        sub="Pick the lane. I'll reply within one working day with a clear next step — not a discovery questionnaire."
      />
      <Contact />
    </Layout>
  );
}
