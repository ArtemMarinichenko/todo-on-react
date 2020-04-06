import React from "react";

class Task extends React.Component {
  // state = {
  //   isMarked: false    
  // }
  // setMarked = () => {
  //   this.setState ({
  //     isMarked: !this.state.isMarked
  //   })
  // }
  
  
  render() {
    const {remove, text, marked, actual} = this.props;
    console.log(actual);
    let toggle = "task";
    if( actual) {
      toggle += " marked";      
    } else {
      toggle = "task"
    }
    
    return (
      // {this.state.isMarked ? "task marked" : "task"}
      <div className={toggle}>
        <div>{text}</div>
        <div>
          <button className="btn btn-success btn-sm mr-2"
                  onClick={marked}>
                 <span role="img">&#128293;</span></button>
          <button type="button" 
                  className="del btn btn-danger btn-sm"
                  onClick={remove}><span role="img">&times;</span></button>
        </div>    
      </div>
    )
  }
}

export default Task;