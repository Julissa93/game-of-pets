import React from "react";
import { getDragons } from './store';
import axios from 'axios';
import { connect } from "react-redux";

class AllDragons extends React.Component {

  async componentDidMount() {
    const { data } = await axios.get('/api/dragons');
    this.props.getDragons(data);
  }

  render() {
    const { dragons } = this.props;
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

const mapStateToProps = (state) => ({
  dragons: state.dragons
})

const mapDispatchToProps = (dispatch) => ({
  getDragons: (dragons) => dispatch(getDragons(dragons))
})

export default connect(mapStateToProps, mapDispatchToProps)(AllDragons);