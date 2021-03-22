import React from "react";
import { List, Datagrid, TextField, EmailField } from "react-admin";

const UsersList = (props) => {
  return (
    <List {...props} bulkActionButtons={false}>
      <Datagrid>
        <TextField source={`id`} />
        <TextField source={`name`} />
        <EmailField source={`email`} />
      </Datagrid>
    </List>
  );
};

export default UsersList;
