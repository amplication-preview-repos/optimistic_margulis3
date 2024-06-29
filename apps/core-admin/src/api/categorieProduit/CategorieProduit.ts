import { Produit } from "../produit/Produit";

export type CategorieProduit = {
  createdAt: Date;
  id: string;
  produits?: Array<Produit>;
  updatedAt: Date;
};
