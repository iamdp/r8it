import React from "react";
import API from "../utils/API";

class Submit extends React.Component {
	state = {
		challenges: [],
		title: "",
		description: "",
		cloudinaryRef: "placeholder",
		challengeId: "",
		userId: "placeholder"
	};

	componentDidMount = () => {
		API.getCategories().then(response => {
			this.setState({
				challenges: response.data,
				challengeId: response.data[0]._id
			});
		});
	};

	handleInputChange = event => {
		const { name, value } = event.target;

		this.setState({
			[name]: value
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		API.submitPost(this.state).then(res => {
			console.log(res);
		});
	};

	render() {
		return (
			<div>
				<form>
					<label>
						Title:
						<input
							type="text"
							value={this.state.title}
							name="title"
							onChange={this.handleInputChange}
						/>
					</label>
					<label>
						Description:
						<input
							type="text"
							value={this.state.description}
							name="description"
							onChange={this.handleInputChange}
						/>
					</label>
					{/* Loop through the challenges and create an 'options' for each */}
					<select onChange={this.handleInputChange}>
						{this.state.challenges.map(challenge => {
							return (
								<option
									key={challenge._id}
									value={challenge._id}
									name="challengeId"
								>
									{challenge.verb} {challenge.noun}
								</option>
							);
						})}
					</select>
				</form>
			</div>
		);
	}
}

export default Submit;
