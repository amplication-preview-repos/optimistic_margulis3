import { Produit } from "../produit/Produit";

export type ConditionnementProduit = {
  createdAt: Date;
  id: string;
  produits?: Array<Produit>;
  updatedAt: Date;
};
