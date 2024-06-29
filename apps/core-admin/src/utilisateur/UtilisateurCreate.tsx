import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const UtilisateurCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="Compagnie" source="compagnie" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="MotDePasse" source="motDePasse" />
        <TextInput label="Nom" source="nom" />
        <TextInput label="Profil" source="profil" />
      </SimpleForm>
    </Create>
  );
};
