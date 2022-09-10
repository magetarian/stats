import React from 'react';
import { Tile, Tag } from 'carbon-components-react';
import { Breadcrumb, BreadcrumbItem } from 'carbon-components-react';
import {
  LogoLinkedin32,
  LogoTwitter32,
  LogoGithub32,
  Launch32,
} from '@carbon/icons-react';

const data = [
  {
    name: 'Risha Tiwari',
    channels: [
      {
        name: 'linkedin',
        url: 'http://linkedin.com/in/rishatiwari',
      },
      {
        name: 'github',
        url: 'http://github.com/rishatiwari',
      },
      {
        name: 'twitter',
        url: 'http://twitter.com/risha_tiwari',
      },
    ],
    url: 'http://linkedin.com/in/rishatiwari',
    tags: ['ui', 'design', 'reactjs', 'carbon-design', 'graphs'],
    image: 'https://www.gravatar.com/avatar/47d48b8a08c78296211d41757652d065',
  },
  {
    name: 'Milind Singh',
    channels: [
      {
        name: 'linkedin',
        url: 'http://linkedin.com/in/imilindsingh',
      },
      {
        name: 'github',
        url: 'http://github.com/milindsingh',
      },
      {
        name: 'twitter',
        url: 'http://twitter.com/imilindsingh',
      },
    ],
    url: 'http://linkedin.com/in/imilindsingh',
    tags: ['api', 'loopback4', 'mongodb', 'nodejs', 'oracle-cloud'],
    image: 'https://www.gravatar.com/avatar/f6744fd10d3fef2a78f204a862b76f5f',
  },
  {
    name: 'Atish Goswami',
    channels: [
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/atish-goswami-04b42780/',
      },
      {
        name: 'github',
        url: 'http://github.com/atishgoswami',
      },
      {
        name: 'twitter',
        url: 'http://twitter.com/getatish',
      },
    ],
    url: 'https://www.linkedin.com/in/atish-goswami-04b42780/',
    tags: ['data', 'scrapping', 'idea', 'planning', 'netlify'],
    image: 'https://www.gravatar.com/avatar/01f722757e9dbabef712ed1495c49249',
  },
];
const ContributorPage = () => (
  <div className="bx--grid bx--grid--full-width landing-page">
    <div className="bx--row landing-page__banner">
      <div className="bx--col-lg-16">
        <Breadcrumb noTrailingSlash aria-label="Page navigation">
          <BreadcrumbItem>
            <a href="/">Magento Ceritification Dashboard</a>
          </BreadcrumbItem>
        </Breadcrumb>
        <h1 className="landing-page__heading">Contributors</h1>
      </div>
    </div>
    <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
      <div className="bx--row contributors-page__r1">
        <Contributors data={data} />
      </div>
    </div>
    <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
      <div className="bx--row contributors-page__r1">
        <div className={'bx--col contributor-center'}>
          <h3>Want to make it better ?</h3>
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

function Contributors(props) {
  const contributors = props.data;
  const items = contributors.map((contributor, i) => (
    <div key={i} className="bx--col-md-16 bx--col-lg-5">
      <Tile light={false}>
        <div className="bx--row">
          <div className="bx--col-sm-4 bx--col-md-2 bx--col-lg-6">
            <img src={contributor.image} alt={contributor.name} />
          </div>
          <div className="bx--col-sm-4 bx--col-md-6 bx--col-lg-10">
            <div>
              <a
                href={contributor.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contributor.name}
              </a>
            </div>
            <div>
              <Tags data={contributor.tags} />
            </div>
            <div>
              <SocialLinks data={contributor.channels} />
            </div>
          </div>
        </div>
      </Tile>
    </div>
  ));
  return <>{items}</>;
}

function SocialLinks(props) {
  const socialLinks = props.data;
  const items = socialLinks.map(function (s, i) {
    if (s.name === 'linkedin') {
      return (
        <a key={i} href={s.url} target="_blank" rel="noopener noreferrer">
          <LogoLinkedin32 aria-label={s.name} className={s.name} />
        </a>
      );
    } else if (s.name === 'github') {
      return (
        <a key={i} href={s.url} target="_blank" rel="noopener noreferrer">
          <LogoGithub32 aria-label={s.name} className={s.name} />
        </a>
      );
    } else if (s.name === 'twitter') {
      return (
        <a key={i} href={s.url} target="_blank" rel="noopener noreferrer">
          <LogoTwitter32 aria-label={s.name} className={s.name} />
        </a>
      );
    } else {
      return (
        <a key={i} href={s.url} target="_blank" rel="noopener noreferrer">
          <Launch32 aria-label={s.name} className={s.name} />
        </a>
      );
    }
  });
  return <>{items}</>;
}

function Tags(props) {
  const tags = props.data;
  const items = tags.map(function (tag, i) {
    return (
      <Tag key={i} type={'cool-gray'} title={tag}>
        {tag}
      </Tag>
    );
  });
  return <>{items}</>;
}

export default ContributorPage;
