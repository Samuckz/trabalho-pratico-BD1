package com.cefetmg.reserva_facil_laboratorios.services.dtos.response;

import com.cefetmg.reserva_facil_laboratorios.utils.enums.CursosEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AlunoResponseDTO {
    private Long matricula;

    private String nome;

    private LocalDate dataNascimento;

    private CursosEnum curso;
}
