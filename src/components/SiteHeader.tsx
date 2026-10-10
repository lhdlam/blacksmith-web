"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";

import { NAV_ITEMS } from "@/data/site";
import { cn } from "@/lib/utils";

const LANG_HREF = "https://lgp-blacksmith.com/";

const linkBase =
  "flex items-center font-roboto text-[13px] font-medium uppercase leading-[19.5px] tracking-[2px] transition-colors duration-[400ms]";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="relative z-10 -mb-[110px]">
      <section className="relative z-10 bg-[linear-gradient(rgba(0,0,0,0.6)_0%,rgba(255,255,255,0)_100%)] max-lg:px-5 max-lg:py-2.5">
        <div className="mx-auto flex min-h-[90px] w-full max-w-[1140px] items-center">
          {/* Logo column */}
          <div className="w-1/2 p-2.5 md:w-[30%]">
            <Link href="/" className="block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.png"
                alt="LGP Blacksmith"
                width={160}
                height={90}
                className="h-auto w-[80%] max-w-full md:w-auto"
              />
            </Link>
          </div>

          {/* Nav column */}
          <div className="flex w-1/2 justify-end p-2.5 md:w-[70%]">
            <nav aria-label="Main" className="max-lg:hidden">
              <ul className="flex flex-wrap justify-end">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      aria-current={item.active ? "page" : undefined}
                      className={cn(
                        linkBase,
                        "h-[60px] pl-5 pr-[30px] hover:text-white",
                        item.active ? "text-white" : "text-nav-muted"
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={LANG_HREF}
                    className={cn(linkBase, "h-[60px] pl-5 pr-[30px]")}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/flag-en.png"
                      alt="English"
                      width={16}
                      height={11}
                      className="block"
                    />
                  </a>
                </li>
              </ul>
            </nav>

            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="flex h-[27px] w-[45px] cursor-pointer flex-col justify-between rounded-none border-0 bg-bronze p-2 lg:hidden"
            >
              <span className="block h-px w-full bg-black" />
              <span className="block h-px w-full bg-black" />
              <span className="block h-px w-full bg-black" />
            </button>
          </div>
        </div>
      </section>

      {/* Offcanvas mobile menu */}
      <div
        aria-hidden={!open}
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-[999] bg-black/50 transition-opacity duration-[400ms] lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!open}
        className={cn(
          "fixed left-0 top-0 z-[1000] h-full w-full max-w-[350px] overflow-y-auto bg-mobile-menu-bg transition-transform duration-[400ms] lg:hidden",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex justify-end">
          <button
            type="button"
            aria-label="Close menu"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className="m-3 flex size-[45px] cursor-pointer items-center justify-center rounded-[50px] p-2 text-black transition-colors duration-[400ms] hover:bg-bronze hover:text-white"
          >
            <X className="size-5" strokeWidth={1.5} />
          </button>
        </div>
        <ul className="flex flex-col">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                tabIndex={open ? 0 : -1}
                aria-current={item.active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={cn(
                  linkBase,
                  "px-[30px] py-[15px] hover:text-bronze",
                  item.active ? "text-bronze" : "text-black"
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={LANG_HREF}
              tabIndex={open ? 0 : -1}
              className={cn(linkBase, "px-[30px] py-[15px]")}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/flag-en.png"
                alt="English"
                width={16}
                height={11}
                className="block"
              />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
