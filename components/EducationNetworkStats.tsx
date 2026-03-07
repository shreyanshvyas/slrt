"use client";

export default function EducationNetworkStats() {
  return (
    <section className="bg-[#F3F3F3] py-20">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Heading */}
        <div className="text-center">
           <h2 className="md:text-5xl text-4xl text-center mb-6 font-semibold font-display italic text-[#1A1A1A]">
            About Rahul Education Network
          </h2>
          <p className="mt-2 text-lg text-gray-500">KG to PhD</p>

          <p className="mx-auto mt-6 max-w-4xl md:text-xl  leading-relaxed text-gray-600">
            Since 1992, Rahul Education has been committed to deliver good quality education aimed at all-round development of the child. 
            Over the years, we have evolved an integrated approach which ensures the right blend of extra-curricular and co-curricular 
            activities along with the prescribed academic curriculum at respective levels.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          
          {/* LEFT COLUMN */}
          <div className="grid gap-6">
            
            {/* 57+ */}
            <div className="rounded-2xl bg-[#FF642E] p-10 text-white flex flex-col justify-end">
              <p className="md:text-[5rem] text-[4rem] font-bold leading-none">57+</p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wide">
                Institutions in our group
              </p>
            </div>

            {/* 30+ */}
            <div className="rounded-2xl bg-[#1E5AC8] p-10 text-white flex flex-col justify-end">
              <p className="md:text-[5rem] text-[4rem] font-bold leading-none">30+</p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wide">
                Years of delivering quality education
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="grid gap-6">
            
            {/* 20+ */}
            <div className="rounded-2xl bg-[#1E5AC8] p-10 text-white flex flex-col justify-end">
              <p className="text-[4rem] font-bold leading-none">20+</p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wide">
                Awards
              </p>
            </div>

            {/* 3,000+ & 70,000+ stacked */}
            <div className="grid gap-6">
              <div className="rounded-2xl bg-[#FF642E] p-8 text-white flex flex-col justify-end">
                <p className="text-[3rem] font-bold leading-none">3,000+</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide">
                  Staff Members
                </p>
              </div>

              <div className="rounded-2xl bg-[#FF642E] p-8 text-white flex flex-col justify-end">
                <p className="text-[3rem] font-bold leading-none">70,000+</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide">
                  Students Enrolment
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
