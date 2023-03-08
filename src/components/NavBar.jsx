import React, { Fragment } from "react";
import CartWidget from "./CartWidget";
import logo from "../assets/logo.png";
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Box,
  Text,
} from "@chakra-ui/react";
import cocina from "../assets/cocina.png";
import iluminacion from "../assets/iluminacion.png";
import organizadores from "../assets/organizadores.png";
import difusores from "../assets/difusores.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="logoTitulo">
        <Link to={"/"}> <img src={logo} className="logo"/> </Link>
        <Text color="#62636a" fontSize="30px" fontWeight="extrabold">
          <span>TIENDA OBJETO</span>
        </Text>
      </div>

      <div className="menuDesplegable">
        <Box color="#63646b">
            <Menu>
              <Text>
                <Link to={"/productos"}>
                <MenuButton
                  as={Button}
                  border="2px"
                  borderColor= "#62636a"
                  fontSize="20px"
                  color="#62636a"
                  bg="#7f918e"
                  _hover={{
                    bg: "white",
                    color: "#7f918e",
                  }}
                  >
                  Productos
                </MenuButton>    
              </Link>
              </Text>
              </Menu>
          </Box>
          <Box color="#63646b">
            <Menu>
              <Text>
                <MenuButton
                  as={Button}
                  border="2px"
                  borderColor= "#62636a"
                  fontSize="20px"
                  color="#62636a"
                  bg="#7f918e"
                  _hover={{
                    bg: "white",
                    color: "#7f918e",
                  }}
                >
                  Categorías
                </MenuButton>
              </Text>
              <MenuList>
                <Link to={`/categorias/${"Cocina"}`}>
                <MenuItem
                  minH="48px"
                  _hover={{
                    bg: "white",
                    color: "#7f918e",
                    fontWeight: "semibold",
                  }}
                >
                  <Image
                    boxSize="2rem"
                    borderRadius="full"
                    src={cocina}
                    alt="Icono de Cocina"
                    mr="12px"
                  />
                  <span>Cocina</span>
                </MenuItem>
                  </Link>
                  <Link to={`/categorias/${"Iluminacion"}`}>
                <MenuItem
                  minH="40px"
                  _hover={{
                    bg: "white",
                    color: "#7f918e",
                    fontWeight: "semibold",
                  }}
                  >
                  <Image
                    boxSize="2rem"
                    borderRadius="full"
                    src={iluminacion}
                    alt="Icono de Iluminación"
                    mr="12px"
                    />
                  <span>Iluminación</span>
                </MenuItem>
                </Link>
                <Link to={`/categorias/${"Organizadores"}`}>
                <MenuItem
                  minH="40px"
                  _hover={{
                    bg: "white",
                    color: "#7f918e",
                    fontWeight: "semibold",
                  }}
                  >
                  <Image
                    boxSize="2rem"
                    borderRadius="full"
                    src={organizadores}
                    alt="Icono de Organizadores"
                    mr="12px"
                    />
                  <span>Organizadores</span>
                </MenuItem>
                    </Link>
                    <Link to={`/categorias/${"Difusores"}`}>
                <MenuItem
                  minH="40px"
                  _hover={{
                    bg: "white",
                    color: "#7f918e",
                    fontWeight: "semibold",
                  }}
                  >
                  <Image
                    boxSize="2rem"
                    borderRadius="full"
                    src={difusores}
                    alt="Icono de Difusores"
                    mr="12px"
                    />
                  <span>Difusores</span>
                </MenuItem>
                    </Link>
              </MenuList>
            </Menu>
          </Box>
        </div>
        
      <CartWidget />
    </div>
  );
};

export default NavBar;
