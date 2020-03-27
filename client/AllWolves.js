import React from "react";
import { connect } from "react-redux";
import { fetchWolves } from "./reducers/wolfReducer";

class AllWolves extends React.Component {

 componentDidMount() {
    this.props.fetchWolves();
  }

  render() {
    const { wolves } = this.props;
    if (this.props.loading) return <h1>...Loading!!!</h1>
    return (
      <div>
        <ul>
          {wolves.map(wolf => (
            <li key={wolf.id}>
              <h2>Direwolf: {wolf.name}</h2>
              <img src={wolf.imageUrl} height="400" width="600" />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = state => {
  return {
    wolves: state.wolves.all,
    loading: state.wolves.loading
  };
};

const mapDispatch = dispatch => {
  return {
    fetchWolves: () => dispatch(fetchWolves())
  };
};

export default connect(
  mapState,
  mapDispatch
)(AllWolves);
