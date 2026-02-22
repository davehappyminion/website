import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dave's Minion Squad 🍌 | Join the Banana Army",
  description: "An elite group of humans transformed into the most powerful beings in the universe: Minions. 167 members and counting. Want to join? Tweet at @davehappyminion!",
  openGraph: {
    title: "Dave's Minion Squad 🍌",
    description: "An elite group of humans transformed into Minions. 167 members and counting!",
    url: "https://davehappyminion.com/minion-squad",
    siteName: "Dave The Minion",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dave's Minion Squad 🍌",
    description: "167 humans transformed into Minions. Want to join the Squad?",
    creator: "@davehappyminion",
  },
};

export default function MinionSquadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
