import { headers } from "next/headers";
import { redirect } from "next/navigation";

import {
  PageContainer,
  PageContent,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageTitle,
} from "@/components/ui/page-container";
import { auth } from "@/lib/auth";

import { FreePlan } from "./_components/free-plan";
import { SubscriptionPlan } from "./_components/subscription-plan";

const SubscriptionPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }
  if (!session.user.clinic) {
    redirect("/clinic-form");
  }

  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Assinatura</PageTitle>
          <PageDescription>Gerencie a sua assinatura.</PageDescription>
        </PageHeaderContent>
      </PageHeader>
      <PageContent>
        <div className="flex flex-col gap-6 md:flex-row">
          <FreePlan
            className="w-[350px]"
            active={session.user.plan === "free"}
          />
          <SubscriptionPlan
            className="w-[350px]"
            active={session.user.plan === "essential"}
            userEmail={session.user.email}
          />
        </div>
      </PageContent>
    </PageContainer>
  );
};

export default SubscriptionPage;
