import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <div className="">
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
