// App.js 

import './Aboutus.css'; 
import Icons from './Icons'; 
import Card from './Card'; 

import Feedback from './Feedback'; 
import Welcome from './Welcome';
function Aboutus() { 
return ( 
	<div className='about'> 
	<Welcome/> 
	<Icons/> 
	<Card/> 
	<br/>
	<br/>
	<Feedback/> 
	<img src= 
'https://www.google.com/maps/d/thumbnail?mid=1YTkR6R40XuDn8Xy8C92d-r2xews&hl=en_US'
		style={{marginTop:"14%", marginLeft:"44%"}}/> 
	</div> 
); 
} 

export default Aboutus;
