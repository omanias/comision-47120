import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button } from '@chakra-ui/react'


const Item = ({
    nombre,
    description,
    stock
}) => {
    return (
        <div>
            <Card>
                <CardHeader>
                    <Heading size='md'> {nombre}</Heading>
                </CardHeader>
                <CardBody>
                    <Text>{description}</Text>
                </CardBody>
                <CardFooter>
                    <Button>Add to cart</Button>
                </CardFooter>
            </Card>
        </div>

    )
}

export default Item