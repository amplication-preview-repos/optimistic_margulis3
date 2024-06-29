import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const CrudLogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Action" source="action" />
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Entite" source="entite" />
      </SimpleForm>
    </Create>
  );
};
