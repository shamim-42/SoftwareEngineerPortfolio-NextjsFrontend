import Link from '@/components/ui/link';
import cn from 'classnames';

const Logo: React.FC<React.AnchorHTMLAttributes<{}>> = ({
  className,
  ...props
}) => {
  return (
    <Link
      href="/"
      className={cn('inline-flex', className)}
      {...props}
      aria-label="Your brand logo"
    >
      <span className="relative h-10 w-32 overflow-hidden md:w-40">
        <h2 className="text-2xl font-bold uppercase  text-fuchsia-700">
          Shamim
        </h2>
      </span>
    </Link>
  );
};

export default Logo;
