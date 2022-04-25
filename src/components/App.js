import Button from './Button';
import Header from './Header';
import React, { useState } from 'react';
import MobileMenu from './MobileMenu';

function App() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const mobileHeroUrl = new URL('../images/image-hero-mobile.png', import.meta.url);
  const desktopHeroUrl = new URL('../images/image-hero-desktop.png', import.meta.url);

  const clientLogos = [
    {
      url: new URL('../images/client-databiz.svg', import.meta.url),
      label: 'Databiz',
      heightClasses: 'h-[0.9375rem] lg:h-5',
    },
    {
      url: new URL('../images/client-audiophile.svg', import.meta.url),
      label: 'Audiophile',
      heightClasses: 'h-[1.625rem] lg:h-9',
    },
    {
      url: new URL('../images/client-meet.svg', import.meta.url),
      label: 'Meet',
      heightClasses: 'h-[0.875rem] lg:h-5',
    },
    {
      url: new URL('../images/client-maker.svg', import.meta.url),
      label: 'Maker',
      heightClasses: 'h-[1.125rem] lg:h-6',
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
      <main className="pb-12 lg:pt-16 lg:pb-14 xl:pb-24">
        <div className="container-constrained lg:hidden">
          <img className="mt-6 mb-12" src={mobileHeroUrl} alt="" width="750" height="564" />
        </div>
        <div className="container container-constrained">
          <div className="lg:flex lg:items-end lg:justify-between">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl text-neutral-900 font-bold tracking-tight lg:text-7xl">
                Make <span className="lg:whitespace-nowrap">remote work</span>
              </h2>
              <p className="leading-relaxed mt-4 lg:text-lg lg:tracking-tight lg:max-w-md lg:mt-12">Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
              <div className="mt-6 lg:mt-12">
                <Button url="#" isCta size="large">Learn more</Button>
              </div>
              <ul className="flex items-center justify-between mt-12 lg:max-w-[30rem] lg:mt-14 xl:mt-[6.5rem]">
                {clientLogos.map(logo => (
                  <li key={logo.label}>
                    <img className={logo.heightClasses} src={logo.url} alt={logo.label} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden lg:block lg:flex-shrink-0 lg:w-[40.625%] xl:w-[30rem]">
              <img src={desktopHeroUrl} alt="" width="960" height="1280" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
