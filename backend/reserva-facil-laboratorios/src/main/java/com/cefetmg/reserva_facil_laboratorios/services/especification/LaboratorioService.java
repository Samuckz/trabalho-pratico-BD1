package com.cefetmg.reserva_facil_laboratorios.services.especification;

import com.cefetmg.reserva_facil_laboratorios.models.Laboratorio;
import com.cefetmg.reserva_facil_laboratorios.services.dtos.request.LaboratorioRequestDTO;
import java.util.List;

public interface LaboratorioService {
  Laboratorio cadastrarLaboratorio(LaboratorioRequestDTO cadastrarLaboratorioRequestDTO);

  List<Laboratorio> listarLaboratorios();

  Laboratorio buscarLaboratorio(Long id);

  Laboratorio editarLaboratorio(Long id, LaboratorioRequestDTO dto);

  String deletarLaboratorio(Long id);
}
