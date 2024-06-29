import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UtilisateurList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Utilisateurs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="AdressesLivraison" source="adressesLivraison" />
        <TextField label="Compagnie" source="compagnie" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="MotDePasse" source="motDePasse" />
        <TextField label="Nom" source="nom" />
        <TextField label="Profil" source="profil" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
