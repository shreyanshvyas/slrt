
"use client";

import Image from "next/image";
import { Bell, ChevronDown } from "lucide-react";
import logo from "@/public/logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div
        className="
          mx-auto w-full 
          bg-gradient-to-b from-[#1C1C1C] to-[#0F0F0F]
          px-8 py-5
          shadow-[0_20px_60px_rgba(0,0,0,0.4)]
        "
      >
        <div className="flex items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-10">
            <Image
              src={logo}
              alt="SLRTSBM"
              width={56}
              height={56}
              className="rounded-full"
            />

            <nav className="hidden lg:flex items-center gap-8 text-sm text-white/80">
              <NavItem label="About Us" href="/" />
              <NavItem label="Academics" href="/academic-framework" />
              <NavItem label="Board" href="/advisory-board" />
              <NavItem label="Epistermology" href="/epistermology" />
              <NavItem label="Approach" href="/pedagogical-approach" />
              <NavItem label="Scholarships" href="/scholarship" />
              <NavItem label="Vision" href="/vision" />
            </nav>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            <button
              className="
                rounded-full border border-white/30
                px-6 py-2 text-sm text-white
                transition-all duration-300
                hover:bg-white hover:text-black
              "
            >
              Apply Now
            </button>

            <div
              className="
                flex h-10 w-10 items-center justify-center
                rounded-full bg-[#1E63D6]
                shadow-[0_0_20px_rgba(30,99,214,0.6)]
              "
            >
              <Bell className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavItem({ label, href }: { label: string; href: string }) {
  return (
    <div className="flex items-center gap-1 cursor-pointer hover:text-white transition">
      <Link href={href}>
      <span>{label}</span></Link>
    </div>
  );
}
