import React, { Component } from "react";
import LandingPageCategoryButtons from "./landingPageCategoryButtons";
import GitHubLoginContainer from "../../containers/gitHubLoginContainer";
import LandingContainer from "../../containers/landingContainer";
import GitHubLoginButton from "./gitHubLoginButton";
import Navbar from "./navbar";

class Landing extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <LandingContainer>
          <LandingPageCategoryButtons />
          <GitHubLoginContainer>
            <GitHubLoginButton />
          </GitHubLoginContainer>
        </LandingContainer>
      </div>
    );
  }
}
export default Landing;
