import { useRef, useState } from 'react';

const useInput = (initialData) => {
	const [inputs, setInputs] = useState(initialData);
	const $name = useRef(null);

	const changeFn = (evt) => {
		const { id, value } = evt.target;

		setInputs((prev) => {
			return {
				...prev,
				[id]: value,
			};
		});
	};

	const emptyFn = () => {
		setInputs(initialData);
		$name.current.focus();
	};

	return [inputs, changeFn, emptyFn, $name];
};

export default useInput;
