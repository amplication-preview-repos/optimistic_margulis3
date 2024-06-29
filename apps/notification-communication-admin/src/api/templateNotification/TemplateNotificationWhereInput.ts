import { StringFilter } from "../../util/StringFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";

export type TemplateNotificationWhereInput = {
  id?: StringFilter;
  notifications?: NotificationListRelationFilter;
};
