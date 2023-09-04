import { ObjectId } from "mongoose"

export interface Patient {
  _id: ObjectId
  id: string
  fullName: string
  age: number
  notes: string
}
