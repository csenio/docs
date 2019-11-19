// make components available to mdx here
import React from 'react'
import * as ReactMethods from 'react'
import styled from 'styled-components'
import Select from 'react-select'

const scope = {
  React,
  ...ReactMethods,
  styled,
  Select,
}
export default scope
