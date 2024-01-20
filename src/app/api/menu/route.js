const { MongoClient } = require("mongodb");

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function GET(req) {
  try {
    const database = client.db("ByMero");
    const menu = database.collection("menu");

    // Query the whole menu
    const menuItems = await menu.find();
    const items = await menuItems.toArray();

    return new Response(JSON.stringify(items));
  } catch (e) {
    return new Response("Error: " + e);
  }
}

// Mongoose method
// import connectDB from "@/lib/mongodb";
// import Menu from "@/models/menu";
// import { NextResponse } from "next/server";

// export async function GET() {
//   await connectDB();
//   const menuItems = await Menu.find({});
//   return NextResponse.json(menuItems);
// }
