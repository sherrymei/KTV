import PageHeader from '../SharedReactComponents/Header.jsx'
import Form from './Form.jsx'
import ReactDOM from 'react-dom';
import axios from 'axios'


export default class MainContainer extends React.Component {
	constructor(){
		super();
	
		// this.getParameterByName = this.getParameterByName.bind(this)
	}
	componentWillMount(){
	  	
	}
	componentDidMount(){
		

	}
	componentWillUnmount(){
	
	}



	
	render() {
		return (
			<div className="container">
			<div className = "row">
		      <PageHeader/>
		      </div>
		      <div className = "row form">
		      	<Form/>
		      </div>
		      
		  </div>
		);
	}

}

ReactDOM.render(
  <MainContainer/>,
  document.getElementById('content')
);
