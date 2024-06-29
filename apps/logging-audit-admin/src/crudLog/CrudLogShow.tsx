import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CrudLogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Action" source="action" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Date" source="date" />
        <TextField label="Entite" source="entite" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
