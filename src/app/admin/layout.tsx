"use client" // Menandai file ini sebagai komponen client-side

import Loader from '@/components/admin-panel/Loader'
import Login from '@/components/admin-panel/Login'
import { useAppSelector } from '@/redux/hooks'
import { useSession } from 'next-auth/react'
import React from 'react'
import Sidebar from '@/components/admin-panel/Sidebar'

const Layout = ({ children }: { children: React.ReactNode }) => {

  const isLoading = useAppSelector(store => store.loadingReducer)
  const { data: session } = useSession()

  // Jika tidak ada session, tampilkan komponen Login
  if (!session?.user) {
    return <Login />
  }

  // Jika ada session, tampilkan sidebar dan konten
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full h-full">
        {/* <Navbar /> */}
        <div className="bg-gray-200 p-4 h-[calc(100vh-64px)]">{children}</div>
      </div>
      {isLoading && <Loader />}
    </div>
  )
}

export default Layout
