"use client";

import { useState, type FormEvent } from "react";

const inputClass =
  "w-full rounded-none border border-input-border bg-input-bg font-heebo text-[15px] leading-[21px] text-[#333] placeholder:text-[#666] outline-none";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <section className="relative z-[1] -mt-[72px] bg-[url(/images/contact-bg.png)] bg-cover bg-center px-0 pt-[58px] pb-[24px] md:px-[17%] md:pt-0 md:pb-[6%]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#191919_17%,rgba(25,25,25,0.48)_100%)]" />
      <div className="relative flex flex-col md:min-h-[522px] md:flex-row md:items-end">
        <div className="w-full p-[10px] md:w-1/2">
          <p className="mb-[20px] font-prata text-[18px] leading-[1.2em] tracking-[1.8px] text-eyebrow md:text-[26px] md:leading-[26px]">
            Liên hệ
          </p>
          <h2 className="font-prata text-[26px] leading-[1.2em] tracking-[4px] text-white md:text-[50px] md:leading-[60px]">
            Hãy để chúng tôi giúp bạn!
          </h2>
        </div>
        <div className="w-full p-[10px] md:w-1/2">
          <form onSubmit={handleSubmit} className="-mx-[5px] -mb-[10px] flex flex-wrap">
            <div className="mb-[10px] w-full px-[5px]">
              <input type="text" name="name" placeholder="Tên" aria-label="Tên" className={`${inputClass} min-h-[40px] px-[16px] py-[8px]`} />
            </div>
            <div className="mb-[10px] w-full px-[5px]">
              <input type="email" name="email" placeholder="Email" aria-label="Email" className={`${inputClass} min-h-[40px] px-[16px] py-[8px]`} />
            </div>
            <div className="mb-[10px] w-full px-[5px]">
              <textarea
                name="message"
                rows={4}
                placeholder="Nội dung tin nhắn"
                aria-label="Nội dung tin nhắn"
                className={`${inputClass} block h-[96px] resize-y px-[14px] py-[5px]`}
              />
            </div>
            <div className="mb-[10px] flex w-full justify-end px-[5px]">
              <button
                type="submit"
                className="min-h-[40px] w-[181px] cursor-pointer border border-white bg-button-bg px-[72.8px] py-[4.5px] font-heebo text-[16px] leading-[16px] font-light tracking-[2px] text-white transition-all duration-300"
              >
                GỬI
              </button>
            </div>
            {sent && (
              <p className="w-full px-[5px] font-roboto text-[14px] font-light text-white" role="status">
                Cảm ơn bạn đã liên hệ!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
