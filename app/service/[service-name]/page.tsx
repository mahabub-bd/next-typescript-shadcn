export default function ServiceDetails({
  params,
}: {
  params: { "service-name": string };
}) {
  const { "service-name": serviceName } = params;

  return (
    <section className="container mx-auto">
      <h1>Service Details</h1>
      <p>Service Name: {serviceName}</p>
    </section>
  );
}
