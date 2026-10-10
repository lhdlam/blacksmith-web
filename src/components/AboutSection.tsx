export function AboutSection() {
  return (
    <section className="relative flex min-h-[684px] items-center bg-background max-lg:px-[6%] max-lg:py-[5%] max-md:px-0 max-md:pt-[22px] max-md:pb-0">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url(/images/overlay-1.png)] bg-cover bg-center bg-no-repeat max-md:bg-contain"
      />
      <div className="relative mx-auto w-full max-w-[1140px]">
        <div className="px-[10px]">
          <h2 className="mb-5 text-center font-prata text-[50px] leading-[60px] tracking-[4px] text-white max-md:text-left max-md:text-[26px] max-md:leading-[1.2em]">
            Giới thiệu về
            <br />
            LGP Blacksmith and Design
          </h2>
          <div className="px-[10%] text-justify font-roboto text-base leading-6 font-light text-white max-md:px-0 max-md:text-left max-md:text-sm [&_p]:mb-[14.4px] [&_strong]:font-normal">
            <p>
              {"Chào mừng đến với "}
              <strong>LGP Blacksmith and Design</strong>
              {" – Nơi Nghệ thuật  gặp gỡ và kiến tạo nên những thiết kế độc bản”"}
            </p>
            <p>
              {"Tại "}
              <strong>LGP Blacksmith and Design</strong>
              {
                ", chúng tôi không chỉ rèn nên những sản phẩm bằng thép, mà còn thổi hồn nghệ thuật vào từng chi tiết. Kết hợp giữa tay nghề thủ công tinh xảo và sự sáng tạo trong thiết kế, chúng tôi mang đến những tác phẩm từ cổ điển đến hiện đại không chỉ bền đẹp với thời gian mà còn mang đậm dấu ấn cá nhân cho mỗi khách hàng. Với đội ngũ thợ rèn lành nghề và các nhà thiết kế tài năng cùng nhà xưởng khép kín, chúng tôi tạo ra  những sản phẩm từ thép với nét đặc trưng riêng:"
              }
            </p>
            <ul className="list-disc pl-10">
              <li>{"Cầu thang , lan can, cửa cổng, canopy…;"}</li>
              <li>{"Nội ngoại thất;"}</li>
              <li>{"Những sản phẩm decor;"}</li>
              <li>{"Tay nắm, chân tủ, khung gương…"}</li>
            </ul>
            <br />
            <p>
              <strong>
                {
                  "Nét riêng của LGP thay thế các sản phẩm làm bằng vật liệu inox , đồng với công nghệ xi mạ riêng và làm màu hoàn chỉnh tạo nên những sản phẩm chất lương ngang bằng, bền màu và giá thành tối ưu."
                }
              </strong>{" "}
              <strong>LGP BLACK SMITH AND DESIGN</strong>
              {" không ngừng đổi mới và sáng tạo để mang lại giải pháp toàn diện cho mọi nhu cầu của khách hàng."}
            </p>
            <p>
              {"Tại "}
              <strong>LGP Blacksmith and Design</strong>
              {", mỗi sản phẩm chúng tôi gởi đến khách hàng là một tác phẩm nghệ thuật đậm chất cá nhân."}
            </p>
            <p>
              <strong>
                {"Hãy cùng LGP BLACKSMITH AND DESIGN biến ý tưởng của bạn thành hiện thực – Vững chắc, đẳng cấp, và trường tồn!"}
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
