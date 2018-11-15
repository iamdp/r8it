import React from "react";
import API from "../../utils/API";

class Categories extends React.Component {
  state = {};

  componentDidMount() {
    API.getCategories().then(response => {
      this.setState({ categories: response.data });
      console.log(response.data);
    });
  }

  handleClick = () => {
    API.getCategories().then(response => {
      this.setState({ categories: response.data });
    });
  };

  render() {
    if (this.state.categories) {
      return (
        <div>
          {this.state.categories.map(category => {
            return (
              <div>
                <button>
                  {category.verb} {category.noun}
                </button>
              </div>
            );
          })}
        </div>
      );
    } else return null;
  }
}
export default Categories;
