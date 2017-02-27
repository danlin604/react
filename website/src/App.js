import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
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
        title: "Business Website",
        category: "Web Design"
      },
      {
        title: "Social App",
        category: "Mobile Development"
      },
      {
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

  render() {
    return (
      <div className="App">
        <h1>My App</h1>
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <h1>Projects</h1>
        <Projects projects={this.state.projects} />
      </div>
    );
  }

}

export default App;
