import React, { useEffect } from 'react';
import { getCategories } from '../redux/actions/ui';
import { connect } from 'react-redux';
import AppMenu from '../components/AppMenu';
import { bindActionCreators } from 'redux';
import * as fromUI from '../redux/reducers/ui';

const MenuContainer = ({ categories, getCategories, children }) => {
  useEffect(() => {
    getCategories();
  }, []);

  return <AppMenu categories={categories}>{children}</AppMenu>;
};

const mapDispatchToProps = dispatch => bindActionCreators({ getCategories }, dispatch);

const mapStateToProps = state => ({
  categories: fromUI.getCategories(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
