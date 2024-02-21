

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
  useToast,
} from "@chakra-ui/react";

const MaterialForm = () => {
  const [nivel, setNivel] = useState("");
  const [premium, setPremium] = useState(false);
  const [tipo, setTipo] = useState("");
  const [titulo, setTitulo] = useState("");
  const [urlImagen, setUrlImagen] = useState("");
  const [urlTitulo, setUrlTitulo] = useState("");
  const [palabrasClave, setPalabrasClave] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [descripcionIngles, setDescripcionIngles] = useState("");
  const [contenidoMaterial, setContenidoMaterial] = useState("");
  const [contenidoMaterialIngles, setContenidoMaterialIngles] = useState("");
  const [autor, setAutor] = useState("");
  const [points, setPoints] = useState(0); // Track points locally
  const [sequentialNumber, setSequentialNumber] = useState(1);
    const [urlContenido, setUrlContenido] = useState("");


  const toast = useToast();

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
        premium,
        tipo,
        titulo,
        urlImagen,
        urlTitulo,
        palabrasClave,
        descripcion,
        descripcionIngles,
        contenidoMaterial,
        contenidoMaterialIngles,
        autor,
        points: 0,
        sequentialNumber,
        urlContenido, // Points will be updated when the student clicks the button
      }),
    });

    // Manejar la respuesta del servidor según sea necesario
    if (respuesta.ok) {
      console.log("Material creado exitosamente");
      // Mostrar el toast de éxito
      toast({
        title: "Material creado con éxito",
        status: "success",
        duration: 3000, // Duration of the toast message in milliseconds
        isClosable: true,
        position: "bottom",
      });
      console.log("After toast");
    } else {
      console.error("Error al crear el material");
      // Manejar errores aquí
      toast({
        title: "Error al  crear con éxito",
        status: "error",
        duration: 3000, // Duration of the toast message in milliseconds
        isClosable: true,
        position: "bottom",
      });
    }
  };

  const handlePointsButtonClick = () => {
    // Update points locally when the button is clicked
    setPoints(points + 1);
    // You can also send the updated points to the backend if needed
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

          <FormLabel style={{ color: "green" }} pt={6}>
            Premium
          </FormLabel>
          <Checkbox
            isChecked={premium}
            onChange={(e) => setPremium(e.target.checked)}
          >
            Click aqui si es PREMIUM content para Suscriptores
          </Checkbox>
          <FormControl>
            <FormLabel>Sequential Number</FormLabel>
            <Input
              type="number"
              value={sequentialNumber}
              onChange={(e) =>
                setSequentialNumber(parseInt(e.target.value) || "")
              }
              min="1" // Ensuring the number is positive
            />
          </FormControl>
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
          <FormLabel>URL del Contenido</FormLabel>
          <Input
            type="text"
            value={urlContenido}
            onChange={(e) => setUrlContenido(e.target.value)}
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
            value={descripcionIngles}
            onChange={(e) => setDescripcionIngles(e.target.value)}
            resize="vertical"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Contenido material</FormLabel>
          <Textarea
            value={contenidoMaterial}
            onChange={(e) => setContenidoMaterial(e.target.value)}
            resize="vertical"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Contenido material Ingles</FormLabel>
          <Textarea
            value={contenidoMaterialIngles}
            onChange={(e) => setContenidoMaterialIngles(e.target.value)}
            resize="vertical"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Autor</FormLabel>
          <Textarea
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
            resize="vertical"
          />
        </FormControl>
        <Button
          type="submit"
          onClick={handleSubmit}
          ml="4"
          border="2px solid green"
          color="green"
          width="auto"
          _hover={{
            bg: "green.500",
            color: "white",
          }}
        >
          Agregar Material
        </Button>

        <FormControl>
          <FormLabel>Título del material a eliminar</FormLabel>
          <Input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </FormControl>
        <Button
          ml="4"
          border="2px solid red"
          color="red"
          width="auto"
          _hover={{
            bg: "red.500",
            color: "white",
          }}
        >
          Eliminar Material
        </Button>

        {/* Button for awarding points */}
        <Button
          onClick={handlePointsButtonClick}
          ml="4"
          border="2px solid blue"
          color="blue"
          width="auto"
          _hover={{
            bg: "blue.500",
            color: "white",
          }}
        >
          Award Points
        </Button>
      </VStack>
      {/* Display points to the user */}
      <Box mt={4} fontWeight="bold">
        Total Points: {points}
      </Box>
    </Box>
  );
};

export default MaterialForm;
