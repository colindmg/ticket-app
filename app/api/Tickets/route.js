import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const ticketData = body.formData;
    await Ticket.create(ticketData);
    return NextResponse.json({ message: "Ticket created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
