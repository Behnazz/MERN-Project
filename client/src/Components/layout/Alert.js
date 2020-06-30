import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
  alert: PropTypes.array.isRequired
};

const Alert = props => {
  const alerts = props;

  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map(alert => (
      <div key={alert.id} className={`alert alert-${alert.alertType}`}>
        {alert.msg}
      </div>
    ))
  );
};

const mapStateToProps = state => ({
  alerts: state.alert
});

Alert.propTypes = propTypes;

export default connect(mapStateToProps)(Alert);
