import { TemplateNotification } from "../templateNotification/TemplateNotification";

export type Notification = {
  createdAt: Date;
  id: string;
  statut: string | null;
  templateNotification?: TemplateNotification | null;
  updatedAt: Date;
  utilisateur: string | null;
};
