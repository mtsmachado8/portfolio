import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function Experience() {
  const t = useTranslations('experience');

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Briefcase className="w-5 h-5" />
          {t('title')}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {t.raw('items').map((exp: any, index: number) => (
          <div key={index}>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h3 className="font-bold text-lg">{exp.company}</h3>
                  <p className="font-semibold text-primary">{exp.role}</p>
                </div>
                <div className="text-sm text-muted-foreground text-right">
                  <p>{exp.period}</p>
                  {exp.location && <p>{exp.location}</p>}
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-3">
                {exp.highlights.map((highlight: string, hIndex: number) => (
                  <li key={hIndex} className="text-sm text-muted-foreground">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            {index < t.raw('items').length - 1 && <Separator className="my-6" />}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

