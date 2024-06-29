import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const RapportList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Rapports"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Contenu" source="contenu" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="DateRapport" source="dateRapport" />
        <TextField label="ID" source="id" />
        <TextField label="TypeRapport" source="typeRapport" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
