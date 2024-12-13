import { Metadata } from "next";

import CollapseComponent from "@/components/(routes)/project/help/help";
import SectionLayout from "@/components/section-layout";
import AddProjectForm from "@/components/(routes)/project/add-projects/add-project";
import AddProjectAndBonusPage from "@/components/(routes)/project/add-projects/add-project-bonus";

export const metadata: Metadata = {
  title: "Төсөл оруулах ",
};
export default function AddProjectPage() {
  return (
    <>
      <SectionLayout>
        <AddProjectAndBonusPage />
      </SectionLayout>
    </>
  );
}
