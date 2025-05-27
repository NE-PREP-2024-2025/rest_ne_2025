import { Router } from "express";
import AUthRoutes from "./auth.route";
import UserRouter from "./user.route";
import ParkingLotRoute from "./parking-lot.route";
import ParkingTicketRouter from "./parking-ticket.route";
import ReportRouter from "./report.route";
const router = Router();

// auth routes
router.use(
  "/auth",
  AUthRoutes
  /*
        #swagger.tags = ['Auth']
        #swagger.security = [] 
    */
);
router.use(
  "/user",
  UserRouter
  /*
      #swagger.tags = ['Users']
      #swagger.security = [{
              "bearerAuth": []
      }] 
  */
);
router.use(
  "/parking",
  ParkingLotRoute
  /*
      #swagger.tags = ['Parking']
      #swagger.security = [{
              "bearerAuth": []
      }] 
  */
);
router.use(
  "/parking-ticket",
  ParkingTicketRouter
  /*
      #swagger.tags = ['Parking Tickets']
      #swagger.security = [{
              "bearerAuth": []
      }] 
  */
);
router.use(
  "/report",
  ReportRouter
  /*
      #swagger.tags = ['Reports']
      #swagger.security = [{
              "bearerAuth": []
      }] 
  */
);
export default router;
