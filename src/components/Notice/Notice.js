import React from 'react';
import { Link } from 'react-router-dom';
import { get } from '../../Env';

const Notice = () => {
  let condition = get('show_notice');
  if (condition) {
    return (
      <div className={'disclaimer-banner'}>
        Disclaimer: &nbsp;
        <span className="disclaimer-text disclaimer-text-full">
          All efforts are made to display accurate data, but data is not 100%
          correct due to multiple reasons. For more information &nbsp;
          <Link to="/data-accuracy">click here.</Link>
        </span>
        <span className="disclaimer-text disclaimer-text-mobile">
          Data is not 100% correct due to &nbsp;
          <Link to="/data-accuracy">multiple reasons</Link>.
        </span>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Notice;
