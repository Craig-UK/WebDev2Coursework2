const fs = require('fs');
const multer = require('multer');
const path = require('path');

exports.upload = function (req, res) {
    const upload = multer({
        dest: path.join(__dirname, "../temp"),
    });
    
    upload.single("image"),
        (req, res) => {
            console.log("Started uploading image!");
            console.log("File Information: ");
            const tempPath = req.file.path;
            console.log("File Temporary Path: ", tempPath);
            const filename = req.file.originalname;
            console.log("Filename: ", filename);
            const targetPath = path.join(__dirname, "../public/images/" + filename);
            console.log("File Path: ", targetPath);
            if (path.extname(filename).toLowerCase() === ".jpg") {
                console.log("Extension of file: ", path.extname(filename));
                fs.rename(tempPath, targetPath, (err) => {
                    if (err) { 
                        console.log(err);
                        return res.status(500).contentType("text/plain").end("Something went wrong");
                    }
                    console.log("Image successfully uploaded! File information below.");
                    console.log("File Information: ");
                    console.log("File Temporary Path: ", tempPath);
                    console.log("Filename: ", filename);
                    console.log("File Path: ", targetPath);
                    console.log("Redirecting...");
                    res.status(200).render("home", {
                        images: filename,
                    });
                });
            } else {
                fs.unlink(tempPath, (err) => {
                    if (err) return handleError(err, res);
                    res
                        .status(403)
                        .contentType("text/plain")
                        .end("Only .jpg files are allowed!");
                });
            }
    }
}