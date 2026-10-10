export function ServicesSection() {
  return (
    <section className="relative flex min-h-[684px] items-center bg-background max-md:pt-[22px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url(/images/overlay-1.png)] bg-cover bg-center bg-no-repeat"
      />
      <div className="relative mx-auto w-full max-w-[1140px]">
        <div className="px-[10px] text-center">
          <h2 className="mb-5 font-prata text-[26px] leading-[26px] tracking-[1.8px] text-eyebrow max-md:text-left max-md:text-[18px] max-md:leading-[1.2em]">
            Tất cả trong Một
          </h2>
          <h2 className="mb-5 font-prata text-[50px] leading-[60px] tracking-[4px] text-white max-md:text-left max-md:text-[26px] max-md:leading-[1.2em]">
            Dịch vụ hoàn chỉnh,
            <br />
            từ Kiến trúc &amp; Thiết kế,
            <br />
            đến Thi công &amp; Sản xuất.
          </h2>
          <p className="mb-5 px-[10%] font-roboto text-base leading-6 font-light text-white max-md:px-0 max-md:text-left max-md:text-sm">
            {
              "Dù làm theo yêu cầu của các kiến trúc sư, người thiết kế nội thất hay bất cứ yêu cầu cụ thể nào của khách hàng, trong mọi trường hợp các bạn đều có thể tin tưởng vào chuyên môn của chúng tôi. Sau khi thống nhất phương hướng cho dự án, chúng tôi tôi sẽ lo mọi thứ từ bản vẽ kỹ thuật cho đến việc thiết kế để phù hợp nhất với yêu cầu của khách hàng."
            }
          </p>
          <a
            href="https://lgp-blacksmith.com/vi/dich-vu/"
            className="inline-block border border-white bg-button-bg px-[33.6px] py-[11.2px] font-roboto text-base leading-4 font-light tracking-[2px] text-white uppercase transition-all duration-300 hover:text-white max-md:px-[30px] max-md:py-3"
          >
            Xem tất cả dịch vụ
          </a>
        </div>
      </div>
    </section>
  );
}
