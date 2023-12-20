import { format, isDate } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { pt } from 'date-fns/locale';

function isValidDate(date) {
  return isDate(date) || (typeof date === 'string' && !isNaN(new Date(date).getTime()));
}

export function formatarDataPorExtenso(data, fusoHorario = 'America/Sao_Paulo') {
  try {
    if (!isValidDate(data)) {
      throw new Error('Data inválida. Forneça uma data válida ou um formato de data reconhecido.');
    }

    const dataUtc = utcToZonedTime(data, fusoHorario);
    const formatoPorExtenso = 'dd \'de\' MMMM \'de\' yyyy';
    const dataFormatada = format(dataUtc, formatoPorExtenso, { locale: pt });

    return dataFormatada;
  } catch (error) {
    console.error(`Erro ao formatar a data: ${error.message}`);
    return 'Formato de data inválido';
  }
}
