import React, { Component } from "react";
import { Link } from "react-router-dom";

import ProjectSummary from "./ProjectSummary";

class ProjectList extends Component {
  render() {
    const { projects } = this.props;
    return (
      <div className="project-list section">
        {projects &&
          projects.map((project) => {
            return (
              <Link to={"/project/" + project.id}>
                <ProjectSummary project={project} key={project.id} />
              </Link>
            );
          })}
      </div>
    );
  }
}

export default ProjectList;
