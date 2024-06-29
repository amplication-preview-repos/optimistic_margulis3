import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const RapportEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <DateTimeInput label="DateRapport" source="dateRapport" />
        <TextInput label="TypeRapport" source="typeRapport" />
      </SimpleForm>
    </Edit>
  );
};
