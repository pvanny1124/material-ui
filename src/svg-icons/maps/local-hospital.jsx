import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../../svg-icon';

let MapsLocalHospital = (props) => (
  <SvgIcon {...props}>
    <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/>
  </SvgIcon>
);
MapsLocalHospital = pure(MapsLocalHospital)
MapsLocalHospital.displayName = 'MapsLocalHospital';

export default MapsLocalHospital;
