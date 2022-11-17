import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  baseStyle: {
    color: "utility.white",
    bg: "blue.600",
    borderRadius: "8px",
  },

  // Responsive website
  sizes: {},

  variants: {
    primary: {
      bg: "blue.600",
      color: "utility.white",
      _hover: {
        bg: "blue.500",
      },
      _active: {
        bg: "blue.800",
      },
      _disabled: {
        bg: "gray.300",
        color: "gray.100",
      },
      _loading: {
        bg: "blue.600",
        opacity: "1",
        _hover: {
          bg: "blue.500",
        },
      },
    },
    secondary: {
      bg: "utility.white",
      color: "blue.600",
      border: "1px",
      borderColor: "blue.600",
      _hover: {
        borderColor: "blue.400",
        color: "blue.400",
      },
      _active: {
        borderColor: "blue.800",
        color: "blue.800",
      },
      _disabled: {
        bg: "gray.100",
        borderColor: "gray.400",
        color: "gray.400",
      },
    },
    ghost: {
      color: "blue.600",
      textDecoration: "underline",
      bg: "none",
      _hover: {
        color: "blue.400",
        bg: "none",
      },
      _active: {
        bg: "none",
        color: "blue.800",
      },
      _disabled: {
        bg: "none",
        color: "gray.400",
      },
    },
    dropdown: {
      color: "gray.950",
      bg: "utility.white",
      _hover: {
        bg: "gray.100",
      },
    },
  },

  // The default size and variant values
  defaultProps: {
    variant: "primary",
  },
});
