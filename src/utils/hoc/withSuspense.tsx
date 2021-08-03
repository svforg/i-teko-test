import React from 'react'
import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner";

export function withSuspense<WCP>(WrappedComponent: React.ComponentType<WCP>) {
  return (props: WCP) => {
    return (
      <React.Suspense fallback={<><LoadingSpinner /></>}>
        <WrappedComponent {...props as WCP}/>
      </React.Suspense>
    )
  }
}