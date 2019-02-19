import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as newsActions from '../../actions/newsActions';
import {browserHistory} from 'react-router';

class SearchPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    const {news} = this.props;

    return (
      <div>
        <h1>News</h1>
        <input type="submit"
               value="Add News"
               className="btn btn-primary"
               />
      </div>
    );
  }
}

SearchPage.propTypes = {
  news: PropTypes.array,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    news: state.news
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(newsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
