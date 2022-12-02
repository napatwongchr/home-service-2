import { extendTheme } from "@chakra-ui/react"
import { Button } from './ButtonTheme'
import { Input } from './InputTheme'
import { Checkbox } from './CheckboxTheme'
import { ModalTheme } from "./ModalTheme"

const theme = extendTheme({
    colors: {
        blue: {
            100: "#E7EEFF",
            200: "#D2DFFC",
            300: "#A6BFFA",
            400: "#799FF7",
            500: "#4C7FF4",
            600: "#336DF2",
            700: "#1852D6",
            800: "#0E3FB0",
            900: "#022B87",
            950: "#001C59",
        },
        gray: {
            100: "#EFEFF2",
            200: "#E6E7EB",
            300: "#CCD0D7",
            400: "#B3B8C4",
            500: "#9AA1B0",
            600: "#80899C",
            700: "#646C80",
            800: "#4B5160",
            900: "#323640",
            950: "#232630",
        },
        purple: {
            100: "#ECE6FF",
            900: "#4512B4",
        },
        yellow: {
            100: "#FFF3D4",
            900: "#6E5000",
        },
        green: {
            100: "#DFF9F6",
            900: "#00596C",
        },
        utility: {
            black: "#000000",
            white: "#FFFFFF",
            red: "#C82438",
            bg: "#F3F4F6",
        },

    },
    fonts: {
        heading: `'Prompt', sans-serif`,
        body: `'Prompt', sans-serif`,
        Button: `'Prompt', sans-serif`,
    },
    textStyles: {
        h1: {
            fontSize: '32px',
            fontWeight: '500',
            lineHeight: '48px',
        },
        h2: {
            fontSize: '20px',
            fontWeight: '500',
            lineHeight: '30px',
        },
        h3: {
            fontSize: '20px',
            fontWeight: '400',
            lineHeight: '30px',
        },
        h4: {
            fontSize: '18px',
            fontWeight: '500',
            lineHeight: '27px',
        },
        h5: {
            fontSize: '16px',
            fontWeight: '500',
            lineHeight: '24px',
        },
        b2: {
            fontSize: '16px',
            fontWeight: '300',
            lineHeight: '24px',
        },
        b3: {
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '21px',
        },
        b4: {
            fontSize: '12px',
            fontWeight: '400',
            lineHeight: '18px',
        },
        button: {
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '24px',
        }
    },
    components: {
        Button,
        Input,
        Checkbox,
        Modal: ModalTheme
    },
})

export default theme