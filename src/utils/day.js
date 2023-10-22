import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export function getCurrentYear() {
	return dayjs().get("year");
}

export function getYears(date) {
	return dayjs.utc().diff(dayjs.utc(date), "year");
}

export function getYearOfDate(date) {
	return dayjs.utc(date).get("year");
}