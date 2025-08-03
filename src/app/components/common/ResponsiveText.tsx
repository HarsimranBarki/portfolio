import { Stack, Text, TextProps } from "@mantine/core";
import { ReactNode } from "react";

interface ResponsiveText extends Omit<TextProps, "size" | "children"> {
  children: ReactNode;
  largeSize?: string;
  smallSize?: string;
}

export default function ResponsiveText({
  children,
  largeSize = "lg",
  smallSize = "md",
  ...rest
}: ResponsiveText) {
  return (
    <Stack gap={0}>
      <Text visibleFrom="sm" size={largeSize} {...rest}>
        {children}
      </Text>
      <Text hiddenFrom="sm" size={smallSize} {...rest}>
        {children}
      </Text>
    </Stack>
  );
}
