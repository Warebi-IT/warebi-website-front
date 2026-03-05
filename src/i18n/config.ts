import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// FR locales
import commonFR from './locales/fr/common.json';
import navFR from './locales/fr/nav.json';
import homeFR from './locales/fr/home.json';
import aboutFR from './locales/fr/about.json';
import servicesFR from './locales/fr/services.json';
import realisationsFR from './locales/fr/realisations.json';
import blogFR from './locales/fr/blog.json';
import contactFR from './locales/fr/contact.json';
import carrieresFR from './locales/fr/carrieres.json';
import footerFR from './locales/fr/footer.json';

// EN locales
import commonEN from './locales/en/common.json';
import navEN from './locales/en/nav.json';
import homeEN from './locales/en/home.json';
import aboutEN from './locales/en/about.json';
import servicesEN from './locales/en/services.json';
import realisationsEN from './locales/en/realisations.json';
import blogEN from './locales/en/blog.json';
import contactEN from './locales/en/contact.json';
import carrieresEN from './locales/en/carrieres.json';
import footerEN from './locales/en/footer.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            fr: {
                common: commonFR,
                nav: navFR,
                home: homeFR,
                about: aboutFR,
                services: servicesFR,
                realisations: realisationsFR,
                blog: blogFR,
                contact: contactFR,
                carrieres: carrieresFR,
                footer: footerFR,
            },
            en: {
                common: commonEN,
                nav: navEN,
                home: homeEN,
                about: aboutEN,
                services: servicesEN,
                realisations: realisationsEN,
                blog: blogEN,
                contact: contactEN,
                carrieres: carrieresEN,
                footer: footerEN,
            },
        },
        lng: 'fr',
        fallbackLng: 'en',
        ns: ['common', 'nav', 'home', 'about', 'services', 'realisations', 'blog', 'contact', 'carrieres', 'footer'],
        defaultNS: 'common',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
