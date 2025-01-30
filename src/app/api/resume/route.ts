import { MongoClient, ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  const client = new MongoClient(
    `mongodb+srv://${process.env.NEXT_PUBLIC_MONGO_ATLAS_USERNAME}:${process.env.NEXT_PUBLIC_MONGO_ATLAS_PASSWORD}@${process.env.NEXT_PUBLIC_MONGO_ATLAS_URL}/?retryWrites=true&w=majority&appName=homepage`
  );

  try {
    await client.connect();
    const resume = client.db("homepage").collection("resume");
    const query = { _id: new ObjectId("679bb18509059cac9eadbc33") };

    const result = await resume.findOne(query);

    if (!result) {
      return NextResponse.json({ error: "No data found" }, { status: 404 });
    }
    console.log(result);
    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}
