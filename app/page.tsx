import Link from "next/link"

import { Patient } from "@/types/patient"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { MeteorPreview } from "@/components/meteor-card/meteor-card"

async function getPatients() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/patient`, {
    cache: "no-store",
  })

  if (!res.ok) throw new Error("Failed to fetch patients")

  return JSON.parse(await res.text()).map((patient: Patient) => patient)
}

export default async function IndexPage() {
  const patients = await getPatients()

  return (
    <>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            The next generation <br className="hidden sm:inline" />
            of infants healthcare.
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Accessible and customizable user experience that you can access
            anywhere to check up on your newborn.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants()}
          >
            Documentation
          </Link>
          <Link
            rel="noreferrer"
            href={siteConfig.links.register}
            className={buttonVariants({ variant: "outline" })}
          >
            Register
          </Link>
        </div>
      </section>
      {/* Patients cards section */}
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Patients
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {patients.map((patient: Patient) => (
            <MeteorPreview
              key={patient.id}
              title={patient.fullName}
              content={patient.notes}
              meteors={patient.age}
            />
          ))}
        </div>
      </section>
    </>
  )
}
