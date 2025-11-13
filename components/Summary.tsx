import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Summary() {
  const t = useTranslations('summary');

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>{t('title')}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-lg font-medium">{t('description')}</p>
        <p>{t('experience')}</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          {t.raw('achievements').map((achievement: string, index: number) => (
            <li key={index} className="text-muted-foreground">
              {achievement}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

