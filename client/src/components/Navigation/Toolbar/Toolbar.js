import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

import './Toolbar.scss';

const Toolbar = () => (
  <>
    <header id="Toolbar">
      <div className="toolbar bg-gray-dark">
        <div className="toolbar-content container show-effect">
          <Logo />
          <NavigationItems />
        </div>
      </div>
    </header>
  </>
);

export default Toolbar;
