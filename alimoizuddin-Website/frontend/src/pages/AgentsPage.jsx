import React from "react";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import Agents from "../components/Agents";

export default function AgentsPage() {
  return (
    <Layout>
      <PageHeader
        kicker="§ 04 — Custom GPT Ecosystem"
        title="Agents"
        italicWord="Agents"
        sub="Sixteen domain-specific GPT agents engineered across four verticals — each one tuned to a real cognitive job, not a generic chat."
      />
      <Agents />
    </Layout>
  );
}
