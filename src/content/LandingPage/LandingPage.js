import React from 'react';
import { StackedBarChart, AreaChart, DonutChart } from '@carbon/charts-react';
import CertificationTile from './components/CertificationTile';

import { Tabs, Tab, Loading } from 'carbon-components-react';
import { InfoSection, InfoCard } from '../../components/Info';
import Globe32 from '@carbon/icons-react/lib/globe/32';
import PersonFavorite32 from '@carbon/icons-react/lib/person--favorite/32';
import Application32 from '@carbon/icons-react/lib/application/32';
import { certifications } from './Certifications';
import { get } from '../../Env';

const CACHE = {};

const props = {
  tabs: {
    type: 'default',
    selected: 0,
    role: 'navigation',
    scrollIntoView: false,
    selectionMode: 'automatic'
  },
  tab: {
    href: '#',
    role: 'presentation',
    tabIndex: 0,
  },
};

class LandingPage extends React.Component {
  state = {
    loading: true,
    areaChartData: [
      { group: 'M1 Developer', date: '2020-01-01T18:30:00.000Z', value: 1 },
    ],
    areaChartData2: [
      {
        group: 'M2 Associate Developer',
        date: '2020-01-01T18:30:00.000Z',
        value: 1,
      },
    ],
    options: {
      animations: true,
      title: 'Overall Certifications',
      axes: {
        bottom: {
          title: 'Year Wise Magento Certification',
          mapsTo: 'date',
          scaleType: 'time',
        },
        left: {
          mapsTo: 'value',
          title: 'Total Certification',
          scaleType: 'linear',
        },
      },
      height: '700px',
      certifications: certifications,
      getStrokeColor: function (set, label, value) {
        let result = false;
        this.certifications.forEach((certification) => {
          if (set === certification.name) {
            result = certification.light;
          }
        });

        return result;
      },
      getFillColor: function (set, label, value) {
        let result = false;
        this.certifications.forEach((certification) => {
          if (set === certification.name) {
            result = certification.light;
          }
        });

        return result;
      },
    },
    donutChartData: [{ group: 'M1 Developer', value: 1 }],
    donutChartData2: [{ group: 'M2 Associate Developer', value: 1 }],
    donutOptions: {
      animations: true,
      title: 'Certifications Donut',
      donut: {
        center: {
          label: 'Certifications',
        },
      },
      resizable: true,
      height: '700px',
      certifications: certifications,
      getStrokeColor: function (set, label, value) {
        let result = false;
        this.certifications.forEach((certification) => {
          if (set === certification.name) {
            result = certification.light;
          }
        });

        return result;
      },
      getFillColor: function (set, label, value) {
        let result = false;
        this.certifications.forEach((certification) => {
          if (set === certification.name) {
            result = certification.light;
          }
        });

        return result;
      },
    },
    stackedBarChartData: [
      { group: 'M1 Developer', key: 'Adapttive Inc', value: 1 },
    ],
    stackedBarChartData2: [
      { group: 'M2 Associate Developer', key: 'Adapttive Inc', value: 1 },
    ],
    stackedBarChartOptions: {
      animations: true,
      title: 'Agency Wise (Top 50)',
      axes: {
        left: {
          mapsTo: 'value',
          stacked: true,
        },
        bottom: {
          mapsTo: 'key',
          scaleType: 'labels',
          ticks: {
            formatter: function (label) {
              let result = label;
              // TODO: add rank in label
              return result;
            },
            rotateIfSmallerThan: 100,
            min: 20,
            max: 20,
          },
        },
      },
      height: '1000px',
      certifications: certifications,
      getStrokeColor: function (set, label, value) {
        let result = false;
        this.certifications.forEach((certification) => {
          if (set === certification.name) {
            result = certification.light;
          }
        });

        return result;
      },
      getFillColor: function (set, label, value) {
        let result = false;
        this.certifications.forEach((certification) => {
          if (set === certification.name) {
            result = certification.light;
          }
        });

        return result;
      },
    },
  };

  componentDidMount() {
    this.load();
  }

  load() {
    if (CACHE[this.props.page] !== undefined) {
      const data = CACHE[this.props.page];
      this.setState({
        loading: false,
        areaChartData: data.areachart,
        areaChartData2: data.magento2.areachart,
        donutChartData: data.donut,
        donutChartData2: data.magento2.donut,
        stackedBarChartData: data.stackedbar,
        stackedBarChartData2: data.magento2.stackedbar,
      });
    } else {
      const headers = { 'Content-Type': 'application/json' };
      const url = get('api') + get('dashboard');
      fetch(url, { headers })
        .then((response) => response.json())
        .then((data) => {
          if (data.hasOwnProperty('magento2')) {
            CACHE[this.props.page] = data;
            this.setState({
              loading: false,
              areaChartData: data.areachart,
              areaChartData2: data.magento2.areachart,
              donutChartData: data.donut,
              donutChartData2: data.magento2.donut,
              stackedBarChartData: data.stackedbar,
              stackedBarChartData2: data.magento2.stackedbar,
            });
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }

  render() {
    return (
      <div className="bx--grid bx--grid--full-width landing-page">
        <div className="bx--row landing-page__banner">
          <div className="bx--col-lg-16 certification-tile-wrapper">
            <CertificationTile
              data={this.state.donutChartData2}
              loading={this.state.loading}
            ></CertificationTile>
          </div>
        </div>
        <div className="bx--row landing-page__r2">
          <div className="bx--col bx--no-gutter">
            <Tabs
              {...props.tabs}
              aria-label="Tab navigation"
              className="certification-tab"
            >
              <Tab {...props.tab} label="Magento 2" >
                <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                  <div className="bx--row landing-page__tab-content">
                    <div
                      className="bx--col-md-16 bx--col-lg-16"
                      style={{
                        display: this.state.loading ? 'block' : 'none',
                      }}
                    >
                      <Loading
                        className={'graph-loader'}
                        active={this.state.loading}
                        description="Loading Data"
                        small={true}
                        withOverlay={false}
                      />
                    </div>
                    <div className="bx--col-md-16 bx--col-lg-12">
                      <AreaChart
                        data={this.state.areaChartData2}
                        options={this.state.options}
                      />
                    </div>
                    <div className="bx--col-md-16 bx--col-lg-4">
                      <DonutChart
                        data={this.state.donutChartData2}
                        options={this.state.donutOptions}
                        getFillColor={this.getFill}
                      />
                    </div>
                    <div className="bx--col-md-16 bx--col-lg-16 agency-stackedbar">
                      <StackedBarChart
                        data={this.state.stackedBarChartData2}
                        options={this.state.stackedBarChartOptions}
                      />
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab {...props.tab} label="Overall">
                <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                  <div className="bx--row landing-page__tab-content">
                    <div
                      className="bx--col-md-16 bx--col-lg-16"
                      style={{
                        display: this.state.loading ? 'block' : 'none',
                      }}
                    >
                      <Loading
                        className={'graph-loader'}
                        active={this.state.loading}
                        description="Loading Data"
                        small={true}
                        withOverlay={false}
                      />
                    </div>
                    <div className="bx--col-md-16 bx--col-lg-12">
                      <AreaChart
                        data={this.state.areaChartData}
                        options={this.state.options}
                      />
                    </div>
                    <div className="bx--col-md-16 bx--col-lg-4">
                      <DonutChart
                        data={this.state.donutChartData}
                        options={this.state.donutOptions}
                      />
                    </div>
                    <div className="bx--col-md-16 bx--col-lg-16 agency-stackedbar">
                      <StackedBarChart
                        data={this.state.stackedBarChartData}
                        options={this.state.stackedBarChartOptions}
                      />
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
        <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div className="bx--row contributors-page__r1">
            <div className={'bx--col contributor-center'}>
              <h4>More charts are coming soon.</h4>
              <div className={'contact-atish'}>
                <small>
                  Contact{' '}
                  <a
                    href="https://www.linkedin.com/in/atish-goswami-04b42780/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Atish
                  </a>{' '}
                  for contributors access.
                </small>
              </div>
            </div>
          </div>
        </div>
        <InfoSection heading="Insights" className="landing-page__r3">
          <InfoCard
            heading="M2 Associate Developer"
            body="27% developers took M2 Associate Developer as their first certification."
            icon={<PersonFavorite32 />}
          />
          <InfoCard
            heading="M2 Solution Specialist"
            body="18.4% developers cleared M2 Solution Specialist."
            icon={<Application32 />}
          />
          <InfoCard
            heading="M2 Full Stack Developer"
            body="2% developers are 3x certified i.e M2 Professional + M2 JavaScript + M2 Frontend End"
            icon={<Globe32 />}
          />
        </InfoSection>
      </div>
    );
  }
}

export default LandingPage;
