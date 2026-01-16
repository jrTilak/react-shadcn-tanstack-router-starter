import { QueryProvider } from "./query-provider"

type RootProviderProps = {
  children: React.ReactNode
}
const RootProvider = ({ children }: RootProviderProps) => {
  return (
    <QueryProvider>
      {children}
    </QueryProvider>
  )
}

export { RootProvider }