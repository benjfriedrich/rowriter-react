export const RoWriter = ( items, maxWidth ) => {
	
	const number = items.length

	const rows = Math.ceil(number / maxWidth)

	const width = Math.ceil(number / rows)

	const rowMaker = (row, rowWidth, source, sourceLength) => {

			const insertPoint = (row * rowWidth);

			const rowLength = sourceLength - insertPoint >= rowWidth ? rowWidth : sourceLength % rowWidth;


			let rowArray = []

			for (let i = 0; i < rowLength; i++){

			rowArray.push(source[insertPoint+i]) 

			}

			return rowArray

	}


	let outputArray = []

	for (let i=0; i<rows; i++){

		outputArray.push( rowMaker(i, width, items, number ))

	}

	return outputArray
} 

export default RoWriter