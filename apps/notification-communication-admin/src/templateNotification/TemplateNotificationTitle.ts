import { TemplateNotification as TTemplateNotification } from "../api/templateNotification/TemplateNotification";

export const TEMPLATENOTIFICATION_TITLE_FIELD = "id";

export const TemplateNotificationTitle = (
  record: TTemplateNotification
): string => {
  return record.id?.toString() || String(record.id);
};
