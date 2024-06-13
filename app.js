function calcularInteresSimple(capitalInicial, tasaInteres, tiempo) {
    return capitalInicial * tasaInteres * tiempo;
  }

  function calcularInteresCompuesto(capitalInicial, tasaInteres, tiempo) {
    return capitalInicial * Math.pow(1 + tasaInteres, tiempo);
  }

  function convertirUnidadesTiempo(tiempo, unidadTiempo, unidadTasa) {
    const conversiones = {
      días: {
        anual: 1 / 365,
        mensual: 1 / 30.4167,
        semanal: 1 / 7,
        diario: 1,
        semestral: 1 / (365 / 2),
        trimestral: 1 / (365 / 4),
        cuatrimestral: 1 / (365 / 3),
      },
      meses: {
        anual: 1 / 12,
        mensual: 1,
        semanal: 4.34524,
        diario: 30.4167,
        semestral: 1 / 6,
        trimestral: 1 / 3,
        cuatrimestral: 1 / 4,
      },
      semanas: {
        anual: 1 / 52.1429,
        mensual: 1 / 4.34524,
        semanal: 1,
        diario: 7,
        semestral: 1 / (52.1429 / 2),
        trimestral: 1 / (52.1429 / 4),
        cuatrimestral: 1 / (52.1429 / 3),
      },
      años: {
        anual: 1,
        mensual: 12,
        semanal: 52.1429,
        diario: 365,
        semestral: 2,
        trimestral: 4,
        cuatrimestral: 3,
      },
      trimestres: {
        anual: 1 / 4,
        mensual: 3,
        semanal: 52.1429 / 4,
        diario: 365 / 4,
        semestral: 1 / 2,
        trimestral: 1,
        cuatrimestral: 4 / 3,
      },
      cuatrimestres: {
        anual: 1 / 3,
        mensual: 4,
        semanal: 52.1429 / 3,
        diario: 365 / 3,
        semestral: 2 / 3,
        trimestral: 3 / 4,
        cuatrimestral: 1,
      },
      semestres: {
        anual: 1 / 2,
        mensual: 6,
        semanal: 52.1429 / 2,
        diario: 365 / 2,
        semestral: 1,
        trimestral: 2,
        cuatrimestral: 1.5,
      },
    };

    if (
      conversiones[unidadTiempo] &&
      conversiones[unidadTiempo][unidadTasa]
    ) {
      return tiempo * conversiones[unidadTiempo][unidadTasa];
    } else {
      throw new Error("Unidades de tiempo no compatibles");
    }
  }

  function calcularInteres() {
    const capitalInicial = parseFloat(
      document
        .getElementById("capitalInicial")
        .value.replace(/[^0-9.]/g, "")
    );
    const tasaInteres =
      parseFloat(
        document.getElementById("tasaInteres").value.replace(/[^0-9.]/g, "")
      ) / 100;
    const unidadTasa = document
      .getElementById("unidadTasa")
      .value.toLowerCase();
    const tiempo = parseFloat(document.getElementById("tiempo").value);
    const unidadTiempo = document
      .getElementById("unidadTiempo")
      .value.toLowerCase();

    try {
      const tiempoConvertido = convertirUnidadesTiempo(
        tiempo,
        unidadTiempo,
        unidadTasa
      );
      const interesSimple = calcularInteresSimple(
        capitalInicial,
        tasaInteres,
        tiempoConvertido
      );
      const interesCompuesto = calcularInteresCompuesto(
        capitalInicial,
        tasaInteres,
        tiempoConvertido
      );

      document.getElementById(
        "resultadoSimple"
      ).innerText = `El Interés Simple es: $${interesSimple.toFixed(2)}`;
      document.getElementById(
        "resultadoCompuesto"
      ).innerText = `El Interés Compuesto (Capital Final) es: $${interesCompuesto.toFixed(
        2
      )}`;
    } catch (error) {
      alert(error.message);
    }
  }