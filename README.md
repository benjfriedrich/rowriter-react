# RoWriter-React

RoWriter-React is a react component that takes an array of components and renders them in evenly proportioned rows, based on a max number of items per row.

Using css flex-box, for instance, if you had 13 objects and each row could fit 12 objects, then the css would give you a full row of 12 objects and a second row of 1 object. RoWriter would give you a row of 7 objects and a row of 6 objects, which is more aesthetically balanced.

RoWriter calculates the minimum number of rows it will take to display your items, and then distributes the items evenly in those rows, so the rows are as short as possible.

Here’s how you install RoWriter-React via terminal from the root directory of your project.

	npm install rowriter-react

Then import RoWriter-React into your component.

	import React from 'react'
	
	import RoWriter from 'rowriter-react'


RoWriter requires two props two work: items and maxWidth. Items should be an array of components, and maxWidth is a whole number.

	<RoWriter items={[...arrayOfComponents]} maxWidth='3'/>

RoWriter takes additional props for more customization. **rowComponent** allows you to replace the default component that contains each row of items. **className** allows you to give the wrapper a class.

	const RoWriterComponent = (props) => {
	
	const CustomRow = (props) => {
	
	    return(
	    <div style={{ 
	        
	        display: 'flex',
	        justifyContent: 'center'}}>
	    
	    {props.children}
	    
	    </div>)
	
	}
	
	
	return(
	<RoWriter items={[...arrayOfComponents]} maxWidth='3' className='myRoWriter' rowComponent={ CustomRow }/>
	)}


One thing to keep in mind is that RoWriter-React is not sensitive to browser width on it’s own, so if you want it to render differently based on window width, you’ll need to create your own logic that adjusts maxWidth dynamically.

[Find more here](https://rowriter.dev)