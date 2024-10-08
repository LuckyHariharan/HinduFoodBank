import React, { useRef } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  // Create refs in the parent component
  const missionRef = useRef(null);
  const aboutRef = useRef(null);

  const contactRef = useRef(null);

  return (
    <div className="text-black bg-black">
      <NextSeo
        title="Home: HFB"
        description="Welcome to Hindu Food Bank homepage."
        canonical="https://hindufoodbank.com/"
        openGraph={{ url: "https://hindufoodbank.com/" }}
      />
      <Header
        missionRef={missionRef}
        contactRef={contactRef}
        aboutRef={aboutRef}
      />{" "}
      {/* Pass the refs */}
      <Main
        missionRef={missionRef}
        contactRef={contactRef}
        aboutRef={aboutRef}
      />{" "}
      {/* Pass the refs */}
      <Footer />
    </div>
  );
}
