import { Router } from "express";
import { validationMiddleware } from "../middleware/validator.middleware";
import {checkAdmin} from "../middleware/auth.middleware"
import { ParkingLotController } from "../controllers/parking-lot.controller";
import { RegisterParkingLotDto, UpdateParkingLotDto } from "../dtos/parking-lot";
const router = Router();
// Get all parking lot in the system
router.get('/all',ParkingLotController.getParkingLots)
// Get the parking lot by code
router.get('/:code',ParkingLotController.getParkingLotByCode)
// Create a parking lot by admin
router.post('/',[checkAdmin,validationMiddleware(RegisterParkingLotDto)],ParkingLotController.createParkingLot)
// Update a parking lot by admin
router.put('/:code',[checkAdmin,validationMiddleware(UpdateParkingLotDto,true)],ParkingLotController.updateParkingLot)
// Delete a parking lot by admin
router.delete('/:code',checkAdmin,ParkingLotController.deleteParkingLot)
export default router;