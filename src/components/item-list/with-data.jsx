import React, { Component } from "react";
import { ItemList } from "./Item-list";
import { Loading } from "../loading/Loading";
import { ApiResources } from "../api-resurses/Api-Resurs";


const WithData = (getData, WrappedComponent) => {

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
      return <WrappedComponent {...this.props} data={data} />;
    }
  };
};

const myApi = new ApiResources();
const { getAllPeople } = myApi;


export default WithData(getAllPeople, ItemList);