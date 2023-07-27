import { LoadingContainer } from './styles'

export function Loading() {
  return (
    <LoadingContainer>
      <div className="loading-overlay">
        <div className="cssload-speeding-wheel"></div>
      </div>
    </LoadingContainer>
  )
}
