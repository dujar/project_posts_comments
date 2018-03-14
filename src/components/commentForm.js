import React from 'react';

import Form from 'react-jsonschema-form';

const commentForm = props => {
  const schema = {
    title: props.postForm,
    description: 'Please add a comment related to the post',
    type: 'object',
    required: ['body', 'author'],
    properties: {
      body: {
        type: 'string',
        title: 'body'
      },
      author: {
        type: 'string',
        title: 'author'
      }
    }
  };
  const uiSchema = {
    body: {
      'ui:widget': 'textarea',
      'ui:title': 'body',
      'ui:description': ''
    },
    author: {
      'ui:title': 'author',
      'ui:description': ''
    }
  };
  let formData = {
    body: 'body of comment',
    author: 'author of comment'
  };
  if(props.formData){
    formData = {...props.formData}
  } else{

}

  return (
    <div>
      <Form
       schema={schema}
       uiSchema={uiSchema}
       formData={formData}
       onChange={({formData}) => props.onChange(formData)}
       onSubmit={({formData}) => props.onSubmit(formData)}

       />
    </div>
  );
};

export default commentForm