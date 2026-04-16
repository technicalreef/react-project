const mysql = require("mysql2/promise");

async function test() {
  try {
    const connection = await mysql.createConnection({
      host: "127.0.0.1",
      port: 3306,
      user: "root",
      password: "Password@123"
    });

    console.log("✅ Connected to MySQL!");
    await connection.end();
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
}

test();