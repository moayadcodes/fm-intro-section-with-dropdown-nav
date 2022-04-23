import Button from './Button';
import Header from './Header';
import React, { useState } from 'react';
import MobileMenu from './MobileMenu';

function App() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const mobileHeroUrl = new URL('../images/image-hero-mobile.png', import.meta.url);
  const clientLogos = [
    {
      url: new URL('../images/client-databiz.svg', import.meta.url),
      label: 'Databiz',
      heightClass: 'h-[0.9375rem]',
    },
    {
      url: new URL('../images/client-audiophile.svg', import.meta.url),
      label: 'Audiophile',
      heightClass: 'h-[1.625rem]',
    },
    {
      url: new URL('../images/client-meet.svg', import.meta.url),
      label: 'Meet',
      heightClass: 'h-[0.875rem]',
    },
    {
      url: new URL('../images/client-maker.svg', import.meta.url),
      label: 'Maker',
      heightClass: 'h-[1.125rem]',
    },
  ];

  function handleMenuButtonClick() {
    setMenuIsVisible(true);
  }

  function handleMenuDeactivate() {
    setMenuIsVisible(false);
  }

  return (
    <>
      <Header onMenuButtonClick={handleMenuButtonClick} />
      <MobileMenu isVisible={menuIsVisible} onDeactivate={handleMenuDeactivate} />
      <main className="pb-12">
        <img className="mt-6 mb-12" src={mobileHeroUrl} alt="" width="750" height="564" />
        <div className="container">
          <div className="text-center">
            <h2 className="text-4xl text-neutral-900 font-bold tracking-tight">Make remote work</h2>
            <p className="leading-relaxed mt-4">Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
            <div className="mt-6">
              <Button url="#">Learn more</Button>
            </div>
            <ul className="flex items-center justify-between mt-12">
              {clientLogos.map(logo => (
                <li key={logo.label}>
                  <img className={logo.heightClass} src={logo.url} alt={logo.label} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
