
export const getDate = () => {
    const date = new Date()
    let dayWeek: string | number = date.getDay()

    switch (dayWeek) {
        case 0:
            dayWeek = 'Domingo';
            break;
        case 1:
            dayWeek = 'Segunda-feira';
            break;
        case 2:
            dayWeek = 'Terça-feira';
            break;
        case 3:
            dayWeek = 'Quarta-feira';
            break;
        case 4:
            dayWeek = 'Quinta-feira';
            break;
        case 5:
            dayWeek = 'Sexta-feira'
            break;
        case 6:
            dayWeek = 'Sábado';
            break;
        default:
            break;
    }

    const dayMonth = date.getDate();
    let month: string | number = date.getMonth();

    switch (month) {
        case 0:
            month = 'Janeiro';
            break;
        case 1:
            month = 'Fevereiro';
            break;
        case 2:
            month = 'Março';
            break;
        case 3:
            month = 'Abril';
            break;
        case 4:
            month = 'Maior';
            break;
        case 5:
            month = 'Junho'
            break;
        case 6:
            month = 'Julho';
            break;
        case 7:
            month = 'Agosto';
            break;
        case 8:
            month = 'Setembro';
            break;
        case 9:
            month = 'Novembro';
            break;
        case 10:
            month = 'Outubro';
            break;
        case 11:
            month = 'Dezembro';
            break;
        default:
            break;
    }

    const year = date.getFullYear();
    const hour = date.getHours();

    const minutes = () => {
        let min = date.getUTCMinutes()

        if(min < 10){
            return `0${min}`
        } else {
            return min
        }
    }

    const seconds = () => {
        let sec =  date.getSeconds();

        if(sec < 10) {
            return `0${sec}`
        } else {
            return sec
        }
    }

    return `${dayWeek}, ${dayMonth} de ${month} de ${year} | ${hour}:${minutes()}:${seconds()}`
}