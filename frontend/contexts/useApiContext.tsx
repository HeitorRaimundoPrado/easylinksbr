import { createContext } from "react"

export const UseApiContext = createContext<{
  getApi: (endpoint: string, callback?: (data: any) => void) => Promise<void>,
  postApi: (endpoint: string, body: any, callback?: (data: any) => void,) => Promise<void>
} | null>(null);
