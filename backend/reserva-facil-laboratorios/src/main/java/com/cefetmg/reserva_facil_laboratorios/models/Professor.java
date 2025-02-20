package com.cefetmg.reserva_facil_laboratorios.models;

import com.cefetmg.reserva_facil_laboratorios.utils.enums.EspecialidadeProfessorEnum;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "TB_PROFESSORES")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Professor {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  @Column(nullable = false)
  private String name;

  @Column(nullable = false)
  private EspecialidadeProfessorEnum especialidade;

  @Column(nullable = false)
  private LocalDate dataNascimento;

  @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
  @OneToMany(mappedBy = "professorId", fetch = FetchType.LAZY)
  private Set<Disciplina> disciplinasMinistradas = new HashSet<>();

  public Professor(
      String name, EspecialidadeProfessorEnum especialidade, LocalDate dataNascimento) {
    this.name = name;
    this.especialidade = especialidade;
    this.dataNascimento = dataNascimento;
  }
}
