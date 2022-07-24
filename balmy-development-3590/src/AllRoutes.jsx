import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Body } from './home/body/Body'
import { BodyLiveScore } from './liveScore/body/BodyLiveScore'
import { Bodyresults } from './liveScore/body/Bodyresults'
import { Bodyucoming } from './liveScore/body/Bodyucoming'

import { Headernews } from './news/header/Header'
import { PageNoteFould } from './PageNoteFould'

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Body/>}/>
      <Route path="/livescore" element={<BodyLiveScore/>}/>
      <Route path="/livescore/upcoming" element={<Bodyucoming/>}/>
      <Route path="/livescore/results" element={<Bodyresults/>}/>
      <Route path="/news" element={<Headernews/>}/>
      <Route path="*" element={<PageNoteFould/>}/>
    </Routes>
  )
}
