// Types pour les sous-parties
type ImageType = {
  hero: string;
  desktop: string;
  mobile: string;
};

type LinksType = {
  github: string;
  preview?: string;
  website?: string;
};

// Type pour l'objet principal
export type ProjectType = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  schoolProject?: boolean;
  images: ImageType;
  links: LinksType;
};
