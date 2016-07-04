import { connect } from 'react-redux';
import { selectGundam } from '../actions/index';
import GundamList from '../components/GundamList';

const mapStateToProps = (state) => {
  return {
    items : state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick : (item) => {
      dispatch(selectGundam(item));
    }
  }
};

const TopLevelGundamList = connect(
  mapStateToProps,
  mapDispatchToProps
)(GundamList);

export default TopLevelGundamList;
