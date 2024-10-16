package com.example.colombina.controlador;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.colombina.entidad.Tramite;
import com.example.colombina.servicio.TramiteService;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.info.Info;

@RestController
@RequestMapping("/api/tramites")
@OpenAPIDefinition(info = @Info(title = "Trámites API", version = "1.0", description = "API para el manejo de trámites"))
public class TramiteController {

    private final TramiteService tramiteService;

    public TramiteController(TramiteService tramiteService) {
        this.tramiteService = tramiteService;
    }

    // Crear un nuevo trámite
    @PostMapping
    @Operation(summary = "Crear un nuevo trámite", description = "Permite crear un nuevo trámite en el sistema.")
    public ResponseEntity<Tramite> crearTramite(
        @Parameter(description = "Detalles del trámite a crear", required = true)
        @RequestBody Tramite tramite) {
        Tramite nuevoTramite = tramiteService.crearTramite(tramite);
        return new ResponseEntity<>(nuevoTramite, HttpStatus.CREATED);
    }

    // Obtener todos los trámites
    @GetMapping
    @Operation(summary = "Obtener todos los trámites", description = "Devuelve una lista de todos los trámites disponibles en el sistema.")
    public ResponseEntity<List<Tramite>> obtenerTodosLosTramites() {
        List<Tramite> tramites = tramiteService.obtenerTodosLosTramites();
        return new ResponseEntity<>(tramites, HttpStatus.OK);
    }

    // Obtener trámite por ID
    @GetMapping("/{id}")
    @Operation(summary = "Obtener un trámite por ID", description = "Devuelve los detalles de un trámite específico a partir de su ID.")
    public ResponseEntity<Tramite> obtenerTramitePorId(
        @Parameter(description = "ID del trámite que se desea obtener", required = true)
        @PathVariable Long id) {
        Optional<Tramite> tramite = tramiteService.obtenerTramitePorId(id);
        return tramite
                .map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Actualizar trámite
    @PutMapping("/{id}")
    @Operation(summary = "Actualizar un trámite", description = "Permite actualizar los detalles de un trámite específico.")
    public ResponseEntity<Tramite> actualizarTramite(
        @Parameter(description = "ID del trámite a actualizar", required = true)
        @PathVariable Long id, 
        @Parameter(description = "Nuevos detalles del trámite", required = true)
        @RequestBody Tramite detallesTramite) {
        try {
            Tramite tramiteActualizado = tramiteService.actualizarTramite(id, detallesTramite);
            return new ResponseEntity<>(tramiteActualizado, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Eliminar trámite
    @DeleteMapping("/{id}")
    @Operation(summary = "Eliminar un trámite", description = "Permite eliminar un trámite del sistema a partir de su ID.")
    public ResponseEntity<Void> eliminarTramite(
        @Parameter(description = "ID del trámite a eliminar", required = true)
        @PathVariable Long id) {
        try {
            tramiteService.eliminarTramite(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
