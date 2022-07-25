import { lazy, Suspense } from 'react'
import { SWRConfig } from 'swr'

import { graphqlFetcher } from '../../utils/utils'

import './App.css'

const AllPersons = lazy(() => import('../../components/AllPersons/AllPersons'))

const swrConfig = {
  fetcher: graphqlFetcher,
  suspense: true
}

function App () {
  return (
    <SWRConfig value={swrConfig}>
      <Suspense fallback={<h2>Loading Container...</h2>}>
        <AllPersons />
      </Suspense>
    </SWRConfig>
  )
}

export default App
