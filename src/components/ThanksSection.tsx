export function ThanksSection() {
  return (
    <section className="relative flex min-h-[630px] items-center bg-[url(/images/sebastien-sicot.jpg)] bg-cover bg-center bg-no-repeat px-[17%] max-lg:px-[6%] max-lg:py-[4%] max-md:px-0 max-md:py-[34px] max-md:bg-[position:-384px_0] lg:bg-fixed">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-black opacity-65" />
      <div className="relative w-full px-[10px] text-center">
        <h2 className="mb-5 font-prata text-[26px] leading-[26px] tracking-[1.8px] text-eyebrow max-md:text-[18px] max-md:leading-[1.2em]">
          Lời cảm ơn
        </h2>
        <h2 className="mb-5 font-prata text-[50px] leading-[60px] tracking-[4px] text-white max-md:text-[26px] max-md:leading-[1.2em]">
          Bí quyết độc đáo tại Việt Nam
        </h2>
        <div className="mt-[9.3px] font-roboto text-base leading-6 font-light text-thanks-text max-md:text-sm [&_p]:mb-[14.4px] [&_strong]:font-normal">
          <p>
            <strong>
              {
                "Chúng tôi đặc biệt biết ơn sự dẫn dắt và đào tạo tận tâm của thầy  Sebastien SICOT, một chuyên gia có 30 năm kinh nghiệm trong lĩnh vực rèn đúc và thiết kế."
              }
            </strong>
          </p>
          <p>
            <strong>
              {
                "Dưới sự hướng dẫn tinh tế của thầy Sebastien, đội ngũ của chúng tôi đã không chỉ nắm vững các kỹ thuật rèn truyền thống mà còn học cách kết hợp nghệ thuật vào từng chi tiết sản phẩm. Những kiến thức và kinh nghiệm thầy chia sẻ đã giúp chúng tôi hiểu sâu hơn về sự quan trọng của tính thẩm mỹ, sự cân bằng giữa độ bền và vẻ đẹp trong mỗi tác phẩm, từ những chiếc cổng sắt nghệ thuật, lan can, đến các món đồ nội thất tinh xảo."
              }
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
