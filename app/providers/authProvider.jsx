"use client"

import React from 'react';
import { SessionProvider } from "next-auth/react"

export const authProvider = ({children}) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default authProvider;