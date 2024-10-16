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

import com.example.colombina.entidad.Notificacion;
import com.example.colombina.entidad.Tramite;
import com.example.colombina.servicio.NotificacionService;
import com.example.colombina.servicio.TramiteService;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.info.Info;

@RestController
@RequestMapping("/api/notificaciones")
@OpenAPIDefinition(info = @Info(title = "Notificaciones API", version = "1.0", description = "API para el manejo de notificaciones"))
public class NotificacionController {

    private final NotificacionService notificacionService;
    private final TramiteService tramiteService;

    public NotificacionController(NotificacionService notificacionService, TramiteService tramiteService) {
        this.notificacionService = notificacionService;
        this.tramiteService = tramiteService;
    }

    // Crear una nueva notificación
    @PostMapping
    @Operation(summary = "Crear una nueva notificación", description = "Permite la creación de una nueva notificación con los datos proporcionados")
    public ResponseEntity<Notificacion> crearNotificacion(
            @Parameter(description="Detalle de la notificación a crear", required = true) @RequestBody Notificacion notificacion) {
        Notificacion nuevaNotificacion = notificacionService.crearNotificacion(notificacion);
        return new ResponseEntity<>(nuevaNotificacion, HttpStatus.CREATED);
    }

    // Obtener todas las notificaciones
    @GetMapping
    @Operation(summary = "Obtener todas las notificaciones", description = "Devuelve una lista de todas las notificaciones disponibles")
    public ResponseEntity<List<Notificacion>> obtenerTodasLasNotificaciones() {
        List<Notificacion> notificaciones = notificacionService.obtenerTodasLasNotificaciones();
        return new ResponseEntity<>(notificaciones, HttpStatus.OK);
    }

    // Obtener notificación por ID
    @GetMapping("/{id}")
    @Operation(summary = "Obtener notificación por ID", description = "Devuelve una notificación específica mediante su ID")
    public ResponseEntity<Notificacion> obtenerNotificacionPorId(
            @Parameter(description = "ID de la notificación que desea obtener", required = true) @PathVariable Long id) {
        Optional<Notificacion> notificacion = notificacionService.obtenerNotificacionPorId(id);
        return notificacion
                .map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Actualizar notificación
    @PutMapping("/{id}")
    @Operation(summary = "Actualizar notificación", description = "Actualiza una notificación existente mediante su ID")
    public ResponseEntity<Notificacion> actualizarNotificacion(
            @Parameter(description = "ID de la notificación a actualizar", required = true) @PathVariable Long id,
            @Parameter(description = "Notificación actualizada", required = true) @RequestBody Notificacion detallesNotificacion) {
        try {
            Notificacion notificacionActualizada = notificacionService.actualizarNotificacion(id, detallesNotificacion);
            return new ResponseEntity<>(notificacionActualizada, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Eliminar notificación
    @DeleteMapping("/{id}")
    @Operation(summary = "Eliminar notificación", description = "Elimina una notificación existente mediante su ID")
    public ResponseEntity<Void> eliminarNotificacion(
            @Parameter(description = "ID de la notificación a eliminar", required = true) @PathVariable Long id) {
        try {
            notificacionService.eliminarNotificacion(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Obtener notificación por mensaje
    @GetMapping("/mensaje/{mensaje}")
    @Operation(summary = "Obtener notificación por mensaje", description = "Devuelve una notificación específica mediante el mensaje proporcionado")
    public ResponseEntity<Notificacion> obtenerNotificacionPorMensaje(
            @Parameter(description = "Mensaje de la notificación que desea obtener", required = true) @PathVariable String mensaje) {
        Optional<Notificacion> notificacion = notificacionService.obtenerNotificacionPorMensaje(mensaje);
        return notificacion
                .map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Obtener notificación por trámite
    @GetMapping("/tramite/{tramiteId}")
    @Operation(summary = "Obtener notificación por trámite", description = "Devuelve una notificación específica mediante el ID de un trámite asociado")
    public ResponseEntity<Notificacion> obtenerNotificacionPorTramite(
            @Parameter(description = "ID del trámite asociado", required = true) @PathVariable Long tramiteId) {
        Optional<Tramite> tramite = tramiteService.obtenerTramitePorId(tramiteId);
        if (tramite.isPresent()) {
            Optional<Notificacion> notificacion = notificacionService.obtenerNotificacionPorTramite(tramite.get());
            return notificacion
                    .map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                    .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
