import React from 'react'
import {getApis} from '../body/getApis'
const listCategories = getApis()
const Context = React.createContext(listCategories)
export default Context