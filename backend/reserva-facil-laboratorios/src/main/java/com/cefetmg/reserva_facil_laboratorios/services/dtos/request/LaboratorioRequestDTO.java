package com.cefetmg.reserva_facil_laboratorios.services.dtos.request;

public record LaboratorioRequestDTO(
        String nome,
        Integer capacidadeMaxima,
        Integer predio,
        Integer sala
) {}
