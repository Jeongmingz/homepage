import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "@/lib/mongodb";

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const resume = db.collection("resume");
    const query = { _id: new ObjectId("679bb18509059cac9eadbc33") };

    const result = await resume.findOne(query);

    if (!result) {
      return NextResponse.json({ error: "No data found" }, { status: 404 });
    }
    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
