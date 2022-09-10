import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'carbon-components-react';
import { UnorderedList, ListItem } from 'carbon-components-react';
import { env } from '../../Env';

const DataAccuracy = () => (
  <div className="bx--grid bx--grid--full-width landing-page">
    <div className="bx--row landing-page__banner">
      <div className="bx--col-lg-16">
        <Breadcrumb noTrailingSlash aria-label="Page navigation">
          <BreadcrumbItem>
            <a href="/">Magento Ceritification Dashboard</a>
          </BreadcrumbItem>
        </Breadcrumb>
        <h1 className="landing-page__heading">Data Accuracy</h1>
      </div>
    </div>
    <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
      <div className="bx--row data-accuracy-page__r1">
        <div className={'bx--col bx--offset-lg-3'}>
          <UnorderedList nested={false}>
            <ListItem className={'data-accuracy-item'}>
              Data accuracy is NOT guaranteed, but best efforts are taken to
              timely update.
            </ListItem>
            <ListItem className={'data-accuracy-item'}>
              All data is collected from public available sources. Hence, hidden
              profiles are not included.
            </ListItem>
            <ListItem className={'data-accuracy-item'}>
              Data updates takes place weekly and are only up to date with
              latest build date ({env.date}).
            </ListItem>
          </UnorderedList>
        </div>
      </div>
    </div>
    <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
      <div className="bx--row contributors-page__r1">
        <div className={'bx--col contributor-center'}>
          <h3>For further queries</h3>
          <div>
            Contact{' '}
            <a
              href="https://www.linkedin.com/in/atish-goswami-04b42780/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Atish
            </a>{' '}
            for project access.
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DataAccuracy;
