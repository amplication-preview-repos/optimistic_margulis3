import { Notification as TNotification } from "../api/notification/Notification";

export const NOTIFICATION_TITLE_FIELD = "statut";

export const NotificationTitle = (record: TNotification): string => {
  return record.statut?.toString() || String(record.id);
};
