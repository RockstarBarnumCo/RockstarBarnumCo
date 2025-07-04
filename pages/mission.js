export default function Mission() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-8">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-yellow-400 mb-6 drop-shadow-lg">★ Our Mission</h1>
        <p className="text-xl text-slate-200 mb-6">
          Rockstar Barnum & Co. is dedicated to bridging the world’s heritage with its future by connecting global diaspora communities to new markets, technologies, and opportunities.
        </p>
        <p className="text-slate-300 mb-4">
          Our mission is to empower displaced, immigrant, and diaspora populations—starting with Lebanese, Palestinian, and other Middle Eastern communities—by building AI-powered platforms that foster economic growth, cultural preservation, and resilient cross-border trade.
        </p>
        <p className="text-slate-300 mb-4">
          Through advanced digital infrastructure and real-time automation, we make it possible for diaspora entrepreneurs, professionals, and families to access resources, build networks, and launch ventures that span continents. We champion open markets and smart preservation, transforming historical ties into new pathways for sustainable development, humanitarian impact, and generational prosperity.
        </p>
        <p className="text-slate-300 mb-4">
          Rockstar Barnum & Co. stands for innovation, equity, and heritage—unlocking the power of diaspora markets to revitalize communities, restore historic sites, and drive forward a connected, resilient global economy.
        </p>
        <hr className="my-8 border-slate-700" />
        <h2 className="text-2xl font-semibold text-yellow-400 mb-2">Key Pillars</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-200">
          <li>
            <span className="font-bold text-white">Economic Empowerment:</span> Enabling diaspora communities to invest, trade, and grow businesses in their homelands and abroad.
          </li>
          <li>
            <span className="font-bold text-white">Cultural Preservation:</span> Using technology to safeguard history and identity, turning heritage into a source of strength for new generations.
          </li>
          <li>
            <span className="font-bold text-white">Smart Connectivity:</span> Building digital bridges—marketplaces, networks, remittance tools—that keep families, cultures, and opportunities linked across borders.
          </li>
          <li>
            <span className="font-bold text-white">Resilience & Security:</span> Leveraging AI, automation, and decentralized infrastructure for stable, transparent, and inclusive growth.
          </li>
        </ul>
        <footer className="p-6 border-t border-slate-800 text-center text-slate-500 w-full mt-8">
          &copy; {new Date().getFullYear()} Rockstar Barnum & Co. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
