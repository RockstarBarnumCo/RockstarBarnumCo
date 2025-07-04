export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-yellow-400">
          ★ Rockstar Barnum & Co.
        </h1>
        <p className="text-lg mt-2 text-slate-300 text-center max-w-xl">
          AI-powered preservation, smart city development, and global logistics from Bridgeport to Beirut and Gaza.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-yellow-400">🚀 Our Mission</h2>
        <p className="mt-2 max-w-3xl text-slate-300">
          Building infrastructure to protect the past and engineer the future—digitally and physically. Our work spans historical preservation, AI automation, and global logistics.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-yellow-400">🛠️ Current Platforms</h2>
        <ul className="list-disc list-inside mt-4 text-slate-300 space-y-2">
          <li>
            <strong>Preservation STARZ</strong> — Cultural asset preservation in Gaza, Tyre, Baalbek & conflict zones.
            <a href="https://preservationstarz.online" target="_blank" rel="noopener" className="text-blue-400 ml-2 underline">Visit</a>
          </li>
          <li>
            <strong>Phoenecia Online</strong> — A global directory & support platform for Lebanese-owned businesses.
            <a href="https://phoenecia.online" target="_blank" rel="noopener" className="text-blue-400 ml-2 underline">Explore</a>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-yellow-400">🤝 Collaborations</h2>
        <p className="text-slate-300 mt-2">
          Partnered with Lockheed Martin, Google, University of Bridgeport, and more.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-yellow-400">📬 Contact & Support</h2>
        <p className="text-slate-300 mt-2">
          Email: <a href="mailto:admin@rockstarbarnum.com" className="text-green-400 underline">admin@rockstarbarnum.com</a>
          {" | "}GitHub Sponsors welcome.
        </p>
        <a
          href="https://github.com/sponsors/RockstarBarnumCo"
          className="mt-2 inline-block text-green-400 underline"
          target="_blank"
          rel="noopener"
        >
          Become a Sponsor
        </a>
      </section>

      <footer className="p-6 border-t border-slate-800 text-center text-slate-500 w-full mt-8">
        &copy; {new Date().getFullYear()} Rockstar Barnum & Co. All rights reserved.
      </footer>
    </main>
  );
}
