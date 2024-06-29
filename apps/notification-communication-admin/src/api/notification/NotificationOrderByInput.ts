import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  statut?: SortOrder;
  templateNotificationId?: SortOrder;
  updatedAt?: SortOrder;
  utilisateur?: SortOrder;
};
