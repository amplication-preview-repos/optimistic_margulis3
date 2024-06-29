import { JsonValue } from "type-fest";
import { CategorieProduit } from "../categorieProduit/CategorieProduit";
import { ConditionnementProduit } from "../conditionnementProduit/ConditionnementProduit";

export type Produit = {
  caracteristiques: JsonValue;
  categorieProduit?: CategorieProduit | null;
  conditionnementProduit?: ConditionnementProduit | null;
  createdAt: Date;
  description: string | null;
  id: string;
  image: JsonValue;
  nom: string | null;
  nomenclature: string | null;
  referenceErp: string | null;
  updatedAt: Date;
};
