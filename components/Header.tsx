import { useTranslations } from 'next-intl';
import { Mail, Phone, Linkedin, Youtube, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Header() {
  const t = useTranslations('header');

  return (
    <div className="mb-8 bg-card rounded-lg overflow-hidden shadow-sm">
      {/* Foto de Capa - Estilo LinkedIn */}
      <div className="relative w-full h-48 md:h-64 bg-gray-800">
        <Image
          src="/fotoCapa.jpeg"
          alt="Capa"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Container com informações - Foto de perfil sobreposta */}
      <div className="relative px-4 sm:px-6 pb-6">
        {/* Foto de Perfil Sobreposta */}
        <div className="absolute -top-16 left-4 sm:left-6">
          <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-background shadow-lg bg-background">
            <Image
              src="/fotoFormal.jpg"
              alt={t('name')}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Conteúdo - Espaçamento para a foto sobreposta */}
        <div className="pt-20 md:pt-24">
          <div className="text-left space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold">{t('name')}</h1>
            <p className="text-base md:text-lg text-muted-foreground">{t('title')}</p>
            <p className="text-sm md:text-base text-muted-foreground">{t('subtitle')}</p>
            <p className="text-sm text-muted-foreground">{t('location')}</p>
            
            <div className="flex flex-wrap gap-2 pt-4">
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
        </div>
      </div>
    </div>
  );
}

