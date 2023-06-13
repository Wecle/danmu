interface Props {
	id: number;
	name: string;
}

const test = (data: Props) => {
	console.log(data)
}

test({id: 1, name: 'xxx'})
