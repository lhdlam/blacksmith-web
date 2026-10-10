import { Reveal } from "@/components/Reveal";

export function QuoteSection() {
  return (
    <section className="relative flex min-h-[630px] items-center bg-background px-[17%] max-lg:px-[6%] max-md:px-0">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url(/images/overlay-4.png)] bg-cover bg-center bg-no-repeat brightness-200 contrast-200 saturate-200"
      />
      <div className="relative w-full px-[10px]">
        <Reveal animation="fadeIn">
          <p className="text-right font-roboto text-[30px] leading-[45px] font-normal text-quote max-md:text-[26px] max-md:leading-[39px]">
            {
              "“Chúng tôi biến bản thiết kế thành sản phẩm hoàn chỉnh. Blacksmith nổi tiếng với khả năng hoàn thành những dự án phức tạp từ nhiều vật liệu khác nhau.”"
            }
          </p>
        </Reveal>
      </div>
    </section>
  );
}
