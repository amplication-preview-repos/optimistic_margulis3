import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const EntrepriseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="AdressesLivraison" source="adressesLivraison" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Logo" source="logo" />
        <TextField label="MargeDette" source="margeDette" />
        <TextField label="Nom" source="nom" />
        <TextField label="SignatureNumerique" source="signatureNumerique" />
        <TextField label="SoldeClient" source="soldeClient" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
