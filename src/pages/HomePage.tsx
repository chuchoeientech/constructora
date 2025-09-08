import { useEffect, useState } from 'react';
import Hero from '../components/homepage/Hero';
import CurrentProjects from '../components/homepage/CurrentProjects';
import Stats from '../components/homepage/Stats';
import LocationMap from '../components/homepage/LocationMap';
import ClientsPage from './ClientsPage';
import ContactForm from '../components/homepage/ContactForm';
import { client, urlFor } from '../sanityClient';

const HomePage = () => {
  const [isReady, setIsReady] = useState(false);
  const [bannerUrl, setBannerUrl] = useState('');

  useEffect(() => {
    let isMounted = true;

    const loadBanner = async () => {
      try {
        const bannerRef = await client.fetch('*[_type == "webImages"][0].banner');
        if (!isMounted) return;

        if (bannerRef) {
          const url = urlFor(bannerRef).width(1950).quality(80).url();
          const img = new Image();
          img.src = url;
          img.onload = () => {
            if (!isMounted) return;
            setBannerUrl(url);
            setIsReady(true);
          };
          img.onerror = () => {
            if (!isMounted) return;
            // No mostramos ninguna imagen alternativa
            setBannerUrl('');
            setIsReady(true);
          };
        } else {
          // No hay imagen en Sanity; seguimos sin mostrar alternativa
          setIsReady(true);
        }
      } catch {
        // En errores de red igualmente evitamos mostrar alternativa
        setIsReady(true);
      }
    };

    loadBanner();

    return () => {
      isMounted = false;
    };
  }, []);

  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4" />
          <p className="text-white/80">Cargando contenido…</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Hero bannerUrl={bannerUrl} />
      <CurrentProjects />
      <Stats />
      <LocationMap />
      <ClientsPage />
      <ContactForm />
    </>
  );
};

export default HomePage;