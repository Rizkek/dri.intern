export default function Features() {
  const features = [
    ['1', 'Actionable insights', 'Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.'],
    ['2', 'Data-driven decisions', 'Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.'],
    ['3', 'Always affordable', 'Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.'],
  ];

  return (
    <section className="features relative -mt-20 bg-ghost-white px-4 pb-16 pt-32 md:-mt-32 md:pb-24 md:pt-48">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:gap-12 lg:grid-cols-3">
        {features.map(([number, title, description]) => (
          <div key={number} className="flex items-start gap-5 text-left lg:block lg:text-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-davys-grey font-serif text-2xl text-dark-purple lg:mx-auto lg:mb-6">
              {number}
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold md:mb-4 md:text-2xl">{title}</h3>
              <p className="leading-relaxed lg:mx-auto">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
