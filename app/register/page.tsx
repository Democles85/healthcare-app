"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
  fullName: z
    .string()
    .min(3, {
      message: "Full name must be at least 3 characters long",
    })
    .max(50, {
      message: "Full name must be at most 50 characters long",
    }),
  age: z.coerce
    .number()
    .min(0, {
      message: "Age must be at least 0",
    })
    .max(20, {
      message: "Age must be at most 20",
    }),
  notes: z
    .string()
    .min(10, {
      message: "Notes must be at least 10 characters long",
    })
    .max(1000, {
      message: "Notes must be at most 1000 characters long",
    }),
})

const Register = () => {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      age: undefined,
      notes: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await fetch("/api/patient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })

    const { msg, success, id = null } = await response.json()

    if (!success) toast({ title: msg, variant: "destructive" })

    form.reset()

    toast({
      title: msg,
      description: `Patient ID: ${id}`,
      variant: "success",
    })
  }

  return (
    <section className="flex flex-col items-center">
      <div className="text-2xl font-bold">Register</div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Full Name" {...field} />
                </FormControl>
                <FormDescription>
                  The patients full name, as it appears on their birth
                  certificate
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Age" {...field} />
                </FormControl>
                <FormDescription>
                  The patients age, in years, as of today
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Notes</FormLabel>
                <FormControl>
                  <Textarea placeholder="Notes" {...field} />
                </FormControl>
                <FormDescription>
                  Any notes you would like to add about the patient
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </section>
  )
}

export default Register
