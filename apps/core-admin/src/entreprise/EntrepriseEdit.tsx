import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const EntrepriseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <div />
        <NumberInput label="MargeDette" source="margeDette" />
        <TextInput label="Nom" source="nom" />
        <TextInput label="SignatureNumerique" source="signatureNumerique" />
        <NumberInput label="SoldeClient" source="soldeClient" />
      </SimpleForm>
    </Edit>
  );
};
