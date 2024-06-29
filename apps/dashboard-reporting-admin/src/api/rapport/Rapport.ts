import { JsonValue } from "type-fest";

export type Rapport = {
  contenu: JsonValue;
  createdAt: Date;
  dateRapport: Date | null;
  id: string;
  typeRapport: string | null;
  updatedAt: Date;
};
