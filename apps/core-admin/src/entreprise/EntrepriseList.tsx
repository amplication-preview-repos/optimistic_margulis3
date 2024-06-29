import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const EntrepriseList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Entreprises"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="AdressesLivraison" source="adressesLivraison" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Logo" source="logo" />
        <TextField label="MargeDette" source="margeDette" />
        <TextField label="Nom" source="nom" />
        <TextField label="SignatureNumerique" source="signatureNumerique" />
        <TextField label="SoldeClient" source="soldeClient" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
