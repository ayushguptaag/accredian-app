import { NextResponse } from "next/server";

import { enquirySchema } from "@/lib/enquiry-schema";
import type { EnquiryField, EnquiryResponse } from "@/types/site";

function buildFieldErrors(error: ReturnType<typeof enquirySchema.safeParse>) {
  if (error.success) {
    return {};
  }

  return Object.fromEntries(
    Object.entries(error.error.flatten().fieldErrors).map(([field, messages]) => [
      field,
      messages?.[0] ?? "Invalid value",
    ]),
  ) as Partial<Record<EnquiryField, string>>;
}

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = enquirySchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json<EnquiryResponse>(
      {
        ok: false,
        message: "Please correct the highlighted fields and try again.",
        fieldErrors: buildFieldErrors(parsed),
      },
      { status: 400 },
    );
  }

  if (parsed.data.location.trim().toLowerCase() === "test-error") {
    return NextResponse.json<EnquiryResponse>(
      {
        ok: false,
        message: "Mock API failure triggered. Please retry once the issue is resolved.",
      },
      { status: 503 },
    );
  }

  const response: EnquiryResponse = {
    ok: true,
    id: crypto.randomUUID(),
    message:
      "Thanks for reaching out. Our enterprise team will get back to you shortly.",
  };

  return NextResponse.json(response, { status: 201 });
}
