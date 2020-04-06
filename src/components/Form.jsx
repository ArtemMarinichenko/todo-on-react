import React from "react";

class Form extends React.Component {
  state = {
    title: ''
  }
  titleChange = (event) => {
    this.setState ({
      title: event.target.value
    })
  }
  onSubmit = (event) => {
    event.preventDefault();
    this.props.add(this.state.title);
    this.setState ({
      title: ''
    })
  }
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <input type="text"
               placeholder="Add task"
               className="form-control" 
               onChange={this.titleChange} 
               value={this.state.title} />
      </form>
    )
  }
}

export default Form;