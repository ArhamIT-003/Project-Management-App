import { connectToDb } from "../../lib/utlis";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { User } from "../../lib/models/User";

export async function POST(req) {
  try {
    await connectToDb();

    const { username, email, password } = await req.json();

    const userExists = await User.findOne({ email: email });

    if (userExists) {
      return NextResponse.json(
        {
          message: "Email already exists",
        },
        { status: 500 }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({ username, email, password: hashedPassword });

    return NextResponse.json(
      {
        message: "User Signed In",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error occuring while registering",
      },
      { status: 201 }
    );
  }
}
