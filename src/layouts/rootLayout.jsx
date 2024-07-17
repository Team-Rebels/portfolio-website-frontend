import Navbar from '../components/navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'

const RootLayout = () => {
  return <>
    <Navbar />
    <div>
      <Outlet />
    </div>
    <Footer />

  </>;
}

export default RootLayout