const setCacheData = (city: string, data: object) =>
	localStorage.setItem(city, JSON.stringify(data));

const getCacheData = (city: string) => {
	const weatherData = localStorage.getItem(city);

	return weatherData && JSON.parse(localStorage.getItem(city) || "{}");
};

const getCurrentTime = () =>
	new Date().toLocaleString("pt-BR", {
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
		hour12: true
	});

const getDiffBetweeenToday = (rightDate: string): number =>
	new Date().getTime() - new Date(rightDate).getTime();

const getMillisecondsToMinutes = (msNumber: number) =>
	Math.floor((msNumber / (1000 * 60)) % 60);

export default {
	setCacheData,
	getCacheData,
	getCurrentTime,
	getDiffBetweeenToday,
	getMillisecondsToMinutes
};
