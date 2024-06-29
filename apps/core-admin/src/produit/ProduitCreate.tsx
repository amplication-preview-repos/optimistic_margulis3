import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CategorieProduitTitle } from "../categorieProduit/CategorieProduitTitle";
import { ConditionnementProduitTitle } from "../conditionnementProduit/ConditionnementProduitTitle";

export const ProduitCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <ReferenceInput
          source="categorieProduit.id"
          reference="CategorieProduit"
          label="CategorieProduit"
        >
          <SelectInput optionText={CategorieProduitTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="conditionnementProduit.id"
          reference="ConditionnementProduit"
          label="ConditionnementProduit"
        >
          <SelectInput optionText={ConditionnementProduitTitle} />
        </ReferenceInput>
        <TextInput label="Description" multiline source="description" />
        <div />
        <TextInput label="Nom" source="nom" />
        <TextInput label="Nomenclature" source="nomenclature" />
        <TextInput label="ReferenceERP" source="referenceErp" />
      </SimpleForm>
    </Create>
  );
};
