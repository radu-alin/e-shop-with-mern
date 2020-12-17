import { connect } from 'react-redux';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import CartDropdown from '../Cart/CartDropdown/CartDropdown';
import Footer from '../Footer/Footer';

import './Layout.scss';

const Layout = ({ children, isHidden }) => (
  <>
    <Toolbar />
    <main id="Layout">
      <div className="layout">
        <div className="layout-cart">{isHidden ? null : <CartDropdown />}</div>
        {children}
      </div>
    </main>
    <Footer />
  </>
);

const mapStateToProps = ({ cart: { isHidden } }) => ({
  isHidden,
});

export default connect(mapStateToProps)(Layout);
