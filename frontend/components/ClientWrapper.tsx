"use client"

import React from 'react'
import { UseApiContext } from "@/contexts/useApiContext";
import useApi from "@/hooks/useApi";

export default function ClientWrapper({ children }: {
  children: React.ReactNode
}) {

  const { getApi, postApi } = useApi();
  return (
    <UseApiContext.Provider value={{ getApi, postApi }}>
      {children}
    </UseApiContext.Provider>
  )
}
