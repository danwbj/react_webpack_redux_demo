import React from 'react';

let Home = React.createClass({ 
    
  componentDidMount(){},
  componentWillMount(){
      this.props.actions.test({name:"wudandan"})
  },

  render() {
    console.log("----render")
    console.log(this.props.data)
     let str = this.props.data?this.props.data.name:"---default"
    return(<div>Home{str}</div>);
  }
});

export default Home; 