import { EntrySkeletonType, Asset } from "contentful";

export interface ProjectFields {
    title: string;
    description: string;
    mainImage: Asset; // Asset en lugar de un objeto anidado
    additionalImages?: Asset[];
    completetionYear: string; // Respetamos el typo de Contentful
    area?: string;
    location?: string;
    investment?: string;
}

export interface Project extends EntrySkeletonType {
    contentTypeId: "constructora"; // Cambiado para coincidir con el JSON preview
    fields: ProjectFields;
}

export interface SanityImageSource {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}
