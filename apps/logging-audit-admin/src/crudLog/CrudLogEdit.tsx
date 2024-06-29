import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const CrudLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Action" source="action" />
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Entite" source="entite" />
      </SimpleForm>
    </Edit>
  );
};
