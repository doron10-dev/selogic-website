import { areFormsOperational } from "@/lib/form-gate";

export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json({ enabled: areFormsOperational() });
}
