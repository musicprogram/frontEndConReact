import React, { Component } from 'react'; // react

// import axios from 'axios' // fetch 

class IdeaForm extends Component {
	constructor(props){
		super(props)
		this.state = { //conectar los campos de entrada del formulario al estado
			title: this.props.idea.title, // props
			body: this.props.idea.body // props
		}
	}

// 

	handleInput = (e) =>{
		this.setState({[e.target.name]: e.target.name})
	}


	render(){ // ojo
		// establezca los valores del campo de formulario 
		//en sus valores de estado correspondientes 
		// y establezca un onChangecontrolador
		return(
			<div>
				<form>
				<div className="form-group">
					<input 
						className="form-control" 
						type="text"
						name="title" 
						placeholder="Agregar título"
						value={this.state.title /* cambiando el estado*/}
						onChange={this.handleInput}
					/>
				</div>
				<div className="form-group">
					<textarea 
						className="form-control" 
						name="body" 
						placeholder="Agregar contenido"
						value={this.state.body /* cambiando el estado*/}
						onChange={this.handleInput}
					/>
				</div>								
				</form>
			</div>
		)
	}

}

export default IdeaForm;