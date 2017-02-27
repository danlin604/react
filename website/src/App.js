import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import uuid from 'uuid';
import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  // lifecycle method, put data here
  componentWillMount() {
    this.setState({projects: [
      {
        id: uuid.v4(),
        title: "Business Website",
        category: "Web Design"
      },
      {
        id: uuid.v4(),
        title: "Social App",
        category: "Mobile Development"
      },
      {
        id: uuid.v4(),
        title: "Ecommerce Shopping Cart",
        category: "Web Development"
      }
    ]});
  }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects: projects});
  }

  render() {
    return (
      <div className="App">
        <h1>My App</h1>
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <h1>Projects</h1>
        <Projects 
          projects={this.state.projects} 
          onDelete={this.handleDeleteProject.bind(this)} />
      </div>
    );
  }

}

export default App;
