import { JustifiedGallery } from "@/components/JustifiedGallery";
import { SeeAllLink } from "@/components/SeeAllLink";
import { GALLERY_IMAGES, GALLERY_TABS } from "@/data/site";

const PRODUCTS_URL = "https://lgp-blacksmith.com/vi/san-pham/";

export function ProductsSection() {
  return (
    <section className="bg-background pt-[24px] md:px-[6%] md:pt-0 lg:px-[17%] lg:pt-[86px]">
      <div className="p-[10px]">
        <div className="flex flex-wrap">
          <p className="mb-[20px] w-full font-prata text-[18px] leading-[1.2] tracking-[1.8px] text-eyebrow md:text-[26px] md:leading-[26px]">
            Nhập khẩu những gì tốt nhất
          </p>
          <h2 className="max-w-[70%] basis-[70%] font-prata text-[26px] leading-[1.2] font-normal tracking-[4px] text-white md:text-[50px] md:leading-[50px]">
            Sản phẩm của chúng tôi
          </h2>
          <div className="max-w-[30%] basis-[30%] text-end">
            <SeeAllLink href={PRODUCTS_URL} width={140} />
          </div>
        </div>
        <p className="mt-[20px] mb-[38px] font-roboto text-[16px] leading-[24px] font-light text-white">
          Chúng tôi là nhà nhập khẩu và phân phối độc quyền của <strong className="font-normal">Grand Forge</strong> và{" "}
          <strong className="font-normal">Eurokorten</strong> tại Việt Nam.
          <br />
          Chúng tôi bán các sản phẩm của họ tại Việt Nam, cũng như tùy chỉnh chúng theo yêu cầu.
        </p>
        <JustifiedGallery tabs={GALLERY_TABS} images={GALLERY_IMAGES} />
        <div className="mt-[39px] pb-[68px] text-end">
          <SeeAllLink href={PRODUCTS_URL} width={105} />
        </div>
      </div>
    </section>
  );
}
