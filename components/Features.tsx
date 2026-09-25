export default function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center md:text-left mb-32">
      <div className="flex flex-col md:items-start items-center">
        <div className="w-12 h-12 rounded-full border border-davys-grey flex items-center justify-center font-serif text-2xl text-dark-purple mb-6">
          1
        </div>
        <h3 className="text-2xl mb-4 font-bold">Actionable insights</h3>
        <p className="leading-relaxed">
          Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.
        </p>
      </div>

      <div className="flex flex-col md:items-start items-center">
        <div className="w-12 h-12 rounded-full border border-davys-grey flex items-center justify-center font-serif text-2xl text-dark-purple mb-6">
          2
        </div>
        <h3 className="text-2xl mb-4 font-bold">Data-driven decisions</h3>
        <p className="leading-relaxed">
          Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.
        </p>
      </div>

      <div className="flex flex-col md:items-start items-center">
        <div className="w-12 h-12 rounded-full border border-davys-grey flex items-center justify-center font-serif text-2xl text-dark-purple mb-6">
          3
        </div>
        <h3 className="text-2xl mb-4 font-bold">Always affordable</h3>
        <p className="leading-relaxed">
          Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.
        </p>
      </div>
    </div>
  );
}