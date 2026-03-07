"use client";

export default function Footer() {
  return (
    <footer className="px-6 pb-6">
      <div
        className="
          mx-auto max-w-[1600px]
          rounded-[28px]
          bg-gradient-to-b from-[#1C1C1C] to-[#0F0F0F]
          px-10 py-16 text-white
        "
      >
        {/* TOP SECTION */}
        <div className="max-w-4xl">
          <h2 className="md:text-6xl text-2xl font-semibold leading-tight">
            Education must be Liberate,
            <br />
            Not Domesticate
          </h2>

          <p className="mt-8 text-lg text-white/70">
            Subscribe to our newsletter
          </p>

          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <input
              placeholder="yourname@gmail.com"
              className="
                rounded-full border border-white/20
                bg-transparent px-6 py-3
                text-white placeholder-white/40
                outline-none
                focus:border-white/40
              "
            />

            <button
              className="
                rounded-full px-6 py-3 text-white
                bg-gradient-to-r from-orange-500 to-orange-600
                shadow-[0_0_25px_rgba(255,100,0,0.6)]
                transition-all duration-300
                hover:scale-105
              "
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* GRID LINKS */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 text-sm">
          <FooterColumn
            title="About"
            links={[
              "Our Management",
              "About Rahul Education",
              "About SLRTCE",
              "About SLRTSBM",
              "Vision | Mission | Philosophy",
              "Advisory Board",
              "Governance",
              "People",
            ]}
          />

          <FooterColumn
            title="Academics"
            links={[
              "Academic Framework",
              "Epistemology of Learning",
              "Pedagogical Approach",
              "Assessment, Reflection and Attainment",
              "Vision | Mission | Philosophy",
              "Advisory Board",
              "Governance",
            ]}
          />

          <FooterColumn
            title="Programs"
            links={[
              "Undergraduate",
              "BBA (Hons.)",
              "B.Sc. Management",
              "Postgraduate",
              "PGDM Finance",
              "PGDM Business Analytics",
              "PGDM Management",
              "PGDM Real Estate Management",
              "PGDM Business and Corporate Law",
              "PGDM Law",
              "PGDM Cyber Law",
            ]}
          />

          <FooterColumn
            title="SLRTCI&E"
            links={[
              "From the Desk of Director",
              "Advisory Board",
              "Associate Startups",
              "Funding",
            ]}
          />

          <FooterColumn
            title="Student Welfare"
            links={[
              "Scholarships",
              "Policies",
              "Notices",
              "Student Projects",
            ]}
          />

          <FooterColumn
            title="Admissions"
            links={[
              "Admission Process",
              "Schedule",
              "Fees",
            ]}
          />
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div>
      <h4 className="mb-4 text-lg font-semibold">{title}</h4>
      <ul className="space-y-3 text-white/60">
        {links.map((link, i) => (
          <li key={i} className="hover:text-white transition cursor-pointer">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}
