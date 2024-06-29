import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AuditLogList } from "./auditLog/AuditLogList";
import { AuditLogCreate } from "./auditLog/AuditLogCreate";
import { AuditLogEdit } from "./auditLog/AuditLogEdit";
import { AuditLogShow } from "./auditLog/AuditLogShow";
import { CrudLogList } from "./crudLog/CrudLogList";
import { CrudLogCreate } from "./crudLog/CrudLogCreate";
import { CrudLogEdit } from "./crudLog/CrudLogEdit";
import { CrudLogShow } from "./crudLog/CrudLogShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Logging & Audit"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="AuditLog"
          list={AuditLogList}
          edit={AuditLogEdit}
          create={AuditLogCreate}
          show={AuditLogShow}
        />
        <Resource
          name="CrudLog"
          list={CrudLogList}
          edit={CrudLogEdit}
          create={CrudLogCreate}
          show={CrudLogShow}
        />
      </Admin>
    </div>
  );
};

export default App;
