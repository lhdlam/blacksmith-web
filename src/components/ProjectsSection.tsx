import { Reveal } from "@/components/Reveal";
import { SeeAllLink } from "@/components/SeeAllLink";
import { PROJECTS } from "@/data/site";
import { cn } from "@/lib/utils";

const SEE_ALL_HREF = "https://lgp-blacksmith.com/vi/du-an/";

/* Content blocks: 950px wide at 1440 (17% side padding), 6% on tablet, 0 on mobile. */
const CONTENT_X = "px-0 md:px-[6%] lg:px-[17%]";
/* Separator rows: 1094px wide at 1440 (12% side padding). */
const WIDE_X = "px-0 md:px-[6%] lg:px-[12%]";

interface ProjectImageProps {
  src: string;
  width: number;
  height: number;
  alt: string;
}

function ProjectImage({ src, width, height, alt }: ProjectImageProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} width={width} height={height} className="block h-auto max-w-full" />
  );
}

interface ProjectTextProps {
  title: string;
  description: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

function ProjectText({ title, description, titleClassName, descriptionClassName }: ProjectTextProps) {
  return (
    <>
      <h3
        className={cn(
          "mb-5 font-heebo text-[27px] leading-[1.2em] font-normal text-project-title md:leading-[40.5px]",
          titleClassName,
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "font-roboto text-[14px] leading-[1.5] font-light text-white md:text-[15px] md:leading-[22.5px]",
          descriptionClassName,
        )}
      >
        {description}
      </p>
    </>
  );
}

interface SeeAllRowProps {
  withLine: boolean;
}

function SeeAllRow({ withLine }: SeeAllRowProps) {
  return (
    <div className={cn("bg-background", WIDE_X)}>
      <div className="p-[10px]">
        <div className={cn("text-right", withLine && "mb-5 hidden md:block")}>
          <SeeAllLink href={SEE_ALL_HREF} width={114} />
        </div>
        {withLine && (
          <div className="py-[2px]">
            <div className="w-[60%] border-t border-divider md:w-full" />
          </div>
        )}
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const [tropic, villa, penthouse] = PROJECTS;

  return (
    <section className="overflow-x-clip bg-background">
      {/* Block A — intro + project 1 */}
      <div className={cn(CONTENT_X, "pt-[26px] md:pt-[5%] lg:pt-[57.6px]")}>
        <div className="p-[10px]">
          <p className="mb-5 font-prata text-[18px] leading-[1.2em] tracking-[1.8px] text-eyebrow md:text-[26px] md:leading-[26px]">
            Dự án gần đây
          </p>
          <div className="flex items-start justify-between">
            <h2 className="max-w-[70%] font-prata text-[26px] leading-[1.2em] font-normal tracking-[4px] text-white md:text-[50px] md:leading-[50px]">
              Thành tựu của chúng tôi
            </h2>
            <div className="max-w-[30%] text-right">
              <SeeAllLink href={SEE_ALL_HREF} width={140} />
            </div>
          </div>
          <p className="mt-[18.6px] font-roboto text-[14px] leading-[1.5] font-light text-white md:text-[16px] md:leading-[24px]">
            Danh mục các dự án gia dụng cũng như thương mại chúng tôi tham gia thực hiện gần đây.
          </p>

          {/* Project 1 — Tropic Garden Penthouse */}
          <div className="mt-[55.8px] flex flex-col md:flex-row">
            <div className="hidden md:block md:w-[44.04%] md:pr-[16.4px]">
              <Reveal animation="fadeInLeft">
                <ProjectImage {...tropic.images[0]} alt={tropic.title} />
              </Reveal>
            </div>
            <div className="flex flex-col justify-center md:w-[55.96%] md:pl-[20.8px]">
              <Reveal animation="fadeInRight" disableOnMobile>
                <div className="mb-5">
                  <ProjectImage {...tropic.images[1]} alt={tropic.title} />
                </div>
                <ProjectText
                  title={tropic.title}
                  description={tropic.description}
                  titleClassName="mt-5"
                  descriptionClassName="-mt-[4.5px]"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      <SeeAllRow withLine />

      {/* Project 2 — Villa */}
      <div className={cn(CONTENT_X, "py-0 md:py-[2%] lg:py-[43.2px]")}>
        <div className="flex flex-col p-[10px] md:flex-row">
          <div className="md:w-[66.952%] md:pr-[24.9px]">
            <Reveal animation="fadeInLeft" disableOnMobile>
              <ProjectImage {...villa.images[0]} alt={villa.title} />
            </Reveal>
          </div>
          <div className="flex flex-col justify-center md:w-[33.048%] md:pl-[12.3px]">
            <Reveal animation="fadeInRight">
              <div className="mb-5 hidden md:block">
                <ProjectImage {...villa.images[1]} alt={villa.title} />
              </div>
              <ProjectText
                title={villa.title}
                description={villa.description}
                titleClassName="mt-[11.8px]"
                descriptionClassName="-mt-[17.7px]"
              />
            </Reveal>
          </div>
        </div>
      </div>

      <SeeAllRow withLine />

      {/* Project 3 — Penthouse Quận 3 */}
      <div className={cn("relative", CONTENT_X, "py-0 md:py-[2%] lg:py-[43.2px]")}>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[url(/images/overlay-2.png)] bg-cover bg-[position:50%_0] brightness-200 contrast-200 saturate-200"
        />
        <div className="relative flex flex-col p-[10px] md:flex-row">
          <div className="flex flex-col justify-center md:w-[61.958%] md:pr-[23px]">
            <Reveal animation="fadeInLeft">
              <div className="mb-5 hidden md:block">
                <ProjectImage {...penthouse.images[0]} alt={penthouse.title} />
              </div>
              <ProjectText
                title={penthouse.title}
                description={penthouse.description}
                titleClassName="mt-[5.5px] text-start md:text-right"
                descriptionClassName="-mt-[22px] text-start md:text-right"
              />
            </Reveal>
          </div>
          <div className="md:w-[38.042%] md:pl-[14.2px]">
            <Reveal animation="fadeInRight" disableOnMobile>
              <ProjectImage {...penthouse.images[1]} alt={penthouse.title} />
            </Reveal>
          </div>
        </div>
      </div>

      <SeeAllRow withLine={false} />

      {/* Closing divider */}
      <div className={cn(CONTENT_X, "pt-[57.6px]")}>
        <div className="p-[10px]">
          <div className="py-[2px]">
            <div className="border-t border-divider" />
          </div>
        </div>
      </div>
    </section>
  );
}
