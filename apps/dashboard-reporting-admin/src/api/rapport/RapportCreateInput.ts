import { InputJsonValue } from "../../types";

export type RapportCreateInput = {
  contenu?: InputJsonValue;
  dateRapport?: Date | null;
  typeRapport?: string | null;
};
