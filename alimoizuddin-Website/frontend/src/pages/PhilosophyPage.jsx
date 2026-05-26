import React from "react";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import Philosophy from "../components/Philosophy";

export default function PhilosophyPage() {
  return (
    <Layout>
      <PageHeader
        kicker="§ 05 — Philosophy"
        title="Philosophy"
        italicWord="Philosophy"
        sub="Why systems beat tasks. Why voice beats volume. Why amplifying human insight beats replacing it."
      />
      <Philosophy />
    </Layout>
  );
}
