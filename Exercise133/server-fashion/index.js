const express = require('express');
const app = express();
const port = 4000;

const morgan = require("morgan")
app.use(morgan("combined"))

const bodyParser=require("body-parser")
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb' }));
app.use(express.json());


const cors = require("cors");
app.use(cors())
app.listen(port, () => {
    console.log(`My Server listening on port ${port}`)
})

app.get("/", (req, res) => {
    res.send("This Web server is processed for MongoDB")
})

const { MongoClient, ObjectId } = require('mongodb');
client = new MongoClient("mongodb://127.0.0.1:27017");
client.connect();
database = client.db("FashionData");
fashionCollection = database.collection("Fashion");
app.get("/fashions", cors(), async (req, res) => {
    const result = await fashionCollection.find({}).toArray();
    res.send(result)
},
)
//search by id
app.get("/fashions/:id", cors(), async (req, res) => {
    var o_id = new ObjectId(req.params["id"]);
    const result = await fashionCollection.find({ _id: o_id }).toArray();
    res.send(result[0])
}
)

//thêm mới một Fashion
app.post("/fashions", cors(), async (req, res) => {
    const newFashion = { ...req.body, created_at: new Date() };
    //put json Fashion into database
    await fashionCollection.insertOne(req.body)
    //send message to client(send all database to client)
    res.send(req.body)
})

// // chỉnh sửa một Fashion
// app.put("/fashions", cors(), async (req, res) => {
//     //update json Fashion into database
//     await fashionCollection.updateOne(
//         { _id: new ObjectId(req.body._id) },//condition for update
//         {
//             $set: { //Field for updating
//                 style: req.body.style,
//                 fashion_subject: req.body.fashion_subject,
//                 fashion_detail: req.body.fashion_detail,
//                 fashion_image: req.body.fashion_image
//             }
//         }
//     )
//     //send Fahsion after updating
//     var o_id = new ObjectId(req.body._id);
//     const result = await fashionCollection.find({ _id: o_id }).toArray();
//     res.send(result[0])
// })

// app.put("/fashions", cors(), async (req, res) => {
//     const { _id, style, fashion_subject, fashion_detail, fashion_image } = req.body;

//     if (!_id) {
//         return res.status(400).send({ message: "ID không hợp lệ" });
//     }

//     // Tạo object chứa các field cần cập nhật
//     let updateFields = {};
//     if (style) updateFields.style = style;
//     if (fashion_subject) updateFields.fashion_subject = fashion_subject;
//     if (fashion_detail) updateFields.fashion_detail = fashion_detail;
//     if (fashion_image) updateFields.fashion_image = fashion_image;

//     try {
//         const result = await fashionCollection.updateOne(
//             { _id: new ObjectId(_id) },
//             { $set: updateFields } // Chỉ cập nhật các trường có dữ liệu
//         );

//         if (result.matchedCount === 0) {
//             return res.status(404).send({ message: "Fashion không tồn tại" });
//         }

//         const updatedFashion = await fashionCollection.findOne({ _id: new ObjectId(_id) });
//         res.send(updatedFashion);
//     } catch (error) {
//         res.status(500).send({ message: "Lỗi khi cập nhật Fashion", error });
//     }
// });

app.put("/fashions", cors(), async (req, res) => {
    console.log("🔥 Dữ liệu nhận được từ client:", req.body); // 🚀 Debug

    const { _id, style, fashion_subject, fashion_detail, fashion_image } = req.body;

    if (!_id) {
        return res.status(400).send({ message: "ID không hợp lệ" });
    }

    let updateFields = {};
    if (style) updateFields.style = style;
    if (fashion_subject) updateFields.fashion_subject = fashion_subject;
    if (fashion_detail) updateFields.fashion_detail = fashion_detail;
    if (fashion_image) updateFields.fashion_image = fashion_image;

    console.log("📌 Dữ liệu sẽ cập nhật vào MongoDB:", updateFields); // 🚀 Debug

    try {
        const result = await fashionCollection.updateOne(
            { _id: new ObjectId(_id) },
            { $set: updateFields }
        );

        if (result.matchedCount === 0) {
            return res.status(404).send({ message: "Fashion không tồn tại" });
        }

        const updatedFashion = await fashionCollection.findOne({ _id: new ObjectId(_id) });
        console.log("✅ Dữ liệu trả về sau cập nhật:", updatedFashion); // 🚀 Debug
        res.send(updatedFashion);
    } catch (error) {
        res.status(500).send({ message: "Lỗi khi cập nhật Fashion", error });
    }
});





//xóa một Fashion
app.delete("/fashions/:id", cors(), async (req, res) => {
    //find detail Fashion with id
    var o_id = new ObjectId(req.params["id"]);
    const result = await fashionCollection.find({ _id: o_id }).toArray();
    //update json Fashion into database
    await fashionCollection.deleteOne(
        { _id: o_id }
    )
    //send Fahsion after remove
    res.send(result[0])
})


