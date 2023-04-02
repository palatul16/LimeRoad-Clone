import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button, Input, Text, Textarea, Radio
} from '@chakra-ui/react'
import React from 'react'
import { useDisclosure, FormControl, FormLabel } from '@chakra-ui/react'
import OrderPlaced from './OrderPlaced'

export default function Delivery({ text }) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    return (
        <>
            <Button colorScheme='green' onClick={onOpen}>{text}</Button>


            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Shipment Address :</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>City & State:</FormLabel>
                            <Input ref={initialRef} placeholder='First name' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Mobile Number :</FormLabel>
                            <Input placeholder='Mobile Number' type="number" />

                            <Text mb='8px'>Detail Address :</Text>
                            <Textarea

                                placeholder='Provide your delivery address......'
                                size='sm'
                            />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Pay through :</FormLabel>
                            <Radio mr={3} id="radio" name="payment">
                                UPI
                            </Radio>
                            <Radio id="radio" name="payment">
                                Cash On Delivery
                            </Radio>

                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        {/* <Button onClick={onOpen}>Pay</Button> */}


                        <Button onClick={onClose}><OrderPlaced /></Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}