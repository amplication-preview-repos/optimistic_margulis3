import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const RapportCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <DateTimeInput label="DateRapport" source="dateRapport" />
        <TextInput label="TypeRapport" source="typeRapport" />
      </SimpleForm>
    </Create>
  );
};
