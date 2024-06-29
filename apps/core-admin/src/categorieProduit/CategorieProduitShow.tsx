import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CATEGORIEPRODUIT_TITLE_FIELD } from "./CategorieProduitTitle";
import { CONDITIONNEMENTPRODUIT_TITLE_FIELD } from "../conditionnementProduit/ConditionnementProduitTitle";

export const CategorieProduitShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Produit"
          target="categorieProduitId"
          label="Produits"
        >
          <Datagrid rowClick="show">
            <TextField label="Caracteristiques" source="caracteristiques" />
            <ReferenceField
              label="CategorieProduit"
              source="categorieproduit.id"
              reference="CategorieProduit"
            >
              <TextField source={CATEGORIEPRODUIT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="ConditionnementProduit"
              source="conditionnementproduit.id"
              reference="ConditionnementProduit"
            >
              <TextField source={CONDITIONNEMENTPRODUIT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="Image" source="image" />
            <TextField label="Nom" source="nom" />
            <TextField label="Nomenclature" source="nomenclature" />
            <TextField label="ReferenceERP" source="referenceErp" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
