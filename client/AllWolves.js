import React from "react";
import { getWolves } from './store'
import axios from "axios";
import { connect } from "react-redux";

class AllWolves extends React.Component {

  async componentDidMount() {
    const { data } = await axios.get('/api/wolves');
    this.props.getWolves(data);
  }

  render() {
    const { wolves } = this.props;
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
  wolves: state.wolves
})

const mapDispatchToProps = dispatch => ({
  getWolves: (wolves) => dispatch(getWolves(wolves))
})

export default connect(mapStateToProps, mapDispatchToProps)(AllWolves);