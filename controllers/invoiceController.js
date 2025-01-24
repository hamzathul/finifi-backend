import Invoice from "../models/Invoice.js";

export const getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.status(200).json(invoices);
  } catch (error) {
    console.error("Error fetching invoices:", error);
    res.status(500).json({ error: "Failed to fetch invoices" });
  }
};

export const createInvoice = async (req, res) => {
  const {
    vendorName,
    invoiceNumber,
    status,
    netAmount,
    invoiceDate,
    dueDate,
    department,
    costCenter,
    poNumber,
  } = req.body;
  try {
    const newInvoice = new Invoice({
      vendorName,
      invoiceNumber,
      status,
      netAmount,
      invoiceDate,
      dueDate,
      department,
      costCenter,
      poNumber,
    });
    const savedInvoice = await newInvoice.save();
    res.status(201).json(savedInvoice);
  } catch (error) {
    console.error("Error creating invoice:", error);
    res.status(500).json({ error: "Failed to create invoice" });
  }
};

export const updateInvoice = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedInvoice = await Invoice.findByIdAndUpdate(id, updateData, {
      new: true, // Return the updated document
      runValidators: true, // Validate against the model schema
    });

    if (!updatedInvoice) {
      return res.status(404).json({ message: "Invoice not found" });
    }

    res.status(200).json(updatedInvoice);
  } catch (error) {
    console.error("Error updating invoice:", error);
    res.status(500).json({ message: "Error updating invoice", error });
  }
};

export const deleteInvoice = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedInvoice = await Invoice.findByIdAndDelete(id);

    if (!deletedInvoice) {
      return res.status(404).json({ message: "Invoice not found" });
    }

    res.status(200).json(deletedInvoice);
  } catch (error) {
    console.error("Error deleting invoice:", error);
    res.status(500).json({ message: "Error deleting invoice" });
  }
};
