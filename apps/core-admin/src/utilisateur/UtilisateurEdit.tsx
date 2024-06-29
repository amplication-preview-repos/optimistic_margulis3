import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const UtilisateurEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="Compagnie" source="compagnie" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="MotDePasse" source="motDePasse" />
        <TextInput label="Nom" source="nom" />
        <TextInput label="Profil" source="profil" />
      </SimpleForm>
    </Edit>
  );
};
