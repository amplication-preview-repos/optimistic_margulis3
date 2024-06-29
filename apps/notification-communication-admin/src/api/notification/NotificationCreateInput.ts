import { TemplateNotificationWhereUniqueInput } from "../templateNotification/TemplateNotificationWhereUniqueInput";

export type NotificationCreateInput = {
  statut?: string | null;
  templateNotification?: TemplateNotificationWhereUniqueInput | null;
  utilisateur?: string | null;
};
