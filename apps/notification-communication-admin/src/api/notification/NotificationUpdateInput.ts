import { TemplateNotificationWhereUniqueInput } from "../templateNotification/TemplateNotificationWhereUniqueInput";

export type NotificationUpdateInput = {
  statut?: string | null;
  templateNotification?: TemplateNotificationWhereUniqueInput | null;
  utilisateur?: string | null;
};
