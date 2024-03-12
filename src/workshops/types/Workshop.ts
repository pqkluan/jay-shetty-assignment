import { Tag } from './Tag';

export type Workshop = {
  workshopId: string;
  thumbnail: string;
  duration: string;
  title: string;
  tags: Tag[];
};

export interface WorkshopDetails extends Workshop {
  // More stuffs...
}
