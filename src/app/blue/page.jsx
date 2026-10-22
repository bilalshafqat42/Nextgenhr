// The blue colour version at "/blue", for comparing with the copper home page.
// It is hidden from Google so the two versions don't compete in search results.

import HomePage from "@/components/HomePage";

export const metadata = {
  robots: { index: false, follow: false },
};

export default function BlueHome() {
  return <HomePage theme="blue" />;
}
