import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { CATEGORIEPRODUIT_TITLE_FIELD } from "../categorieProduit/CategorieProduitTitle";
import { CONDITIONNEMENTPRODUIT_TITLE_FIELD } from "../conditionnementProduit/ConditionnementProduitTitle";

export const ProduitShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
