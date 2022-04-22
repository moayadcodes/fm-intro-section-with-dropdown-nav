import React from 'react';

function App() {
  const logoUrl = new URL('../images/logo.svg', import.meta.url);
  const menuIconUrl = new URL('../images/icon-menu.svg', import.meta.url);
  const mobileHeroUrl = new URL('../images/image-hero-mobile.png', import.meta.url);
  const clientLogos = [
    {
      url: new URL('../images/client-databiz.svg', import.meta.url),
      label: 'Databiz',
    },
    {
      url: new URL('../images/client-audiophile.svg', import.meta.url),
      label: 'Audiophile',
    },
    {
      url: new URL('../images/client-meet.svg', import.meta.url),
      label: 'Meet',
    },
    {
      url: new URL('../images/client-maker.svg', import.meta.url),
      label: 'Maker',
    },
  ];

  const clientLogoImages = clientLogos.map(logo => (
    <li key={logo.label}>
      <img src={logo.url} alt={logo.label} />
    </li>
  ));

  return (
    <>
      <header>
        <h1>
          <a href="/">
            <img src={logoUrl} alt="Snap" width="84" height="27" />
          </a>
        </h1>
        <button type="button">
          <img src={menuIconUrl} alt="Open menu" width="32" height="18" />
        </button>
      </header>
      <main>
        <img src={mobileHeroUrl} alt="" width="750" height="564" />
        <h2>Make remote work</h2>
        <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
        <a href="#">Learn more</a>
        <ul>
          {clientLogoImages}
        </ul>
      </main>
    </>
  );
}

export default App;
