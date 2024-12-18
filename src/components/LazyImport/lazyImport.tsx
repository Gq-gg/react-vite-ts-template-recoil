import { ComponentType, FC, LazyExoticComponent, Suspense } from "react";
import LazyLoading from "@components/LazyLoading/lazyLoading";

interface LazyImportProps {
  lazy?: LazyExoticComponent<ComponentType>;
}

export const LazyImport: FC<LazyImportProps> = ({ lazy }) => {
  const Component = lazy ? lazy : () => null;
  return (
    <Suspense fallback={<LazyLoading />}>
      <Component />
    </Suspense>
  );
};
