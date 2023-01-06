import Message from "../models/message.models";

export const postMessage = async ( req, res )=>{
    const { name, email, message } = req.body;
    try {
        const payload = new Message({
        name,
        email,
        message
        });
        payload.save();
        res.status(200).json({"msg":"message posted successfully"});
    } catch (error) {
        res.status(404).json({"error":error});
    }
}

