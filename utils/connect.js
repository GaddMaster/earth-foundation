
import mongoose from "mongoose";

import params from "assets/mongoose";

const onConnectDB = async () => {
	if (mongoose.connection.readyState !== 1) return mongoose.connect(process.env.MONGODB_URI, params);
    return;
};

export default onConnectDB;
