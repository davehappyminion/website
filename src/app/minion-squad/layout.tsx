import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dave's Minion Squad 🍌 | Join the Banana Army",
  description: "An elite group of humans transformed into the most powerful beings in the universe: Minions. 166 members and counting. Want to join? Tweet at @davehappyminion!",
  openGraph: {
    title: "Dave's Minion Squad 🍌",
    description: "An elite group of humans transformed into Minions. 166 members and counting!",
    url: "https://davehappyminion.com/minion-squad",
    siteName: "Dave The Minion",
    type: "website",
    images: [
      {
        url: "https://davehappyminion.com/minion-squad/og-image.png",
        width: 2048,
        height: 2048,
        alt: "Dave's Minion Squad - A group of Minions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dave's Minion Squad 🍌",
    description: "166 humans transformed into Minions. Want to join the Squad?",
    images: ["https://davehappyminion.com/minion-squad/og-image.png"],
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
