import React, { Component } from 'react'
import StudentList from './components/StudentList';
import ProjectList from "./components/ProjectList"


export default class App extends Component {
  state = {
    students: [],
    projects: []
  }

  render() {
    return (
      <div>
        <h1> HEllo world!</h1>
        <StudentList students={this.state.students} />
        <ProjectList projects={this.state.projects} />
      </div>
    )
  }
  
  // fetchProjects = async()=>{
  //   const res = await fetch("http://localhost:4000/projects")
  //   //http://localhost:3032/students
  //   //http:&//localhost:5432/students
  //   const projects = await res.json()
  //   this.setState({
  //     projects: projects.rows
  //   })

  // }

  // fetchStudents = async() => {
  //   const res = await fetch("http://localhost:4000/projects")
  //   //http://localhost:3032/students
  //   //http:&//localhost:5432/students
  //   const students = await res.json()
  //   this.setState({
  //     students: students.rows
  //   })
  // }

  componentDidMount = async ()=>{
    const res = await fetch("http://localhost:4000/projects")
    //http://localhost:3032/students
    //http:&//localhost:5432/students
    const projects = await res.json()
    this.setState({
      projects: projects.rows
    })
    
  }
}

