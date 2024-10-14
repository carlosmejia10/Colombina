package com.example.colombina.servicio;
import com.example.colombina.entidad.Tramite;
import com.example.colombina.repositorio.TramiteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class TramiteService {
    private final TramiteRepository tramiteRepository;

    public TramiteService(TramiteRepository tramiteRepository) {
        this.tramiteRepository = tramiteRepository;
    }

    public Tramite crearTramite(Tramite tramite) {
        return tramiteRepository.save(tramite);
    }

    public List<Tramite> obtenerTodosLosTramites() {
        return tramiteRepository.findAll();
    }


    public Optional<Tramite> obtenerTramitePorId(Long id) {
        return tramiteRepository.findById(id);
    }


    public Tramite actualizarTramite(Long id, Tramite detallesTramite) {
        Optional<Tramite> tramiteExistente = tramiteRepository.findById(id);
        if (tramiteExistente.isPresent()) {
            Tramite tramiteActualizado = tramiteExistente.get();
            tramiteActualizado.setTitulo(detallesTramite.getTitulo());
            tramiteActualizado.setMensaje(detallesTramite.getMensaje());
            tramiteActualizado.setTipo(detallesTramite.getTipo());
            tramiteActualizado.setUsuario(detallesTramite.getUsuario());
            tramiteActualizado.setFecha(detallesTramite.getFecha());
            tramiteActualizado.setDocumentos(detallesTramite.getDocumentos());
            tramiteActualizado.setNotificaciones(detallesTramite.getNotificaciones());
            return tramiteRepository.save(tramiteActualizado);
        } else {
            throw new RuntimeException("Trámite no encontrado con el ID: " + id);
        }
    }

    public void eliminarTramite(Long id) {
        Optional<Tramite> tramite = tramiteRepository.findById(id);
        if (tramite.isPresent()) {
            tramiteRepository.delete(tramite.get());
        } else {
            throw new RuntimeException("Trámite no encontrado con el ID: " + id);
        }
    }
}