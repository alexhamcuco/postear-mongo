// src/formulario/MaterialForm.js
import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Input,
  Textarea,
  VStack,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";

const MaterialForm = () => {
  const [nivel, setNivel] = useState("");
  const [privilegios, setPrivilegios] = useState(false);
  const [tipo, setTipo] = useState("");
  const [titulo, setTitulo] = useState("");
  const [urlImagen, setUrlImagen] = useState("");
  const [urlTitulo, setUrlTitulo] = useState("");
  const [palabrasClave, setPalabrasClave] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Envía los datos al backend utilizando fetch
    const respuesta = await fetch("/api/materiales", {
      method: "POST",
        
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nivel,
        fecha: new Date(),
        privilegios,
        tipo,
        titulo,
        urlImagen,
        urlTitulo,
        palabrasClave,
        descripcion,
      }),
    });

    // Manejar la respuesta del servidor según sea necesario
    if (respuesta.ok) {
      console.log("Material creado exitosamente");
      // Puedes redirigir o realizar otras acciones aquí
    } else {
      console.error("Error al crear el material");
      // Manejar errores aquí
    }
  };

  return (
    <Box maxW="xl" mx="auto" p={6}>
      <VStack spacing={4}>
        <FormControl>
          <FormLabel>Nivel</FormLabel>
          <Select value={nivel} onChange={(e) => setNivel(e.target.value)}>
            <option value="A1">A1</option>
            <option value="A2">A2</option>
            <option value="B1">B1</option>
            <option value="B2">B2</option>
            <option value="C1">C1</option>
            <option value="C2">C2</option>
          </Select>
     
          <FormLabel style={{ color: "blue" }}>Privilegios</FormLabel>
          <Checkbox
            isChecked={privilegios}
            onChange={(e) => setPrivilegios(e.target.checked)}
          >
            ¿Click aqui si es Exclusivo de Suscriptores?
          </Checkbox>
        </FormControl>
        <FormControl>
          <FormLabel>Tipo</FormLabel>
          <Select value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="video">Video</option>
            <option value="podcast">Podcast</option>
            <option value="gramaticas">Gramaticas</option>
            <option value="profesorado">Profesorado</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Título</FormLabel>
          <Input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>URL Imagen</FormLabel>
          <Input
            type="text"
            value={urlImagen}
            onChange={(e) => setUrlImagen(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>URL Título</FormLabel>
          <Input
            type="text"
            value={urlTitulo}
            onChange={(e) => setUrlTitulo(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Palabras Clave</FormLabel>
          <Input
            type="text"
            value={palabrasClave}
            onChange={(e) => setPalabrasClave(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Descripción</FormLabel>
          <Textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            resize="vertical"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Descripción Ingles</FormLabel>
          <Textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            resize="vertical"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Contenido material</FormLabel>
          <Textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            resize="vertical"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Contenido material Ingles</FormLabel>
          <Textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            resize="vertical"
          />
        </FormControl>
        <Button
          type="submit"
          onClick={handleSubmit}
          ml="4"
          border="2px solid red"
          color="red"
          width="auto"
          _hover={{
            bg: "red.500",
            color: "white",
          }}
        >
          Agregar Material
        </Button>
      </VStack>
    </Box>
  );
};

export default MaterialForm;
 