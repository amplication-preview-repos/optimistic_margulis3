import { InputJsonValue } from "../../types";

export type RapportUpdateInput = {
  contenu?: InputJsonValue;
  dateRapport?: Date | null;
  typeRapport?: string | null;
};
