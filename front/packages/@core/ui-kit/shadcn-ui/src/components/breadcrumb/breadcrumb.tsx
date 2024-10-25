import React from 'react';
import styled from 'styled-components';
import { ChevronRightIcon, DotsHorizontalIcon } from '@radix-ui/react-icons';

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<'nav'> & {
    separator?: React.ReactNode;
  }
>(({ ...props }, ref) => <Nav ref={ref} aria-label="breadcrumb" {...props} />);
Breadcrumb.displayName = 'Breadcrumb';

const Nav = styled.nav`
  // Add any styles you want for the nav here
`;

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<'ol'>
>(({ className, ...props }, ref) => (
  <Ol ref={ref} className={className} {...props} />
));
BreadcrumbList.displayName = 'BreadcrumbList';

const Ol = styled.ol`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem; // Adjust to your design
  font-size: 0.875rem; // text-sm
`;

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<'li'> & { noDeepLevel: boolean }
>(({ className, ...props }, ref) => {
  console.log('noDeepLevel:' + props.noDeepLevel);
  return <Li ref={ref} className={className} {...props} />;
});
BreadcrumbItem.displayName = 'BreadcrumbItem';

const Li = styled.li<{ noDeepLevel: boolean }>`
  display: inline-flex;
  align-items: center;
  /* cursor: pointer; // 测试硬编码 */

  cursor: ${({ noDeepLevel }) => (noDeepLevel ? 'pointer' : 'default')};
  color: ${p =>
    p.noDeepLevel ? p.theme.mutedForegroundColor : p.theme.foregroundColor};
  gap: 1.5rem; // Adjust to your design

  &:hover {
    color: ${p => p.theme.foregroundColor};
  }
`;

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<'div'> & {
    asChild?: boolean;
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? StyledSlot : 'div';

  return <Comp ref={ref} className={className} {...props} />;
});
BreadcrumbLink.displayName = 'BreadcrumbLink';

const StyledSlot = styled.span`
  // Add styles for the Slot if needed
`;

const BreadcrumbPage = React.forwardRef(({ className, ...props }, ref) => (
  <Span
    ref={ref}
    className={className}
    role="link"
    aria-disabled="true"
    aria-current="page"
    {...props}
  />
));
BreadcrumbPage.displayName = 'BreadcrumbPage';

const Span = styled.span`
  font-weight: normal;
  color: var(--foreground); // Replace with your color variable
`;

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<'li'>) => (
  <Separator {...props}>{children ?? <ChevronRightIcon />}</Separator>
);
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

const Separator = styled.li`
  // Add styles for the separator
  & > svg {
    width: 1.5rem; // Adjust size
    height: 1.5rem; // Adjust size
  }
`;

const BreadcrumbEllipsis = ({ className, ...props }) => (
  <Ellipsis
    role="presentation"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <DotsHorizontalIcon className="h-4 w-4" />
    <span className="sr-only">More</span>
  </Ellipsis>
);
BreadcrumbEllipsis.displayName = 'BreadcrumbEllipsis';

const Ellipsis = styled.span`
  display: flex;
  height: 2.25rem; // Adjust to your design
  width: 2.25rem; // Adjust to your design
  align-items: center;
  justify-content: center;
`;

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis
};
