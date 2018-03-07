import React from 'react';

import Form from 'react-jsonschema-form';

const postForm = props => {
  const schema = {
    definitions: {
      categories: {
        type: 'string',
        enum: ['react','udacity','redux']
      }
    },
    title: 'Post Form ',
    description: 'Please add a post related to the relevant category',
    type: 'object',
    required: ['title', 'body', 'category', 'author'],
    properties: {
      title: {
        type: 'string',
        title: 'Title'
      },
      body: {
        type: 'string',
        title: 'body'
      },
      category: {
        '$ref': '#/definitions/categories',
        title: 'category',
        default: 'react'
      },
      author: {
        type: 'string',
        title: 'author'
      }
    }
  };
  const uiSchema = {
    title: {
      'ui:autofocus': true,
      'ui:emptyValue': ''
    },
    body: {
      'ui:widget': 'textarea',
      'ui:title': 'body',
      'ui:description': ''
    },
    category: {
      'ui:title': 'category',
      'ui:description': ''
    },
    author: {
      'ui:title': 'author',
      'ui:description': ''
    }
  };
  const formData = {
    title: 'title of post',
    body: 'body of post',
    category: 'react',
    author: 'author of post'
  };

  return (
    <div>
      <Form
       schema={schema}
       uiSchema={uiSchema}
       formData={formData}
       onChange={({formData}) => props.onChange(formData)}
       onSubmit={({formData}) => props.onSubmit(formData)}/>
    </div>
  );
};

export default postForm