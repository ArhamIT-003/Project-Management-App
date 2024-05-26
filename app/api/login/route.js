import { NextResponse } from "next/server";
import { signIn } from "../../../auth"; // Assuming signIn is used

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    console.log(email, password);

    // Assuming signIn is used
    await signIn("credentials", { email, password });

    return NextResponse.json(
      {
        message: "Logged in successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: { error },
      },
      { status: 201 }
    );
  }
}
