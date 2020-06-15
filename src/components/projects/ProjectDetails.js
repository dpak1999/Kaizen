import React, { Component } from "react";

class ProjectDetails extends Component {
  render() {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">
              Project Title-{this.props.match.params.id}
            </span>
            <p>
              Aliquip do mollit excepteur mollit veniam id et fugiat ea quis eu
              ut. Ad mollit aliqua tempor duis nostrud reprehenderit dolore qui
              adipisicing dolore. Lorem sint do ex nisi sint. Adipisicing minim
              ullamco deserunt quis occaecat commodo veniam enim. Sit ex anim
              sunt veniam dolore anim sunt amet.
            </p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by deepak</div>
            <div>2nd sept, 2pm</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectDetails;
