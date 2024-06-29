import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TEMPLATENOTIFICATION_TITLE_FIELD } from "../templateNotification/TemplateNotificationTitle";

export const NotificationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Notifications"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Statut" source="statut" />
        <ReferenceField
          label="TemplateNotification"
          source="templatenotification.id"
          reference="TemplateNotification"
        >
          <TextField source={TEMPLATENOTIFICATION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Utilisateur" source="utilisateur" />
      </Datagrid>
    </List>
  );
};
