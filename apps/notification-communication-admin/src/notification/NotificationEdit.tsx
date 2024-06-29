import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TemplateNotificationTitle } from "../templateNotification/TemplateNotificationTitle";

export const NotificationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
