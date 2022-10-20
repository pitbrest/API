import React, { Component } from 'react';
import { Loading } from '../loading/Loading';

const ItemsData = (getData, WrappedComponent) => {
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

export { ItemsData };
