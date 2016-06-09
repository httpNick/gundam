import { connect } from 'react-redux';
import { toggleChoice } from '../actions';
import CheckBoxList from '../components/CheckBoxList';

const mapStateToProps = (state) => {
  return {
    items : state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange : (item) => {
      dispatch(toggleChoice(item.text, item.checked));
    }
  }
};

const SelectedCheckBoxList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckBoxList);

export default SelectedCheckBoxList;
