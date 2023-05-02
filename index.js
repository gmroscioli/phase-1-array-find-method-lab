function superbowlWin(record) {
    const isWin = function (x) {
        return x.result === "W";
    };
    let win = record.find(isWin);
    if (win === undefined) {
        return undefined;
    }
    else {   
        return win.year;
    }
    
}