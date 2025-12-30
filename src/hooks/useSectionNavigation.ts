import { useCallback } from 'react';

type NavigationOptions = {
  subject?: string;
};

export function useSectionNavigation() {
  const navigateToSection = useCallback((id: string, options?: NavigationOptions) => {
    const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
    if (!isBrowser) {
      return;
    }

    const url = new URL(window.location.href);
    if (options?.subject) {
      url.searchParams.set('subject', options.subject);
    } else {
      url.searchParams.delete('subject');
    }
    url.hash = id;
    window.history.pushState({}, '', url);

    requestAnimationFrame(() => {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, []);

  return { navigateToSection };
}

