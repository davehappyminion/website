import { redirect } from 'next/navigation';
import type { Metadata } from 'next';
import membersData from '../members_ordered.json';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const member = membersData.find((m) => m.id.toString() === id);
  
  if (!member) {
    return { title: 'Minion Squad | Dave The Happy Minion' };
  }

  const imageUrl = `https://davehappyminion.com${member.image}`;
  const pageUrl = `https://davehappyminion.com/minion-squad/${member.id}`;
  const title = `${member.name} - Minion #${member.id} | Dave's Minion Squad`;
  const description = member.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: pageUrl,
      images: [{ url: imageUrl, width: 1024, height: 1024, alt: `${member.name} Minion` }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function MinionMemberPage({ params }: Props) {
  const { id } = await params;
  redirect(`/minion-squad#${id}`);
}
