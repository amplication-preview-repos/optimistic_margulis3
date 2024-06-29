import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const UniteProduitEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Libelle" source="libelle" />
        <TextInput label="Symbole" source="symbole" />
      </SimpleForm>
    </Edit>
  );
};
