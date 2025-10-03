export type Category = {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  imageAlt: string;
  imageMeta: {
    width: number;
    height: number;
  };
  createdAt: Date;
  updatedAt: Date;
};
