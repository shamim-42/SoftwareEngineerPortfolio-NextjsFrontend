import Link from '@/components/ui/link';
import cn from 'classnames';

type SectionProps = {
  className?: any;
  title?: string;
  href?: string;
  children: React.ReactElement;
};

/**
 * UI component for a section block
 * @param {string} title - The title of the section
 * @param {string} description - The description of the section
 * @param {string} href - The href of the external page for this section
 */

const SectionBlock: React.FC<SectionProps> = ({
  className,
  title,
  href,
  children,
}) => {
  return (
    <div
      className={cn(
        'flex w-full flex-col py-6 px-8 pb-[32px] md:px-16 lg:px-24 xl:px-32 xl:pb-[48px] 3xl:pb-[60px]',
        className
      )}
    >
      {title && (
        <div className="mb-6 flex items-center justify-between ">
          {title && (
            <h3 className="text-xl font-medium md:text-2xl lg:text-2xl 3xl:text-3xl">
              {title}
            </h3>
          )}
          {href && (
            <Link
              href={href}
              className="justify-end text-base font-semibold transition-colors hover:text-accent"
            >
              See all
            </Link>
          )}
        </div>
      )}

      {children}
    </div>
  );
};

export default SectionBlock;
