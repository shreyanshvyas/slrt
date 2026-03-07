"use client";

export default function ScholarshipSection() {
  return (
    <section className="bg-[#F4F4F4] py-20 px-6">
      <div className="mx-auto max-w-6xl rounded-[28px] p-10">

        {/* TEXT AREA */}
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Shree L.R. Tiwari Institutional Scholarship Scheme
          </h2>

          <p className="mt-4 md:text-xl text-gray-600 leading-relaxed">
            In addition to government schemes, Shree L.R. Tiwari College of Engineering,
            the parent institution of SLRTSBM, has introduced a merit-based and
            sports-based scholarship policy to recognise exceptional talent and
            dedication. The Academic Merit Scholarship offers a 100% tuition fee
            waiver to the top five students admitted through the CAP round with
            MH-CET scores in the 95th percentile and above, and a 50% tuition fee
            waiver to the next five students with MH-CET scores in the 90th
            percentile and above. The scholarships are awarded on a first-come,
            first-served basis and are applicable for the first year, with
            continuation contingent on consistent academic performance in
            subsequent years.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">

          <Card className="translate-y-0" />
          <Card className="translate-y-16" />
          <Card className="translate-y-0" />
          <Card className="translate-y-16" />
          <Card className="translate-y-0" />

        </div>
      </div>
    </section>
  );
}

/* CARD */

function Card({ className }: { className?: string }) {
  return (
    <div
      className={`h-[180px] w-[150px] rounded-2xl bg-gray-300 shadow-xl ${className}`}
    />
  );
}