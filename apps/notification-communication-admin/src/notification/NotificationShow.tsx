import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { TEMPLATENOTIFICATION_TITLE_FIELD } from "../templateNotification/TemplateNotificationTitle";

export const NotificationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Statut" source="statut" />
        <ReferenceField
          label="TemplateNotification"
          source="templatenotification.id"
          reference="TemplateNotification"
        >
          <TextField source={TEMPLATENOTIFICATION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Utilisateur" source="utilisateur" />
      </SimpleShowLayout>
    </Show>
  );
};
