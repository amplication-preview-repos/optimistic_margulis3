import { TemplateNotificationWhereInput } from "./TemplateNotificationWhereInput";
import { TemplateNotificationOrderByInput } from "./TemplateNotificationOrderByInput";

export type TemplateNotificationFindManyArgs = {
  where?: TemplateNotificationWhereInput;
  orderBy?: Array<TemplateNotificationOrderByInput>;
  skip?: number;
  take?: number;
};
