package com.java.colombina.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/tramites")
public class TramitesController {

    @Autowired
    private TramitesService tramitesService;

    @GetMapping
    public List<Tramites> getAllTramites() {
        return tramitesService.getAllTramites();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Tramites> getTramiteById(@PathVariable Long id) {
        Optional<Tramites> tramite = tramitesService.getTramiteById(id);
        return tramite.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Tramites createTramite(@RequestBody Tramites tramite) {
        return tramitesService.createTramite(tramite);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Tramites> updateTramite(@PathVariable Long id, @RequestBody Tramites tramiteDetails) {
        return ResponseEntity.ok(tramitesService.updateTramite(id, tramiteDetails));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTramite(@PathVariable Long id) {
        tramitesService.deleteTramite(id);
        return ResponseEntity.noContent().build();
    }
}
