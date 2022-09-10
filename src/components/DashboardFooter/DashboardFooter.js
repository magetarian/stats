import React from 'react';
import { UnorderedList, ListItem } from 'carbon-components-react';
import { Link } from 'react-router-dom';
import { env } from '../../Env';

const DashboardFooter = () => (
  <footer className={'bx--grid mc-footer'}>
    <div className={'bx--row'}>
      <div className={'bx--offset-lg-3 bx--col-md-2 bx--col-lg-2'}>
        <UnorderedList nested={false}>
          <ListItem>
            <Link to="/contributors">Contributors</Link>
          </ListItem>
          <ListItem>
            <Link to="/data-accuracy">Data Accuracy</Link>
          </ListItem>
          <ListItem>
            <a href="https://magento-lucknow.github.io/certification-notes/">
              Certification Notes
            </a>
          </ListItem>
        </UnorderedList>
      </div>
      <div className={'bx--col-md-2 bx--col-lg-2'}>
        <UnorderedList nested={false}>
          <ListItem>
            <a href="https://www.youtube.com/channel/UCJUD_kYYf2kioarixdsGDRw">
              Youtube
            </a>
          </ListItem>
          <ListItem>
            <a href="https://twitter.com/MageCoverage">Twitter</a>
          </ListItem>
          <ListItem>
            <a href="https://www.meetup.com/magento-lucknow/">Meetup Lucknow</a>
          </ListItem>
          <ListItem>
            <a href="https://www.meetup.com/Magento-Meetup-Nagpur/">
              Meetup Nagpur
            </a>
          </ListItem>
        </UnorderedList>
      </div>
      <div className={'bx--offset-lg-3 bx--col-sm-3 bx--col-md-4 bx--col-lg-4'}>
        <UnorderedList nested={false}>
          <ListItem>
            <span style={{ fontWeight: 400 }}>Mage Certs</span> a one of a kind
            Magento Ceritification Dashboard. Reimagined. Redefined.
          </ListItem>
          <ListItem></ListItem>
          <ListItem>Copyright © 2020 Mage Certs</ListItem>
          <ListItem>
            The Magento name and its related logos are trademarks owned by
            Magento, Inc.
          </ListItem>
          <ListItem className={'footer-small-item'}>
            Build: {env.build} {env.release}
          </ListItem>
          <ListItem className={'footer-small-item no-margin'}>
            Date: {env.date}
          </ListItem>
        </UnorderedList>
      </div>
    </div>
  </footer>
);

export default DashboardFooter;
