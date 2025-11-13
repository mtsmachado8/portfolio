import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function Certifications() {
  const t = useTranslations('certifications');

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="w-5 h-5" />
          {t('title')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {t.raw('items').map((cert: { name: string; date: string }, index: number) => (
            <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
              <span className="font-medium">{cert.name}</span>
              <Badge variant="outline">{cert.date}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

