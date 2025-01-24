import mongoose from 'mongoose'

const invoiceSchema = new mongoose.Schema({
  vendorName: { type: String, required: true },
  invoiceNumber: { type: String, required: true },
  status: { type: String, required: true },
  netAmount: { type: Number, required: true },
  invoiceDate: { type: Date, required: true },
  dueDate: { type: Date, required: true },
  department: { type: String, required: true },
  costCenter: { type: String, required: true },
  poNumber: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Invoice = mongoose.model("Invoice", invoiceSchema)

export default Invoice;