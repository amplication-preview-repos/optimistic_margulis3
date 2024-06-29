import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const EntrepriseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <div />
        <NumberInput label="MargeDette" source="margeDette" />
        <TextInput label="Nom" source="nom" />
        <TextInput label="SignatureNumerique" source="signatureNumerique" />
        <NumberInput label="SoldeClient" source="soldeClient" />
      </SimpleForm>
    </Create>
  );
};
