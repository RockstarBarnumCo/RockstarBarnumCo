import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rockstar Barnum & Co.</title>
        <meta name="description" content="American Heritage. Global Innovation. Smart Preservation." />
      </Head>

      <main style={{ padding: "2rem" }}>
        <h1>🌍 Rockstar Barnum & Co.</h1>
        <p>
          Building infrastructure for the past, present, and future.
        </p>

        <section>
          <h2>🚀 Current Projects</h2>
          <ul>
            <li>Preservation STARZ – Gaza Deployment</li>
            <li>Remington Arms HQ Acquisition – Bridgeport</li>
            <li>Phoenecia Online – Diaspora Trade Network</li>
          </ul>
        </section>

        <section>
          <h2>📡 Stay Connected</h2>
          <p>Follow our initiatives or sponsor us on GitHub.</p>
        </section>
      </main>
    </>
  );
}
