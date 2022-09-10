import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import DashboardHeader from './components/DashboardHeader';
import DashboardFooter from './components/DashboardFooter';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import ContributorPage from './content/ContributorPage';
import DataAccuracy from './content/DataAccuracy';
import Notice from './components/Notice';

class App extends Component {
  render() {
    return (
      <>
        <Notice />
        <DashboardHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/contributors" component={ContributorPage} />
            <Route path="/data-accuracy" component={DataAccuracy} />
          </Switch>
        </Content>
        <DashboardFooter />
      </>
    );
  }
}

export default App;
