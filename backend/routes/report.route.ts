import { Router } from "express";
import {checkAdmin} from "../middleware/auth.middleware"
import {ReportController} from "../controllers/report.controller"
import { queryValidationMiddleware } from "../middleware/query-validator.middleware";
import { ReportDto } from "../dtos/report.dto";
const router = Router();
// Generate car exit report between two date time
router.get("/car-exit-report", [checkAdmin,queryValidationMiddleware(ReportDto)], ReportController.generateCarExitReportBetweenTwoDateTime)
// Generate car entry report between two date time
router.get("/car-entry-report", [checkAdmin,queryValidationMiddleware(ReportDto)], ReportController.generateCarEntryReportBetweenTwoDateTime)

export default router;