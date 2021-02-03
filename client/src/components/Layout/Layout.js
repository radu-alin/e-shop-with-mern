import Toolbar from '../Navigation/Toolbar/Toolbar';
import Footer from '../Footer/Footer';

import './Layout.scss';

const Layout = ({ children }) => (
  <>
    <Toolbar />
    <main id='Layout'>
      <div className='layout'>{children}</div>
    </main>
    <Footer />
  </>
);

export default Layout;
