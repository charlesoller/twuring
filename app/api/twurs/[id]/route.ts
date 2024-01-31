import { NextRequest, NextResponse } from "next/server"
import { createSupabaseRouteHandlerClient } from "@/app/_lib/clients"

export async function GET(req: NextRequest, { params }: { params: { id: string }}) {
    const supabase = createSupabaseRouteHandlerClient()
    const { id } = params

    const { data, error } = await supabase
        .from("Twurs")
        .select()
        .eq('id', id)
        .limit(1)
        .single()

    if(error){
        throw new Error(error.message)
    }

    return NextResponse.json({ data })
}
