import { User } from "../models/user.model.js";
import { connectDatabase, disconnectDatabase } from "../config/db.js";
import { logger } from "../config/logger.js";

async function createAdmin() {
  await connectDatabase();

  const adminEmail = (process.env.ADMIN_EMAIL ?? "admin@servicepro.com").toLowerCase();
  const adminPassword = process.env.ADMIN_PASSWORD;
  const adminName = process.env.ADMIN_NAME ?? "Business Administrator";
  if (!adminPassword || adminPassword.length < 10) {
    throw new Error("Set ADMIN_PASSWORD to a password with at least 10 characters before running this seed");
  }

  const existing = await User.findOne({ email: adminEmail });
  if (existing) {
    existing.name = adminName;
    existing.role = "admin";
    existing.isActive = true;
    existing.password = adminPassword;
    await existing.save();
    logger.info(`Admin account updated: ${adminEmail}`);
    await disconnectDatabase();
    return;
  }

  await User.create({
    name: adminName,
    email: adminEmail,
    password: adminPassword,
    role: "admin",
    isActive: true,
  });

  logger.info(`Admin account created: ${adminEmail}`);

  await disconnectDatabase();
}

void createAdmin().catch((err) => {
  logger.error("Failed to create admin user:", err);
  process.exit(1);
});
