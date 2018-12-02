import React from "react";
import API from "../../utils/API";
import { ClipLoader } from "react-spinners";
import _ from "lodash";

class Submit extends React.Component {
  state = {
    challenges: [],
    title: "",
    description: "",
    cloudinaryRef: "",
    challengeId: "",
    loading: false
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
    this.setState({
      loading: true
    });

    let userId = this.state.userId
      ? this.state.userId
      : "5be04cee9971c8c18da3c1cc";

    const { title, description, cloudinaryRef, challengeId } = this.state;

    API.submitPost({
      title,
      description,
      cloudinaryRef,
      challengeId,
      userId
    }).then((err, res) => {
      if (err) console.log("theres an error");
      this.setState({
        title: "",
        description: "",
        cloudinaryRef: "",
        thumbnail_url: "",
        loading: false
      });
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
    const loading = this.state.loading;
    return (
      <div className="container mt-5">
        {loading ? (
          <div className="sweet-loading">
            <ClipLoader
              loading={this.state.loading}
              color="#000000"
              className=""
            />
          </div>
        ) : (
          <form onSubmit={this.handleSubmit} id="submitForm">
            <h1>Submit a Post</h1>
            <h2>Feel like you have what it takes to be #1?</h2>

            <ul style={{ listStyleType: "none" }}>
              <li className="my-3">
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
              <li className="my-3">
                <h3>Pick a picture to submit:</h3>
                <input
                  type="button"
                  value="Select a picture"
                  className="btn btn-primary"
                  onClick={this.uploadWidget}
                />
                {this.state.thumbnail_url ? (
                  <img src={this.state.thumbnail_url} alt="Upload preview" />
                ) : null}
              </li>
              <li className="my-3">
                <h3>Title the image with a creative name:</h3>
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  required
                  onChange={this.handleInputChange}
                />
              </li>
              <li className="my-3">
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
              <li className="my-3">
                <h3>Your done, click submit</h3>
                <input type="submit" value="Submit" />
              </li>
            </ul>
          </form>
        )}
      </div>
    );
  }
}

export default Submit;
