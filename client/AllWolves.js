import React from "react";
import { connect } from "react-redux";
import { fetchDirewolves } from "./reducers/direwolfReducer";

class AllWolves extends React.Component {

 componentDidMount() {
    this.props.fetchDirewolves();
  }

  render() {
    let wolves = this.props.direwolves;
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
    direwolves: state.direwolves.all,
    loading: state.direwolves.loading
  };
};

const mapDispatch = dispatch => {
  return {
    fetchDirewolves: () => dispatch(fetchDirewolves())
  };
};

export default connect(
  mapState,
  mapDispatch
)(AllWolves);
