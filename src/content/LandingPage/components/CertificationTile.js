import React from 'react';
import { Tile } from 'carbon-components-react';
import { certifications } from '../Certifications';
import { Loading } from 'carbon-components-react';

class CertificationTile extends React.Component {
  state = {
    data: this.props.data,
    loading: this.props.loading,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.setState({ data: this.props.data });
    }

    if (prevProps.loading !== this.props.loading) {
      this.setState({ loading: this.props.loading });
    }
  }

  render() {
    return (
      <div className={'bleed'}>
        <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div className="bx--row contributors-page__r1">
            <div className="bx--col-md-8 bx--col-lg-16">
              <div className="bx--row">
                <Certifications
                  certifications={certifications}
                  data={this.state.data}
                  loading={this.state.loading}
                ></Certifications>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function Certifications(props) {
  const certifications = props.certifications;
  const data = props.data;
  const loading = props.loading;

  let count = 0;

  const items = certifications.map((certification, i) => {
    data.forEach((value) => {
      if (value.group === certification.name) {
        count = value.value;
      }
    });
    if (certification.type === 'Magento 2') {
      return (
        <div key={i} className="bx--col cert-tile-container">
          <Tile
            key={i}
            light={false}
            className="certificate-tile"
            style={{ backgroundColor: certification.light }}
          >
            <div className="bx--row">
              <div className="bx--col-sm-2 bx--col-md-2 bx--col-lg-6 certificate-tile-inner">
                <img
                  src={certification.image}
                  alt={certification.name}
                  width="40"
                />
              </div>
              <div className="bx--col-sm-2 bx--col-md-6 bx--col-lg-10 certificate-tile-inner">
                <div className={'certificate-tile-name'}>
                  <a
                    href={certification.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {certification.name}
                  </a>
                </div>
                <div className={'certificate-tile-value'}>
                  {loading ? (
                    <Loading
                      style={{
                        display: loading ? 'block' : 'none',
                      }}
                      className={'graph-loader'}
                      active={loading}
                      description="Loading Data"
                      small={true}
                      withOverlay={false}
                    />
                  ) : (
                    count
                  )}
                </div>
              </div>
            </div>
          </Tile>
        </div>
      );
    } else {
      return '';
    }
  });
  return <>{items}</>;
}

export default CertificationTile;
