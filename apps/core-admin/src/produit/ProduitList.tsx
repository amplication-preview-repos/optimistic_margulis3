import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CATEGORIEPRODUIT_TITLE_FIELD } from "../categorieProduit/CategorieProduitTitle";
import { CONDITIONNEMENTPRODUIT_TITLE_FIELD } from "../conditionnementProduit/ConditionnementProduitTitle";

export const ProduitList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Produits"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
