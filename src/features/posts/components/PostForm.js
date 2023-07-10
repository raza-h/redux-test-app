import { Form, Formik } from 'formik'
import React from 'react'
import { add } from '../postsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { allUsers } from '../../users/usersSlice'
import * as yup from 'yup'
import FormField from '../../components/FormField'

export const PostForm = ({formed, toggle}) => {

  const users = useSelector(allUsers);
  const dispatch = useDispatch();
  
  const addPost =(post, {setSubmitting, resetForm}) =>
  {
    setSubmitting(true);
    console.log(post);
    dispatch(add(post));
    toggle();
    setSubmitting(false);
    resetForm();
  }

  const postSchema = yup.object().shape({
    title: yup.string().required().label('Title'),
    content: yup.string().required().label('Content')
  });

  const UserOptions = () => users.map(({id, name}) => <option className = {`text-gray-200 bg-gray-700 font-semibold`} key = {id} value = {id}>{name}</option>);
  
  return (
    <Formik onSubmit={addPost} initialValues={{title: '', content: '', userId: '0'}} validationSchema={postSchema}>
        {({errors, touched, isSubmitting}) => (

          <Form className={`${!formed ? 'h-0 overflow-hidden' : 'h-[21.5rem] overflow-auto'} leading-0 mx-auto bg-gray-700 px-10 w-[99%] sm:w-80 rounded-b-md border-t-2 border-gray-800 transition-all form`}>
              <FormField name = "userId" type = "select" Options = {UserOptions} styled = "pt-4" />
              <FormField name = "title" type = "input" errors = {errors.title} touched = {touched.title} />
              <FormField name = "content" type = "textarea" errors = {errors.content} touched = {touched.content} />
              
              <div className='pt-2 pb-4'>
                <button disabled={isSubmitting} type = "submit" className='w-[100%] disabled:bg-gray-600 bg-gray-800 hover:bg-gray-900 active:bg-gray-950 py-1 rounded-md transition-all'>Add</button>
              </div>

          </Form>
        )}
    </Formik>
  )
}
