export const converPersionNumberToEnglish = (
	s = "",
	number
) => {
	const elem = s
		.toString()
		.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d))
		.replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d));
	if (number) return +elem;
	return elem;
};

// export const convertArabicNumberToEnglish = (s) => {
//   const elem = s.toString().replace(/[٠-٩]/g, (d) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d));
//   return elem;
// };

export const extractNumberFromString = (s) => {
	const elem = s
		.toString()
		.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d))
		.replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d))
		.replace(/\D/g, "");
	return elem;
};

export const convertNumberToRial = (
	number = 0,
	suffix = " ریال"
) => {
	let value = number?.toString()?.replace(/,/g, "");
	const isMinusNumber = value?.includes("-");

	if (isMinusNumber)
		value = value.toString().slice(1, value.length);

	// value = parseInt(value);
	let caret = value?.length - 1;
	while (caret - 3 > -1) {
		caret -= 3;
		value = value?.split("");
		value?.splice(caret + 1, 0, ",");
		value = value?.join("");
	}
	return isMinusNumber
		? `-${value}${suffix}`
		: `${value}${suffix}`;
};

export const stringToBoolean = (string) => {
	string = string + "";
	switch (string?.toLowerCase()?.trim()) {
		case "true":
		case "yes":
		case "1":
			return true;
		case "false":
		case "no":
		case "0":
		case null:
			return false;
		default:
			return undefined;
	}
};

export const scrollToSection = (
	id,
	queryParam = undefined
) => {
	if (
		queryParam &&
		Object.keys(queryParam).length !== 0 &&
		Object.keys(queryParam).length > 0
	) {
		document.getElementById(id)?.scrollIntoView();
	} else {
		document.getElementById(id)?.scrollIntoView();
	}
};

export const englishNumberOnly = (
	input,
	allowCammaAndDot,
	allowDot
) => {
	if (input === null || input === undefined) return "";
	input = input.toString();
	if (!allowCammaAndDot && !allowDot)
		input = input.replace(/[^۰۱۲۳۴۵۶۷۸۹0123456789]/g, "");
	if (allowCammaAndDot)
		input = input.replace(/[^۰۱۲۳۴۵۶۷۸۹0123456789,.]/g, "");
	if (!allowCammaAndDot && allowDot)
		input = input.replace(/[^۰۱۲۳۴۵۶۷۸۹0123456789.]/g, "");

	input = input.replace(/ /g, "");
	input = input.replace(/۰/g, "0");
	input = input.replace(/۱/g, "1");
	input = input.replace(/۲/g, "2");
	input = input.replace(/۳/g, "3");
	input = input.replace(/۴/g, "4");
	input = input.replace(/۵/g, "5");
	input = input.replace(/۶/g, "6");
	input = input.replace(/۷/g, "7");
	input = input.replace(/۸/g, "8");
	input = input.replace(/۹/g, "9");

	return input;
};
export const englishNumber = (input) => {
	if (input === null || input === undefined) return "";
	input = input.toString();

	input = input.replace(/ /g, "");
	input = input.replace(/۰/g, "0");
	input = input.replace(/۱/g, "1");
	input = input.replace(/۲/g, "2");
	input = input.replace(/۳/g, "3");
	input = input.replace(/۴/g, "4");
	input = input.replace(/۵/g, "5");
	input = input.replace(/۶/g, "6");
	input = input.replace(/۷/g, "7");
	input = input.replace(/۸/g, "8");
	input = input.replace(/۹/g, "9");

	return input;
};

//separates text to 3 digit parts
export const separator = (
	input,
	seperater = ",",
	seperateLength = 3
) => {
	if (input === null || input === undefined) return "";
	input = input.toString();
	let result = "";
	let count = 0;
	for (let i = input.length - 1; i > -1; i--) {
		if (count === seperateLength) {
			result = seperater + result;
			count = 0;
		}
		result = input.charAt(i) + result;
		count++;
	}
	return result;
};

export const setPlateNumberFormat = (value) => {
	const splitPlate = value?.split("-ایران-");
	return `${splitPlate?.[1] || ""}  ${
		splitPlate?.[0] || ""
	}`;
};

export const getPathnameFromReferrer = (referrer) => {
	return referrer
		.replace(/^[^:]+:\/\/[^/]+/, "")
		.replace(/#.*/, "");
};

export const isFillMinimumInput = (values) => {
	let isRequired = false;
	for (const key in values) {
		values[key];
		if (values[key] !== undefined) {
			isRequired = true;
			break;
		}
	}

	return isRequired;
};

export const convertAllPropertyToEnNumber = (values) => {
	const newValues = {};
	for (const key in values) {
		if (Object.hasOwnProperty.call(values, key)) {
			const element = values[key];
			if ((element, !isNaN(element))) {
				newValues[key] = converPersionNumberToEnglish(
					element,
					true
				);
			} else {
				newValues[key] = element;
			}
		}
	}

	return newValues;
};

export const convertRangeDatePicker = (
	dates = [],
	startName,
	endName
) => {
	const values = {};
	values[startName] =
		typeof dates?.[0] === "object"
			? converPersionNumberToEnglish(
					dates?.[0]?.format("YYYY/MM/DD")
			  )
			: dates?.[0];
	values[endName] =
		typeof dates?.[1] === "object"
			? converPersionNumberToEnglish(
					dates?.[1]?.format("YYYY/MM/DD")
			  )
			: dates?.[1];

	return values;
};

export const convertDatePicker = (dates) => {
	return typeof dates === "object"
		? converPersionNumberToEnglish(
				dates?.format("YYYY/MM/DD")
		  )
		: dates;
};

export const calculatePercent = (total, part) => {
	if (!total || !part) return 0;
	total = parseFloat(total);
	part = parseFloat(part);
	return ((part / total) * 100).toFixed(2);
};

export const getPercent = (part, full) => {
	if (!part || !full) return 0;
	return parseFloat(((part / full) * 100).toFixed(2));
};

export const getTrendPercent = (part, full) => {
	if (!part || !full) return 0;
	return ((part / full) * 100 - 100).toFixed(2);
};
