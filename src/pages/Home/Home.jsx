import React from 'react'
import Button from '../../components/assets/Button'
import HeroSection from './HeroSection'
import { Introducation } from './Introducation'
import { Advwork } from './Advwork'
import { Advbackimage } from './Advbackimage'
import { Skilladv } from './Skilladv'
import { Advform } from './Advform'
import Interesting from '../About/Interesting'


export default function Home() {
  return (
    <>
      <HeroSection />
      <Introducation />
      <Advwork />
      <Advbackimage />
      <Skilladv />
      <Interesting />
      <Advform/>
    </>
  )
}
