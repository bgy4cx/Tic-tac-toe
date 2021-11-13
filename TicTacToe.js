function guardians (P1, P2) {
    if (P1 != '' && P2 != '')
    {
        return (typeof P1 == 'string' && typeof P2 == 'string');
    } else {
        return false;
    }
}

 function TicTacToe (P1, P2) {

}

module.exports = {TicTacToe, guardians};