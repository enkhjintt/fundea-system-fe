import { Metadata } from "next";

import CollapseComponent from "@/components/(routes)/project/help/help";
import SectionLayout from "@/components/section-layout";

export const metadata: Metadata = {
  title: "Төсөл оруулах ",
};
export default function AddProjectPage() {
  return (
    <>
      <SectionLayout>
        <CollapseComponent />
      </SectionLayout>
    </>
  );
}
