import { Title, Stack, TitleProps } from "@mantine/core";

interface ResponsiveHeaderProps extends Omit<TitleProps, "size" | "children"> {
  text: string;
  largeSize?: string;
  smallSize?: string;
}

export default function ResponsiveHeader({
  text,
  largeSize = "7rem",
  smallSize = "3rem",
  ...rest
}: ResponsiveHeaderProps) {
  return (
    <Stack gap={0}>
      <Title
        visibleFrom="sm"
        size={largeSize}
        fw="900"
        ff="var(--font-space-grotesk)"
        {...rest}
      >
        {text}
      </Title>
      <Title
        hiddenFrom="sm"
        size={smallSize}
        fw="900"
        ff="var(--font-space-grotesk)"
        {...rest}
      >
        {text}
      </Title>
    </Stack>
  );
}
