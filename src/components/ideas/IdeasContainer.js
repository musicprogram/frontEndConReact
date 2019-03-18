import React, { Component } from 'react'; // react

import axios from 'axios' // fetch 

import Idea from './Idea' //partial

import IdeaForm from './IdeaForm' //partial


import update from 'immutability-helper' // inmutable



const urlRails = 'https://ruby-rails-musicprogram.c9users.io/api/v1/ideas'

class IdeasContainer extends Component {
	//  parametros un array vacío para el estado
	constructor(props){
		super(props)
		this.state = {
			ideas: [], // estado inicial

			// necesitamos una nueva propiedad de estado
			// editingIdeaId, que haga un seguimiento de qué idea se 
			// está editando actualmente
			editingIdeaId: null
		}
	}



	////      index
	componentDidMount(){
		axios.get(urlRails)
			.then(res =>{
				// console.log(res)

				this.setState({ideas: res.data})

				// console.log(this.state.ideas)
			})
			.catch(error => console.log(error))
	}



	///////// new crear

	addNewIdea = () => {


	  axios.post(
	    urlRails,
	    { idea:
	      {
	        title: '',
	        body: ''
	      }
	    }
	  )
	  .then(response => {
	    console.log(response)

	    const ideas = update(this.state.ideas, { // update metodo inmutable
	    	$splice: [[0,0,response.data]] // para que
	    })
	    this.setState({
	    	ideas: ideas,
	    	//  esto indica que acabamos de agregar una nueva idea y
	    	// queremos editarla inmediatamente.
	    	editingIdeaId: response.data.id
	    })
	  })
	  .catch(error => console.log(error))


	}	



	render(){
		return(
			<div>

				 	<button className="mb-5 btn btn-primary" onClick={this.addNewIdea}>Add new Idea</button>
	
				{ 
					this.state.ideas.map((idea)=>{

								//editingIdeaId
							if(this.state.editingIdeaId === idea.id){
								return(
									<IdeaForm idea={idea} key={idea.id}/>
								)
							}	else{
								return(
									<Idea idea={idea} key={idea.id}/>
								) 
							}

					})
				}
			</div>
			
		)
	}
}

export default IdeasContainer;