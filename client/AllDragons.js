import React, { Component } from "react";
import { fetchDragonsFromServer } from "./reducers/dragonReducer";
import { connect } from "react-redux";
const loadingImage = 'https://derpicdn.net/img/view/2017/6/25/1471445.gif';

class AllDragons extends Component {
  componentDidMount() {
    this.props.getDragons();
  }

  render() {
    const { dragons } = this.props;
    if (this.props.loading)
      return (
        <div>
          <h3>Loading...</h3>
          <img src={loadingImage} className='loading'/>
        </div>
      );

    return (
      <div>
        <ul>
          {dragons.map(dragon => (
            <li key={dragon.id}>
              <h2>🐉 Dragon: {dragon.name} 🐉</h2>
              <img src={dragon.imageUrl} height="400" width="600" />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dragons: state.dragons.all,
  loading: state.dragons.loading
});

const mapDispatchToProps = dispatch => ({
  getDragons: () => dispatch(fetchDragonsFromServer())
});

export default connect(mapStateToProps, mapDispatchToProps)(AllDragons);
