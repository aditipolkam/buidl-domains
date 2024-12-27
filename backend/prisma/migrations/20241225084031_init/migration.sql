-- CreateTable
CREATE TABLE
    "User" (
        "id" SERIAL NOT NULL,
        "name" VARCHAR(255) NOT NULL,
        "user_address" VARCHAR(255) NOT NULL,
        "token_id" INTEGER NOT NULL,
        "registration_tx" VARCHAR(255) NOT NULL,
        "block_number" INTEGER NOT NULL,
        "timestamp" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT "User_pkey" PRIMARY KEY ("id")
    );