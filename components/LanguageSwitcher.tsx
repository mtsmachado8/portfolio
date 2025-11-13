'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // Remove current locale from pathname and add new one
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    router.push(newPath);
    router.refresh();
  };

  return (
    <div className="flex justify-end mb-6">
      <div className="flex gap-2">
        <Button
          variant={locale === 'pt' ? 'default' : 'outline'}
          size="sm"
          onClick={() => switchLocale('pt')}
        >
          <Globe className="w-4 h-4 mr-2" />
          PT
        </Button>
        <Button
          variant={locale === 'en' ? 'default' : 'outline'}
          size="sm"
          onClick={() => switchLocale('en')}
        >
          <Globe className="w-4 h-4 mr-2" />
          EN
        </Button>
      </div>
    </div>
  );
}

