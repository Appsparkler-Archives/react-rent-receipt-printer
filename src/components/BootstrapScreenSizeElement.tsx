enum EnumBootstrapVariants {
  primary = "primary",
  secondary = "secondary",
  info = "info",
  warning = "warning",
  danger = "danger",
  dark = "dark",
  light = "light",
}

const getBoxClasses = (variant: EnumBootstrapVariants) =>
  `p-2 bg-${variant} d-inline-flex text-white bottom-0 end-0 position-fixed text-strong fw-bold`;

export const BootstrapScreenSizeElement = () => (
  <div>
    <div
      className={`d-block d-sm-none ${getBoxClasses(
        EnumBootstrapVariants.primary
      )}`}
    >
      XS
    </div>
    <div
      className={`d-none d-sm-block d-md-none ${getBoxClasses(
        EnumBootstrapVariants.info
      )}`}
    >
      SM
    </div>
    <div
      className={`d-none d-md-block d-lg-none ${getBoxClasses(
        EnumBootstrapVariants.warning
      )}`}
    >
      MD
    </div>
    <div
      className={`d-none d-lg-block d-xl-none ${getBoxClasses(
        EnumBootstrapVariants.danger
      )}`}
    >
      LG
    </div>
    <div
      className={`d-none d-xl-block ${getBoxClasses(
        EnumBootstrapVariants.dark
      )}`}
    >
      XL
    </div>
    <div
      className={`d-none d-xxl-block ${getBoxClasses(
        EnumBootstrapVariants.secondary
      )}`}
    >
      XXL
    </div>
  </div>
);
