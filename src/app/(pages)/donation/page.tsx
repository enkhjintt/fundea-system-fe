"use client";
import { useSearchParams } from "next/navigation";
import AllProjects from "@/components/(routes)/project/all-project/all-project";
import SectionLayout from "@/components/section-layout";

export default function DonationPage() {
  const searchParams = useSearchParams();
  const tusulTurulNer = searchParams.get("tusul_turul_ner") || "";

  return (
    <SectionLayout>
      <AllProjects initialTypeSearch={tusulTurulNer} />
    </SectionLayout>
  );
}
