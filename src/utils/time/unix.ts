import moment from 'moment';
import 'moment/locale/ko'


function unixFromNow(time : number) {
    return moment.unix(time).locale("ko").fromNow()
};
function unixToDate(time : number){
    return moment.unix(time).locale("ko").format("YYYY/MM/DD HH:mm")
}

export {
    unixFromNow,unixToDate
}
