import Toolbar from '../Navigation/Toolbar/Toolbar';
import Footer from '../Footer/Footer';

import './Layout.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Toolbar />
      <div id="Layout" className="layout">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
