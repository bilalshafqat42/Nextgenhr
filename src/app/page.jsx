// The home page at "/" uses the copper colour version.

import HomePage from "@/components/HomePage";
import StructuredData from "@/components/seo/StructuredData";

export default function CopperHome() {
  return (
    <>
      <StructuredData />
      <HomePage theme="copper" />
    </>
  );
}
