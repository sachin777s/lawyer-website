import React from 'react'
import PageHeading from '../../components/PageHeading'
import { Introducation } from '../Home/Introducation'
import { Skilladv } from '../Home/Skilladv'
import { Advform } from '../Home/Advform'
import { Interesting } from './Interesting'

export default function About() {
  return (
    <>
    <PageHeading text={"About Advocate Siam Al Mobarak"}/>
    <Introducation />
    <Skilladv />
    <Interesting/>
    <Advform />
    </> 
  )
}
