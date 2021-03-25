
import mongoose from "mongoose";

import field from "./field";

const MentorSchema = new mongoose.Schema(
	{
		uCreated: field.duCreated,
        first: field.rString,
        last: field.rString,
        dob: field.rString,
        email: field.rString,
        institution: field.rString,
        degree: field.rString,
        expect: field.rString,
        selected: field.uArray,
        other: field.uString,
        why: field.rString
	},
	{
		strict: true,
		collection: "mentor"
	}
);

mongoose.models = mongoose.models || {};

export default mongoose.models.Mentor || mongoose.model("Mentor", MentorSchema);
