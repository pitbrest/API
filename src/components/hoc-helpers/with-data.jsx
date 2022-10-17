import React, { Component } from "react";
import { Loading } from "../loading/Loading";

const withData = (View, getData) => {
  return class extends Component {

    state = {
      data: null,
    };

    componentDidMount() {
      getData().then((data) => {
        this.setState({
          data: data,
        });
      });
    }

    render() {
      const { data } = this.state;

      if (!data) {
        return <Loading />;
      }

      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;