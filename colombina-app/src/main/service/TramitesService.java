package com.colombina.application.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class TramitesService {

    @Autowired
    private TramitesRepository tramitesRepository;

    public List<Tramites> getAllTramites() {
        return tramitesRepository.findAll();
    }

    public Optional<Tramites> getTramiteById(Long id) {
        return tramitesRepository.findById(id);
    }

    public Tramites createTramite(Tramites tramite) {
        return tramitesRepository.save(tramite);
    }

    public Tramites updateTramite(Long id, Tramites tramiteDetails) {
        Tramites tramite = tramitesRepository.findById(id).orElseThrow(() -> new RuntimeException("Tramite not found"));

        // Aquí se actualizan los atributos necesarios
        // Ejemplo: tramite.setNombre(tramiteDetails.getNombre());

        return tramitesRepository.save(tramite);
    }

    public void deleteTramite(Long id) {
        Tramites tramite = tramitesRepository.findById(id).orElseThrow(() -> new RuntimeException("Tramite not found"));
        tramitesRepository.delete(tramite);
    }
}
