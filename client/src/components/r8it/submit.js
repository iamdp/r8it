import React from "react";
import API from "../../utils/API";
import _ from "lodash";

class Submit extends React.Component {
  state = {
    challenges: [],
    title: "",
    description: "",
    cloudinaryRef: "",
    challengeId: ""
  };

  componentDidMount = () => {
    API.getCategories().then(response => {
      // console.log(response.data);
      this.setState({
        challenges: response.data,
        challengeId: response.data[0]._id
      });
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    let userId = this.state.userId
      ? this.state.userId
      : "5be04cee9971c8c18da3c1cc";

    const { title, description, cloudinaryRef, challengeId } = this.state;

    API.submitPost({
      eloRank: 1500,
      title,
      description,
      cloudinaryRef,
      challengeId,
      userId
    }).then(res => {
      // console.log(res);
    });
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  uploadWidget = () => {
    const widget = window.cloudinary.openUploadWidget(
      {
        cloudName: "r8te",
        uploadPreset: "jlv2outw",
        sources: ["local", "url", "camera", "facebook", "dropbox", "instagram"],
        showAdvancedOptions: false,
        cropping: false,
        multiple: false,
        defaultSource: "local",
        styles: {
          palette: {
            window: "#000000",
            sourceBg: "#000000",
            windowBorder: "#8E9FBF",
            tabIcon: "#FFFFFF",
            inactiveTabIcon: "#8E9FBF",
            menuIcons: "#2AD9FF",
            link: "#08C0FF",
            action: "#336BFF",
            inProgress: "#00BFFF",
            complete: "#33ff00",
            error: "#EA2727",
            textDark: "#000000",
            textLight: "#FFFFFF"
          },
          fonts: {
            default: null,
            "'Poppins', sans-serif": {
              url: "https://fonts.googleapis.com/css?family=Poppins",
              active: true
            }
          }
        }
      },
      (error, result) => {
        // console.log(result);

        if (result && result.event === "success") {
          this.setState({
            cloudinaryRef: result.info.public_id,
            thumbnail_url: result.info.thumbnail_url
          });
          widget.close();
        }
      }
    );
  };

  render() {
    return (
      <div className="container mt-5">
        <form onSubmit={this.handleSubmit}>
          <h1>Submit a Post</h1>
          <h2>Feel like you have what it takes to be #1?</h2>
          <ol>
            <li>
              <h3>Select a category to compete in:</h3>
              {/* Loop through the challenges and create an 'options' for each */}
              {this.state.challenges ? (
                <select name="challengeId" onChange={this.handleInputChange}>
                  {this.state.challenges.map(challenge => {
                    return (
                      <option key={challenge._id} value={challenge._id}>
                        {_.startCase([challenge.verb]) +
                          " " +
                          _.startCase([challenge.noun])}
                      </option>
                    );
                  })}
                </select>
              ) : null}
            </li>
            <li>
              <h3>Pick a picture to submit:</h3>
              <button className="btn btn-primary" onClick={this.uploadWidget}>
                Select a picture
              </button>
              {this.state.thumbnail_url ? (
                <img src={this.state.thumbnail_url} alt="Upload preview" />
              ) : null}
            </li>
            <li>
              <h3>Title the image with a creative name:</h3>
              <input
                type="text"
                placeholder="Title"
                name="title"
                required
                onChange={this.handleInputChange}
              />
            </li>
            <li>
              <h3>Add a description:</h3>
              <textarea
                placeholder="Description"
                name="description"
                rows="5"
                cols="40"
                required
                onChange={this.handleInputChange}
              />
            </li>
            <li>
              <h3>Your done, click submit</h3>
              <input type="submit" value="Submit" />
            </li>
          </ol>
        </form>
      </div>
    );
  }
}

export default Submit;
