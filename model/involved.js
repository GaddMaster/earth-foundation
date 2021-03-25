
import mongoose from "mongoose";

import field from "./field";

const InvolvedSchema = new mongoose.Schema(
	{
		uCreated: field.duCreated,
        first: field.rString,
        last: field.rString,
        city: field.rString,
        reason: field.rString,
        how: field.rEnum(["social-media", "through-a-friend", "through-my-school/instituteion"])
	},
	{
		strict: true,
		collection: "involved"
	}
);

mongoose.models = mongoose.models || {};

export default mongoose.models.Involved || mongoose.model("Involved", InvolvedSchema);
