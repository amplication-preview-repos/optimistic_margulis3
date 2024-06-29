import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const UniteProduitCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Libelle" source="libelle" />
        <TextInput label="Symbole" source="symbole" />
      </SimpleForm>
    </Create>
  );
};
