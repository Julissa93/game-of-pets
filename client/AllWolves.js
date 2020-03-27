import React, { Component } from "react";
import { fetchWolvesFromServer } from "./reducers/wolfReducer";
import axios from "axios";
import { connect } from "react-redux";
const loadingImage = 'https://derpicdn.net/img/view/2017/6/25/1471445.gif';

class AllWolves extends Component {
  componentDidMount() {
    this.props.getWolves();
  }

  render() {
    const { wolves } = this.props;
    if (this.props.loading)
      return (
        <div>
          <h3>Loading...</h3>
          <img src={loadingImage} className='loading' />
        </div>
      );

    return (
      <div>
        <ul>
          {wolves.map(wolf => (
            <li key={wolf.id}>
              <h2>🐺 Direwolf: {wolf.name} 🐺</h2>
              <img src={wolf.imageUrl} height="400" width="600" />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  wolves: state.wolves.all,
  loading: state.wolves.loading
});

const mapDispatchToProps = dispatch => ({
  getWolves: () => dispatch(fetchWolvesFromServer())
});

export default connect(mapStateToProps, mapDispatchToProps)(AllWolves);
