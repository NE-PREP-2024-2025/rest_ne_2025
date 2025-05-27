-- CreateEnum
CREATE TYPE "role" AS ENUM ('ADMIN', 'PARKING_ATTENDANT');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "role" NOT NULL DEFAULT 'PARKING_ATTENDANT',
    "emailVerified" BOOLEAN NOT NULL DEFAULT false,
    "emailVerificationToken" TEXT,
    "emailVerificationTokenExpires" TIMESTAMP(3),
    "resetPasswordToken" TEXT,
    "resetPasswordTokenExpires" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "parking_lots" (
    "code" TEXT NOT NULL,
    "parkingName" TEXT NOT NULL,
    "numberOfAvailableSpace" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "feesPerHour" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "parking_lots_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "parking_tickets" (
    "id" TEXT NOT NULL,
    "plateNumber" TEXT NOT NULL,
    "entry_date" TIMESTAMP(3) NOT NULL,
    "exit_date" TIMESTAMP(3),
    "amount" DOUBLE PRECISION NOT NULL,
    "parking_code" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "parking_tickets_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "parking_lots_code_key" ON "parking_lots"("code");

-- CreateIndex
CREATE INDEX "parking_tickets_parking_code_idx" ON "parking_tickets"("parking_code");

-- CreateIndex
CREATE INDEX "parking_tickets_userId_idx" ON "parking_tickets"("userId");

-- AddForeignKey
ALTER TABLE "parking_tickets" ADD CONSTRAINT "parking_tickets_parking_code_fkey" FOREIGN KEY ("parking_code") REFERENCES "parking_lots"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "parking_tickets" ADD CONSTRAINT "parking_tickets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
