
import "./navbar.css";
import { MenuItem, MenuList, Box, Flex, Center, Container, SimpleGrid } from "@chakra-ui/react"

export default function WomenNav() {

    return (
        <SimpleGrid columns={[2, null, 3]} spacing='40px' p={10} pt={3}>
            <MenuList border={"none"}>

                <MenuItem color="black" fontSize="lg"><b>Women's Clothing</b></MenuItem>

                <MenuItem >Bras, Panties & Lingeries</MenuItem>
                <MenuItem >Coats & Outerwear</MenuItem>
                <MenuItem >Dresses</MenuItem>
                <MenuItem >Pants & Leggins</MenuItem>
                <MenuItem >Sweaters</MenuItem>
                <MenuItem >Shop Al...</MenuItem>
            </MenuList>
            <MenuList>

                <MenuItem color="black" fontSize="lg"><b>Women's Top</b></MenuItem>
                <MenuItem >Blouses</MenuItem>
                <MenuItem >Button Down Tops</MenuItem>
                <MenuItem >Hoodies & Sweatshirts</MenuItem>
                <MenuItem >Tunics</MenuItem>
                <MenuItem >T-Shirts</MenuItem>
                <MenuItem >Shop All...</MenuItem>
            </MenuList>
            <MenuList>
                <MenuItem color="black" fontSize="lg"><b>Plus Size Clothing</b></MenuItem>

                <MenuItem >Bars, Panties & Lingerie</MenuItem>
                <MenuItem >Dresses</MenuItem>
                <MenuItem >Jeans</MenuItem>
                <MenuItem >Pants</MenuItem>
                <MenuItem >Tops</MenuItem>
                <MenuItem >Shop All...</MenuItem>
            </MenuList>
            <MenuList>

                <MenuItem color="black" fontSize="lg"><b>Junior's Clothing</b></MenuItem>
                <MenuItem >Activewear</MenuItem>
                <MenuItem >Dresses</MenuItem>
                <MenuItem >Jeans</MenuItem>
                <MenuItem >Junior's Plus</MenuItem>
                <MenuItem >Tops</MenuItem>
                <MenuItem >Shop All...</MenuItem>
            </MenuList>
            <MenuList>

                <MenuItem color="black" fontSize="lg"><b>Petite Clothing</b></MenuItem>
                <MenuItem >Dresses</MenuItem>
                <MenuItem >Jeans</MenuItem>
                <MenuItem >Pants</MenuItem>
                <MenuItem >Suits & Suit Separates</MenuItem>
                <MenuItem >Tops</MenuItem>
                <MenuItem >Shop All...</MenuItem>
            </MenuList>
            <MenuList>

                <MenuItem color="black" fontSize="lg"><b>Women''s Dresses</b></MenuItem>
                <MenuItem >Casual</MenuItem>
                <MenuItem >Cocktail</MenuItem>
                <MenuItem >Cocktail & Party</MenuItem>
                <MenuItem >Formal</MenuItem>
                <MenuItem >Maxi</MenuItem>
                <MenuItem >Work</MenuItem>
                <MenuItem >Shop All...</MenuItem>
            </MenuList>
        </SimpleGrid>
    )
}