
export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <Head>
        <title>Rockstar Barnum & Co.</title>
        <meta name="description" content="American Heritage. Global Innovation. Smart Preservation." />
      </Head>

      <header className="p-6 border-b border-slate-800">
        <h1 className="text-4xl font-bold">🌟 Rockstar Barnum & Co.</h1>
        <p className="text-slate-400 mt-2">American Heritage. Global Innovation. Smart Preservation.</p>
      </header>

      <main className="p-8 space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-yellow-400">🚀 Our Mission</h2>
          <p className="mt-2 max-w-3xl text-slate-300">
            Building infrastructure to protect the past and engineer the future—digitally and physically. Our work spans
            historical preservation, AI automation, and global logistics.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-yellow-400">🛠️ Current Platforms</h2>
          <ul className="list-disc list-inside mt-4 text-slate-300 space-y-2">
            <li>
              <strong>Preservation STARZ</strong> – Cultural asset preservation in Gaza, Tyre, Baalbek & conflict zones.
              <Link href="https://preservationstarz.online" className="text-blue-400 ml-2 underline">Visit</Link>
            </li>
            <li>
              <strong>Phoenecia Online</strong> – A global directory & support platform for Lebanese-owned businesses.
              <Link href="https://phoenecia.online" className="text-blue-400 ml-2 underline">Explore</Link>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-yellow-400">🌐 Collaborations</h2>
          <p className="text-slate-300 mt-2">Partnered with Lockheed Martin, Google, University of Bridgeport, and more.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-yellow-400">📢 Contact & Support</h2>
          <p className="text-slate-300 mt-2">Email: admin@rockstarbarnum.com | GitHub Sponsors welcome.</p>
          <Link href="https://github.com/sponsors/RockstarBarnumCo" className="mt-2 inline-block text-green-400 underline">
            Become a Sponsor
          </Link>
        </section>
      </main>

      <footer className="p-6 border-t border-slate-800 text-center text-slate-500">
        &copy; {new Date().getFullYear()} Rockstar Barnum & Co. All rights reserved.
      </footer>
    </div>
  );
}
