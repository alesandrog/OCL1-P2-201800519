class Token{

    constructor(tipo , valor , fila , columna){
        this.tipo = tipo;
        this.valor = valor;
        this.fila = fila;
        this.columna = columna;
    }
}

const Tipo = {

    LLAVE_ABRIR: 'LLAVE_ABRIR',
    LLAVE_CERRAR: 'LLAVE_CERRAR',
    PAREN_ABRIR: 'PAREN_ABRIR',
    PAREN_CERRAR: 'PAREN_CERRAR',
    CORCHETE_ABRIR: 'CORCHETE_ABRIR',
    CORCHETE_CERRAR: 'CORCHETE_CERRAR',
    OPERADOR_LOGICO: 'OPERADOR_LOGICO',
    OPERADOR_SIMPLE: 'OPERADOR_SIMPLE',
    INICIO_COMENS: 'INICIO_COMENS',
    COMENTARIO_S: 'COMENTARIO_S',
    INICIO_COMENM: 'INICIO_COMENM',
    COMENTARIO_M: 'COMENTARIO_M',
    FIN_COMENM: 'FIN_COMENM',
    IDENTIFICADOR: 'IDENTIFICADOR',
    CADENA: 'CADENA',
    COMILLA_SIMPLE: 'COMILLA_SIMPLE',
    COMILLA_DOBLE: 'COMILLA_DOBLE',
    PUNTO_COMA: 'PUNTO_COMA',
    DOS_PUNTOS: 'DOS_PUNTOS',
    COMA : 'COMA',
    PUNTO: 'PUNTO'
}