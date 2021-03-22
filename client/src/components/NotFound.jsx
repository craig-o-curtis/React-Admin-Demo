// ** catchAll prop in <Admin> for custom 404 page

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Title } from "react-admin";

const NotFound = () => {
  return (
    <Card>
      <Title title="Not Found" />
      <CardContent>
        <h1>404: Page not found</h1>
      </CardContent>
    </Card>
  );
};

export default NotFound;
