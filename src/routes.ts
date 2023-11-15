import { Router } from "express";
//import multer from "multer";

import { EstudanteController } from "./controller/EstudanteController";
const estudanteController = new EstudanteController();

import uploadsConfig from "./config/multer";
import uploadFile, { upload } from "./config/firebase.upload";

//const upload = multer(uploadsConfig);

export const router = Router();

router.post("/estudante", upload.single("image"), estudanteController.store, uploadFile);
router.post("/upload", upload.single("image"), uploadFile);