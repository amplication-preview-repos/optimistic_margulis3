import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const RapportShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Contenu" source="contenu" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="DateRapport" source="dateRapport" />
        <TextField label="ID" source="id" />
        <TextField label="TypeRapport" source="typeRapport" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
