import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4 transition-colors">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-600 dark:text-blue-400 mb-4">404</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('notFound.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {t('notFound.description')}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-blue-600 dark:bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition font-semibold text-lg shadow-lg"
          >
            <Home className="h-5 w-5" />
            <span>{t('notFound.backHome')}</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center space-x-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-8 py-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition font-semibold text-lg border-2 border-gray-200 dark:border-gray-700"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>{t('notFound.goBack')}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

