import { Box, Input } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";
import React from "react";
const UploadComponent = props => {
    const { setFieldValue } = props;
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/png': ['.png'],
            'image/jpeg': ['.jpg', '.jpeg'],
        },
        onDrop: acceptedFiles => {
            setFieldValue("serviceImage", acceptedFiles[0]);
        }
    });
    return (

        <Box {...getRootProps({ className: "dropzone" })} w={'440px'} h={'180px'} pos={'absolute'} zIndex={'100'}>
            <Input {...getInputProps()} label="serviceImage"
                id="serviceImage"
                name="serviceImage"
                type="file"
                w={'440px'} h={'180px'}
                border='1px dashed'
                pos='relative'
                display='none'
                accept="image/png, image/jpg"
                onChange={(e) => {
                    setFieldValue('serviceImage', e.currentTarget.files[0])
                }}
            />
        </Box>

    );
};

export default UploadComponent