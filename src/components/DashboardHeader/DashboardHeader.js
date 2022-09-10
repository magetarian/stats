import React from 'react';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from 'carbon-components-react/lib/components/UIShell';
import Notification20 from '@carbon/icons-react/lib/notification/20';
import AppSwitcher20 from '@carbon/icons-react/lib/app-switcher/20';
import { Link } from 'react-router-dom';
import { env } from '../../Env';

const DashboardHeader = () => (
  <Header className={'mage-certs-header'} aria-label="Certification Stats">
    <SkipToContent />
    <HeaderName element={Link} to="/" prefix="Mage">
      Certs <sup className={'heading-small'}>({env.release})</sup>
    </HeaderName>
    <HeaderNavigation aria-label="Certification Stats">
      <HeaderMenuItem element={Link} to="/contributors">
        Contributors
      </HeaderMenuItem>
    </HeaderNavigation>
    <HeaderGlobalBar>
      <HeaderGlobalAction aria-label="Notifications">
        <Notification20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label="App Switcher">
        <AppSwitcher20 />
      </HeaderGlobalAction>
    </HeaderGlobalBar>
  </Header>
);

export default DashboardHeader;
