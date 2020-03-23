import React, { useEffect } from 'react';
import { getCategories } from '../redux/actions/ui';
import { connect } from 'react-redux';
import AppMenu from '../components/AppMenu';
import { bindActionCreators } from 'redux';

const MenuContainer = ({ getCategories, children }) => {
  useEffect(() => {
    getCategories();
  }, []);

  return <AppMenu>{children}</AppMenu>;
};

const mapDispatchToProps = dispatch => bindActionCreators({ getCategories }, dispatch);

export default connect(null, mapDispatchToProps)(MenuContainer);
