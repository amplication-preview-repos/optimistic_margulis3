import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CategorieProduitTitle } from "../categorieProduit/CategorieProduitTitle";
import { ConditionnementProduitTitle } from "../conditionnementProduit/ConditionnementProduitTitle";

export const ProduitEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
