import { Component, Suspense } from 'react'

const withSuspense = (Fallback) => (WrappedComponent) =>
  class DataSuspenseLoader extends Component {
    render () {
      return (
        <Suspense fallback={<Fallback />}>
          <WrappedComponent {...this.props} />
        </Suspense>
      )
    }
  }

export default withSuspense
