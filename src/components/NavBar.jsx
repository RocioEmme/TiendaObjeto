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

const NavBar = () => {
  return (
    <div className="navBar">
      <Box mt="10px" ml="20px" color="#63646b">
        <Menu>
          <Text>
            <MenuButton
              as={Button}
              border="2px"
              borderColor="white"
              fontSize="20px"
              color="white"
              bg="#e1d0d1"
              _hover={{
                bg: "white",
                color: "#e1d0d1",
              }}
            >
              Categorias
            </MenuButton>{" "}
          </Text>
          <MenuList>
            <MenuItem
              minH="48px"
              _hover={{
                bg: "white",
                color: "#e1d0d1",
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
            <MenuItem
              minH="40px"
              _hover={{
                bg: "white",
                color: "#e1d0d1",
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
            <MenuItem
              minH="40px"
              _hover={{
                bg: "white",
                color: "#e1d0d1",
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
            <MenuItem
              minH="40px"
              _hover={{
                bg: "white",
                color: "#e1d0d1",
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
          </MenuList>
        </Menu>
      </Box>

      <div className="logoTitulo">
        <img src={logo} className="logo" />
        <Text color="#62636a" fontSize="80px" fontWeight="extrabold">
          <h1>TIENDA OBJETO</h1>
        </Text>
      </div>

      <CartWidget />
    </div>
  );
};

export default NavBar;
