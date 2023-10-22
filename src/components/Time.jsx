import { useEffect, useRef } from "react";
import { getYears } from "../utils/day";

const Time = (props) => {
	
	const timeRef = useRef(null);

	useEffect(() => {
		const tagYears = timeRef.current;
		const yearsOld = getYears(tagYears.dateTime);
		tagYears.textContent = yearsOld;
	}, []);

	return(
		<time ref={timeRef} dateTime={props.date}></time>
	);
};

export default Time;