import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TemplateNotificationTitle } from "../templateNotification/TemplateNotificationTitle";

export const NotificationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Statut" source="statut" />
        <ReferenceInput
          source="templateNotification.id"
          reference="TemplateNotification"
          label="TemplateNotification"
        >
          <SelectInput optionText={TemplateNotificationTitle} />
        </ReferenceInput>
        <TextInput label="Utilisateur" source="utilisateur" />
      </SimpleForm>
    </Create>
  );
};
