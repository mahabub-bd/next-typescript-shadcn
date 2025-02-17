import { dbConnect } from "@/services/mongo";

export default async function ServiceDetails({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}) {
  const { serviceSlug } = await params;
  await dbConnect();
  return (
    <section className="container mx-auto">
      <h1>Service Details</h1>
      <p>Service Name: {serviceSlug}</p>
    </section>
  );
}
