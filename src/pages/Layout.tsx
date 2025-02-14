import Header from "@/components/Header"
import { Outlet } from "react-router"

const Layout = () => {
  return (
    <section>
        <Header />
        <Outlet />
    </section>
  )
}

export default Layout