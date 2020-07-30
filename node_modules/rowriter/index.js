export const RoWriterAlt = (items, maxWidth) => {

	let inputArray = items

	let outputArray = []

	const rowRender = ( myBaseWidth, arrayLength) => {

		const width = arrayLength >= myBaseWidth ? myBaseWidth : arrayLength % myBaseWidth

		let rowArray = []

		for (let i=0; i < width; i++) {

			rowArray.push(inputArray.shift())

		}
		return rowArray

	}


	while (inputArray.length > 0) {

			let l = inputArray.length

			let rows = Math.ceil(l / maxWidth)

			let baseWidth = Math.ceil(l / rows)

			outputArray.push(rowRender(baseWidth, l))

	}

	return outputArray
}


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