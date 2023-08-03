import { Metadata } from "next";
import Banner from "./(homepage)/banner";
import Features from './(homepage)/features';
import MissionVision from './(homepage)/mission-vision';

export const metadata: Metadata = {
  title: "J2911 Realty",
  description: "J2911 Realty Website",
};

export default function Home() {
  return (
    <>
      <Banner />
      <Features />
      <MissionVision />
      <Banner />
    </>
  );
}
