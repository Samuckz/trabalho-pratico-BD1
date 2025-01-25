package com.cefetmg.reserva_facil_laboratorios.services.dtos.request;

import java.time.LocalDateTime;

public record ReservaRequestDTO(
        Long idLaboratorio, Long codigoDisciplina, LocalDateTime agendamento
) {
}
