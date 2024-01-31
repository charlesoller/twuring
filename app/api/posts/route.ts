import { NextRequest, NextResponse } from "next/server"
import { createSupabaseRouteHandlerClient } from "@/app/_lib/clients"

export async function GET(req: NextRequest) {
    const supabase = createSupabaseRouteHandlerClient()

    const { data, error } = await supabase
        .from("Posts")
        .select()
    if(error){
        throw new Error(error.message)
    }

    return NextResponse.json({ data })
}

export async function POST(req: NextRequest) {
    const supabase = createSupabaseRouteHandlerClient()
    const body = await req.json()

    const { data, error } = await supabase
        .from("Posts")
        .insert(body)
        .select()

    if(error){
        throw new Error(error.message)
    }

    return NextResponse.json({ data })
}
