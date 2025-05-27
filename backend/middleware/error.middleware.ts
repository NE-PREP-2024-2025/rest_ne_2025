import { Request, Response, NextFunction } from "express";
import logger from "../utils/logger";



const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(
    `${err.status || 500} - ${err.message} - ${req.originalUrl} - ${
      req.method
    } - ${req.ip}`
  );

  // Handle Prisma errors
  if (err.name === "PrismaClientKnownRequestError") {
    switch (err.code) {
      case "P1000": // Database server authentication failed
        return res.status(401).json({
          error: "Unauthorized",
          message: "Database authentication failed",
        });
      case "P1001": // Database server unreachable
        return res.status(503).json({
          error: "Service Unavailable",
          message: "Cannot connect to the database server",
        });
      case "P1002": // Database server connection timed out
        return res.status(504).json({
          error: "Gateway Timeout",
          message: "Database connection timed out",
        });
      case "P1003": // Database does not exist
        return res.status(404).json({
          error: "Not Found",
          message: "Database does not exist",
        });
      case "P1008": // Database operation timed out
        return res.status(504).json({
          error: "Gateway Timeout",
          message: "Database operation timed out",
        });
      case "P1009": // Database already exists
        return res.status(409).json({
          error: "Conflict",
          message: "Database already exists on the server",
        });
      case "P1010": // Access denied for database user
        return res.status(403).json({
          error: "Forbidden",
          message: "Access denied for database user",
        });
      case "P1011": // TLS connection error
        return res.status(503).json({
          error: "Service Unavailable",
          message: "Error establishing a secure database connection",
        });
      case "P1012": 
        return res.status(400).json({
          error: "Bad Request",
          message: `Schema validation error: ${err.message}`,
        });
      case "P1013": // Invalid database string
        return res.status(400).json({
          error: "Bad Request",
          message: "Invalid database connection string",
        });
      case "P1014": // Model does not exist
        return res.status(404).json({
          error: "Not Found",
          message: `Model ${err.meta?.modelName || "unknown"} does not exist`,
        });
      case "P1015": // Unsupported Prisma version
        return res.status(400).json({
          error: "Bad Request",
          message: "Prisma version not supported for the database",
        });
      case "P1016": // Invalid raw query
        return res.status(400).json({
          error: "Bad Request",
          message: "Invalid raw query provided",
        });
      case "P1017": // Database server closed connection
        return res.status(503).json({
          error: "Service Unavailable",
          message: "Database server closed the connection unexpectedly",
        });
      case "P2000": // Value too long for column
        return res.status(400).json({
          error: "Bad Request",
          message: `Input value too long for column ${
            err.meta?.column || "unknown"
          }`,
        });
      case "P2001": // Record not found for query
        return res.status(404).json({
          error: "Not Found",
          message: "Record does not exist for the query",
        });
      case "P2002": // Unique constraint violation
        return res.status(400).json({
          error: "Bad Request",
          message: ` ${err.meta?.target || "field"} already taken `,
        });
      case "P2003": // Foreign key constraint violation
        return res.status(400).json({
          error: "Bad Request",
          message: `Foreign key constraint failed on ${
            err.meta?.field_name || "field"
          }`,
        });
      case "P2004": // Constraint violation
        return res.status(400).json({
          error: "Bad Request",
          message: `Constraint violation in the database`,
        });
      case "P2005": // Invalid field value type
        return res.status(400).json({
          error: "Bad Request",
          message: `Invalid value type for field ${
            err.meta?.field_name || "unknown"
          }`,
        });
      case "P2006": // Invalid value for database
        return res.status(400).json({
          error: "Bad Request",
          message: `Invalid value provided for field ${
            err.meta?.field_name || "unknown"
          }`,
        });
      case "P2007": // Data validation error
        return res.status(400).json({
          error: "Bad Request",
          message: "Data validation error",
        });
      case "P2008": // Failed to parse query
        return res.status(400).json({
          error: "Bad Request",
          message: `Failed to parse the query: ${err.meta?.query || "unknown"}`,
        });
      case "P2009": // Query validation error
        return res.status(400).json({
          error: "Bad Request",
          message: `Query validation error: ${
            err.meta?.query_validation_error || "invalid query"
          }`,
        });
      case "P2010": // Raw query execution failed
        return res.status(500).json({
          error: "Internal Server Error",
          message: "Raw query execution failed",
        });
      case "P2011": // Null constraint violation
        return res.status(400).json({
          error: "Bad Request",
          message: `Null constraint violation on ${
            err.meta?.field_name || "field"
          }`,
        });
      case "P2012": // Missing required field
        return res.status(400).json({
          error: "Bad Request",
          message: `Missing required field ${
            err.meta?.field_name || "unknown"
          }`,
        });
      case "P2013": // Missing required argument
        return res.status(400).json({
          error: "Bad Request",
          message: `Missing required argument ${
            err.meta?.argument_name || "unknown"
          }`,
        });
      case "P2014": // Relation violation
        return res.status(400).json({
          error: "Bad Request",
          message: `Relation violation: ${
            err.meta?.relation_name || "unknown"
          }`,
        });
      case "P2015": // Related record not found
        return res.status(404).json({
          error: "Not Found",
          message: `Related record not found`,
        });
      case "P2016": // Query interpretation error
        return res.status(400).json({
          error: "Bad Request",
          message: "Query interpretation error",
        });
      case "P2017": // Records not connected
        return res.status(400).json({
          error: "Bad Request",
          message: `Records in relation ${
            err.meta?.relation_name || "unknown"
          } are not connected`,
        });
      case "P2018": // Required connected records not found
        return res.status(400).json({
          error: "Bad Request",
          message: `Required connected records not found for ${
            err.meta?.relation_name || "unknown"
          }`,
        });
      case "P2019": // Input error
        return res.status(400).json({
          error: "Bad Request",
          message: "Input error in query",
        });
      case "P2020": // Value out of range
        return res.status(400).json({
          error: "Bad Request",
          message: `Value out of range for ${err.meta?.field_name || "field"}`,
        });
      case "P2021": // Table does not exist
        return res.status(404).json({
          error: "Not Found",
          message: `Table ${err.meta?.table || "unknown"} does not exist`,
        });
      case "P2022": // Column does not exist
        return res.status(404).json({
          error: "Not Found",
          message: `Column ${err.meta?.column || "unknown"} does not exist`,
        });
      case "P2023": // Inconsistent column data
        return res.status(400).json({
          error: "Bad Request",
          message: "Inconsistent column data",
        });
      case "P2024": // Query timeout
        return res.status(504).json({
          error: "Gateway Timeout",
          message: "Timed out acquiring a database connection",
        });
      case "P2025": // Operation failed due to missing dependent record
        return res.status(400).json({
          error: "Bad Request",
          message: `Operation failed: Required dependent record not found`,
        });
      case "P2026": // Unsupported database feature
        return res.status(400).json({
          error: "Bad Request",
          message: `Unsupported database feature: ${
            err.meta?.feature || "unknown"
          }`,
        });
      case "P2027": // Multiple database errors
        return res.status(500).json({
          error: "Internal Server Error",
          message: "Multiple errors occurred during query execution",
        });
      case "P2028": // Transaction API error
        return res.status(500).json({
          error: "Internal Server Error",
          message: "Transaction API error",
        });
      case "P2030": // Fulltext index not found
        return res.status(404).json({
          error: "Not Found",
          message: `Fulltext index not found for query`,
        });
      case "P2031": // MongoDB replica set required
        return res.status(400).json({
          error: "Bad Request",
          message: "MongoDB replica set is required but not configured",
        });
      case "P2033": // Number out of 64-bit range
        return res.status(400).json({
          error: "Bad Request",
          message: `Number exceeds 64-bit integer range for ${
            err.meta?.field_name || "field"
          }`,
        });
      case "P2034": // Transaction failed due to write conflict or deadlock
        return res.status(409).json({
          error: "Conflict",
          message: "Transaction failed due to a write conflict or deadlock",
        });
      case "P2035": // Database assertion violation
        return res.status(400).json({
          error: "Bad Request",
          message: `Database assertion violation: ${err.message}`,
        });
      case "P2036": // External connector error
        return res.status(500).json({
          error: "Internal Server Error",
          message: "Error in external connector",
        });
      case "P2037": // Too many database connections
        return res.status(503).json({
          error: "Service Unavailable",
          message: "Too many database connections opened",
        });
      case "P5000": // Datasource provider error
        return res.status(400).json({
          error: "Bad Request",
          message: `Invalid datasource provider: ${
            err.meta?.provider || "unknown"
          }`,
        });
      case "P5001": // Preview feature not enabled
        return res.status(400).json({
          error: "Bad Request",
          message: `Preview feature not enabled: ${
            err.meta?.feature || "unknown"
          }`,
        });
      case "P5002": // Invalid datasource provider
        return res.status(400).json({
          error: "Bad Request",
          message: `Invalid datasource provider specified`,
        });
      case "P5003": // Operation not supported
        return res.status(400).json({
          error: "Bad Request",
          message: `Operation not supported: ${
            err.meta?.operation || "unknown"
          }`,
        });
      case "P5004": // Introspection operation not supported
        return res.status(400).json({
          error: "Bad Request",
          message: `Introspection operation not supported: ${
            err.meta?.operation || "unknown"
          }`,
        });
      case "P5005": // Database creation failed
        return res.status(500).json({
          error: "Internal Server Error",
          message: "Could not create database",
        });
      case "P5006": // Database drop not allowed
        return res.status(403).json({
          error: "Forbidden",
          message: "Dropping the database is not allowed",
        });
      case "P5007": // Database reset not allowed
        return res.status(403).json({
          error: "Forbidden",
          message: "Resetting the database is not allowed",
        });
      case "P5008": // Database already exists and is non-empty
        return res.status(409).json({
          error: "Conflict",
          message: "Database already exists and is not empty",
        });
      default:
        return res.status(500).json({
          error: "Internal Server Error",
          message: `Unknown Prisma error: ${err.code}`,
        });
    }
  }

  if (err.status === 429) {
    return res.status(429).json({
      error: "Too Many Requests",
      message: err.message,
    });
  }

  if (err instanceof TypeError) {
    return res.status(400).json({
      error: "Bad Request",
      message: "Invalid input or type error",
    });
  }

  if (err instanceof SyntaxError) {
    return res.status(400).json({
      error: "Bad Request",
      message: "Invalid JSON syntax",
    });
  }

  res.status(err.status || 500).json({
    error: "Internal Server Error",
    message: "An unexpected error occurred",
  });
};

export default errorHandler;