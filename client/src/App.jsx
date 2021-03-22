import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import PostList from "./components/PostList";
import PostCreate from "./components/PostCreate";
import PostEdit from "./components/PostEdit";
import UsersList from "./components/UsersList";
// import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Admin
      disableTelemetry
      dataProvider={restProvider("http://localhost:3000")}
      title={`Test Drive of React Admin`}
      // catchAll={NotFound}
    >
      <Resource
        name="posts"
        list={PostList}
        create={PostCreate}
        edit={PostEdit}
      />
      <Resource name="users" list={UsersList} />
    </Admin>
  );
};

export default App;
