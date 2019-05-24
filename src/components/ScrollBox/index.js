////////////////////////////////////////////
// DON"T EVER DO THIS!!! This is legacy!!!//
////////////////////////////////////////////
// There are better ways of doing things  //
////////////////////////////////////////////
// I just don't have time for it now      //
////////////////////////////////////////////

import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";

class SkillBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
    this.animationInterval = null;
    this.resizeTimeout = null;
    this.data = null;
    this.scrolling = false;
    
    this.startScrolling = this.startScrolling.bind(this);
    this.focusHandler = this.focusHandler.bind(this);
    this.blurHandler = this.blurHandler.bind(this);
    this.scrollingAnimationFrame = this.scrollingAnimationFrame.bind(this);
    this.calculateData = this.calculateData.bind(this);
    this.resizeHandler = this.resizeHandler.bind(this);
  }
  
  
  calculateData() {
    this.scrolling = true;
    let data = {
      stackHeight: 0,
      children: []
    };
    
    let $subSkillList = ReactDOM.findDOMNode(this.refs.subSkillList);
    let $subSkills = $subSkillList.children;
    
    
    for(let subSkill of $subSkills) {
      subSkill.style.setProperty("position","static");
    }
    for(let subSkill of $subSkills) {
      let child = {};
      let rect = subSkill.getBoundingClientRect();
      
      
      child.node = subSkill;
      child.minTop = rect.height * -1;
      child.currentTop = data.stackHeight;
      data.stackHeight += rect.height;
      data.children.push(child);
    }
    
    for(let subSkill of $subSkills) {
      requestAnimationFrame(() => {
        subSkill.style.setProperty("position","absolute");
      });
    }
    
    data.parentHeight = $subSkillList.getBoundingClientRect().height;
    
    this.data = data;
    this.scrolling = false;
  }

  
  componentDidMount() {
    // Waits for first paint
    // Problem seems to be delay caused by absolute positioning in the stylesheet...
    setTimeout(this.calculateData);
    window.addEventListener("resize", this.resizeHandler);
  }
  
  resizeHandler() {
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(this.calculateData,1000);
  }

  
  scrollingAnimationFrame() {
    for(let child of this.data.children) {
      child.currentTop -= .50;

      if(child.currentTop < child.minTop) {
        // Send child to bottom of stack
        child.currentTop += this.data.stackHeight;
      }

      requestAnimationFrame(() => {
        child.node.style.setProperty("top", child.currentTop + "px");
      });
    }
  }
  
  
  startScrolling() {
    this.scrolling = true;
    this.animationInterval = setInterval(this.scrollingAnimationFrame, 1000/60);
  }
  
  
  focusHandler() {
    if(!this.scrolling) {  
      this.startScrolling();
    }
  }
  
  
  stopScrolling() {
    clearInterval(this.animationInterval);
    this.scrolling = false;    
  }
  
  
  blurHandler() {
    this.stopScrolling();
  }
  
  
  render() { 
    return (
      <section className="skillBox" >
        <a to={this.props.slug} onMouseEnter={this.focusHandler} onFocus={this.focusHandler} onMouseOut={this.blurHandler} onBlur={this.blurHandler}>
          <h1>{this.props.title}</h1>
        </a>
        <ul ref="subSkillList">
          {this.props.subSkills.map((subSkill, key) => (<li key={key}>{subSkill}</li>))}
        </ul>
      </section>
    );
  }
};

export default SkillBox;