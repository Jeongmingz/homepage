import { MongoClient, Db } from "mongodb";

const uri = `mongodb+srv://${process.env.NEXT_PUBLIC_MONGO_ATLAS_USERNAME}:${process.env.NEXT_PUBLIC_MONGO_ATLAS_PASSWORD}@${process.env.NEXT_PUBLIC_MONGO_ATLAS_URL}/?retryWrites=true&w=majority&appName=homepage`;

let cachedClient: MongoClient;
let cachedDb: Db;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(uri, {
    maxPoolSize: 50, // 동시 연결 최대 수
    minPoolSize: 10, // 유지할 최소 연결 수
    serverApi: {
      version: "1",
      strict: true,
      deprecationErrors: true,
    },
  });

  await client.connect();
  const db = client.db("homepage");

  cachedClient = client;
  cachedDb = db;

  return { client: cachedClient, db: cachedDb };
}
