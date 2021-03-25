
import uDate from "../utils/uDate";

const rString = {
	type: String,
	required: true
};
const dString = {
	type: String,
	default: "",
	required: false
};
const uString = {
	type: String,
	required: false
};

const rNumber = {
	type: Number,
	required: true,
	default: 0
};
const dNumber = {
	type: Number,
	default: 0,
	required: false
};
const uNumber = {
	type: Number,
	required: false
};

const rBool = {
	type: Boolean,
	required: true
};
const dBool = {
	type: Boolean,
	default: false,
	required: false
};
const uBool = {
	type: Boolean,
	required: false
};

const rEnum = values => ({
	type: String,
	enum: values,
	required: true
});
const dEnum = values => ({
	type: String,
	enum: values,
	default: values[0]
});
const uEnum = values => ({
	type: String,
	enum: values,
	required: false
});

const rArray = {
	type: Array,
	required: true
};
const dArray = {
	type: Array,
	default: [],
	required: false
};
const uArray = {
	type: Array,
	required: false,
	default: undefined
};

const rObject = {
	type: Object,
	required: true
};
const dObject = {
	type: Object,
	default: {},
	required: false
};
const uObject = {
	type: Object,
	required: false
};
const dDate = {
	type: Date,
	default: Date.now(),
	required: false
};

const ruCreated = {
	type: Number,
	required: true
};
const duCreated = {
	type: Number,
	required: false,
	default: uDate.getUNow()
};
const uuCreated = {
	type: Number,
	required: false
};

module.exports = {
	rString,
	dString,
	uString,
	rNumber,
	dNumber,
	uNumber,
	rBool,
	dBool,
	uBool,
	rEnum,
	dEnum,
	uEnum,
	rArray,
	dArray,
	uArray,
	rObject,
	dObject,
	uObject,
	dDate,
	ruCreated,
	duCreated,
	uuCreated
};
