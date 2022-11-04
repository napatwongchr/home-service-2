import { defineStyleConfig } from '@chakra-ui/react'

export const Checkbox = defineStyleConfig({
    baseStyle: {
        control: {
            color: 'gray.300',
            w: '24px',
            h: '24px',
            borderRadius: '6px',
            _hover: {
                color: 'blue.600',
            },
            _checked: {
                color: 'blue.600',
                border: 'outline',
                borderColor: 'blue.400',
            },
        },

        icon: {
            w: '14px',
            h: '10px',
            color: 'utility.white'
        }
    },

    // Responsive website
    sizes: {},

    variants: {},

    // The default size and variant values
    defaultProps: {
        variant: null,
    },

})