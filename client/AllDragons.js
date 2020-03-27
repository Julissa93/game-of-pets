import React from "react";
import { fetchDragonsFromServer } from "./store";
import { connect } from "react-redux";

class AllDragons extends React.Component {
  componentDidMount() {
    this.props.getDragons();
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

const mapStateToProps = state => ({
  dragons: state.dragons
});

const mapDispatchToProps = dispatch => ({
  getDragons: () => dispatch(fetchDragonsFromServer())
});

export default connect(mapStateToProps, mapDispatchToProps)(AllDragons);
