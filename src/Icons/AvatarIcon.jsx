import React from 'react';

const styles = {
  Icon: {
    color: '#110f0f',
    fill: '#110f0f',
    fontSize: '24px',
    top: '52px',
    left: '1320px',
    width: '24px',
    height: '24px',
  },
};

const IconComponent = () => (
  <svg style={styles.Icon}  viewBox="0 0 448 512">
    <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z">
    </path>
  </svg>
);

const defaultProps = {
  IconComponent,
};

const AvatarIcon = (props) => {
  return (
    props.IconComponent 
      ? <props.IconComponent style={styles.Icon} /> 
      : <defaultProps.IconComponent />
  );
};

export default AvatarIcon;