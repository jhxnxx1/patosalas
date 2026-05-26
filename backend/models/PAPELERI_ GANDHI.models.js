import mongoose from "mongoose";

const papeleriaSchema = new mongoose.Schema({
    producto: jugo,
    stock: 45,
    precio: 34
});

export default mongoose.model("PAPELERIA_GANDHI", papeleriaSchema);