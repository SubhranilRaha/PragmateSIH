const { CoCurricular } = require("../model/CoCurricular");

const addCocurr = async (req, res) => {
    try
    {
        if(!req.user) return res.status(401).json({ message: "Unauthorized Access" });

        const { name, studentId, description } = req.body;

        // check existing
        const existing = await CoCurricular.findOne({ name: name, studentId: studentId });
        if(existing) return res.status(400).json({ message: "This data already exists" })
        else
        {
            const newCoCurr = await CoCurricular.create({ 
                name,
                studentId,
                description
            });
            return res.status(200).json({ message: "Data stored successfully", newCoCurr });
        }
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
}

const getCocurr = async (req, res) => {
    try
    {
        if(!req.user) return res.status(401).json({ message: "Unauthorized Access" });

        const { studentId } = req.body;
        const data = await CoCurricular.find({ studentId: studentId });
        return res.status(200).json({ 
            data,
            total: data.length
        });
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
}

const deleteCocurr = async (req, res) => {
    try
    {
        if(!req.user) return res.status(401).json({ message: "Unauthorized Access" });

        const { name, studentId } = req.body;

        // check existing
        const data = await CoCurricular.findOne({ name: name, studentId: studentId });
        if(!data) return res.status(404).json({ message: "Data not found" })
        else
        {
            const deletedCoCurr = await CoCurricular.deleteOne({ 
                name,
                studentId
            });
            return res.status(200).json({ message: "Data stored successfully" });
        }
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
}

module.exports.addCocurr = addCocurr;
module.exports.getCocurr = getCocurr;
module.exports.deleteCocurr = deleteCocurr;