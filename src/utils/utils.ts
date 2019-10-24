const setCacheData = (data: object) => localStorage.setItem("weatherCachedData", JSON.stringify(data));
const getCacheData = () => JSON.parse(localStorage.getItem("weatherCachedData") || "{}");

export default {
	setCacheData,
	getCacheData
};