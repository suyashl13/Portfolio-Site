import { Center, IconButton, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, } from 'react-icons/fa'

export default function Footer() {
    return (
        <Center
            position={{ bottom: "0px" }}
            bgColor='teal'
            mt='6.8rem'
        >
            <SimpleGrid columns={5}>
                <IconButton margin='0.8rem'
                    onClick={() => {
                        window.open('https://www.facebook.com/suyash.lawand.1113/');
                    }}
                    backgroundColor='transparent' icon={<FaFacebook fontSize={24} color='white' />} _hover={{ backgroundColor: "transparent" }} />
                <IconButton margin='0.8rem'
                    onClick={() => {
                        window.open('https://twitter.com/SuyashLawand1');
                    }}
                    backgroundColor='transparent' icon={<FaTwitter fontSize={24} color='white' />} _hover={{ backgroundColor: "transparent" }} />
                <IconButton margin='0.8rem'
                    onClick={() => {
                        window.open('https://www.instagram.com/suyeshlawand/');
                    }}
                    backgroundColor='transparent' icon={<FaInstagram fontSize={24} color='white' />} _hover={{ backgroundColor: "transparent" }} />
                <IconButton margin='0.8rem'
                    onClick={() => {
                        window.open('https://github.com/suyashl13/');
                    }}
                    backgroundColor='transparent' icon={<FaGithub fontSize={24} color='white' />} _hover={{ backgroundColor: "transparent" }} />
                <IconButton margin='0.8rem'
                    onClick={() => {
                        window.open('https://www.linkedin.com/in/suyash-lawand/');
                    }}
                    backgroundColor='transparent' icon={<FaLinkedin fontSize={24} color='white' />} _hover={{ backgroundColor: "transparent" }} />
            </SimpleGrid>
        </Center>
    )
}
