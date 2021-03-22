import { Edit, SimpleForm, TextInput, DateInput } from "react-admin";

const PostEdit = (props) => {
  return (
    <Edit {...props} title={`Edit Post`}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="title" />
        <TextInput source="body" multiline />
        <DateInput source="publishedAt" label="Published" />
      </SimpleForm>
    </Edit>
  );
};

export default PostEdit;
