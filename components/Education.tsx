import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  const t = useTranslations('education');

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5" />
          {t('title')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          <p className="font-semibold">{t('degree')}</p>
          <p className="text-muted-foreground">{t('institution')}</p>
          <p className="text-sm text-muted-foreground">{t('period')}</p>
        </div>
      </CardContent>
    </Card>
  );
}

