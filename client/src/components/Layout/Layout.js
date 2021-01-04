import { connect } from 'react-redux';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import CartDropdown from '../CartDropdown/CartDropdown';
import Footer from '../Footer/Footer';

import './Layout.scss';

const Layout = ({ children, isDropdownHidden }) => (
  <>
    <Toolbar />
    <main id="Layout">
      <div className="layout">
        <div className="layout-cart">
          {isDropdownHidden ? null : <CartDropdown />}
        </div>
        {children}
      </div>
    </main>
    <Footer />
  </>
);

const mapStateToProps = ({ cartDropdown: { isDropdownHidden } }) => ({
  isDropdownHidden,
});

export default connect(mapStateToProps)(Layout);
