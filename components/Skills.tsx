import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Skills() {
  const t = useTranslations('skills');

  const skillsData = {
    languages: ['Javascript', 'TypeScript', 'Java', 'Go', 'C', 'C#', 'C++', 'Dart'],
    frameworks: ['Node.js', 'React', 'Vue.js', 'Angular', 'Next.js', 'Nest.js', 'Flutter', 'Ionic', 'HTML5', 'CSS3'],
    infra: ['Docker', 'Kubernetes', 'CI/CD (GitHub Actions, CircleCI)'],
    databases: ['MongoDB', 'Postgres', 'GraphQL'],
    analytics: ['Power BI', 'Looker Studio', 'Datadog', 'Sentry'],
    management: ['Jira', 'Confluence', 'Notion', 'Figma', 'Hotjar', 'BPMN', 'Pacote Office']
  };

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>{t('title')}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold mb-2">{t('languages')}</h3>
          <div className="flex flex-wrap gap-2">
            {skillsData.languages.map((skill) => (
              <Badge key={skill} variant="secondary">{skill}</Badge>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">{t('frameworks')}</h3>
          <div className="flex flex-wrap gap-2">
            {skillsData.frameworks.map((skill) => (
              <Badge key={skill} variant="secondary">{skill}</Badge>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">{t('infra')}</h3>
          <div className="flex flex-wrap gap-2">
            {skillsData.infra.map((skill) => (
              <Badge key={skill} variant="secondary">{skill}</Badge>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">{t('databases')}</h3>
          <div className="flex flex-wrap gap-2">
            {skillsData.databases.map((skill) => (
              <Badge key={skill} variant="secondary">{skill}</Badge>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">{t('analytics')}</h3>
          <div className="flex flex-wrap gap-2">
            {skillsData.analytics.map((skill) => (
              <Badge key={skill} variant="secondary">{skill}</Badge>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">{t('management')}</h3>
          <div className="flex flex-wrap gap-2">
            {skillsData.management.map((skill) => (
              <Badge key={skill} variant="secondary">{skill}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

