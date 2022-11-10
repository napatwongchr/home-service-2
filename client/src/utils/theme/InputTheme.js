import { defineStyleConfig } from '@chakra-ui/react'

export const Input = defineStyleConfig({

    baseStyle: {
        field: {
            fontStyle: 'b1',
            _focus: {
                borderColor: 'blue.600',
            },
            _disabled: {
                bg: 'gray.100',
                color: 'gray.400',
                borderColor: 'gray.300',
            },
        }
    },

    // Responsive website
    sizes: {},

    variants: {
        default: {
            field: {
                color: 'gray.700',
                border: '1px',
                borderColor: 'gray.300',
                px: '16px',
                py: '10px',
                _placeholder: {
                    color: 'gray.700'
                },
            }
        },
        success: {
            field: {
                color: 'gray.700',
                border: '1px',
                borderColor: 'gray.300',
                _placeholder: {
                    color: 'gray.950'
                },
            }
        },
        error: {
            field: {
                border: '1px',
                borderColor: 'utility.red'
            }
        }

    },

    // The default size and variant values
    defaultProps: {
        variant: 'default',
    },

})