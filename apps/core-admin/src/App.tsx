import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { EntrepriseList } from "./entreprise/EntrepriseList";
import { EntrepriseCreate } from "./entreprise/EntrepriseCreate";
import { EntrepriseEdit } from "./entreprise/EntrepriseEdit";
import { EntrepriseShow } from "./entreprise/EntrepriseShow";
import { UtilisateurList } from "./utilisateur/UtilisateurList";
import { UtilisateurCreate } from "./utilisateur/UtilisateurCreate";
import { UtilisateurEdit } from "./utilisateur/UtilisateurEdit";
import { UtilisateurShow } from "./utilisateur/UtilisateurShow";
import { ProduitList } from "./produit/ProduitList";
import { ProduitCreate } from "./produit/ProduitCreate";
import { ProduitEdit } from "./produit/ProduitEdit";
import { ProduitShow } from "./produit/ProduitShow";
import { CategorieProduitList } from "./categorieProduit/CategorieProduitList";
import { CategorieProduitCreate } from "./categorieProduit/CategorieProduitCreate";
import { CategorieProduitEdit } from "./categorieProduit/CategorieProduitEdit";
import { CategorieProduitShow } from "./categorieProduit/CategorieProduitShow";
import { ConditionnementProduitList } from "./conditionnementProduit/ConditionnementProduitList";
import { ConditionnementProduitCreate } from "./conditionnementProduit/ConditionnementProduitCreate";
import { ConditionnementProduitEdit } from "./conditionnementProduit/ConditionnementProduitEdit";
import { ConditionnementProduitShow } from "./conditionnementProduit/ConditionnementProduitShow";
import { PointAchatList } from "./pointAchat/PointAchatList";
import { PointAchatCreate } from "./pointAchat/PointAchatCreate";
import { PointAchatEdit } from "./pointAchat/PointAchatEdit";
import { PointAchatShow } from "./pointAchat/PointAchatShow";
import { UniteProduitList } from "./uniteProduit/UniteProduitList";
import { UniteProduitCreate } from "./uniteProduit/UniteProduitCreate";
import { UniteProduitEdit } from "./uniteProduit/UniteProduitEdit";
import { UniteProduitShow } from "./uniteProduit/UniteProduitShow";
import { ReclamationList } from "./reclamation/ReclamationList";
import { ReclamationCreate } from "./reclamation/ReclamationCreate";
import { ReclamationEdit } from "./reclamation/ReclamationEdit";
import { ReclamationShow } from "./reclamation/ReclamationShow";
import { CommandeList } from "./commande/CommandeList";
import { CommandeCreate } from "./commande/CommandeCreate";
import { CommandeEdit } from "./commande/CommandeEdit";
import { CommandeShow } from "./commande/CommandeShow";
import { OffrePrixList } from "./offrePrix/OffrePrixList";
import { OffrePrixCreate } from "./offrePrix/OffrePrixCreate";
import { OffrePrixEdit } from "./offrePrix/OffrePrixEdit";
import { OffrePrixShow } from "./offrePrix/OffrePrixShow";
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
        title={"Core"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Entreprise"
          list={EntrepriseList}
          edit={EntrepriseEdit}
          create={EntrepriseCreate}
          show={EntrepriseShow}
        />
        <Resource
          name="Utilisateur"
          list={UtilisateurList}
          edit={UtilisateurEdit}
          create={UtilisateurCreate}
          show={UtilisateurShow}
        />
        <Resource
          name="Produit"
          list={ProduitList}
          edit={ProduitEdit}
          create={ProduitCreate}
          show={ProduitShow}
        />
        <Resource
          name="CategorieProduit"
          list={CategorieProduitList}
          edit={CategorieProduitEdit}
          create={CategorieProduitCreate}
          show={CategorieProduitShow}
        />
        <Resource
          name="ConditionnementProduit"
          list={ConditionnementProduitList}
          edit={ConditionnementProduitEdit}
          create={ConditionnementProduitCreate}
          show={ConditionnementProduitShow}
        />
        <Resource
          name="PointAchat"
          list={PointAchatList}
          edit={PointAchatEdit}
          create={PointAchatCreate}
          show={PointAchatShow}
        />
        <Resource
          name="UniteProduit"
          list={UniteProduitList}
          edit={UniteProduitEdit}
          create={UniteProduitCreate}
          show={UniteProduitShow}
        />
        <Resource
          name="Reclamation"
          list={ReclamationList}
          edit={ReclamationEdit}
          create={ReclamationCreate}
          show={ReclamationShow}
        />
        <Resource
          name="Commande"
          list={CommandeList}
          edit={CommandeEdit}
          create={CommandeCreate}
          show={CommandeShow}
        />
        <Resource
          name="OffrePrix"
          list={OffrePrixList}
          edit={OffrePrixEdit}
          create={OffrePrixCreate}
          show={OffrePrixShow}
        />
      </Admin>
    </div>
  );
};

export default App;
