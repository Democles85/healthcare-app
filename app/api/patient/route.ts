import { NextResponse } from "next/server"
import mongoose from "mongoose"

import connectdb from "@/lib/mongodb"
import Patient from "@/models/patients"

export async function POST(request: Request) {
  const { fullName, age, notes } = await request.json()
  const id = Math.random().toString(36).substring(7).toUpperCase()

  try {
    await connectdb()
    await Patient.create({ id, fullName, age, notes })

    return NextResponse.json({
      msg: ["Patient created successfully!"],
      id,
      success: true,
    })
  } catch (err) {
    if (err instanceof mongoose.Error.ValidationError) {
      return NextResponse.json({
        msg: Object.values(err.errors).map((val) => val.message),
        success: false,
      })
    }
  }

  return NextResponse.json({
    msg: ["Something went wrong!"],
    success: false,
  })
}

export async function GET() {
  try {
    await connectdb()
    const patients = await Patient.find({})

    return NextResponse.json(patients)
  } catch (err) {
    return NextResponse.json({
      msg: ["Something went wrong!"],
      success: false,
    })
  }
}
