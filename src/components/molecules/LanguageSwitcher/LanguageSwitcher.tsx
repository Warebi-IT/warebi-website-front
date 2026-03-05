import { useTranslation } from 'react-i18next';

const languages = [
    { code: 'fr', label: '🇫🇷 FR' },
    { code: 'en', label: '🇬🇧 EN' },
];

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    return (
        <div className="flex items-center gap-1 rounded-full bg-dark-elevated border border-border p-0.5">
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => i18n.changeLanguage(lang.code)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${i18n.language === lang.code
                            ? 'bg-neon text-black'
                            : 'text-text-secondary hover:text-white'
                        }`}
                    aria-label={`Switch to ${lang.label}`}
                >
                    {lang.label}
                </button>
            ))}
        </div>
    );
}
