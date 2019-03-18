import React from 'react';

const Idea = ({idea}) =>
	<div className="alert alert-secondary" role="alert" key={idea.id}>
		 <h3>
		 		{idea.title}
		 		
		 </h3> 
		 <p>
		 		{idea.body}
		 </p>
	</div>	

export default Idea;	