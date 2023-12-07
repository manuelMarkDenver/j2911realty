"use client";

import { useIsMobile } from "../lib/helpers";
import OurServices from "./our-services";
import OurServicesMobile from "./our-services-mobile";

const OurServicesContainer = () => {
  const isMobile = useIsMobile();

  return !isMobile ? <OurServices /> : <OurServicesMobile />;
};

export default OurServicesContainer;
