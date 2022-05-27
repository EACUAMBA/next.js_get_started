	import {useState} from "react";
	function Header({title}){
			return <h1>{createTitle({title})}</h1>;
			//return <h1>{title ? title : 'no title passed'}</h1>;
			//return <h1>{`This is the new title you have passed "${title}".`}</h1>;
		}
		
		function createTitle({title}){
			if(title){
				return title;
			}else{
				return "Default title";
			}
		}
		
		
		
		export default function HomePage(){
			const names = ['Alcidio', 'Benedito', 'Carlos', 'David','Edilson', 'Fortunato'];
			const [likes, setLikes] = useState(0);
			
			function handleClick(){
				setLikes(likes+1)
				console.log('increment like count');
			}
		
			return (<div>
				{/*Nested components.*/}
					<Header title="React 💙"/>
					<Header title="React Lover 💙"/>
					<Header title="React Forever 💙"/>
				
					<ul>
						{names.map((name)=>(<li key={name}>{name}</li>))}
					</ul>
					
					<button onClick={handleClick}>Like({likes})</button>
				</div>);
		}
		
		