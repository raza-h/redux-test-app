import { Field } from 'formik'
import React from 'react'

const FormField = ({name, type, Options, errors, touched, styled}) => 
  <div className={styled}>
    <label htmlFor = {name} className='block pb-1'>{name[0].toUpperCase() + name.slice(1, name.length)}</label>
    <Field name = {name} as = {type} className='bg-transparent px-2 py-1 w-[100%] rounded-sm border focus:outline-0 text-sm'>
      {
        type === 'select' ? <Options /> : null
      }
    </Field>
    <p className='text-xs py-1 text-red-400'>{errors && touched ? '* ' + errors : ''}&nbsp;</p>
  </div>
  
export default FormField
