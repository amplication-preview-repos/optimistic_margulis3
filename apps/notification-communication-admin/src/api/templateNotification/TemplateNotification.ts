import { Notification } from "../notification/Notification";

export type TemplateNotification = {
  createdAt: Date;
  id: string;
  notifications?: Array<Notification>;
  updatedAt: Date;
};
