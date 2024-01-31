import { NextRequest, NextResponse } from "next/server"
import { createSupabaseRouteHandlerClient } from "@/app/_lib/clients"

export async function GET(req: NextRequest) {
    const supabase = createSupabaseRouteHandlerClient()

    const { data, error } = await supabase
        .from("twurs")
        .select()
    if(error){
        throw new Error(error.message)
    }

    return NextResponse.json({ data })
}
