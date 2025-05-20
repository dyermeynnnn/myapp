import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about/1')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/about/1"!</div>
}
