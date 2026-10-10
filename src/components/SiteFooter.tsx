import { FacebookIcon, LinkedinIcon } from "@/components/icons";

const headingClass =
  "mb-[20px] font-prata text-[16px] leading-[16px] font-normal text-footer-heading md:text-[20px] md:leading-[20px]";
const textClass = "font-roboto text-[16px] leading-[24px] font-light text-footer-text";

export function SiteFooter() {
  return (
    <footer className="bg-footer-bg px-0 pt-[24px] md:px-[20px] md:pt-[40px] md:pb-[10px] lg:px-0 lg:pt-[80px]">
      <div className="mx-auto max-w-[1290px]">
        <div className="flex flex-col md:flex-row">
          <div className="w-full p-[10px] md:w-1/3 md:pr-[60px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/footer-logo.png"
              alt="LGP Blacksmith & Design"
              width={250}
              height={142}
              className="mx-auto mb-[20px] block h-auto max-w-full"
            />
            <p className="text-center font-heebo text-[16px] leading-[24px] font-light text-footer-text">
              <strong className="font-normal">Sáng tạo từ thép –</strong>
              <br />
              <strong className="font-normal text-footer-accent">Kiến tạo nên giá trị độc bản</strong>
            </p>
          </div>
          <div className="mt-[61px] w-full p-[10px] md:mt-0 md:w-1/3 md:pl-[40px]">
            <h2 className={headingClass}>Điện thoại</h2>
            <p className={`${textClass} mb-[34.4px]`}>
              +84 982 202 139 (Mrs. Dung – Giám đốc)
              <br />
              +84 937 899 678 (Mr. Tân – Quản lý sản xuất)
            </p>
            <h2 className={headingClass}>Email</h2>
            <p className={`${textClass} mb-[14.4px]`}>
              Giám đốc: dungpham@lgp-blacksmith.com
              <br />
              Quản lý sản xuất: tanle@lgp-blacksmith.com
              <br />
              Kinh doanh: hoanghoa@lgp-blacksmith.com; ngoctrinh@lgp-blacksmith.com
            </p>
          </div>
          <div className="mt-[20px] w-full p-[10px] md:mt-0 md:w-1/3">
            <h2 className={`${headingClass} mb-[30px]`}>Địa chỉ</h2>
            <p className={`${textClass} mb-[14.4px]`}>CÔNG TY TNHH LGP BLACKSMITH AND DESIGN</p>
            <p className={`${textClass} mb-[14.4px]`}>
              Số 51/37 đường Châu Thới, Khu Phố Châu Thới, Phường Bình An, TP Dĩ An, Tỉnh Bình Dương.
            </p>
            <div className="flex items-center gap-[18px]">
              <a
                href="https://www.facebook.com/blacksmithanddesign"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-footer-heading transition-opacity duration-300 hover:opacity-90"
              >
                <FacebookIcon className="h-[25px] w-[25px]" />
              </a>
              <a
                href="https://www.linkedin.com/company/blacksmith-design/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-footer-heading transition-opacity duration-300 hover:opacity-90"
              >
                <LinkedinIcon className="h-[25px] w-[25px]" />
              </a>
            </div>
          </div>
        </div>
        <div className="mx-[10px] mt-[60px] mb-[20px] border-t border-footer-rule" />
        <div className="flex flex-col items-center px-[10px] md:flex-row md:justify-between">
          <p className="text-center font-heebo text-[13px] leading-[13px] font-light text-footer-text md:text-left">
            2021 ® Blacksmith &amp; Design. All Rights Reserved.
          </p>
          <p className="pt-[12px] pb-[24px] text-center font-heebo text-[13px] leading-[13px] font-light text-footer-text md:py-0 md:pr-[12.7px] md:text-right">
            <a href="http://www.knok-studios.com" target="_blank" rel="noopener noreferrer" className="text-inherit">
              Design &amp; Development by Knok Studios
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
