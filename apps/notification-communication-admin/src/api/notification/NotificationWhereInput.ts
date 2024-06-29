import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TemplateNotificationWhereUniqueInput } from "../templateNotification/TemplateNotificationWhereUniqueInput";

export type NotificationWhereInput = {
  id?: StringFilter;
  statut?: StringNullableFilter;
  templateNotification?: TemplateNotificationWhereUniqueInput;
  utilisateur?: StringNullableFilter;
};
