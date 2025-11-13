import { useTranslations } from 'next-intl';
import { Mail, Phone, Linkedin, Youtube, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Header() {
  const t = useTranslations('header');

  return (
    <Card className="mb-8">
      <CardContent className="pt-6">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">{t('name')}</h1>
          <p className="text-lg text-muted-foreground">{t('title')}</p>
          <p className="text-md text-muted-foreground">{t('subtitle')}</p>
          <p className="text-sm text-muted-foreground">{t('location')}</p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button variant="outline" size="sm" asChild>
              <a href={`mailto:${t('email')}`}>
                <Mail className="w-4 h-4 mr-2" />
                {t('email')}
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href={`tel:${t('phone')}`}>
                <Phone className="w-4 h-4 mr-2" />
                {t('phone')}
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Youtube className="w-4 h-4 mr-2" />
                YouTube
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

