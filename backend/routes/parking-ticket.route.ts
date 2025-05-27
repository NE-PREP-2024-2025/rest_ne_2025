import { Router } from "express";
import {checkAdmin, checkLoggedIn} from "../middleware/auth.middleware"
import { ParkingTicketController } from "../controllers/parking-ticket.controller";
import { validationMiddleware } from "../middleware/validator.middleware";
import { ParkingDto } from "../dtos/parking-ticket.dto";
const router = Router();
// Create parking ticket
router.post("/",checkLoggedIn,[validationMiddleware(ParkingDto)],ParkingTicketController.createParkingTicket)
// Get user associated ticket
router.get("/",checkLoggedIn,ParkingTicketController.getParkingTickets)
// Get all tickets for all users by admin
router.get('/all', checkAdmin, ParkingTicketController.getParkingTickets)
// Get the ticket for the parking lot
router.get('/:code', checkAdmin, ParkingTicketController.getParkingTicketByCode)
// Generate bill for the ticket
router.post('/generate-bill/:id', ParkingTicketController.generateBill)
// Delete ticket
router.delete('/:id', checkAdmin, ParkingTicketController.deleteTicket)
export default router;