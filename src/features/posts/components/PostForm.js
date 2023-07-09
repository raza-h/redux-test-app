import { Field, Form, Formik } from 'formik'
import React from 'react'
import { add } from '../postsSlice'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'

export const PostForm = ({formed, toggle}) => {

  const dispatch = useDispatch();

  const addPost =(post, {resetForm}) =>
  {
    dispatch(add(post));
    toggle();
    resetForm();
  }

  const postSchema = yup.object().shape({
    title: yup.string().required().label('Title'),
    content: yup.string().required().label('Content')
  });
  
  return (
    <Formik onSubmit={addPost} initialValues={{title: '', content: ''}} validationSchema={postSchema}>
        {({errors, touched}) => (

          <Form className={`${!formed ? 'h-0 overflow-hidden' : 'h-72 overflow-auto pb-5'} leading-0 mx-auto bg-gray-700 px-10 w-[99%] sm:w-80 rounded-b-md border-t-2 border-gray-800 space-y-2 transition-all form`}>
              <div className='py-4'>
                <label for = "title" className='block pb-1'>Title</label>
                <Field name = "title" as = "input" className='w-[100%] bg-transparent px-2 py-1 rounded-sm border focus:outline-0 text-sm'/>
                <p className='text-xs pt-0.5 text-red-400'>{errors.title && touched.title ? '* ' + errors.title : ''}</p>
              </div>
              <div>
                <label for = "content" className='block pb-1'>Content</label>
                <Field name = "content" as = "textarea" className='bg-transparent px-2 py-1 w-[100%] rounded-sm border focus:outline-0 text-sm'/>
                <p className='text-xs text-red-400'>{errors.content && touched.content ? '* ' + errors.content : ''}</p>
              </div>
              <div className='pt-2'>
                <button type = "submit" className='w-[100%] bg-gray-800 hover:bg-gray-900 active:bg-gray-950 py-1 rounded-md transition-all'>Add</button>
              </div>
          </Form>
        )}
    </Formik>
  )
}
