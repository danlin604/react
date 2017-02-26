import React, { Component } from 'react';
//import './App.css'; // only needed in the main app

class ProjectItem extends Component {  

  render() {
    return (
      <li className="Project">
        <strong>{this.props.project.title}</strong>: {this.props.project.category}
      </li>
    );
  }

}

export default ProjectItem;
